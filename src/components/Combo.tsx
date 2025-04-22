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
            id="combotrips" className="flex flex-col p-3 items-center  justify-center md:w-7xl md:mx-auto w-full relative min-h-screen bg-[#6ABAC4] snap-start ">

            <div className="text-4xl md:text-5xl mt-18 md:m-10">
                <h1 className="text-center">Promoção Imperdível</h1>
            </div>
            <div className="flex flex-col md:flex-row grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-between w-full">
                <div className="bg-linear-to-b from-sky-300 to-blue-600 text-white p-2 md:max-w-screen-lg mx-auto rounded-xl border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] m-5 p-3">
                    <div>
                        <img src="/assets/COMBODE4DIAS.png" className=""/>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <motion.button

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.8 }}
                            className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] font-thin transition easi-in-out bg-[#53dee1] text-2xl p-2 rounded-3xl text-white w-full ">
                            <a href="https://wa.me/5582991432144?text=Ol%C3%A1%20C%C3%A9sar%2C%20estou%20interessado%20no%20combo%20de%206%20praias%20em%204%20dias." target="_blank">Quero esse combo</a>

                        </motion.button>
                    </div>
                
                </div>
                <div className="bg-linear-to-b from-sky-300 to-blue-600 text-white p-2 md:max-w-screen-lg mx-auto rounded-xl border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] m-5 p-3">
                    <div>
                        <img src="/assets/COMBODE3DIAS.png" className=""/>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <motion.button

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.8 }}
                            className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1] font-thin transition easi-in-out bg-[#53dee1] text-2xl p-2 rounded-3xl text-white w-full ">
                            <a href="https://wa.me/5582991432144?text=Ol%C3%A1%20C%C3%A9sar%2C%20estou%20interessado%20no%20combo%20de%205%20praias%20em%203%20dias." target="_blank">Quero esse combo</a>

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
                    
                                    className="rounded-lg object-cover w-[400px] h-[400px]"
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
                                <a href={dados.link} target="_blank">Quero esse Passeio</a>

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
        src: "/assets/lancha-espresso-maragogi.jpeg",
        link:"https://wa.me/5582991432144?text=Ol%C3%A1%2C%20C%C3%A9sar!%20Estou%20interessado%20em%20agendar%20o%20passeio%20de%20lancha%20compartilhada%20em%20Maragogi"
    },
    {
        titulo: "JANGADA EM MILAGRES",
        valor: "100,00 P/PESSOA",
        descricao: "Piscinas naturais de milagres 1• parada – banho com os peixinhosBanco de areia 2• parada – Fotos na boia e redePoço fundo 3• Terceira e última parada – dar aquele mergulho de cima da jangada que não pode faltar",
        duracao: "2h30min",
        src: "/assets/milagres/IMG-20250401-WA0019.jpg",
        link:"https://wa.me/5582991432144?text=Ol%C3%A1%2C%20C%C3%A9sar!%20Estou%20interessado%20em%20agendar%20o%20passeio%20de%20jangada%20em%20Milagres"
    },
    {
        titulo: "JETSKI MARAGOGI",
        valor: "300,00 até 2 PESSOAS",
        descricao: "Aluguel de Jet Ski para até 2 pessoas. 30 minutos de locação R$300. Para conduzir o jet você tem seguir ao pé da letra as recomendações de nossos guias. Caso você não tenha nhuma experiência, o passeio será guiado.",
        duracao: "30min",
        src: "/assets/jetski.png",
        link:"https://wa.me/5582991432144?text=Ol%C3%A1%2C%20C%C3%A9sar!%20Estou%20interessado%20em%20agendar%20o%20passeio%20de%20JetSki%20em%20Maragogi"
    },
]


