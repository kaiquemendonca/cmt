import React from "react";
import { motion } from "motion/react";
import { Data, CurrentSlideData } from "@/app/page";

type Props = {
    transitionData: Data;
    currentSlideData: CurrentSlideData;
};

function BackgroundImage ({ transitionData, currentSlideData }: Props){
    return (
        <>
            {transitionData && (
                <motion.img
                    key={transitionData.img}
                    layoutId={transitionData.img}
                    alt="Transition Image"
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.6 },
                    }}
                    className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
                    src={transitionData.img}
                    />
                    
                )}
                <motion.img
                alt="Current Image"
                key={currentSlideData.data.img + "transition"}
                src={currentSlideData.data.img}
                className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"/>
        
        </>
    );
};

export default BackgroundImage;