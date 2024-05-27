"use client"

import Colesterol from "@/components/exames/colesterol";
import NewExame from "@/components/new-exame";
import { useCurrentUser } from "@/hooks/use-current-user";



const AddPage = () =>{
    const user = useCurrentUser();

    return(
        <div className=" bg-slate-500">
            <Colesterol/>
        </div>
    )
}
export default AddPage;