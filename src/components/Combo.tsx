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
            id="combotrips" className="flex flex-col md:flex-row p-3 items-start my-10 md:mt-0 justify-center md:justify-start w-full relative min-h-screen bg-[#6ABAC4]">

            <div className="bg-sky-300 text-white p-2 max-w-screen-lg mx-auto rounded-xl shadow-xl m-5">
                <div className="bg-red-600 text-green-300 font-bold p-2 text-center text-xl">
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

                <div className="flex justify-center items-center mt-4 text-green-300 font-semibold text-xs bg-red-600">
                    <span className="mx-1">CARRO PRIVATIVO ATÉ 4 PESSOAS</span>
                    <span className="mx-1">-</span>
                    <span className="mx-1">GUIA EXCLUSIVO</span>
                    <span className="mx-1">-</span>
                    <span className="mx-1">FOTOS</span>
                </div>
            </div>
            <div className="bg-sky-300  text-white p-2 max-w-screen-lg mx-auto rounded-xl shadow-xl m-5">
                <div className="bg-red-600 text-green-300 font-bold p-2 text-center text-xl">
                    R$: 1199,00
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
                            
                            className="rounded-lg object-cover w-[400px] h-[200px]"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                            MILAGRES
                        </div>
                    </div>

                </div>

                <div className="flex justify-center items-center mt-4 text-green-300 font-semibold text-xs bg-red-600">
                    <span className="mx-1">CARRO PRIVATIVO ATÉ 4 PESSOAS</span>
                    <span className="mx-1">-</span>
                    <span className="mx-1">GUIA EXCLUSIVO</span>
                    <span className="mx-1">-</span>
                    <span className="mx-1">FOTOS</span>
                </div>
            </div>
        </motion.div>
    )

}



