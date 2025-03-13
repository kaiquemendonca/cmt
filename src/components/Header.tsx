'use client'
import React from "react";
import { motion } from "motion/react";
import Head from "next/head";

function Header(){
    const [active, setActive] = React.useState(0);
    return(
        <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">

        
        <Head>
            <title>Cesar Maceió Turismo</title>
            
        </Head>
        <div className=" flex items-center gap-2 font-medium tracking-[4px]">
            <img className="size-18" src="/assets/logo-cmt.png"/>
            Cesar Maceió Turismo
        </div>
        <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
            {menu.map((menu, index)=>{
                return(
                    <motion.li
                    layout
                    key={index}
                    className={`${
                        active == index && "border-b-2 border-b-[#4ccbd1]"
                    } inline-block cursor-pointer border-b-[#4ccbd1] transition duration-300 ease-in-out
                    hover:border-b-2 hover:text-white
                    `}
                    >
                        {menu}
                    </motion.li>
                );
            })}
            
        </ul>
        </div>
    );
}

export default Header;

const menu = [
    "Passeios",
    "Combos de Passeios",
    "Contatos"
];