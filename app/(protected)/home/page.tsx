"use client"

import { useCurrentUser } from "@/hooks/use-current-user";



const Home = () =>{
    const user = useCurrentUser();

    return(
        <div className=" bg-slate-500">
            teste
        </div>
    )
}
export default Home;