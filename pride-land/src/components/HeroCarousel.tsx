"use client";

import { HeroCarouselProps } from "../App";
import { useState } from "react";




export default function HeroCarousel({images}: HeroCarouselProps) {
let [currentSlide, setCurrentSlide] = useState(0);

let nextSlide = () => {
  if (currentSlide === images.length - 1) {
    setCurrentSlide(0); 
  }else {
    setCurrentSlide(currentSlide + 1);
  }
}

  let previousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }


  return (
    <div className="overflow-hidden relative">
    <div className="flex size-fit transition ease-out duration-300">
        {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
        ))}
    </div>
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((image, index) => (
            <button 
                type="button" 
                id={image.alt} 
                className="w-10 h-10 rounded-full" 
                aria-current={index === currentSlide ? "true" : "false"} 
                aria-label={image.alt} 
                onClick={() => setCurrentSlide(index)}
            >
                <svg 
                    height="100" 
                    width="100" 
                    xmlns="http://www.w3.org/2000/svg"
                > 
                    {index === currentSlide ? (
                        <circle r="15" cx="20" cy="20" fill="black" stroke="black" strokeWidth="1" opacity="0.8" />
                    ) : (
                        <circle r="15" cx="20" cy="20" fill="black" stroke="black" strokeWidth="1" opacity="0.5" />
                    )}
                </svg>
            </button>
        ))}
    </div>
</div>

    /* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button> */
      );
}