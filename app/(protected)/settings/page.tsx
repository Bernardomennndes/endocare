"use client"

import { logout } from "@/actions/logout";
import { useSession } from "next-auth/react";


const SettingsPage = () =>{
    const session = useSession();

    const onClick =() =>{
        logout();
    }
    
    return(
        <div>
            {JSON.stringify(session.data?.user)}

            
                <button onClick={onClick} type="submit">
                    Sair
                </button>
            
        </div>
    )
}
export default SettingsPage;