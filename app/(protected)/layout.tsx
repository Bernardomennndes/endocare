"use client";

import { ActivityLogIcon, FilePlusIcon } from "@radix-ui/react-icons";
import { Navbar, SidebarItem } from "./_components/navbar";
import { usePathname } from "next/navigation";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="flex">
      <Navbar>
        <SidebarItem 
          icon={<FilePlusIcon />}
          text="Adicionar Exame"
          href="/add-exame"
          active={pathname === "/add-exame"}
        />
        <SidebarItem 
          icon={<ActivityLogIcon />}
          text="Histórico de exames"
          href="/historico-exames"
          active={pathname === "/historico-exames"}
        />
      </Navbar>
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default ProtectedLayout;
