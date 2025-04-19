import { motion } from "motion/react";
import { Pacifico } from "next/font/google";

const fontPrincipal = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
});


export const Principal = () => {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            id="home" className="relative w-full h-screen flex items-end justify-between md:items-center md:w-7xl md:mx-auto ">

            <div className="relative z-20 w-full h-full flex flex-col items-center justify-start md:w-3xl md:h-[700px]">
                <div className="flex-2 flex flex-col justify-end items-center">
                    <h1 className={`${fontPrincipal.className} text-4xl md:text-7xl mb-4 text-center leading-14 md:leading-20 md:mb-8 backdrop-blur-sm`}>Viva a melhor <br /> experiência<br /> em Alagoas</h1>
                    <h3 className="text-lg backdrop-blur-sm mt-15">Passeios turísticos inesquecíveis para você</h3>
                </div>
                <div className="flex flex-1 justify-around items-center text-base md:text-lg">
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
                <div className="z-20 flex-1 flex items-start md:hidden justify-center w-[90%]">
                    <motion.button

                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        className="cursor-pointer font-thin transition easi-in-out bg-[#53dee1] text-3xl p-3  rounded-4xl text-white w-full flex justify-center items-center border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1]">
                        <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Fale conosco</a>
                        <img src="/assets/icones/whatss.svg" className="ml-3" />

                    </motion.button>
                </div>
            </div>


            <div className="hidden md:inline-block relative max-w-4xl h-[700px] rounded-xl border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#53dee1]">
                <video className="h-full object-cover object-center rounded-xl" src="/assets/vd-principal.mp4" playsInline autoPlay muted loop ></video>
            </div>
            <video className=" absolute h-full w-full  object-cover object-center brightness-70 md:hidden" src="/assets/vd-principal.mp4" playsInline autoPlay muted loop ></video>
        </motion.div>

    )
}