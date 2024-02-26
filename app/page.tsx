"use client";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import React from 'react';
import Image from "next/image";



const font = Montserrat({
    subsets: ["latin"],
    weight: ["600"]
  })

const Home = () => {
  return (
    <main className=" bg-cover h-screen relative bg-[url('/bg-default.svg')]">
        <div className=' flex flex-col justify-center w-screen h-screen bg-white/5'>
            
            
            <div className=" ml-[3%] mr-[3%] mt-[4%] ">
                <h1 className={cn(
                 " text-7xl font-semibold text-white drop-shadow-md mb-6 leading-[105%]",
                 font.className
                 )}>
                    Explore o poder de transformação em sua jornada de saúde!
                </h1>
                <h2 className={cn("text-[100%] text-white/90 drop-shadow-md mb-[10%] ",font.className) }>
                    O EndoMind - Cuidando de você, impulsionando sua vitalidade.
                </h2>
            </div>
            <div className="flex justify-end mr-10">
            <LoginButton>
                <Button variant="ghost2" size="xl">
                  Vamos começar?
                </Button>
            </LoginButton>
        </div>
        <div className="bg-black text-white/15 absolute bottom-0 left-0 right-0">
            <h1 className=" text-sm text-center ">
                DESENVOLVIDO PARA APRESENTAÇÃO DE PROJETO DE CONCLUSÃO DE CURSO DE SISTEMAS DE INFORMAÇÃO
            </h1>
        </div> 
       </div>
       
    </main>
    
  );
};

export default Home;
