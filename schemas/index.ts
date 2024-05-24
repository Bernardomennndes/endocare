import * as z from "zod";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(8)),
    newPassword: z.optional(z.string().min(8)),
})
    .refine((data)=>{
        if(data.password && !data.newPassword){
            return false;
        }
        return true;
    },{
        message: "Nova Senha Necessária!",
        path:["newPassword"]
    })
    .refine((data)=>{
        if(data.newPassword && !data.password){
            return false;
        }
        return true;
    },{
        message: "Senha Necessária!",
        path:["password"]
    })




export const NewPasswordSchema = z.object({
    password: z.string().min(8, {
        message: "A senha precisa ter no mínimo 8 caracteres!"
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "E-mail inválido!"
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "E-mail inválido!"
    }),
    password: z.string().min(8,
        { message: "Senha inválida!" })
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "E-mail inválido"}),
    password: z.string().min(8,{
        message: "A senha precisa ter no mínimo 8 caracteres" }),
    name: z.string().min(1,{
        message: "O nome é necessário"}),
    dateBirth: z.string({
        required_error: "Data de aniversário necessária"}),

    gender: z.enum(["male", "female", "other"], {
        required_error: "Selecione o seu gênero",
      }),
});