import React from "react";
import { motion } from "motion/react";
import { IoMdBookmark } from "react-icons/io";
import OtherInfo from "./OtherInfo";
import { CurrentSlideData, Data } from "@/app/page";
import { animate } from "motion";

type Props = {
    transitionData: Data;
    currentSlideData: CurrentSlideData;
    onClick: () => void;
};

function SlideInfo({ transitionData, currentSlideData, onClick }: Props) {
    return (
        <>
            <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
            <OtherInfo
                data={transitionData ? transitionData : currentSlideData.data}
            />
            <motion.div layout className="mt-5 flex items-center gap-3">
                <button 
                    className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#4ccbd1] text-xs transition duration-300 ease-in-out hover-opacity-80 "
                >
                    <IoMdBookmark className="text-xl" />
                </button>
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                
                className="cursor-pointer animate-jump animate-infinite animate-duration-[2000ms] animate-ease-linear w-fit rounded-full border-[1px] border-[#fffff8f] px-6 py-3 text-[10px] font-thin transition easi-in-out hover:bg-white hover:text-black">
                   <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank">RESERVAR PASSEIO</a> 
                </motion.button>
                <motion.button  onClick={onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                
                className="cursor-pointer animate-jump animate-infinite animate-duration-[2000ms] animate-ease-linear w-fit rounded-full border-[1px] border-[#fffff8f] px-6 py-3 text-[10px] font-thin transition easi-in-out hover:bg-white hover:text-black">
                   <a>VER MAIS</a> 
                </motion.button>
            </motion.div>
        </>
    );

}

export default SlideInfo;