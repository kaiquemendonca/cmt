'use client'

import { AnimatePresence } from "motion/react"
import React from "react"
import { motion } from "motion/react";


export const Combo = () => {



    return (
        <div id="combotrips" className="relative min-h-screen ">
            <img className="absolute left-0 top-0 h-full w-full object-cover object-top brightness-50" src="/assets/iago.jpg"></img>
            <AnimatePresence>

                <div className="w-full h-screen flex flex-col items-center justify-center">

                    <div className="w-2/3 flex  flex-col items-center justify-end xl:mt-8 ">
                        <h2 className="relative font-black text-5xl text-[#de990e]">Promoção</h2>
                        <h1 className="relative text-6xl text-[#5be2e6]">Imperdível</h1>
                        <p className="relative font-bold text-2xl text-white mt-2">6 Destinos em 4 dias</p>
                    </div>
                    <div className="flex w-full lg:w-2/3 items-center justify-center mt-2">
                        <div className="w-[95%] lg:w-4/6 bg-white z-10 rounded-3xl flex flex-col items-center justify-start">
                            <div className="relative grid grid-cols-2 gap-2 lg:gap-4 m-2 mb-0 lg:m-4">
                                <div className="flex items-end justify-center">
                                    <img className="object-cover relative rounded-tl-3xl brightness-50" src="/assets/Maragogi.png" />
                                    <h1 className="absolute text-white text-xs lg:text-2xl">Maragogi</h1>
                                </div>
                                <div className="flex items-end justify-center">
                                    <img className="object-cover relative rounded-tr-3xl brightness-50" src="/assets/praia-gunga.png" />
                                    <h1 className="absolute text-white text-xs lg:text-2xl text-center">Francês<br/>Barra de São Miguel<br/>Gunga</h1>
                                </div>
                                <div className="flex items-end justify-center">
                                    <img className="object-cover relative rounded-bl-3xl brightness-50" src="/assets/milagres.jpg" />
                                    <h1 className="absolute text-white text-xs lg:text-2xl">Milagres</h1>
                                </div>
                                <div className="flex items-end justify-center">
                                    <img className="object-cover relative rounded-br-3xl brightness-50" src="/assets/ipioca.jpg" />
                                    <h1 className="absolute text-white text-xs lg:text-2xl">Ipioca</h1>

                                </div>
                                <div className="rounded-full bg-[#0905bc] absolute size-20 left-0 top-0 bottom-0 right-0 m-auto opacity-60">
                                    <img className="w-full" src="/assets/logo-cmt.png" />
                                </div>
                            </div>
                            <h2 className="text-xl lg:text-3xl text-[#0905bc] my-4">Carro Privativo até 4 pessoas.</h2>
                        </div>
                    </div>



                </div>
            </AnimatePresence>
        </div>
    )

}



