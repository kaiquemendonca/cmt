'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-fade';


interface Image {
  id: number;
  url: string;
}

export interface Tour {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  duration: string | null;
  category: string | null;
  active: boolean;
  images: Image[];
}


export default function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const swiperRef = useRef<SwiperClass | null>(null);



  // 🔗 Fetch dos dados do Strapi
  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/tours?populate=images`, { cache: 'no-store' }
        );
        if (!res.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const json = await res.json();
        setTours(json.data);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar passeios. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }
    fetchTours();
  }, []);

  const handleCardClick = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null);
      swiperRef.current?.autoplay.start();
    } else {
      setSelectedCard(index);
      swiperRef.current?.autoplay.stop();
    }
  };

  const handleCheckout = async (tour: Tour) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: tour.name,
        description: tour.description,
        image: 'https://strapi-n86r.onrender.com' + tour.images[0]?.url,
        price: tour.price,
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <motion.div className="h-auto bg-white" id="trips">
      <section className="relative h-full w-full">
        <>

          {/* Gradiente de transição para o azul */}
          <div className="absolute top-0 w-full h-24 bg-gradient-to-t from-transparent to-[#0077b6] z-10" />
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-[#68bdd1] z-10" />
        </>
        {/* 🌅 Background */}
        <img
          src="/assets/praia-de-maragogi.png"
          alt="Fundo Alagoas"
          className="absolute inset-0 w-full h-[100%] md:h-full object-cover"
        />

        {/* 🏝️ Título */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="relative z-10 flex flex-col items-start p-10 md:p-30 md:pb-0 justify-start h-[40%] md:h-[100%] text-white"
        >
          <motion.h3
            className="text-xl md:text-3xl max-w-4xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            PASSEIOS
          </motion.h3>
          <motion.h1
            className="text-3xl md:text-7xl font-bold max-w-4xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          >
            PLANEJAMENTO <br />
            COMPLETO DO<br />
            SEU PASSEIO
          </motion.h1>
          <motion.a
            href="https://wa.me/5582994180997?text=Ol%C3%A1%20C%C3%A9sar%2C%20quero%20fazer%20planejamento%20de%20passeios."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full text-lg shadow-lg flex items-center my-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          >
            Entenda como funciona
            <img src="/assets/icones/seta.svg" className="ml-2" />
          </motion.a>
        </motion.div>
      </section>

      <div className='bg-[#68bdd1] w-full'>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="flex flex-col p-3 items-center  justify-center md:p-30 md:pt-10 md:mx-auto w-full relative snap-start ">


          <div className={`py-10 overflow-hidden relative z-10 ${selectedCard === null ? '' : 'md:w-full'}`}>
            {loading ? (
              <p className="text-center text-black">Carregando passeios...</p>
            ) : error ? (
              <p className="text-center text-red-600">{error}</p>
            ) : (
              <AnimatePresence mode="wait">
                <div className="flex flex-col md:flex-row grid grid-cols-1 md:grid-cols-4 gap-3 items-start justify-between w-full">
                  {tours.map((dados, index) => {
                    const imageUrl = dados?.images[0]?.url;
                    


                    return (

                      <div key={index} className="bg-gray-100 text-white md:max-w-screen-lg rounded-xl border border-[#a3f7f9] shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3)]">

                        <div className="flex w-full">
                          <div className="relative w-full">
                            <img
                              src={imageUrl}
                              alt={dados?.name}
                              className="rounded-lg object-cover w-full h-[250px]"
                            />
                          </div>
                        </div>
                        <div className="px-5 py-6 h-[280px]">
                          <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.5, ease: 'easeOut' }}
                            className="text-justify text-blue-600 text-md mb-2">
                            {dados?.name}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.5, ease: 'easeOut' }}
                            className="h-[120px]"
                          >
                            <p className="text-justify mb-2 text-gray-500 text-sm">
                              {dados?.description}
                            </p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.5, ease: 'easeOut' }}
                            className="text-green-700 text-justify text-bold text-md rounded-t-xl">
                            R${dados.price}
                          </motion.div>


                          <div className="flex items-center justify-center mt-4">
                            

                            <Link className='w-full' href={`/passeio/${dados.slug}`}>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                                className="cursor-pointer border border-[#a3f7f9] border-2 shadow-[2px_2px_30px_2px_#fff] font-thin transition easi-in-out bg-blue-400 text-2xl p-1 rounded-2xl text-white w-full">
                                Ver Detalhes
                              </motion.button>
                            </Link>


                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </AnimatePresence>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
