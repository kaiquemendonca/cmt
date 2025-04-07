'use client'

import BackgroundImage from "@/components/BackgroundImage";
import Controls from "@/components/Controls";
import Header from "@/components/Header";
import SlideInfo from "@/components/SlideInfo";
import Slides from "@/components/Slides";
import { AnimatePresence } from "motion/react";
import { Righteous } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import { Contacts } from "@/components/Contacts";
import { Principal } from "@/components/Principal";
import { Combo } from "@/components/Combo";
import Carousel from "@/components/Carousel";
import Tours from "@/components/Tours";
import { motion } from "motion/react";


const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
}

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {

  const pixelId = '1043158914334354';
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      });
  });

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);

  const [showModal, setShowModal] = useState(false);

  const btnClose = () => {
    setShowModal(false);
  }

  const openModal = () => {
    setShowModal(true)
  }

  const [active, setActive] = useState(0);
  const menuClickTours = (index: number) => {
    setActive(index);
  }

  const [ative, setAtive] = React.useState(0);

  React.useEffect(() => {
    console.log(ative);
  })
  return (

    <div className="w-full bg-[#6ABAC4] h-screen">


      < div className={`${inter.className}
    text-white antialiased  w-full md:mx-auto md:h-screen md:max-w-screen-2xl md:px-6  flex`}>

        <Header ative={ative} setAtive={setAtive} />
        <div className="md:w-[60%] w-full md:relative">
          {ative === 0 && <Principal />}
          {ative === 1 && <main id="trips" className="relative flex flex-col items-center justify-center w-full h-screen" >
            <div className="z-99 absolute top-30 md:top-2 rounded-2xl w-auto h-auto bg-white">
              <div className="grid grid-cols-3 md:grid-cols-6 flex justify-between items-center h-full">
                {sliderData.map((menu, index) => {
                  return (
                    <motion.li
                      layout
                      key={index}

                      className={`${active == index && " bg-blue-900 text-white"
                        } rounded-2xl h-full flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out
                    hover:bg-blue-900 hover:text-white text-blue-800 text-center
                    `}
                      onClick={() => menuClickTours(index)}
                    >
                      <a className={`${active == index && " text-white"}  hover:text-white`}>
                        {menu.title}
                      </a>

                    </motion.li>
                  );
                })}
              </div>
            </div>

            <Tours active={active} data={sliderData} />
            <div className="flex justify-center">
              <h1 className="text-5xl text-center">{sliderData[active].title}</h1>
            </div>

          </main>}

          {ative === 2 && <Combo />}

          {ative === 3 && <Contacts />}



          <footer className="md:hidden fixed z-99 bottom-8 w-full right-8 flex justify-end">
            <div >
              <a className="size-8" href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" target="_blank"> <img src="/assets/icons-whatsapp1.svg" /></a>
            </div>

          </footer>
        </div>

      </div>
    </div>
  );
}

const sliderData = [
  {
    id: 0,
    img: ["/assets/gunga/IMG-20250401-WA0032.jpg", "/assets/gunga/IMG-20250401-WA0045.jpg", "/assets/gunga/IMG-20250401-WA0048.jpg", "/assets/gunga/IMG-20250401-WA0049.jpg", "/assets/gunga/IMG-20250401-WA0050.jpg", "/assets/gunga/IMG-20250401-WA0058.jpg", "/assets/gunga/IMG-20250401-WA0059.jpg", "/assets/gunga/IMG-20250401-WA0060.jpg", "/assets/gunga/IMG-20250401-WA0061.jpg", "/assets/gunga/IMG-20250401-WA0062.jpg"],
    location: "Roteiro",
    description: "A Praia do Gunga possui uma excelente estrutura com restaurantes e barracas para refeições, além de uma paisagem inesquecível onde é possível ver a beleza e o imenso coqueiral no Mirante do Gunga com vista para a praia.",
    title: "Gunga"
  },
  {
    id: 1,
    img: ["/assets/IMG-20250401-WA0002.jpg", "/assets/IMG-20250401-WA0013.jpg", "/assets/IMG-20250401-WA0015.jpg", "/assets/IMG-20250401-WA0020.jpg", "/assets/IMG-20250401-WA0021.jpg", "/assets/IMG-20250401-WA0023.jpg", "/assets/IMG-20250401-WA0037.jpg", "/assets/IMG-20250401-WA0039.jpg", "/assets/IMG-20250401-WA0040.jpg", "/assets/IMG-20250401-WA0044.jpg"],
    location: "Maragogi",
    description: "Maragogi está situada bem no coração da Costa dos Corais , a maior barreira de corais do Brasil, que também é uma belíssima área de preservação ambiental. A cidade de Maragogi é famosa por suas praias de mar realmente cristalino, águas quentes e piscinas naturais paradisíacas , por isso o apelido de caribe brasileiro.",
    title: "Maragogi"
  },
  {
    id: 2,
    img: ["/assets/milagres/IMG-20250401-WA0014.jpg", "/assets/milagres/IMG-20250401-WA0044.jpg", "/assets/milagres/IMG-20250401-WA0046.jpg", "/assets/milagres/IMG-20250401-WA0047.jpg", "/assets/milagres/IMG-20250401-WA0051.jpg", "/assets/milagres/IMG-20250401-WA0019.jpg"],
    location: "São Miguel dos Milagres",
    description: "A Praia de São Miguel dos Milagres é uma praia em Alagoas, Brasil, com águas calmas e mornas, e piscinas naturais. É considerada uma das melhores praias do Brasil.",
    title: "Milagres"
  },
  {
    id: 3,
    img: ["/assets/frances/IMG-20250401-WA0067.jpg", "/assets/frances/IMG-20250401-WA0068.jpg", "/assets/frances/IMG-20250401-WA0069.jpg", "/assets/frances/IMG-20250401-WA0066.jpg"],
    location: "Francês",
    description: "A Praia do Francês é um verdadeiro cartão-postal do litoral sul de Alagoas. Com um mar que alterna entre águas tranquilas e ondas ideais para o surf, essa praia encanta turistas de todo o Brasil. A paisagem é um espetáculo à parte: barreiras de corais, piscinas naturais, coqueirais exuberantes e um pôr do sol inesquecível fazem da Praia do Francês um destino imperdível para quem visita a região.",
    title: "Francês"
  },
  {
    id: 4,
    img: ["/assets/barra/IMG-20250401-WA0073.jpg", "/assets/barra/IMG-20250401-WA0074.jpg", "/assets/barra/IMG-20250401-WA0075.jpg", "/assets/barra/IMG-20250401-WA0076.jpg", "/assets/barra/IMG-20250401-WA0078.jpg", "/assets/barra/IMG-20250401-WA0079.jpg", "/assets/barra/IMG-20250401-WA0080.jpg", "/assets/barra/IMG-20250401-WA0081.jpg"],
    location: "Barra de São Miguel",
    description: "",
    title: "Barra de São Miguel"
  },
  {
    id: 5,
    img: ["/assets/ipioca/2.jpg", "/assets/ipioca/IMG-20250401-WA0004.jpg", "/assets/ipioca/IMG-20250401-WA0082.jpg", "/assets/ipioca/IMG-20250401-WA0083.jpg", "/assets/ipioca/IMG-20250401-WA0084.jpg", "/assets/ipioca/IMG-20250401-WA0085.jpg"],
    location: "Ipioca",
    description: "",
    title: "Ipioca"
  },
]

