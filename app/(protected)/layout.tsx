import { ActivityLogIcon, FilePlusIcon, HomeIcon, LayoutIcon, PlusIcon } from "@radix-ui/react-icons";
import { Navbar, SidebarItem } from "./_components/navbar";
import { ActivityIcon, ActivitySquare, ClipboardPlus } from "lucide-react";

interface ProtectedLayoutProps{
    children: React.ReactNode;
}

const ProtectedLayout = ({ children } : ProtectedLayoutProps) => {
    return(
        <div className="flex">
            <Navbar>
                <SidebarItem 
                    icon={<FilePlusIcon/>}
                    text="Adicionar Exame"
                    active
                />
                <SidebarItem 
                    icon={<ActivityLogIcon/>}
                    text="Histórico de exames"
                    alert
                />
                <SidebarItem 
                    icon={<HomeIcon/>}
                    text="Dashboard"
                    alert
                />
            </Navbar>
            <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center">
            
            {children}
            </div>
        </div>
    );
}

export default ProtectedLayout