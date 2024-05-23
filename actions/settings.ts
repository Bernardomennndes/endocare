"use server"

import * as z from "zod";

import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";




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

    await db.user.update({
        where:{id: dbUser.id},
        data: {
            ...values,
        }
    });

    return {success:"Configurações Atualizadas"}

}
