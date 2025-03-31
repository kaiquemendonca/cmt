import { motion } from "motion/react";


export const Principal = () => {
    return (
        <div id="home" className="w-full h-screen flex items-center justify-center">

            <div className="relative z-20 w-full h-[70%] flex flex-col items-center justify-end">
                <h1 className="text-5xl text-white text-center font-bold mb-5 ">Viva a melhor experiência em Alagoas</h1>
                <p className="mb-5"> - Atendimento <span className="text-[#de990e]"> EXCLUSIVO </span>
                    - Roteiro<span className="text-[#de990e]"> VOÇE QUE MANDA </span> <br />
                    - Experiêcia<span className="text-[#de990e]"> DIFERENCIADA </span>
                    - Fotos e videos<span className="text-[#de990e]"> CORTESIA </span>
                </p>
                <motion.button
                    
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="cursor-pointer font-thin transition easi-in-out hover:bg-white hover:text-[#0905bc] text-3xl p-3 px-10 rounded-lg border border-white text-white">
                    Reservar Passeio
                </motion.button>
            </div>


            <img className=" absolute left-0 top-0 h-full w-full object-cover object-top brightness-30" src="/assets/iago.jpg"></img>
        </div>
    )
}