"use client";

import {
    Card,
    CardHeader, 
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { setting } from "@/actions/settings";
import { useTransition } from "react";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
    const{update} = useSession();
    const [isPending, startTransition] = useTransition();

    const onClick = () => {
        startTransition(() => {
            setting({
                name: "Gustavo Nobre"
            })
            .then(()=> {
                update();
            })
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
                <Button disabled={isPending} onClick={onClick}>
                    Atualizar
                </Button>
            </CardContent>
        </Card>
    );
};

export default SettingsPage;
