import { Header } from "@/components/auth/header";
import { BackButton } from "./back-button";
import {
    Card,
    CardFooter,
    CardHeader
} from "@/components/ui/card";

export const ErrorCard =() =>{
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header 
                label="Ooops! Alguma coisa deu errado!" 
                title=""
                />
            </CardHeader>
            <CardFooter>
                <BackButton
                    label="Voltar para o login"
                    href="/login"
                />
            </CardFooter>
        </Card>
    )
}
