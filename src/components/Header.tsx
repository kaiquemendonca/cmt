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

    return (

        <div className="w-full fixed top-0 z-50  flex items-start justify-between text-xs font-medium uppercase ">

            <motion.button
                className="relative h-15 flex flex-col backdrop-blur-sm justify-center items-start px-8  gap-1 z-50 md:hidden bg-[#6ABAC4]/50 w-40 rounded-br-3xl"
                animate={{ background: isOpen ? "#6ABAC400" : "#6ABAC450", filter: isOpen ? "backdrop-filter(0px)" : "backdrop-filter(8px)"}}
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                    className="w-8 h-0.5 bg-white rounded origin-center"
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    className="w-8 h-0.5 bg-white rounded"
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                    className="w-8 h-0.5 bg-white rounded origin-center"
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
            <div className=" flex items-center font-medium tracking-[4px] md:hidden">
                <img className="size-15" src="/assets/logo-cmt.png" />
            </div>

            {/* Botão de menu */}


            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed w-40 left-0 top-0 bg-[#6ABAC4]/50 backdrop-blur-sm flex justify-center items-center z-40 p-8 rounded-br-3xl md:hidden"
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
                            <ul className="space-y-1 flex flex-col items-start text-xl pt-8">
                                {menu.map((menu, index) => {
                                    return (
                                        <motion.li
                                            layout
                                            key={index}

                                            className="cursor-pointer border-b-[#4ccbd1] transition-all duration-300 ease-in-out
                     items-center"
                                        >
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
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hidden md:inline-block w-[95%] mx-auto bg-[#6ABAC4]/60 backdrop-blur-sm flex justify-center items-center z-40 p-4 rounded-b-3xl"
                >
                    <motion.div
                        key="modal"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                        className="flex justify-between text-center  h-full w-[85%] mx-auto"
                        onClick={(e) => e.stopPropagation()}

                    >
                        <ul className="space-x-4 flex items-start text-xl ">
                            {menu.map((menu, index) => {
                                return (
                                    <>
                                        <motion.li
                                            layout
                                            key={index}

                                            className="cursor-pointer border-b-[#4ccbd1] transition-all duration-300 ease-in-out space-x-4
                 items-center"
                                        >
                                            <a href={`${menu.href}`} onClick={handleScroll}>
                                                {menu.nome}
                                            </a>
                                            <a>|</a>
                                        </motion.li>

                                    </>


                                );
                            })}
                        </ul>
                        <div className="flex space-x-6">
                            <div className="">
                                <a className="size-15" href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank"><img className="" src="/assets/wapp.svg" /></a>
                            </div>
                            <div className="">
                                <a className="tracking-widest" href="https://www.instagram.com/cesarmaceiotur/" target="_blank" ><img className="" src="/assets/insta2.svg" /></a>
                            </div>
                            <div className="">
                                <img className="" src="/assets/logo-cmt.svg" />
                            </div>
                        </div>


                    </motion.div>
                </motion.div>

            </AnimatePresence>
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
