import { motion } from "motion/react";


export const Principal = () => {
    return (
        <div id="home" className="w-full h-screen flex items-center justify-center">

            <div className="relative z-20 w-full h-[70%] flex flex-col items-center justify-end">
                <h1 className="text-5xl text-white text-center font-bold mb-5 ">Viva a melhor experiência em Alagoas</h1>
                <p className="mb-5 text-center"> - Atendimento <span className="text-[#0905bc]"> EXCLUSIVO </span> <br />
                    - Roteiro<span className="text-[#0905bc]"> VOCÊ QUE MANDA </span> <br />
                    - Experiência<span className="text-[#0905bc]"> DIFERENCIADA </span> <br />
                    - Fotos e vídeos<span className="text-[#0905bc]"> CORTESIA </span>
                </p>
                <motion.button
                    
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="cursor-pointer font-thin transition easi-in-out hover:bg-white hover:text-[#0905bc] bg-[#0905bc] text-3xl p-3 px-10 rounded-lg border border-white text-white">
                    <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Fale conosco</a>
                    
                </motion.button>
            </div>


            <video className=" absolute left-0 top-0 h-full w-full object-cover object-center" src="/assets/vd-principal.mp4" autoPlay muted loop ></video>
        </div>
    )
}