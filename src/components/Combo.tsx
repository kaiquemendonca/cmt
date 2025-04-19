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
            id="combotrips" className="flex flex-col p-3 items-center  justify-center md:w-7xl md:mx-auto w-full relative min-h-screen bg-[#6ABAC4]">

            <div className="text-4xl md:text-5xl mt-18 md:m-10">
                <h1 className="text-center">Promoção Imperdível</h1>
            </div>
            <div className="flex flex-col md:flex-row grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-between w-full">
                <div className="bg-linear-to-b from-sky-300 to-blue-600 text-white p-2 md:max-w-screen-lg mx-auto rounded-xl border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] m-5 p-3">
                    <div className="bg-red-600 text-green-300 font-bold p-2 text-center text-xl rounded-t-xl">
                        R$: 1199,00
                    </div>

                    <div className="text-center text-yellow-400 font-extrabold text-3xl my-4">
                        PROMOÇÃO 1
                    </div>
                    <div className="text-center text-green-100 font-bold text-xl mb-4">
                        6 DESTINOS EM 4 DIAS
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                            <img
                                src="/assets/promocao/2.jpg"
                                alt="Frances, Barra, Gunga"
                                className="rounded-lg object-cover w-[200px]"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                                FRANCES<br />BARRA<br />GUNGA
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/assets/promocao/1.jpg"
                                alt="Maragogi"
                                className="rounded-lg object-cover w-[200px]"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                                MARAGOGI
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/assets/promocao/3.jpg"
                                alt="Milagres"

                                className="rounded-lg object-cover w-[200px]"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                                MILAGRES
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/assets/promocao/4.jpg"
                                alt="Ipioca"
                                className="rounded-lg object-cover w-[200px]"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                                IPIOCA
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-4 text-yellow-400 font-semibold text-xs  rounded-b-xl">
                        <span className="mx-1">CARRO PRIVATIVO ATÉ 4 PESSOAS</span>
                        <span className="mx-1">-</span>
                        <span className="mx-1">GUIA EXCLUSIVO</span>
                        <span className="mx-1">-</span>
                        <span className="mx-1">FOTOS</span>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <motion.button

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.8 }}
                            className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] font-thin transition easi-in-out bg-[#53dee1] text-2xl p-2 rounded-3xl text-white w-full ">
                            <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Quero esse combo</a>

                        </motion.button>
                    </div>
                </div>
                <div className="bg-linear-to-b from-sky-300 to-blue-600 text-white p-2 md:max-w-screen-lg mx-auto rounded-xl border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] m-5 p-3">
                    <div className="bg-red-600 text-green-300 font-bold p-2 text-center text-xl rounded-t-xl">
                        R$: 999,00
                    </div>

                    <div className="text-center text-yellow-400 font-extrabold text-3xl my-4">
                        PROMOÇÃO 2
                    </div>
                    <div className="text-center text-green-100 font-bold text-xl mb-4">
                        5 DESTINOS EM 3 DIAS
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                            <img
                                src="/assets/promocao/2.jpg"
                                alt="Frances, Barra, Gunga"
                                className="rounded-lg object-cover w-[200px]"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                                FRANCES<br />BARRA<br />GUNGA
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/assets/promocao/1.jpg"
                                alt="Maragogi"
                                className="rounded-lg object-cover w-[200px]"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                                MARAGOGI
                            </div>
                        </div>

                        <div className="relative col-span-2">
                            <img
                                src="/assets/promocao/5.jpg"
                                alt="Milagres"

                                className="rounded-lg object-cover w-[400px] h-[192px]"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                                MILAGRES
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center mt-4 text-yellow-400 font-semibold text-xs  rounded-b-xl">
                        <span className="mx-1">CARRO PRIVATIVO ATÉ 4 PESSOAS</span>
                        <span className="mx-1">-</span>
                        <span className="mx-1">GUIA EXCLUSIVO</span>
                        <span className="mx-1">-</span>
                        <span className="mx-1">FOTOS</span>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <motion.button

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.8 }}
                            className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] font-thin transition easi-in-out bg-[#53dee1] text-2xl p-2 rounded-3xl text-white w-full">
                            <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Quero esse combo</a>

                        </motion.button>
                    </div>

                </div>

                {toursAdd.map((dados, index) => (
                    <div key={index} className="bg-linear-to-b from-sky-300 to-blue-600 text-white p-2 md:max-w-screen-lg mx-auto rounded-xl border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] m-5 p-3">
                        <div className="bg-red-600 text-green-300 font-bold p-2 text-center text-xl rounded-t-xl">
                            R$: {dados.valor}
                        </div>

                        <div className="text-center text-yellow-400 font-extrabold text-3xl my-4">
                            PROMOÇÃO
                        </div>
                        <div className="text-center text-green-100 font-bold text-xl mb-4">
                            {dados.titulo}
                        </div>

                        <div className="flex">
                            <div className="relative">
                                <img
                                    src={dados.src}
                    
                                    className="rounded-lg object-cover w-[400px]"
                                />
                            </div>

                        </div>
                        <div>
                            <p className="text-justify">
                                {dados.descricao}
                            </p>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <motion.button

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                                className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] font-thin transition easi-in-out bg-[#53dee1] text-2xl p-2 rounded-3xl text-white w-full">
                                <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Quero esse Passeio</a>

                            </motion.button>
                        </div>

                    </div>
                ))}

            </div>


        </motion.div>
    )

}

const toursAdd = [
    {
        titulo: "LANCHA COMPARTILHADA EM MARAGOGI",
        valor: "130,00 P/PESSOA",
        descricao: "Passeio de Lancha compartilhada com 03 paradas: Piscina Natural, Caminho de Moisés e Praia de Antunes. Lanchas com capacidade máxima para até 08 passageiros. É permitido levar bébidas e alimentos.",
        duracao: "2h30min",
        src: "/assets/lancha-espresso-maragogi.jpeg"
    },
    {
        titulo: "JANGADA EM MILAGRES",
        valor: "100,00 P/PESSOA",
        descricao: "Piscinas naturais de milagres 1• parada – banho com os peixinhosBanco de areia 2• parada – Fotos na boia e redePoço fundo 3• Terceira e última parada – dar aquele mergulho de cima da jangada que não pode faltar",
        duracao: "2h30min",
        src: "/assets/milagres/IMG-20250401-WA0019.jpg"
    },
]


