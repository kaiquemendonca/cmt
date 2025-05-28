import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'


export const Services = () => {
    return (


        <div className='h-[80vh] md:h-[110vh] ' id="trips">
            <section className="relative h-screen w-full">
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
                        <SwiperSlide>
                            <div className="z-30 absolute bg-gray-800 rounded-xl w-[500px] h-[200px] transition">
                                <h3 className="text-gray-100 text-2xl">Passeios Privativos</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="absolute bg-gray-300 rounded-xl w-[500px] h-[200px] transition">
                                <h3 className="text-gray-800 text-2xl">Transfers</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="absolute bg-gray-800 rounded-xl w-[500px] h-[200px] transition">
                                <h3 className="text-gray-100 text-2xl">Passeios para piscinas naturais</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="absolute bg-gray-300 rounded-xl w-[500px] h-[200px] transition">
                                <h3 className="text-gray-800 text-2xl">Passeio de Lancha</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="absolute bg-gray-800 rounded-xl w-[500px] h-[200px] ">
                                <h3 className="text-gray-100 text-2xl">Passeios de Buggy</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>

    )
    
}

