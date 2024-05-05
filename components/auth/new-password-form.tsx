"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewPasswordSchema } from "@/schemas";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage } from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { newPassword } from "@/actions/new-password";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

export const NewPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token")

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTranstion] = useTransition();
    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues:{
            password:"",
        }  
    });
    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) =>{
        setError("");
        setSuccess("");

        console

        startTranstion(()=>{
            newPassword(values, token)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                })
        });
        
    }
    return(
        
            <CardWrapper
            headerTitle="Recuperação"
            headerLabel="Qual vai ser sua nova senha?"
            backButtonHref="/login"
            backButtonLabel="Voltar ao Login"
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                            control={form.control}
                            name="password"
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="*********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                        </div>
                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full">
                            Restaurar senha
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
    );
};