import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
    '/img6.jpg',
]

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

export default function PhotoCarousel({ data }: Props) {
    return (
        <div className="w-full overflow-hidden py-10 bg-white">
            <h3 className='text-center text-xl font-medium mb-6 text-gray-500 uppercase flex items-center justify-center'>
                <img src='/assets/icones/aviao.svg' className='mx-4'/>
                Clientes que já viajam com nosso planejamento e suporte
                <img src='/assets/icones/aviao.svg' className='-scale-x-100 mx-4'/>
            </h3>
            <h2 className="text-center text-3xl font-bold mb-6 text-gray-800 uppercase">Eu trabalho com o que eu amo!</h2>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={6}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={4000}
                grabCursor={true}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {data[1].img.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="w-full flex justify-center">
                            <img
                                src={src}
                                alt={`Serviço ${idx + 1}`}
                                className="rounded-xl w-64 h-64 md:h-84 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                speed={4000}
                grabCursor={true}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {data[2].img.map((src, idx) => (
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
            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={4000}
                grabCursor={true}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {data[0].img.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="w-full flex justify-center">
                            <img
                                src={src}
                                alt={`Serviço ${idx + 1}`}
                                className="rounded-xl  w-64 h-64 md:h-84 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
