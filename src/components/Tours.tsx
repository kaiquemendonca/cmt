import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { motion } from "framer-motion";
import 'swiper/css'
import 'swiper/css/effect-fade'
import { useEffect, useRef, useState } from 'react'




type PasseioDetalhado = {
  titulo: string;
  valor: string;
  descricao: string;
  duracao: string;
};

type SliderItem = {
  id: number;
  img: string[];
  location: string;
  description: string;
  title: string;
  valor: string;
  passeios: PasseioDetalhado[];
};

type Props = {
  data: SliderItem[];
};


export default function Tours({ data }: Props) {



  return (
    <motion.div
      className='h-[70vh] md:h-[110vh] bg-white ' id="trips">
      <section className="relative h-screen w-full">
        {/* Fundo com imagem */}
        <img
          src="/assets/praia-de-maragogi.png"
          alt="Fundo Alagoas"
          className="absolute inset-0 w-full h-[70%]  md:h-full object-cover p-5 rounded-[50px]"
        />
        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-start p-10 md:p-30 justify-start h-[30%] md:h-[70%] text-white ">
          <motion.h3 initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, }}
            viewport={{ amount: 1.0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className='text-xl md:text-3xl max-w-4xl mb-6'>PASSEIOS</motion.h3>
          <motion.h1 initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, }}
            viewport={{ amount: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="text-3xl md:text-7xl font-bold max-w-4xl mb-6">
            PLANEJAMENTO <br />
            COMPLETO DO<br />
            SEU PASSEIO
          </motion.h1>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, }}
            viewport={{ amount: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            href="https://wa.me/5582991432144?text=Ol%C3%A1%20C%C3%A9sar%2C%20quero%20fazer%20planejamento%20de%20passeios."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full text-lg shadow-lg transition flex items-center justify-center"
          >
            Entenda como funciona <img src='/assets/icones/seta.svg' className='ml-2' />
          </motion.a>
        </motion.div>
        <div className="bg-white py-10 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={7}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
          >
            {data.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="w-48 md:w-60 h-80 flex justify-center items-end">

                  <img
                    src={img.img[1]}
                    alt={`Lugar ${i + 1}`}
                    className="absolute w-60 h-60 rounded-xl md:h-80 object-cover shadow-xl  transition"

                  />
                  <div className='w-full bg-gray-600/30 z-99 rounded-b-xl'>
                    <h1 className=' z-99 uppercase p-2 text-xl md:text-2xl text-center text-gray-100'>{img.title}</h1>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </motion.div>


  );
}

