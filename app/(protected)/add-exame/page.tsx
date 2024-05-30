"use client"

import Exame from "@/components/exames/exames";
import { useCurrentUser } from "@/hooks/use-current-user";



const AddPage = () =>{
    const user = useCurrentUser();

    return(
        <div className=" flex justify-center items-center min-h-screen">
            <Exame/>
        </div>
    )
}
export default AddPage;