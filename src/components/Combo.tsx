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
         id="combotrips" className="flex items-center justify-center md:justify-start w-full relative min-h-screen">

            <div className="relative w-full h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-[90%] " src="/assets/2.jpg"></img>
                </div>

            </div>
        </motion.div>
    )

}



