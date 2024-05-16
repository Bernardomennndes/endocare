"use client";

import { HomeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";


export function Navbar(){
    return(
        <aside className=" w-17rem h-full bg-white p-4 transition-all duration-300 ease-linear">
            <div className=" w-max-content flex align-content-center pb-4 mb-4 border-b border-solid border-gray-300">
                <Image
                    src="/me.jpg"
                    width={80}
                    height={80}
                    className="sidebar_logo"
                    alt="logo"
                />
            </div>
            <ul className="sidebar_list">
                <li className="sidebar_item">
                    <Link href="/" className="sidebar_link">
                        <span className="sidebar_icon">
                            <HomeIcon/>
                        </span>
                        <span className="sidebar_name">Dashboard</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}