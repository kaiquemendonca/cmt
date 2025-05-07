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
            id="home" className="relative w-full flex flex-col items-star  justify-between snap-start bg-[white]">
            <div className="relative w-full h-[70vh] md:min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/assets/banner.jpg')` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 px-4 py-8 text-white flex flex-col items-center">
                    {/* Título */}
                    <div className="text-center mb-3 md:mb-6">
                        <h1 className="text-3xl md:text-7xl font-black text-blue-400 drop-shadow-md">COMBO</h1>
                        <h2 className="text-2xl md:text-5xl font-bold italic text-white drop-shadow-md">Praias</h2>
                        <p className="mt-1 md:mt-2 text-xl md:text-2xl font-semibold text-blue-300 drop-shadow-md">
                            CONHEÇA 5 PRAIAS EM 3 DIAS
                        </p>
                    </div>

                    {/* Cards de destinos */}
                    <div className="flex flex-wrap justify-center">
                        {/* Maragogi */}
                        <motion.div
                            initial={{ x: -350, opacity: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: 35, opacity: 1, x: 0, rotate: -15 }}
                            transition={{
                                duration: 1.0,
                                delay: 0.5,
                                ease: 'easeOut',
                            }}
                            className="flex flex-col relative w-31 h-38 md:w-80 md:h-97 bg-white border-white border-4 md:border-10  shadow-lg overflow-hidden ">
                            <img
                                src="/assets/maragogi/IMG-20250401-WA0021.jpg"
                                alt="Maragogi"
                                className="w-full h-30 md:h-80 object-cover"
                            />
                            <div className=" px-2 py-1 flex items-center justify-center ">
                                <span className="text-blue-600 text-xs md:text-2xl text-center font-bold">MARAGOGI</span>
                            </div>
                        </motion.div>

                        {/* Francês, Barra, Gunga */}
                        <motion.div
                            initial={{ y: -250, opacity: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: 0, opacity: 1, }}
                            transition={{
                                duration: 1.0,
                                delay: 1.5,
                                ease: 'easeOut',
                            }}
                            className="z-10  flex flex-col relative w-31 h-44 md:w-80 md:h-97 bg-white border-white border-4 md:border-10 shadow-lg overflow-hidden">
                            <img
                                src="/assets/gunga/IMG-20250401-WA0032.jpg"
                                alt="Francês, Barra de São Miguel, Gunga"
                                className="w-full h-30 md:h-80 object-cover"
                            />
                            <div className="px-2 py-1 flex items-center justify-center">
                                <span className="text-blue-600  text-xs text-center font-bold leading-tight">
                                    FRANCÊS<br />BARRA DE SÃO MIGUEL<br />GUNGA
                                </span>
                            </div>
                        </motion.div>

                        {/* Milagres */}
                        <motion.div
                            initial={{ x: 350, opacity: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: 35, opacity: 1, x: 0, rotate: 15 }}
                            transition={{
                                duration: 1.0,
                                delay: 2.5,
                                ease: 'easeOut',
                            }}

                            className="flex flex-col relative w-31 h-38 md:w-80 md:h-97 bg-white border-white border-4 md:border-10 shadow-lg overflow-hidden">
                            <img
                                src="/assets/milagres/IMG-20250401-WA0043.jpg"
                                alt="Milagres"
                                className="w-full h-30 md:h-80 object-cover"
                            />
                            <div className="px-2 py-1 flex items-center justify-center">
                                <span className="text-blue-600 text-xs md:text-2xl text-center font-bold">MILAGRES</span>
                            </div>
                        </motion.div>


                    </div>

                    {/* Rodapé informativo */}
                    <div className="mt-10 md:mt-8 text-center text-white space-y-2">
                        <div className="flex">
                            <img src='/assets/icones/carro2.svg' className='mx-4' />
                            <p className="text-sm md:text-xl font-bold">PASSEIO PRIVATIVO ATÉ 6 PESSOAS</p>
                            <img src='/assets/icones/carro2.svg' className='-scale-x-100 mx-4' />
                        </div>

                        <p className="text-yellow-400 text-sm font-extrabold">FOTOS E VÍDEOS CORTESIA</p>
                        <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm md:text-xl font-bold">
                            COBRIMOS QUALQUER OFERTA
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        className="mt-10 cursor-pointer border border-white border-2 shadow-[2px_2px_30px_2px_#fff] font-thin transition easi-in-out bg-blue-400 text-4xl p-2 px-12 rounded-4xl text-white flex items-center justify-center">

                        <a className="tracking-widest" href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Saiba mais</a>
                        <img className="ml-2" src="/assets/wapp.svg" />
                    </motion.button>
                </div>
            </div>
            <div className="px-5 my-7 ">
                <h1 className="text-2xl text-blue-800 mb-7">POR QUE ESCOLHER A <br className="md:hidden" /> <span className="font-bold font-[Pacifico] text-[#fea13a] text-3xl">César Maceió Turismo?</span></h1>
                <p className="text-black font-normal text-justify">Vamos te levar nos melhores pontos <br className="md:hidden" />turísticos, fazendo o máximo para tornar <br className="md:hidden" />suas férias inesquecíveis com todo auxílio <br className="md:hidden" />dos nossos guias.

                    <br /><br />Temos veículos novos com total qualidade, conforto e guias credenciados.

                    <br /><br />Clique no botão abaixo e venha fazer seu orçamento personalizado.</p>
            </div>
            <div className="w-full pl-5 md:flex">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="mt-5 cursor-pointer border border-white border-2 shadow-[2px_2px_30px_2px_#fff] font-thin transition easi-in-out bg-blue-400 text-2xl p-2 px-6 rounded-4xl text-white flex items-center justify-center">
                    <img className="mr-1" src="/assets/wapp.svg" />
                    <a className="tracking-widest" href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">Fale Conosco</a>

                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="mt-5 md:mx-5 cursor-pointer border border-white border-2 shadow-[2px_2px_30px_2px_#fff] font-thin transition easi-in-out bg-blue-400 text-2xl p-2 px-6 rounded-4xl text-white flex items-center justify-center">
                    <img className="mr-1" src="/assets/insta2.svg" />
                    <a className="tracking-widest" href="https://www.instagram.com/cesarmaceiotur/" target="_blank" >INSTAGRAM</a>

                </motion.button>
            </div>

        </motion.div>

    )
}