import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

type Props = {
    dataC: any,
    btnClose: ()=>void;
}

export default function Carousel({ dataC, btnClose }: Props) {

    const autoSlide = false;
    const autoSlideInterval = 3000;
    const [curr, setCurr] = useState(0)
    

    const prev = () =>
        setCurr((curr) => (curr === 0 ? dataC?.img2.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === dataC?.img2.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

   const slide = ["https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png]"
    ];

    return (

        <div className="z-99 fixed mx-auto top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/90">

            <div className="overflow-hidden relative">
                <div
                    className="flex flex-col transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                    <div className="max-w-xl flex">
                        {dataC?.img2.map((s: any) => (
                            <img src={s} />
                        ),
                        
                        )}
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                        onClick={prev}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        onClick={next}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>

                <div className="z-99 absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {dataC?.img2.map((_:any, i:any) => (
                            <div
                                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
                            />
                        ))}
                    </div>
                </div>
            </div>



            <div  onClick={btnClose} className="z-99 fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl">
                x
            </div>
        </div>
    )
}