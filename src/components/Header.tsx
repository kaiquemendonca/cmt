'use client'
import React, { useState, createContext, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Home, MapPin, Phone } from 'lucide-react';

type HeaderProps = {
    ative: number;
    setAtive: (index: number) => void;
};

function Header({ ative, setAtive }: HeaderProps) {


    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

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
        setIsOpen(false);
    }
    return (



        <div className="w-full fixed top-0 z-50  flex flex  items-center justify-around px-5 text-xs font-medium uppercase md:flex-col md:w-[40%] md:relative md:h-screen md:items-start">

            <div className=" flex items-center font-medium tracking-[4px] md:text-3xl">
                <img className="size-18" src="/assets/logo-cmt.png" />
                Cesar Maceió Turismo
            </div>

            {/* Botão de menu */}
            <button
                className="relative w-10 h-10 flex flex-col justify-center items-center gap-1 z-50 md:hidden"
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
                    className="w-8 h-0.5 bg-white rounded origin-center"
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    className="w-8 h-0.5 bg-white rounded"
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    className="w-8 h-0.5 bg-white rounded origin-center"
                    transition={{ duration: 0.3 }}
                />
            </button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-[#6ABAC4]/80 flex justify-center items-center z-40 p-10"
                        onClick={toggleMenu}
                    >
                        <motion.div
                            key="modal"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                            className=" text-center w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold my-5">Menu</h2>
                            <ul className="space-y-2 flex flex-col items-start text-xl">
                                {menu.map((menu, index) => {
                                    return (
                                        <motion.li
                                            layout
                                            key={index}

                                            className={`${ative == index && "text-blue-800"
                                                } cursor-pointer border-b-[#4ccbd1] transition-all duration-300 ease-in-out
                    hover:text-blue-800 items-center py-2
                    `}
                                            onClick={() => handleMenu(index)}>
                                            <a href={`${menu.href}`} onClick={handleScroll}>
                                                {menu.nome}
                                            </a>

                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ul className="hidden flex flex-wrap items-center gap-3 text-sm md:inline-block md:flex-col  md:items-start md:justify-center py-3 md:py-10">

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
        </div >
    );
}

export default Header;

const menu = [
    { nome: "Início", href: "/#home" },
    { nome: "Passeios", href: "/#trips" },
    { nome: "Promoção", href: "/#combotrips" },
    { nome: "Contatos", href: "/#contacts" }
];

