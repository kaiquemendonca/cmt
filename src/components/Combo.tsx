'use client'

import { AnimatePresence } from "motion/react"
import React from "react"
import { motion } from "motion/react";


export const Combo = () => {



    return (
        <motion.div
        initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
         id="combotrips" className="flex items-center justify-center w-full relative min-h-screen">

            <div className="relative w-full h-screen flex flex-col justify-end md:justify-start items-center">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-[90%] md:w-[50%] p-2" src="/assets/1.jpg"></img>
                    <img className="w-[90%] md:w-[50%] p-2" src="/assets/2.jpg"></img>
                </div>

            </div>
        </motion.div>
    )

}



