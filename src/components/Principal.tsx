import { motion } from "motion/react";
import { Pacifico } from "next/font/google";

const fontPrincipal = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});


export const Principal = () => {
    return (
        
            <div id="home" className="relative w-full h-screen flex items-end justify-center">

                <div className="relative z-20 w-full h-full flex flex-col items-center justify-start">
                    <div className="flex-2 flex flex-col justify-end items-center">
                        <h1 className={`${fontPrincipal.className} text-4xl md:text-5xl mb-4 text-center leading-14 backdrop-blur-sm`}>Viva a melhor <br /> experiência<br /> em Alagoas</h1>
                        <h3 className="text-lg backdrop-blur-sm">Passeios turísticos inesquecíveis para você</h3>
                    </div>
                    <div className="mb-5 flex flex-1 justify-around items-end">
                        <div className="p-3 rounded-xl backdrop-blur-sm text-center">
                            <p className="blur-none text-white">Atendimento Exclusivo</p>
                        </div>
                        <div className="p-3 rounded-xl backdrop-blur-sm text-center">
                            <p className="blur-none text-white">Roteiro Você Quem Manda</p>
                        </div>
                        <div className="p-3 rounded-xl backdrop-blur-sm text-center">
                            <p className="blur-none text-white">Fotos E Vídeos de Cortesia</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <motion.button

                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="cursor-pointer font-thin transition easi-in-out hover:bg-white hover:text-[#0905bc] bg-[#0905bc] text-3xl p-3 px-10 rounded-lg text-white mb-5">
                            <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Fale conosco</a>

                        </motion.button>
                    </div>

                </div>


                <video className=" absolute h-full w-full md:max-w-6xl object-cover object-center brightness-70" src="/assets/vd-principal.mp4" autoPlay muted loop ></video>
            </div>
        
    )
}