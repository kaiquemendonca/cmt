'use client'

import { AnimatePresence } from "motion/react"
import React from "react"
import { motion } from "motion/react";


export const Combo = () => {



    return (
        <div id="combotrips" className="w-full relative min-h-screen bg-[#0905bc]">

            <div className="relative  w-full h-screen flex flex-col justify-end items-end">
                <div className="flex flex-col justify-center items-center md:flex-row w-full h-[90%]">
                    <img className="w-[90%] p-2" src="/assets/1.jpg"></img>
                    <img className="w-[90%] p-2" src="/assets/2.jpg"></img>
                </div>

            </div>
        </div>
    )

}



