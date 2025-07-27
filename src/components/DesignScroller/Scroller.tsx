import { useState } from "react";
import ArrowActionLink from "shared/components/ArrowActionLink";

interface SlideInfo{
    imgRoute: string;
    title: string;
    description: string;
}

interface ScrollerProps {
    currentIndex: number;
    slides: SlideInfo[];
}

const Scroller: React.FC<ScrollerProps> = ({ slides, currentIndex }) => {
  const visibleSlides = [
    slides[currentIndex],
    slides[(currentIndex + 1) % slides.length],
  ];

  return (
    <div className="flex justify-center gap-12 relative">
      {visibleSlides.map((slide, i) => (
        <div key={i} className="relative w-[250px] lg:w-[300px] flex-shrink-0">
          <div>
            <img
              src={slide.imgRoute}
              alt={slide.title}
              className="w-full h-auto object-cover"
            />
            <h1 className="text-2xl">{slide.title}</h1>
          </div>

          <p className="text-sm">
            {slide.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Scroller;