"use server";
import * as z from "zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { generateVerificationToken } from "@/lib/token";
import { getUserByEmail } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success){
        return {error:"Campos Inválidos!"}
    }

    const { email, password} = validatedFields.data;

    const existingUser =  await getUserByEmail(email);
    if(!existingUser || !existingUser.email || !existingUser.password){
        return {error: "E-mail ainda não cadastrado"}
    }

    if (!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email);
        return {success: "E-mail de confirmação enviado"}
    }

    try{
        await signIn("credentials", {
            email, 
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    }catch(error){
        if (error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return { error: "Credenciais Inválidas!" }
                default:
                    return { error : "Alguma coisa está errada"}
            }
        }

        throw error;
    }
  
};