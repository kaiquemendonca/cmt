import { useState, useRef, useEffect, RefCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

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
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const total = data[active].img.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);


  const menuClickTours = (index: number) => {
    setActive(index);
  }

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.play().catch(() => { });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [index]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const setVideoRef = (i: number): RefCallback<HTMLVideoElement> => (el) => {
    videoRefs.current[i] = el;
  };
  return (
    <main id="trips" className="relative flex flex-col items-center justify-center w-full h-auto md:h-screen md:mt-0 md:justify-start md:items-start bg-[#0fa1a4] snap-start " >

      <motion.div
        {...swipeHandlers}
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative w-full  flex flex-col items-center justify-center overflow-hidden h-full "
      >
        <div className="w-full h-auto mb-6 mt-18 md:mt-10 z-50 bg-white border-y-1 border-blue-900">
          <div className="max-w-7xl md:mx-auto">
            <ul className="flex md:grid grid-cols-3 md:grid-cols-7 overflow-x-auto md:overflow-visible whitespace-nowrap scroll-smooth scrollbar-hide ">
              {data.map((menu, index) => (
                <motion.li
                  layout
                  key={index}
                  className={`${active === index
                    ? 'text-blue-800 border-b-4 border-blue-900'
                    : 'bg-white text-blue-800'
                    } h-[50px] flex-shrink-0 flex justify-center items-center cursor-pointer px-4 transition-all duration-100 ease-in-out text-center`}
                  onClick={() => menuClickTours(index)}
                >
                  <a className="text-blue-800">{menu.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute z-40 top-1/2 left-1/6  -translate-y-1/2">
          <button onClick={prev} className="hidden md:inline-block bg-white cursor-pointer p-2 rounded-full shadow">
            <ArrowLeft className='text-[#53dee1]' />
          </button>
        </div>
        <div className="absolute z-40 top-1/2 right-1/6  -translate-y-1/2">
          <button onClick={next} className="hidden md:inline-block bg-white cursor-pointer p-2 rounded-full shadow">
            <ArrowRight className='text-[#53dee1]' />
          </button>
        </div>

        <div className="relative w-[90vw] max-w-[1000px] aspect-[9/12] h-[70%] overflow-visible rounded-2xl">
          <div
          
            ref={containerRef}
            className="relative flex items-center justify-center w-full h-full"
          >
            <AnimatePresence  initial={false} mode="sync">
              {data[active].img.map((dados, i) => {
                const distance = (i - index + total) % total;
                const isVisible = distance <= 2 || distance >= total - 2;
                const isActive = i === index;
                const scale = isActive ? 1 : 0.6;
                const opacity = isVisible ? 1 : 0;
                const offset = ((distance > total / 2 ? distance - total : distance) * 245);
                const borderWidth = isActive ? 2 : 0;

                return (
                  <motion.div
                  
                    key={i}
                    className="absolute w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-full rounded-xl overflow-hidden shadow-md"
                    animate={{
                      x: isVisible ? offset : 0,
                      scale,
                      opacity,
                      borderWidth,
                      borderColor: '#53dee1',
                      zIndex: isActive ? 10 : 5,
                      boxShadow: '2px 2px 30px 2px #53dee1'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {dados.endsWith('.mp4') ? (
                      <video
                        muted
                        loop
                        autoPlay
                        className="object-cover w-full h-full"
                        src={dados}
                        ref={setVideoRef(i)}
                      >
                      </video>
                    ) : (
                      <img
                        src={dados}
                        alt={`carousel-${i}`}
                        className="object-cover w-full h-full"
                      />
                    )}


                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          {data[active].img.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === i ? 'bg-blue-600' : 'bg-gray-300'
                }`}
            ></button>
          ))}
        </div>

        <div className="flex justify-center py-3">
          <h1 className="text-3xl text-center">{data[active].title}</h1>
        </div>
      </motion.div>
    </main>
  );
}

