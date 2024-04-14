"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";
import { send } from "process";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return {error:"Campos Inválidos!"}
    }

    const {email, password, name, dateBirth, gender} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {error: "O e-mail já está em uso!"};
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            dateBirth,
            gender,
        },
    });

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,

    )

    return{success: "E-mail de Confirmação enviado!"}
};