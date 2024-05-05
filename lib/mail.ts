import {Resend} from "resend";

const resend = new Resend (process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async(
    email:string,
    token:string,
) =>{
    const resetLink = `http://localhost:3000/new-password?token=${token}`;
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to:email,
        subject:"Troca de senha",
        html:`<p> Clique <a href="${resetLink}">Aqui</a> para alterar sua senha</p>`
    });
};


export const sendVerificationEmail = async(
    email: string,
    token: string
) => {
    const confirmLink = `http://localhost:3000/new-verification?token=${token}`;
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to: email,
        subject:"Confirmação de email",
        html: `<p> Clique <a href="${confirmLink}">Aqui</a> para confirmar seu e-mail</p>`
    });
};