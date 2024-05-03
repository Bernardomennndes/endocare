"use client";

import { useCallback, useEffect, useState } from "react";
import{ BeatLoader} from "react-spinners"
import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./card-wrapper";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () =>{
    const[error, setError] =  useState<string | undefined>();
    const[success, setSuccess] = useState<string|undefined>();
    const searchParams = useSearchParams();
    
    const token = searchParams.get("token");

    const onSubmit = useCallback(()=>{
        if (success || error) return;
        if(!token) {
            setError("Sem token")
            return;
        }
        newVerification(token)
            .then((data) =>{
                setSuccess(data.success);
                setError(data.error);
            })
            .catch(()=>{
                setError("Alguma coisa está errada, contate o nosso suporte")
            })
    }, [token, success, error]);

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
                {!success && !error &&(
                    <BeatLoader/>                    
                )}
                <FormSuccess message={success}/>
                {!success && (
                    <FormError message={error}/> 
                ) }
                
            </div>

        </CardWrapper>
    )
}