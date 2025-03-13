'use client'

import BackgroundImage from "@/components/BackgroundImage";
import Controls from "@/components/Controls";
import Header from "@/components/Header";

import SlideInfo from "@/components/SlideInfo";
import Slides from "@/components/Slides";
import { AnimatePresence } from "motion/react";
import { Righteous } from "next/font/google";
import React, { useState } from "react";

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

  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = React.useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });

  return (
    <main
      className={`${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased `}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <Header />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>

          </div>
        </div>
      </AnimatePresence>
      <footer>
          <div className="absolute z-50 bottom-8 right-8">
              <a className="size-8" href="https://api.whatsapp.com/send?l=pt&phone=5582991432144"> <img src="/assets/icons-whatsapp1.svg"/></a>
          </div>
          <div className="absolute bottom-3 right-1/2 z-50 ">
            <p className="text-xs font-medium">Powered Kaíque Mendonça © 2025</p>
          </div>
      </footer>
    </main>


  );
}

const sliderData = [
  {
    img: "/assets/PraiaGunga.png",
    location: "Roteiro",
    description: "A Praia do Gunga possui uma excelente estrutura com restaurantes e barracas para refeições, além de uma paisagem inesquecível onde é possível ver a beleza e o imenso coqueiral no Mirante do Gunga com vista para a praia.",
    title: "Praia do Gunga"
  },
  {
    img: "/assets/praia-de-maragogi.png",
    location: "Maragogi",
    description: "Maragogi está situada bem no coração da Costa dos Corais , a maior barreira de corais do Brasil, que também é uma belíssima área de preservação ambiental. A cidade de Maragogi é famosa por suas praias de mar realmente cristalino, águas quentes e piscinas naturais paradisíacas , por isso o apelido de caribe brasileiro.",
    title: "Praia de Maragogi"
  },
  {
    img: "/assets/milagres.jpg",
    location: "São Miguel dos Milagres",
    description: "A Praia de São Miguel dos Milagres é uma praia em Alagoas, Brasil, com águas calmas e mornas, e piscinas naturais. É considerada uma das melhores praias do Brasil.",
    title: "Milagres"
  },
  {
    img: "/assets/praia_do_frances.jpg",
    location: "Francês",
    description: "Localizada no município de Marechal Deodoro, a apenas 33 km de Maceió, a Praia do Francês é um verdadeiro cartão-postal do litoral sul de Alagoas. Com um mar que alterna entre águas tranquilas e ondas ideais para o surf, essa praia encanta turistas de todo o Brasil. A paisagem é um espetáculo à parte: barreiras de corais, piscinas naturais, coqueirais exuberantes e um pôr do sol inesquecível fazem da Praia do Francês um destino imperdível para quem visita a região.",
    title: "Praia do Francês"
  },
]

const initData = sliderData[0];
