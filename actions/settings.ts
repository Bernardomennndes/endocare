"use server"

import * as z from "zod";

import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { generateVerificationToken } from "@/lib/token";
import bcrypt from "bcryptjs"



export const setting = async(
    values: z.infer <typeof SettingsSchema>
) => {
    const user = await currentUser();

    if(!user) {
        return {error: "Sem autorização"}
    }

    const dbUser = await getUserById(user.id);

    if(!dbUser){
        return{error:"Sem autorização"}
    }

    if(user.isOAuth){
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
    }

    if(values.email && values.email !== user.email){
        const existingUser = await getUserByEmail(values.email)
        if(existingUser && existingUser.id !== user.id){
            return{error:"Email Já Cadastrado"}
        }
        const verificationToken = await  generateVerificationToken(
            values.email
        );
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        );

        return {success : "Email de Verificação enviado"};
    }

    if(values.password && values.newPassword && dbUser.password){
        const passwordMatch = await bcrypt.compare(
            values.password,
            dbUser.password,
        );

        if (!passwordMatch){
            return {error: "Senha Antiga Incorreta"}
        }
         
        const hashedPassword = await bcrypt.hash(
            values.newPassword,
            10,
        );
        values.password = hashedPassword;
        values.newPassword =  undefined;
    }


    await db.user.update({
        where:{id: dbUser.id},
        data: {
            ...values,
        }
    });

    return {success:"Configurações Atualizadas"}

}
