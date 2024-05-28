"use client"



import HemogramaCom from "@/components/exames/hemograma-completo";
import IndiceHoma from "@/components/exames/indice-homa";
import NewExame from "@/components/new-exame";
import { useCurrentUser } from "@/hooks/use-current-user";



const AddPage = () =>{
    const user = useCurrentUser();

    return(
        <div className=" flex justify-center items-center min-h-screen">
            <IndiceHoma/>
        </div>
    )
}
export default AddPage;