
"use client"
import Image from "next/image";
import { useCallback, useEffect, useState, useRef } from "react";
interface CarouselItem {
    imgUrl: string;
    placeholder?: string;
    linkUrl?: string;
  }
  
  interface CarouselProps {
    items: CarouselItem[];
    interval?: number;
  }
  
const Carousel: React.FC<CarouselProps> = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, interval);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, interval]);

  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden">
      {/* Slides */}
      <div className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <a href={item.linkUrl || "#"} key={index} className="w-full h-full flex-shrink-0">
            <Image src={item.imgUrl} alt="Slide image" width={300} height={300}/>
          </a>
        ))}
      </div>
      {/* Arrows */}
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow">
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
