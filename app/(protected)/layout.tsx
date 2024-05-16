import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps{
    children: React.ReactNode;
}

const ProtectedLayout = ({ children } : ProtectedLayoutProps) => {
    return(
        <div>
            <Navbar/>
            <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center">
            {children}
            </div>
        </div>
    );
}

export default ProtectedLayout