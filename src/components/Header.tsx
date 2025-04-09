'use client'
import React, { useState, createContext, useContext, useEffect } from "react";
import { motion } from "motion/react";

type HeaderProps = {
    ative: number;
    setAtive: (index: number) => void;
};

function Header({ ative, setAtive }: HeaderProps) {


    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const href = e.currentTarget.href;

        const targetId = href.replace(/.*#/, "");

        const elem = document.getElementById(targetId);

        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const handleMenu = (index: number) => {
        setAtive(index);
    }
    return (



        <div className="w-full fixed top-0 z-50  flex flex-col  items-center px-5 text-xs font-medium uppercase md:w-[40%] md:relative md:h-screen md:items-start">
            
            <div className=" flex items-center font-medium tracking-[4px] md:text-3xl">
                <img className="size-18" src="/assets/logo-cmt.png" />
                Cesar Maceió Turismo
            </div>
            <ul className="flex flex-wrap items-center gap-3 text-sm md:flex-col  md:items-start md:justify-center py-3 md:py-10">
                { }
                {menu.map((menu, index) => {
                    return (
                        <motion.li
                            layout
                            key={index}

                            className={`${ative == index && "text-blue-800 md:text-xl"
                                } inline-block cursor-pointer border-b-[#4ccbd1] transition-all duration-300 ease-in-out
                    hover:text-blue-800 md:group md:flex items-center md:py-2
                    `}
                            onClick={() => handleMenu(index)}>
                            <span className={`${ative == index && "bg-blue-800"} hidden md:inline-block mr-4 h-px w-8 bg-white transition-all motion-reduce:transition-none`}></span>
                            <a href={`${menu.href}`} onClick={handleScroll}>
                                {menu.nome}
                            </a>

                        </motion.li>
                    );
                })}

            </ul>

            <div id="contacts" className="hidden md:inline-block relative h-screen w-full flex items-start justify-start">
               
                <div className="relative flex flex-col md:flex-row h-full items-start justify-start w-full">
                    <div className="flex flex-col h-30 w-[30%] rounded-2xl  md-min-w-[250px] md:mr-2">
                        <a className="flex flex-col w-full h-full" href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">
                            <div className="flex flex-1 justify-center items-end">
                                <img className="size[50px]" src="/assets/icons8-whatsapp.svg" />
                            </div>
                            <div className=" text-white text-center flex flex-1 justify-center items-center">
                                WHATSAPP 24 HORAS <br /> (82) 99143-2144

                            </div>
                        </a>

                    </div>
                    <div className="flex flex-col h-30 w-[30%] rounded-2xl md-min-w-[250px]">
                        <a className="flex flex-col w-full h-full" href="https://www.instagram.com/cesarmaceiotur/" target="_blank">
                            <div className="flex flex-1 justify-center items-end">
                                <img className="size[50px]" src="/assets/icons8-instagram.svg" />
                            </div>
                            <div className="flex flex-1 justify-center items-center">
                                <p className="text-white text-center">INSTAGRAM <br /> @cesarmaceiotur</p>

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

const menu = [
    { nome: "Início", href: "/#home" },
    { nome: "Passeios", href: "/#trips" },
    { nome: "Promoção", href: "/#combotrips" },
    { nome: "Contatos", href: "/#contacts" }
];

