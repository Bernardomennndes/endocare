import * as z from "zod";
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