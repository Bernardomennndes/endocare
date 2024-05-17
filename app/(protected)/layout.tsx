import { HomeIcon, LayoutIcon } from "@radix-ui/react-icons";
import { Navbar, SidebarItem } from "./_components/navbar";

interface ProtectedLayoutProps{
    children: React.ReactNode;
}

const ProtectedLayout = ({ children } : ProtectedLayoutProps) => {
    return(
        <div>
            
            <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center">
            <Navbar>
                <SidebarItem 
                    icon={<HomeIcon/>}
                    text="Dashboard"
                    alert
                />
                <SidebarItem 
                    icon={<HomeIcon/>}
                    text="Dashboard"
                    alert
                />
                <SidebarItem 
                    icon={<HomeIcon/>}
                    text="Dashboard"
                    alert
                />
            </Navbar>
            {children}
            </div>
        </div>
    );
}

export default ProtectedLayout