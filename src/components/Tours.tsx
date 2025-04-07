import { useState, useRef, useEffect, RefCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

type SliderItem = {
  id: number;
  img: string[];
  location: string;
  description: string;
  title: string;
};

type Props = {
  data: SliderItem[];
  active: number;
};



export default function Tours({ active, data }: Props) {

  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const total = data[active].img.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

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
    <motion.div
      {...swipeHandlers}
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden pb-8"
    >
      <div className="absolute z-40 top-1/2 left-4  -translate-y-1/2">
        <button onClick={prev} className="hidden md:inline-block bg-white cursor-pointer p-2 rounded-full shadow">
          <ArrowLeft className='text-[#0905bc]' />
        </button>
      </div>
      <div className="absolute z-40 top-1/2 right-4  -translate-y-1/2">
        <button onClick={next} className="hidden md:inline-block bg-white cursor-pointer p-2 rounded-full shadow">
          <ArrowRight className='text-[#0905bc]' />
        </button>
      </div>

      <div className="relative w-[90vw] max-w-[1000px] aspect-[16/9] overflow-visible rounded-2xl">
        <div
          ref={containerRef}
          className="relative flex items-center justify-center w-full h-full"
        >
          <AnimatePresence initial={false} mode="sync">
          {data[active].img.map((dados, i) => {
            const distance = (i - index + total) % total;
            const isVisible = distance <= 1 || distance >= total - 1;
            const isActive = i === index;
            const scale = isActive ? 1.0 : 0.6;
            const opacity = isVisible ? 1 : 0;
            const offset = ((distance > total / 2 ? distance - total : distance) * 250);

            return (
              <motion.div
                key={i}
                className="absolute w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-full rounded-xl overflow-hidden shadow-md"
                animate={{
                  x: isVisible ? offset : 0,
                  scale,
                  opacity,
                  zIndex: isActive ? 10 : 5,
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
    </motion.div>
  );
}