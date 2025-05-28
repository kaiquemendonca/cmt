'use client'

import { AnimatePresence } from "motion/react"
import React from "react"
import { motion } from "motion/react";

export const Combo = () => {



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            id="combotrips" className="flex flex-col p-3 items-center  justify-center md:p-30 md:pt-10 md:mx-auto w-full relative min-h-screen snap-start bg-white">

            <motion.div className="text-4xl md:text-5xl mt-18 md:m-10 text-blue-400">
                <h2 className="text-center text-3xl font-bold mb-6 text-blue-400 uppercase">Promoções Imperdíveis</h2>
            </motion.div>
            <div className="flex flex-col md:flex-row grid grid-cols-1 md:grid-cols-4 gap-3 items-start justify-between w-full">
                {toursAdd.map((dados, index) => (
                    <div key={index} className="bg-gray-100 text-white md:max-w-screen-lg rounded-xl border border-[#a3f7f9] shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3)]">


                        <div className="flex w-full">
                            <div className="relative w-full">
                                <img
                                    src={dados.src}
                                    alt={`${dados.titulo}`}
                                    className="rounded-lg object-cover w-full h-[250px]"
                                />
                            </div>
                        </div>
                        <div className="px-5 py-6 h-[280px]">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.5, ease: 'easeOut' }}
                                className="text-justify text-blue-600 text-md mb-2">
                                {dados.titulo}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.5, ease: 'easeOut' }}
                                className="h-[90px]"
                            >
                                <p className="text-justify mb-2 text-gray-500 text-sm">
                                    {dados.descricao}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.5, ease: 'easeOut' }}
                                className="text-green-700 text-justify text-bold text-md rounded-t-xl">
                                R${dados.valor}
                            </motion.div>


                            <div className="flex items-center justify-center mt-4">
                                <motion.button

                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.8 }}
                                    className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#fff] font-thin transition easi-in-out bg-blue-400 text-2xl p-1 rounded-2xl text-white w-full">
                                    <a href={dados.link} target="_blank">Reservar</a>

                                </motion.button>
                            </div>
                        </div>

                    </div>
                ))}
                <div className="bg-gray-100 text-white md:max-w-screen-lg rounded-xl border border-[#a3f7f9] border-2 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3)]">

                    <div className="flex w-full">
                        <div className="relative w-full">
                            <img
                                src="/assets/gunga/IMG-20250401-WA0001.jpg"
                                alt="COMBO PASSEIOS ALAGOAS"
                                className="rounded-lg object-cover w-full h-[250px]"
                            />
                        </div>
                    </div>
                    <div className="px-5 py-6 h-[280px]">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                            className="text-justify text-blue-600 text-md mb-2">
                            Combo 6 praias em 4 dias
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true,amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                            className="h-[90px]"
                        >
                            <p className="text-justify mb-2 text-gray-500 text-sm">
                                Conheça 6 praias em 4 dias. Maragogi, Milagres, Ipioca, Francês, Barra de São Miguel e Gunga.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                            className="text-green-700 text-justify text-bold text-md rounded-t-xl">
                            <span className="text-gray-500">A partir de</span> R$999,00
                        </motion.div>
                        <div className="flex items-center justify-center mt-4">
                            <motion.button

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                                className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#fff] font-thin transition easi-in-out bg-blue-400 text-2xl p-1 rounded-2xl text-white w-full ">
                                <a href="https://wa.me/5582994180997?text=Ol%C3%A1%20C%C3%A9sar%2C%20estou%20interessado%20no%20combo%20de%206%20praias%20em%204%20dias." target="_blank">Quero esse combo</a>

                            </motion.button>
                        </div>

                    </div>
                </div>
                <div className="bg-gray-100 text-white md:max-w-screen-lg rounded-xl border border-[#a3f7f9] border-2 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3)]">

                    <div className="flex w-full">
                        <div className="relative w-full">
                            <img
                                src="/assets/gunga/IMG-20250401-WA0001.jpg"

                                className="rounded-lg object-cover w-full h-[250px]"
                            />
                        </div>
                    </div>
                    <div className="px-5 py-6 h-[280px]">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                            className="text-justify text-blue-600 text-md mb-2">
                            Combo 5 praias em 3 dias
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                            className="h-[90px]"
                        >
                            <p className="text-justify mb-2 text-gray-500 text-sm">
                                Conheça 5 praias em 3 dias. Maragogi, Milagres, Francês, Barra de São Miguel e Gunga.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                            className="text-green-700 text-justify text-bold text-md rounded-t-xl">
                            <span className="text-gray-500">A partir de</span> R$849,00
                        </motion.div>
                        <div className="flex items-center justify-center mt-4">
                            <motion.button

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                                className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#fff] font-thin transition easi-in-out bg-blue-400 text-2xl p-1 rounded-2xl text-white w-full ">
                                <a href="https://wa.me/5582994180997?text=Ol%C3%A1%20C%C3%A9sar%2C%20estou%20interessado%20no%20combo%20de%205%20praias%20em%203%20dias." target="_blank">Quero esse combo</a>

                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )

}

const toursAdd = [
    {
        titulo: "Lancha Compartilha em Maragogi",
        valor: "125,00 P/PESSOA",
        descricao: "Passeio de Lancha compartilhada com 03 paradas: Piscina Natural, Caminho de Moisés e Praia de Antunes. É permitido levar bébidas e alimentos.",
        duracao: "2h30min",
        src: "/assets/lancha-espresso-maragogi.jpeg",
        link: "https://wa.me/5582994180997?text=Ol%C3%A1%2C%20C%C3%A9sar!%20Estou%20interessado%20em%20agendar%20o%20passeio%20de%20lancha%20compartilhada%20em%20Maragogi"
    },
    {
        titulo: "Jangada em Milagres",
        valor: "100,00 P/PESSOA",
        descricao: "Piscinas naturais de milagres 1• parada – banho com os peixinhos 2• parada – Fotos na boia e rede 3• Terceira e última parada – mergulho de cima da jangada",
        duracao: "2h30min",
        src: "/assets/milagres/IMG-20250401-WA0019.jpg",
        link: "https://wa.me/5582994180997?text=Ol%C3%A1%2C%20C%C3%A9sar!%20Estou%20interessado%20em%20agendar%20o%20passeio%20de%20jangada%20em%20Milagres"
    },
    {
        titulo: "JetSki em Maragogi",
        valor: "300,00 até 2 PESSOAS",
        descricao: "JetSki para até 2 pessoas. Caso você não tenha nhuma experiência, o passeio será guiado.",
        duracao: "30min",
        src: "/assets/jetski.png",
        link: "https://wa.me/5582994180997?text=Ol%C3%A1%2C%20C%C3%A9sar!%20Estou%20interessado%20em%20agendar%20o%20passeio%20de%20JetSki%20em%20Maragogi"
    },
]

//asdsad
