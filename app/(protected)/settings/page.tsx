"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import {
    Card,
    CardHeader, 
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { setting } from "@/actions/settings";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";
import { SettingsSchema } from "@/schemas";
import { 
    Form,
    FormField,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";


const SettingsPage = () => {
    const user= useCurrentUser();
    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues:{
            password: undefined,
            newPassword: undefined,
            name:user?.name || undefined,
            email:user?.email || undefined,
        }  
    });
    
    const [error,setError]= useState<string | undefined>();
    const [success,setSuccess]= useState<string | undefined>();
    const{update} = useSession();
    const [isPending, startTransition] = useTransition();

    const onSubmit = (values:(z.infer<typeof SettingsSchema>)) => {
        startTransition(() => {
            setting(values)
            .then((data)=> {
                if(data.error){
                    setError(data.error)
                }
                if(data.success){
                    update();
                    setSuccess(data.success)
                }
            })
            .catch(()=>setError("Algo esta errado aqui!"))
        });
    };

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    ⚙️ Configurações
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form 
                        className="space-y-6" 
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="space-y-6">
                            <FormField 
                            control={form.control}
                            name="name"
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Vamos mudar o nome"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                </FormItem>
                            )} />

                                <FormField 
                                control={form.control}
                                name="email"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>E-mail</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Vamos mudar o email"
                                                type="email"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )} />
                                <FormField 
                                control={form.control}
                                name="password"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Senha Antiga</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="********"
                                                type="password"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )} />
                                <FormField 
                                control={form.control}
                                name="newPassword"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Nova Senha</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="********"
                                                type="password"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )} />

                        </div>
                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                        <Button type="submit" disabled={isPending}>
                            Atualizar
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default SettingsPage;
