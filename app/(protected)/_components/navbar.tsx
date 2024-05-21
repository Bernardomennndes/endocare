"use client";

import {
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { useContext, createContext, useState } from "react";
import { useSession } from "next-auth/react";
import { logout } from "@/actions/logout";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const SidebarContext = createContext();

export function Navbar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const session = useSession();
  const logOUT = () => {
    logout();
  };
  

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col rounded-tr-[16px] rounded-br-[16px] bg-gradient-to-tr from-indigo-200 to-indigo-100 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Link href="/settings">
          <button>
            <Image
              src="/logo.svg"
              alt="Logotipo da empresa"
              width={100}
              height={50}
              className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            />
          </button>
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <img
            src={session.data?.user.image || "defaultImagePath"}
            alt="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            className="w-10 h-10 rounded-md"
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold">{session.data?.user.name}</h4>
              <span className="text-xs text-gray-600">
                {session.data?.user.email}
              </span>
            </div>

            <Menubar>
              <MenubarMenu>
                <MenubarTrigger><MoreVertical size={20} /></MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <button onClick={logOUT} type="submit">
                      Sair
                    </button>
                    <MenubarShortcut><LogOut size={12} /></MenubarShortcut>
                  </MenubarItem>
                  <Link href="\settings">
                  <MenubarItem>
                    <button  type="submit">
                      Configuração
                    </button>
                    <MenubarShortcut><Settings size={12} /></MenubarShortcut>
                  </MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, href, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  const router = useRouter();

  return (
    <li 
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? "bg-gradient-to-tr from-slate-200 to-slate-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
      `}
      onClick={() => router.push(href)}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
      )}
      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
