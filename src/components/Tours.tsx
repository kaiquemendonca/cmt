import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useRef, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper/types';
import { X } from 'lucide-react';

type PasseioDetalhado = {
  titulo: string;
  valor: string;
  descricao: string;
  duracao: string;
};

type SliderItem = {
  id: number;
  img: string[];
  distancia: string;
  description: string;
  title: string;
  valor: string;
  fotos: string[];
  passeios: PasseioDetalhado[];
};

type Props = {
  data: SliderItem[];
};

export default function Tours({ data }: Props) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleCardClick = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null);
      swiperRef.current?.autoplay.start();
    } else {
      setSelectedCard(index);
      swiperRef.current?.autoplay.stop();
    }
  };

  return (
    <motion.div className='h-auto bg-white' id="trips">
      <section className={`relative w-full `}>
        <img
          src="/assets/praia-de-maragogi.png"
          alt="Fundo Alagoas"
          className="absolute inset-0 w-full h-[80%] md:h-full object-cover p-5 rounded-[50px]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className={`relative z-10 flex flex-col items-start p-10 md:p-30 md:pb-0 justify-start h-[40%] md:h-[70%] text-white  `}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
            className='text-xl md:text-3xl max-w-4xl mb-6'
          >
            PASSEIOS
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="text-3xl md:text-7xl font-bold max-w-4xl mb-6"
          >
            PLANEJAMENTO <br />
            COMPLETO DO<br />
            SEU PASSEIO
          </motion.h1>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 3, delay: 0.5 }}
            href="https://wa.me/5582994180997?text=Ol%C3%A1%20C%C3%A9sar%2C%20quero%20fazer%20planejamento%20de%20passeios."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full text-lg shadow-lg transition flex items-center justify-center"
          >
            Entenda como funciona <img src='/assets/icones/seta.svg' className='ml-2' />
          </motion.a>
        </motion.div>

        <div className={`py-10 overflow-hidden relative z-10 ${selectedCard === null ? "" : "md:w-full"}`}>
          <AnimatePresence mode="wait">
            {selectedCard === null ? (
              <motion.div
                key="swiper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  modules={[Autoplay]}
                  loop={true}
                  centeredSlides={true}
                  speed={3000}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  slidesPerView={3}
                  spaceBetween={30}
                  grabCursor={true}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 6 },
                  }}
                >
                  {data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <motion.div
                        layout
                        onClick={() => handleCardClick(i)}
                        transition={{ layout: { duration: 0.5, type: "spring" } }}
                        className="relative cursor-pointer overflow-hidden bg-white rounded-xl shadow-xl w-48 h-60 md:w-60 md:h-80"
                      >
                        <motion.img
                          layout
                          src={item.fotos[0]}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <h3 className='absolute bottom-0 w-full text-center bg-white/80 text-black'>{item.title}</h3>
                        <motion.div layout className="p-4 text-black">
                          <h2 className="text-lg font-bold uppercase text-center">{item.title}</h2>
                        </motion.div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            ) : (

              <motion.div
                key="card"
                initial={{ opacity: 0, scaleX: 0.95 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0.2 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                  <motion.div
                    layout
                    transition={{ layout: { duration: 0.5, type: "fade" } }}
                    className="relative overflow-hidden bg-white rounded-xl shadow-xl w-full md:w-[60%] h-auto p-4 md:p-0 "
                  >
                    <button
                      onClick={() => handleCardClick(selectedCard)}
                      className="cursor-pointer absolute top-4 right-4 bg-black text-white rounded-full p-2 z-20"
                      aria-label="Fechar"
                    >
                      <X size={20} />
                    </button>

                    <motion.div layout className=" text-black">

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className=" space-y-4 md:space-y-0 md:flex"
                      >

                        <Swiper
                          modules={[Autoplay, EffectFade]}
                          autoplay={{ delay: 3000 }}
                          spaceBetween={0}
                          slidesPerView={1}
                          effect="fade"
                          className="roudend-xl md:rounded-l-xl md:w-[40%] md:h-130"
                        >
                          {data[selectedCard].fotos.map((foto, index) => (
                            <SwiperSlide key={index}>
                              <img
                                src={foto}
                                alt={`foto ${index}`}
                                className="w-full h-60 md:h-full object-cover rounded-xl md:rounded-l-xl"
                              />
                              <h2 className="text-lg font-bold uppercase text-center absolute insed text-black bottom-0 z-90 bg-white/80 w-full">{data[selectedCard].title}</h2>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div className='p-4 pt-1 space-y-1 md:w-[60%]'>
                          <p className="text-sm text-gray-500"><strong className='text-black'>Descrição:</strong> {data[selectedCard].description}</p>
                          <p className="text-sm text-green-700"><strong className='text-black'>Valor:</strong> {data[selectedCard].valor}</p>
                          <p className={`text-sm ${data[selectedCard].passeios ? "" : "hidden"}`}><strong>O que fazer:</strong></p>
                          {data[selectedCard].passeios.map((passeio, i) => (
                            <>
                              <h3 className='text-sm text-blue-600'>{passeio.titulo}</h3>
                              <p className={`text-sm text-gray-500 ${passeio.duracao ? "" : "hidden"}`}>Duração: {passeio?.duracao}</p>
                              <p className={`text-sm text-gray-500 ${passeio.valor ? "" : "hidden"}`}>Valor:{passeio.valor}</p>
                            </>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
              </motion.div>
            )}
            </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
}
