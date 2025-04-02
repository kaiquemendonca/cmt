import React from "react";
import { motion } from "motion/react";

type Props = {
    data: any;
}

function SliderCard({ data }: Props) {
    return (
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
                layoutId={data.img}
                alt="Transition Image"
                src={data.img}
                className="absolute h-full w-full rounded-2xl object-cover brightness-75"
            />
            <motion.div className=" absolute z-10 flex h-full items-end p-4">
                <motion.div>
                    <motion.div
                        layout
                        className=" mb-2 h-[2px] w-3 rounded-full bg-white"
                    ></motion.div>

                    <motion.h1
                    layoutId={data.title}
                    className="text-xs leading-6 text-white"
                    >
                        {data.title}
                    </motion.h1>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SliderCard;