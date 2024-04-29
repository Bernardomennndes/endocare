"use client";

import { useCallback, useEffect } from "react";
import{ BeatLoader} from "react-spinners"
import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./card-wrapper";

export const NewVerificationForm = () =>{
    const searchParams = useSearchParams();
    
    const token = searchParams.get("token");

    const onSubmit = useCallback(()=>{
        console.log(token);
    }, [token]);

    useEffect(() =>{
        onSubmit()
        },[onSubmit]);
    return(
        <CardWrapper
            headerLabel="Confirme sua Verificação"
            backButtonLabel="Voltar ao Login"
            backButtonHref="/login"
            headerTitle="Confirme o E-mail"
        >
            <div className="flex items-center w-full justify-center">
                <BeatLoader/>
            </div>

        </CardWrapper>
    )
}