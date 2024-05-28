import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Card,
    CardHeader, 
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
    Form,
    FormField,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "../auth/card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";

export default function UrinaRotina(){
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:"",
        }  
    });

    return(
        <div className="flex items-center justify-center min-h-screen bg-white">
            <CardWrapper
            headerTitle="Um novo Exame"
            headerLabel="Exame de Urina em Rotina"
            backButtonHref="/add-exame"
            backButtonLabel="Não tenho nada para registrar"
        >
            <Form {...form}>
                <form 
                    className="space-y-6"
                >   
                    <div className="max-h-96 overflow-y-auto">
                    <span>Caracterisiticas Gerais</span>
                    <div className="gap-7 ">

                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>PH</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Reação</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Densidade</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>

                    </div>
                    
                    <span className=" gap-9">Elementos Anormais</span>
                    <div className="gap-7 ">

                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Albumina</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Glicose</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Corpos Cetônicos</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Urobilinogënio</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Bilirrubinas</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Hemoglobina</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Nitrito</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>

                    </div>
                    <span>Sedimentoscopia</span>
                    <div className="gap-7 ">

                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Células Epiteliais</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Piócitos</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Hemácias</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Cilindros</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Cristais</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Muco</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Flora Microbiana</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder=""
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>

                    </div>
                    </div>
                </form>
            </Form>
        </CardWrapper>
        </div>
    )
}