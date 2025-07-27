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
  const firstSlide = slides[currentIndex];
  const secondSlide = slides[(currentIndex + 1) % slides.length];

  return (
    <div className="flex justify-center gap-12 relative">
      <div className="relative w-[250px] lg:w-[300px] flex-shrink-0 block md:hidden">
        <img
          src={firstSlide.imgRoute}
          alt={firstSlide.title}
          className="w-full h-auto object-cover"
        />
        <h1 className="text-2xl">{firstSlide.title}</h1>
        <p className="text-sm">{firstSlide.description}</p>
      </div>

      <div className="hidden md:flex justify-center gap-12">
        {[firstSlide, secondSlide].map((slide, i) => (
          <div
            key={i}
            className="relative w-[250px] lg:w-[300px] flex-shrink-0"
          >
            <img
              src={slide.imgRoute}
              alt={slide.title}
              className="w-full h-auto object-cover"
            />
            <h1 className="text-2xl">{slide.title}</h1>
            <p className="text-sm">{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;