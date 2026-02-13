'use client';
import {
  motion,
  MotionProps,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';

import ht from "../../assets/housetour!.png"
import suz from "../../assets/suz.png"
import van from "../../assets/van.png"
import cr from "../../assets/ppcdd.png"
import dee from "../../assets/rrrr.png"
import fin from "../../assets/fin.png"
import finsa from "../../assets/finsa.png"



// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
import { useEffect, useRef, useState } from 'react';

export function throttle(fn: (...args: any[]) => any, wait: number) {
  let shouldWait = false;

  return function throttledFunction(this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args);
      shouldWait = true;
      setTimeout(() => (shouldWait = false), wait);
    }
  };
}
export const items = [
  {
    id: 1,
  url: 'https://placehold.co/1200x800/ffffff/ffffff',
  },
  {
    id: 2,
    url: ht,
  },
  {
    id: 3,
    url: suz,
  },

  {
    id: 4,
    url: van,
  },
  {
    id: 5,
    url: dee,
  },

  {
    id: 6,
    url: fin,
  },
  {
    id: 7,
    url: finsa,
  },
  {
    id: 8,
  url: 'https://placehold.co/1200x800/ffffff/ffffff',
  },
  {
    id: 91,
  url: 'https://placehold.co/1200x800/ffffff/ffffff',
  },
];

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
function useElementViewportPosition(ref: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: '#008299' },
    partial: { backgroundColor: '#ffffff' },
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1, once: false },
};

export default function ScrollCarousel() {
  const mainRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(mainRef);
  //   const { ref, start, end } = useRefScrollProgress(mainRef)
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  console.log(carouselEndPosition);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });
  useEffect(() => {
    window.addEventListener('scroll', () => console.log(carouselEndPosition));
  }, []);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(resetCarouselEndPosition, 10);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section ref={mainRef}>
        <div className='w-full mx-auto' style={{ height: '300vh' }}>
          <div className='sticky top-0 h-screen w-full flex flex-col items-start justify-center overflow-hidden'>
            <motion.div ref={carouselRef} className='flex gap-10' style={{ x }}>
              {items.map((item, index) => (
                <motion.div
                  {...slideAnimation}
                  key={item.id}
                  className='group relative h-[300px] w-[420px] overflow-hidden bg-neutral-200'
                >
                  <motion.img
                    key={item.id}
                    className='w-full shrink-0 h-full object-cover'
                    src={item?.url}
                    alt={'img'}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
