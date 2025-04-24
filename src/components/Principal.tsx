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
            id="home" className="relative w-full flex flex-col items-star  py-18 justify-between md:items-start md:w-7xl md:mx-auto snap-start bg-white">
            <div className="md:hidden">
                <img src="/assets/COMBODE3DIAS.png" />
            </div>
            <div className="hidden md:inline-block">
                <img src="/assets/COMBODE3DIASMD.png" />
            </div>
            <div className="px-5 my-7 ">
                <h1 className="text-2xl text-blue-800 mb-7">POR QUE ESCOLHER A <br className="md:hidden"/> <span className="font-bold font-[Pacifico] text-[#fea13a] text-3xl">César Maceió Turismo?</span></h1>
                <p className="text-black font-normal text-justify">Vamos te levar nos melhores pontos <br className="md:hidden"/>turísticos, fazendo o máximo para tornar <br className="md:hidden"/>suas férias inesquecíveis com todo auxílio <br className="md:hidden"/>dos nossos guias.

                    <br /><br />Temos veículos novos com total qualidade, conforto e guias credenciados.

                    <br /><br />Clique no botão abaixo e venha fazer seu orçamento personalizado.</p>
            </div>
            <div className="w-full pl-5 md:flex">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="mt-5 cursor-pointer border border-white border-2 shadow-[2px_2px_30px_2px_#53dee1] font-thin transition easi-in-out bg-[#53dee1] text-2xl p-2 px-6 rounded-4xl text-white flex items-center justify-center">
                    <img className="mr-1" src="/assets/wapp.svg"/>
                    <a className="tracking-widest" href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Fale Conosco</a>

                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="mt-5 md:mx-5 cursor-pointer border border-white border-2 shadow-[2px_2px_30px_2px_#53dee1] font-thin transition easi-in-out bg-[#53dee1] text-2xl p-2 px-6 rounded-4xl text-white flex items-center justify-center">
                    <img className="mr-1" src="/assets/insta2.svg"/>
                    <a className="tracking-widest" href="https://www.instagram.com/cesarmaceiotur/" target="_blank" >INSTAGRAM</a>

                </motion.button>
            </div>

        </motion.div>

    )
}