import { v4 as uuidv4 } from 'uuid';

import { db } from "@/lib/db";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenbyEmail } from '@/data/password-reset-token';

export const generatePasswordResetToken = async (email:string)=>{
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existinToken = await getPasswordResetTokenbyEmail(email);

    if(existinToken){
        await db.passwordResetToken.delete({
            where:{
                id:existinToken.id,
            },
        });
    }

    const passwordResetToken = await db.passwordResetToken.create({
        data:{
            email,
            token,
            expires
        }
    });

    return passwordResetToken;
}


export const generateVerificationToken = async (email: string)=>{
    
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);
       
    const existinToken = await getVerificationTokenByEmail(email);

    if(existinToken){
        await db.verificationToken.delete({
            where:{
                id: existinToken.id,
            },
        });
    }
    const verificationToken = await db.verificationToken.create({
        data:{
            email,
            token,
            expires,
        }
    });

return verificationToken;
}