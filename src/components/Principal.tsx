import { motion } from "framer-motion";
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
            id="home"
            className="relative w-full flex flex-col items-start justify-between snap-start bg-[#0077b6] h-auto"
        >
            {/* Imagem de fundo com gradiente inferior */}
            <div
                className="relative w-full h-[80vh] md:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/banner.jpg')` }}
            >
                {/* Escurecimento da imagem */}
                <>
                    <div className="absolute inset-0 bg-black/40"></div>
                    {/* Gradiente de transição para o azul */}
                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0077b6] z-10" />
                </>

                {/* Conteúdo sobreposto */}
                <div className="relative z-20 px-4 py-1 text-white flex flex-col items-center">
                    {/* Título */}
                    <div className="text-center mb-3 md:mb-6">
                        <h1 className="text-3xl md:text-7xl font-black text-blue-400 drop-shadow-md">COMBO</h1>
                        <h2 className="text-2xl md:text-5xl font-bold italic text-white drop-shadow-md">Praias</h2>
                        <p className="mt-1 md:mt-2 text-xl md:text-2xl font-semibold text-blue-300 drop-shadow-md">
                            CONHEÇA 5 PRAIAS EM 3 DIAS
                        </p>
                    </div>

                    {/* Cards de destinos */}
                    <div className="flex justify-center">
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
                            className="flex flex-col relative w-30 h-38 md:w-80 md:h-97 bg-white border-white border-4 md:border-10 shadow-lg overflow-hidden"
                        >
                            <img
                                src="/assets/maragogi/IMG-20250401-WA0021.jpg"
                                alt="Maragogi"
                                className="w-full h-30 md:h-80 object-cover"
                            />
                            <div className="px-2 py-1 flex items-center justify-center">
                                <span className="text-blue-600 text-xs md:text-2xl text-center font-bold">MARAGOGI</span>
                            </div>
                        </motion.div>

                        {/* Francês, Barra, Gunga */}
                        <motion.div
                            initial={{ y: -250, opacity: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1.0,
                                delay: 1.5,
                                ease: 'easeOut',
                            }}
                            className="z-10 flex flex-col relative w-30 h-44 md:w-80 md:h-97 bg-white border-white border-4 md:border-10 shadow-lg overflow-hidden"
                        >
                            <img
                                src="/assets/gunga/IMG-20250401-WA0032.jpg"
                                alt="Francês, Barra de São Miguel, Gunga"
                                className="w-full h-30 md:h-80 object-cover"
                            />
                            <div className="px-2 py-1 flex items-center justify-center">
                                <span className="text-blue-600 text-xs text-center font-bold leading-tight">
                                    FRANCÊS<br />B.S. MIGUEL<br />GUNGA
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
                            className="flex flex-col relative w-30 h-38 md:w-80 md:h-97 bg-white border-white border-4 md:border-10 shadow-lg overflow-hidden"
                        >
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
                        className="mt-5 md:mt-10 cursor-pointer border border-white border-2 font-thin transition easi-in-out bg-blue-400 text-4xl p-2 px-12 rounded-4xl text-white flex items-center justify-center"
                    >
                        <a className="tracking-widest" href="https://api.whatsapp.com/send?l=pt&phone=5582994180997" target="_blank">Saiba mais</a>
                        <img className="ml-2" src="/assets/wapp.svg" />
                    </motion.button>
                </div>
            </div>

            {/* Seção azul abaixo da imagem */}
            <div className="bg-[#0077b6] w-full text-white px-5 py-6 flex flex-col justify-center items-center">
                <h1 className="text-2xl text-white mb-7">
                    POR QUE ESCOLHER A <br className="md:hidden" />
                    <span className={`${fontPrincipal.className} text-[#fea13a] text-3xl`}>César Maceió Turismo?</span>
                </h1>
                <p className="font-normal">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="flex">
                        <div className="size-20">
                            <img src="/assets/icones/credencia.svg" />
                        </div>
                        <div className="flex flex-col px-4">
                            <h3 className="text-gray-800">GUIA CREDENCIADO</h3>
                            <p className="">Serviço conduzido por guia credenciado pelo cadastur.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 1.0, ease: 'easeOut' }}
                        className="flex">
                        <div className="size-20">
                            <img src="/assets/icones/services.svg" />
                        </div>
                        <div className="flex flex-col px-4">
                            <h3 className="text-gray-800">PRIVATIVO</h3>
                            <p className="">Serviço privativo, exclusivo para você e sua família.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
                        className="flex">
                        <div className="size-20">
                            <img src="/assets/icones/car.svg" />
                        </div>
                        <div className="flex flex-col px-4">
                            <h3 className="text-gray-800">CONFORTO E SEGURANÇA</h3>
                            <p className="">Serviço executado em carro seguro e confortável.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 2.0, ease: 'easeOut' }}
                        className="flex">
                        <div className="size-20">
                            <img src="/assets/icones/fotos.svg" />
                        </div>
                        <div className="flex flex-col px-4">
                            <h3 className="text-gray-800">FOTOS E VÍDEOS DE CORTESIA</h3>
                            <p className="">Fotos e vídeos sem precisar pagar nada a mais.</p>
                        </div>
                    </motion.div>
                </p>
            </div>

            {/* Botões de contato */}
            <div className="w-full flex justify-around md:justify-center md:mx-5 bg-[#0077b6] pb-6">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="mt-5 cursor-pointer border border-white border-2 font-thin transition easi-in-out bg-blue-400 text-xl p-2 px-4 rounded-4xl text-white flex items-center justify-center"
                >

                    <a className="tracking-widest" href="https://api.whatsapp.com/send?l=pt&phone=5582994180997" target="_blank">WHATSAPP</a>
                    <img className="ml-1" src="/assets/wapp.svg" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="mt-5 md:mx-5 cursor-pointer border border-white border-2 font-thin transition easi-in-out bg-blue-400 text-xl p-2 px-4 rounded-4xl text-white flex items-center justify-center"
                >

                    <a className="tracking-widest" href="https://www.instagram.com/cesarmaceiotur/" target="_blank">INSTAGRAM</a>
                    <img className="ml-1" src="/assets/insta2.svg" />
                </motion.button>
            </div>
        </motion.div>
    );
};
