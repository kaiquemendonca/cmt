import React from "react";
import { motion } from "motion/react";
import { Data, CurrentSlideData } from "@/app/page";

type Props = {
    transitionDataB: Data;
    currentSlideDataB: CurrentSlideData;
};

function BackgroundImage ({ transitionDataB, currentSlideDataB }: Props){
    return (
        <>
            {transitionDataB && (
                <motion.img
                    key={transitionDataB.img}
                    layoutId={transitionDataB.img}
                    alt="Transition Image"
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.6 },
                    }}
                    className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
                    src={transitionDataB.img}
                    />
                    
                )}
                <motion.img
                alt="Current Image"
                key={currentSlideDataB.data.img + "transition"}
                src={currentSlideDataB.data.img}
                className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"/>
        
        </>
    );
};

export default BackgroundImage;