import React from "react";
import { motion } from "motion/react";
import { Data, CurrentSlideData } from "@/app/page";

type Props = {
    transitionDataB: Data;
    currentSlideDataB: CurrentSlideData;
};

function BackgroundImage({ transitionDataB, currentSlideDataB }: Props) {
    return (
        <>
            {transitionDataB && (
                <motion.div
                    className=" relative h-24 min-w-[140px] rounded-2xl shadow-md md:h-80 md:min-w-[250px]"
                    layout
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                        },
                    }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                    }}
                >
                    <motion.img
                        key={transitionDataB.img}
                        layoutId={transitionDataB.img}
                        alt="Transition Image"
                        transition={{
                            opacity: { ease: "linear" },
                            layout: { duration: 0.6 },
                        }}
                        className="absolute h-full w-full rounded-2xl object-cover brightness-75"
                        src={transitionDataB.img}
                    />
                </motion.div>



            )}
            <motion.img
                alt="Current Image"
                key={currentSlideDataB.data.img + "transition"}
                src={currentSlideDataB.data.img}
                className=" absolute left-0 top-0 h-full w-full object-cover brightness-50" />

        </>
    );
};

export default BackgroundImage;