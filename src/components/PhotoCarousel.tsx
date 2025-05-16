import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'motion/react';
import 'swiper/css'


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

export default function PhotoCarousel({ data }: Props) {

    const norte = data.filter(item =>
        ["Maragogi", "Milagres", "Ipioca"].includes(item.title)
    ).flatMap((item) => item.img)
    const sul = data.filter(item =>
        ["Gunga", "Francês", "Barra de São Miguel", "Foz do Rio São Francisco", "Cânions do Rio São Francisco"].includes(item.title)
    ).flatMap((item) => item.img)

    return (
        <div className="w-full overflow-hidden py-10 bg-white">
            <motion.h3
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                viewport={{once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay:0.5, ease: 'easeOut' }}
                className='text-center text-xl font-medium mb-6 text-gray-500 uppercase flex items-center justify-center'>
                <img src='/assets/icones/aviao.svg' className='mx-4' />
                Clientes que já viajam com nosso planejamento e suporte
                <img src='/assets/icones/aviao.svg' className='-scale-x-100 mx-4' />
            </motion.h3>
            <motion.h2
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                viewport={{once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: 1.0, ease: 'easeOut' }}
                className="text-center text-3xl font-bold mb-6 text-gray-800 uppercase">Eu trabalho com o que eu amo!</motion.h2>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={7}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}
                
                spaceBetween={10}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                }}
            >
                {norte.map((imgUrl, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="w-full flex justify-center">
                            <img
                                src={imgUrl}
                                alt={`Serviço ${idx + 1}`}
                                className="rounded-xl w-64 h-64 md:h-84 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={7}
                freeMode={true}
                spaceBetween={10}
                loop={true}
              
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    pauseOnMouseEnter: false

                }}
                speed={3000}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                }}
            >
                {sul.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="w-full flex justify-center my-5">
                            <img
                                src={src}
                                alt={`Serviço ${idx + 1}`}
                                className="rounded-xl w-64 h-64 md:h-84 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
