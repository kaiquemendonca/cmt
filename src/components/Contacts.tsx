import { motion } from "motion/react";

export const Contacts = () => {



    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            id="contacts" className="relative h-screen w-full flex items-center justify-center">
            <video className="absolute h-full w-full object-cover object-top md:w-full" src="/assets/VID-20250401-WA0004.mp4" autoPlay loop muted playsInline ></video>
            <div className="relative flex flex-col md:flex-row h-full items-center justify-center w-full">
                <div className="flex flex-col h-52 min-w-[252px] rounded-2xl shadow-md md:h-80 md-min-w-[250px] bg-white my-10 md:mx-10">
                    <a className="flex flex-col w-full h-full" href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">
                        <div className="flex flex-1 justify-center items-end">
                            <img className="w-30" src="/assets/icons8-whatsapp.svg" />
                        </div>
                        <div className=" text-black text-center flex flex-1 justify-center items-center">
                            WHATSAPP 24 HORAS <br /> (82) 99143-2144

                        </div>
                    </a>

                </div>
                <div className="flex flex-col h-52 min-w-[252px] rounded-2xl shadow-md md:h-80 md-min-w-[250px] bg-white">
                    <a className="flex flex-col w-full h-full" href="https://www.instagram.com/cesarmaceiotur/" target="_blank">
                        <div className="flex flex-1 justify-center items-end">
                            <img className="w-30" src="/assets/icons8-instagram.svg" />
                        </div>
                        <div className="flex flex-1 justify-center items-center">
                            <p className="text-black text-center">INSTAGRAM <br /> @cesarmaceiotur</p>

                        </div>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}