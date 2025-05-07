import { motion } from "motion/react";

export const Contacts = () => {



    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            id="contacts" className="w-full flex items-center justify-center bg-blue-800  snap-start  ">
            <div className="flex flex-col h-full items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="w-64">
                        <img src="/assets/logo-cmt.png" className="object-cover w-full" />
                    </div>
                    <div className="flex ">
                        <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank" className="mx-3">+55 (82) 99143-2144</a><img src="/assets/icones/whatss.svg" />
                    </div>
                    <div className="flex ">
                        <a href="https://www.instagram.com/cesarmaceiotur/" target="_blank" className="mx-3">@cesarmaceiotur</a><img src="/assets/insta.svg" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex flex-col items-center justify-center">
                        <span className="w-[80%] md:w-7xl h-[1px] bg-black mx-auto"></span>
                    </div>
                    <div className="font-thin text-sm flex flex-col items-center justify-center my-2">
                        <a>©2025 Todos os direitos reservados</a>
                        <a className="">Desenvolvido por Kaíque Mendonça</a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}