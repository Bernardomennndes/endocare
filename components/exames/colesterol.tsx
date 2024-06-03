import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { CardWrapper } from "../auth/card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";

export default function Colesterol() {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }  
    });

    return (
        <div className="items-center justify-center ">
            <CardWrapper
                cardspace="w-[600px] shadow-md bg-customGray"
                headerTitle="Colesterol Total e Fracionado"
                headerLabel="Manter os níveis de colesterol sob controle é crucial para a saúde do coração. Inclua alimentos ricos em fibras, como aveia, frutas, e legumes, na sua dieta para ajudar a reduzir o colesterol LDL (o 'mau' colesterol)."
                backButtonHref="/home"
                backButtonLabel="Não tenho nada para registrar"
            >
                <Form {...form}>
                    <form className="space-y-6">
                        <div className="gap-7">
                        <FormField 
                                control={form.control}
                                name="datacolesterol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" mt-10">DATA DO EXAME</FormLabel>
                                        <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Data de Nascimento"
                                            type="date"
                                            className=" bg-white"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <br/>
                            <FormField 
                                control={form.control}
                                name="totalCholesterol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" mt-10">COLESTEROL TOTAL</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Inferior a 190 mg/dL"
                                                className=" bg-white"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <br/>
                            <FormField 
                                control={form.control}
                                name="hdlCholesterol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" mt-10">COLESTEROL HDL</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Superior a 40 mg/dL"
                                                className=" bg-white"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <br/>
                            <FormField 
                                control={form.control}
                                name="ldlCholesterol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>COLESTEROL LDL</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Inferior a 110 mg/dL"
                                                className=" bg-white"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <br/>
                            <FormField 
                                control={form.control}
                                name="vldlCholesterol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>COLESTEROL VLDL</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder=""
                                                className=" bg-white"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <br/>
                            <FormField 
                                control={form.control}
                                name="nonHdlCholesterol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>COLESTEROL NÃO HDL</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder=""
                                                className=" bg-white"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <br/>
                            <FormField 
                                control={form.control}
                                name="triglycerides"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>TRIGLICÉRIDES</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Inferior a 175 mg/dL"
                                                className=" bg-white"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
}
