'use client'
import React, { useState, createContext, useContext, useEffect } from "react";
import { motion } from "motion/react";


type Props = {
    handleClickMenu: (index:number)=>void;
    option: number;
}
  



function Header(){
    
    
    const [active, setActive] = React.useState(0);

      const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
            e.preventDefault();
            
            const href = e.currentTarget.href;

            const targetId = href.replace(/.*#/,"");

            const elem = document.getElementById(targetId);

            elem?.scrollIntoView({
                behavior: "smooth",
            });     
      };

      const handleMenu =(index:number)=>{
        setActive(index);
      }
    return(
    
        
    
    <div className="fixed top-0 z-50 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-70 md:px-10 bg-[#0905bc]">

        <div className=" flex items-center gap-2 font-medium tracking-[4px]">
            <img className="size-18" src="/assets/logo-cmt.png"/>
            Cesar Maceió Turismo
        </div>
        <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
            {}
            {menu.map((menu, index)=>{
                return(
                    <motion.li
                    layout
                    key={index}
                    
                    className={`${
                        active == index && "border-b-2 border-b-[#4ccbd1]"
                    } inline-block cursor-pointer border-b-[#4ccbd1] transition-all duration-300 ease-in-out
                    hover:border-b-2 hover:text-white
                    `}
                    onClick={()=>handleMenu(index)}
                     
                    ><a href={`${menu.href}`} onClick={handleScroll}>
                        {menu.nome}
                    </a>
                        
                    </motion.li>
                );
            })}
            
        </ul>
        </div>
    );
}

export default Header;

const menu = [
    {nome:"Início", href:"/#home"},
    {nome:"Passeios", href:"/#trips"},
    {nome:"Combo de Passeios", href: "/#combotrips"},
    {nome:"Contatos", href:"/#contacts"}
];

