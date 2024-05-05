"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"

import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenbyToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const newPassword = async (
    values : z.infer <typeof NewPasswordSchema>,
    token?: string | null,
) => {
    if(!token){
        return{error:"Não encontramos nenhum token solicitado"}
    }

    const validatedFields = NewPasswordSchema.safeParse(values);
    
    if(!validatedFields.success){
        return{error:"Parametros Inválido"}
    }

    const {password} = validatedFields.data;
    const existingToken = await getPasswordResetTokenbyToken(token);

    if(!existingToken){
        return {error:"Token Inválido!"}
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired){
        return{error:"Token já expirou, tente novamete!"};
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if(!existingUser){
        return{error:"Ainda não temos uma conta para este e-mail!"}
    }

    const hashedPassword = await bcrypt.hash(password,10);

    await db.user.update({
        where: {id: existingUser.id},
        data:{ password: hashedPassword},
    });

    await db.passwordResetToken.delete({
        where:{id:existingToken.id}
    });

    return{success:"Senha atualizada!"}
}