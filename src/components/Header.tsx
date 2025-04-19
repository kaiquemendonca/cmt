'use client'
import React, { useState, createContext, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

type HeaderProps = {
    ative: number;
    setAtive: (index: number) => void;
};

function Header({ ative, setAtive }: HeaderProps) {


    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        e.preventDefault();

        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);

        elem?.scrollIntoView({
            behavior: "smooth",
        });

        setAtive(index);
    };


    return (

        <div className="w-full fixed top-0 z-50  flex items-center justify-center bg-blue-800 px-5 text-xs font-medium uppercase ">

            <div className="hidden md:flex items-center justify-between w-7xl">
                <div className="flex md:w-7xl">
                    <div className=" flex items-center font-medium tracking-[4px] md:text-3xl">
                        <img className="size-18" src="/assets/logo-cmt.png" />
                    </div>
                    <ul className="flex flex items-center justify-center text-base">
                        {menu.map((menu, index) => {
                            return (
                                <motion.li
                                    layout
                                    key={index}

                                    
                                    >
                                    <a href={`${menu.href}`} onClick={(e)=>handleScroll(e, index)} className={`${ative == index && "text-[#53dee1]"
                                        } cursor-pointer hover:text-[#53dee1]  px-3 mx-2  rounded-3xl transition-all duration-300 ease-in-out
                     items-center 
                    `}>
                                        {menu.nome}
                                    </a>

                                </motion.li>
                            );
                        })}
                    </ul>
                </div>


                <div className="flex items-center md:w-xl justify-center">
                    <motion.button

                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] font-thin transition easi-in-out bg-[#53dee1] text-2xl p-1 px-8 rounded-2xl text-white">
                        <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Fale conosco</a>

                    </motion.button>
                </div>
            </div>

            <div className=" flex md:hidden w-full rounded-3xl bg-blue-800 items-center justify-around ">
                <div className="flex items-center font-medium tracking-[4px] md:text-3xl">
                    <img className="size-18" src="/assets/logo-cmt.png" />
                </div>
                <ul className="flex flex items-center justify-center text-xs">
                    {menu.map((e, index) => {
                        return (
                            <a href={`${e.href}`} onClick={(e)=>handleScroll(e, index)} className="size-15 text-lg">
                                <motion.img
                                    layout
                                    key={index}
                                    src={e.icone}
                                    className={`${ative == index && "text-blue-500"
                                        } size-15 cursor-pointer border-b-[#4ccbd1] transition-all duration-300 ease-in-out
                    hover:text-blue-500 items-center p-1 px-3 text-white
                    `}
                                    >
                                </motion.img>
                            </a>
                        );
                    })}
                </ul>
            </div>

        </div >
    );
}

export default Header;

const menu = [
    { nome: "Início", href: "/#home", icone: "/assets/icones/inicio.svg" },
    { nome: "Passeios", href: "/#trips", icone: "/assets/icones/passeios.svg" },
    { nome: "Promoções", href: "/#combotrips", icone: "/assets/icones/promocoes.svg" },
    { nome: "Contatos", href: "/#contacts", icone: "/assets/icones/contatos.svg" }
];

