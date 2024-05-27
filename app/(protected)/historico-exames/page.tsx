"use client"

import { useCurrentUser } from "@/hooks/use-current-user";



const Historic = () =>{
    const user = useCurrentUser();

    return(
        <div className=" bg-slate-500">
            teste
        </div>
    )
}
export default Historic;