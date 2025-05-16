'use client'

import Header from "@/components/Header";
import { AnimatePresence } from "motion/react";
import { Righteous } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import { Contacts } from "@/components/Contacts";
import { Principal } from "@/components/Principal";
import { Combo } from "@/components/Combo";
import Tours from "@/components/Tours";
import { motion } from "motion/react";
import PhotoCarousel from "@/components/PhotoCarousel";
import { Services } from "@/components/Services";


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


  const [ative, setAtive] = React.useState(0);

  return (

    <div className="w-full h-screen ">


      < div className={`${inter.className}
    text-white antialiased  w-full  flex flex-col snap-y snap-mandatory overflow-y-scroll `}>

        <Header ative={ative} setAtive={setAtive} />
        <Principal/>
        <Tours data={sliderData}/>
        <Combo />
        <PhotoCarousel data={sliderData} />
        <Contacts />
        <footer className="md:hidden fixed z-99 bottom-3 right-3 flex justify-end">
          <div >
            <a className="size-8" href="https://api.whatsapp.com/send?l=pt&phone=5582994180997" target="_blank"> <img src="/assets/icons-whatsapp1.svg" /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

const sliderData = [
  {
    id: 0,
    img: ["/assets/gunga/IMG-20250401-WA0001.jpg", "/assets/gunga/IMG-20250401-WA0032.jpg", "/assets/gunga/IMG-20250401-WA0045.jpg", "/assets/gunga/IMG-20250401-WA0048.jpg", "/assets/gunga/IMG-20250401-WA0049.jpg", "/assets/gunga/IMG-20250401-WA0050.jpg", "/assets/gunga/IMG-20250401-WA0058.jpg", "/assets/gunga/IMG-20250401-WA0060.jpg", "/assets/gunga/IMG-20250401-WA0061.jpg", "/assets/gunga/IMG-20250401-WA0062.jpg"],
    distancia: "",
    description: "A Praia do Gunga possui uma excelente estrutura com restaurantes e barracas para refeições, além de uma paisagem inesquecível onde é possível ver a beleza e o imenso coqueiral no Mirante do Gunga com vista para a praia.",
    title: "Gunga",
    valor: "250,00R$",
    fotos: ["/assets/fgunga/1.jpg","/assets/fgunga/2.jpg","/assets/fgunga/3.jpg","/assets/fgunga/4.jpg","/assets/fgunga/5.jpg","/assets/fgunga/6.jpg","/assets/fgunga/7.jpg","/assets/fgunga/8.jpg","/assets/fgunga/9.jpg","/assets/fgunga/10.jpg","/assets/fgunga/11.jpg","/assets/fgunga/12.jpg","/assets/fgunga/13.jpg","/assets/fgunga/14.jpg","/assets/fgunga/15.jpg","/assets/fgunga/16.jpg","/assets/fgunga/17.jpg",],
    passeios: [
      {
        titulo: "Passeio de buggy",
        valor: "R$ 75,00 por pessoa. buggy exclusivo R$ 225,00 por casal.",
        descricao: "Em meio a coqueirais beira-mar, levando-o para apreciar as falésias de areias coloridas, com paradas para apreciar a beleza e tirar fotos.",
        duracao: "2horas",
      },
      {
        titulo: "Passeio de quadriciclo",
        valor: "R$ 200,00 por veículo. (até 2 pessoas)",
        descricao: "Em meio a coqueirais beira-mar, levando-o para apreciar as falésias de areias coloridas, com paradas para apreciar a beleza e tirar fotos.",
        duracao: "2horas"
      },
      {
        titulo: "Helicóptero",
        valor: "R$ 450,00 por pessoa",
        descricao: "Voe sobre a praia do gunga",
        duracao: "20km"
      },
      {
        titulo: "Paramotor",
        valor: "R$ 300,00 por pessoa",
        descricao: "Em meio a coqueirais beira-mar, levando-o para apreciar as falésias de areias coloridas, com paradas para apreciar a beleza e tirar fotos.",
        duracao: ""
      },
      {
        titulo: "Tirolesa",
        valor: "R$ 35,00 por descida. R$ 45,00 por descida com filmagem.",
        descricao: "Em meio a coqueirais beira-mar, levando-o para apreciar as falésias de areias coloridas, com paradas para apreciar a beleza e tirar fotos.",
        duracao: ""
      },
      {
        titulo: "Beach club com jacuzi. (Corais beach club)",
        valor: "R$ 500,00 até 8 pessoas, transformando R$ 250,00 em consumação no local",
        descricao: "Em meio a coqueirais beira-mar, levando-o para apreciar as falésias de areias coloridas, com paradas para apreciar a beleza e tirar fotos.",
        duracao: "a decidir. (encerramento 16horas)"
      },
    ]
  },
  {
    id: 1,
    img: ["/assets/maragogi/IMG-20250401-WA0046.jpg", "/assets/maragogi/IMG-20250401-WA0013.jpg", "/assets/maragogi/IMG-20250401-WA0015.jpg", "/assets/maragogi/IMG-20250401-WA0020.jpg", "/assets/maragogi/IMG-20250401-WA0021.jpg", "/assets/maragogi/IMG-20250401-WA0023.jpg", "/assets/maragogi/IMG-20250401-WA0037.jpg", "/assets/maragogi/IMG-20250401-WA0039.jpg", "/assets/maragogi/IMG-20250401-WA0040.jpg", "/assets/maragogi/IMG-20250401-WA0044.jpg"],
    distancia: "",
    description: "Maragogi está situada bem no coração da Costa dos Corais , a maior barreira de corais do Brasil, que também é uma belíssima área de preservação ambiental. A cidade de Maragogi é famosa por suas praias de mar realmente cristalino, águas quentes e piscinas naturais paradisíacas , por isso o apelido de caribe brasileiro.",
    title: "Maragogi",
    valor: "400,00R$",
    fotos: ["/assets/fmaragogi/1.jpg","/assets/fmaragogi/2.jpg","/assets/fmaragogi/3.jpg","/assets/fmaragogi/4.jpg"],
    passeios: [
      {
        titulo: "Passeio de Lancha em Maragogi",
        valor: "150,00R$ por pessoa",
        descricao: "Destino para as piscinas naturais (de brinde: caminho de Moisés + praia de Antunes)",
        duracao: "2 horas e meia "
      },
      {
        titulo: "Passeio de Buggy em Maragogi",
        valor: "300,00R$ até 4 pessoas",
        descricao: "Buggy Exclusivo. Orla + Praia de Burgalhau + Praia de Barra Grande + Praia de Antunes + Praia de Xaréu. Pode levar coller",
        duracao: "3 horas"
      }
    ]
  },
  {
    id: 2,
    img: ["/assets/milagres/IMG-20250401-WA0014.jpg","/assets/milagres/IMG-20250401-WA0043.jpg", "/assets/milagres/IMG-20250401-WA0044.jpg", "/assets/milagres/IMG-20250401-WA0046.jpg", "/assets/milagres/IMG-20250401-WA0047.jpg", "/assets/milagres/IMG-20250401-WA0051.jpg", "/assets/milagres/IMG-20250401-WA0019.jpg"],
    distancia: "",
    description: "Com águas calmas e mornas, e piscinas naturais. É um lugar paradisíaco e considerada uma das melhores praias do Brasil.",
    title: "Milagres",
    valor: "350,00R$",
    fotos: ["/assets/fmilagres/1.jpg","/assets/fmilagres/2.jpg","/assets/fmilagres/3.jpg","/assets/fmilagres/4.jpg","/assets/fmilagres/5.jpg","/assets/fmilagres/6.jpg","/assets/fmilagres/7.jpg","/assets/fmilagres/8.jpg"],
    passeios: [
      {
        titulo: "Piscinas naturais de milagres",
        valor: "100,00R$ por pessoa",
        descricao: "3 Paradas: 1º Banho com os peixinhos; 2º Fotos na boia e rede; 3º Mergulho de cima da jangada",
        duracao: "3 horas "
      },
      {
        titulo: "Passeio de buggy",
        valor: "R$ 300,00 por buggy",
        descricao: "Percorre a rodovia com parada nas praias do Patacho e Lajes além de passar pelo famoso Túnel Verde.",
        duracao: "03h30 "
      },
    ]
  },
  {
    id: 3,
    img: ["/assets/frances/IMG-20250401-WA0067.jpg", "/assets/frances/IMG-20250401-WA0068.jpg", "/assets/frances/IMG-20250401-WA0069.jpg", "/assets/frances/f1.jpg", "/assets/frances/f2.jpg", "/assets/frances/f3.jpg"],
    distancia: "",
    description: "A Praia do Francês é um verdadeiro cartão-postal do litoral sul de Alagoas. Com um mar que alterna entre águas tranquilas e ondas ideais para o surf, essa praia encanta turistas de todo o Brasil. A paisagem é um espetáculo à parte: barreiras de corais, piscinas naturais, coqueirais exuberantes e um pôr do sol inesquecível fazem da Praia do Francês um destino imperdível para quem visita a região.",
    title: "Francês",
    valor: "R$ 200,00",
    fotos: ["/assets/ffrances/1.jpg","/assets/ffrances/2.jpg","/assets/ffrances/3.jpg","/assets/ffrances/4.jpg","/assets/ffrances/5.jpg"],
    passeios: [
      {
        titulo: "Beach Club Kanoa",
        valor: "",
        descricao: "",
        duracao: ""
      },
    ]
  },
  {
    id: 4,
    img: ["/assets/barra/IMG-20250401-WA0073.jpg", "/assets/barra/IMG-20250401-WA0074.jpg", "/assets/barra/IMG-20250401-WA0075.jpg", "/assets/barra/IMG-20250401-WA0076.jpg", "/assets/barra/IMG-20250401-WA0078.jpg", "/assets/barra/IMG-20250401-WA0079.jpg", "/assets/barra/IMG-20250401-WA0080.jpg", "/assets/barra/IMG-20250401-WA0081.jpg", "/assets/barra/IMG-20250401-WA0006.jpg", "/assets/barra/IMG-20250410-WA0093.jpg", "/assets/barra/IMG-20250410-WA0094.jpg", "/assets/barra/IMG-20250410-WA0095.jpg", "/assets/barra/IMG-20250410-WA0096.jpg"],
    distancia: "",
    description: "",
    title: "Barra de São Miguel",
    valor: "R$ 200,00",
    fotos: ["/assets/barra/IMG-20250401-WA0073.jpg", "/assets/barra/IMG-20250401-WA0074.jpg", "/assets/barra/IMG-20250401-WA0075.jpg", "/assets/barra/IMG-20250401-WA0076.jpg"],
    passeios: [
      {
        titulo: "Beach Club Praero",
        valor: "",
        descricao: "",
        duracao: ""
      },
    ]
  },
  {
    id: 5,
    img: ["/assets/ipioca/2.jpg", "/assets/ipioca/IMG-20250401-WA0004.jpg",  "/assets/ipioca/IMG-20250401-WA0083.jpg", "/assets/ipioca/IMG-20250401-WA0084.jpg"],
    distancia: "",
    description: "",
    title: "Ipioca",
    valor: "200,00R$",
    fotos: ["assets/fipioca/1.jpg","assets/fipioca/2.jpg","assets/fipioca/3.jpg","assets/fipioca/4.jpg","assets/fipioca/5.jpg","assets/fipioca/6.jpg",],
    passeios: [
      {
        titulo: "",
        valor: "",
        descricao: "",
        duracao: ""
      },
    ]
  },
  {
    id: 6,
    img: [ "/assets/foz/IMG-20250410-WA0084.jpg" ,"/assets/foz/IMG-20250410-WA0083.jpg", "/assets/foz/IMG-20250410-WA0088.jpg"],
    distancia: "",
    description: "",
    title: "Foz do Rio São Francisco",
    valor: "450,00R$",
    fotos: ["/assets/ffoz/1.jpg","/assets/ffoz/2.jpg","/assets/ffoz/3.jpg","/assets/ffoz/4.jpg","/assets/ffoz/5.jpg","/assets/ffoz/6.jpg","/assets/ffoz/7.jpg","/assets/ffoz/8.jpg",],
    passeios: [
      {
        titulo: "",
        valor: "",
        descricao: "",
        duracao: ""
      },
    ]
  },
  {
    id: 7,
    img: ["/assets/canions/IMG-20250401-WA0009.jpg","/assets/canions/IMG-20250401-WA0027.jpg","/assets/canions/IMG-20250401-WA0025.jpg"],
    distancia: "",
    description: "",
    title: "Cânions do Rio São Francisco",
    valor: "1000,00R$",
    fotos: ["/assets/canions/IMG-20250401-WA0009.jpg","/assets/canions/IMG-20250401-WA0027.jpg","/assets/canions/IMG-20250401-WA0025.jpg"],
    passeios: [
      {
        titulo: "",
        valor: "",
        descricao: "",
        duracao: ""
      },
    ]
  },
  {
    id: 8,
    img: [""],
    distancia: "",
    description: "",
    title: "Dunas de Marapé",
    valor: "300,00R$",
    fotos: ["assets/fdunas/1.jpg","assets/fdunas/2.jpg","assets/fdunas/3.jpg","assets/fdunas/4.jpg"],
    passeios: [
      {
        titulo: "",
        valor: "",
        descricao: "",
        duracao: ""
      },
    ]
  },
]

