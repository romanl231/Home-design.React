import DownArrowButton from "shared/components/DownArrowButton";
import HandleImage from "shared/components/HandleImage";

const IntroSection: React.FC = () => {
  const scrollToNextSection = () => {
  const current = document.activeElement as HTMLElement;
  const sections = Array.from(document.querySelectorAll("section"));

  const nextSection = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top > 10;
  });

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
  <section className="min-h-screen flex items-center justify-center px-4">
    <div className=" flex flex-col items-center text-center gap-6 max-w-4xl w-full">
      <div>
        <h5>HOME DESIGN</h5>
      </div>

      <div>
        <h1>
          Elegance for <br /> Interiors & Exteriors
        </h1>
      </div>

      <div>
        <p>
          We provide everyone with modern, <br />
          trendy, quality furniture
        </p>
      </div>

      <div className="pt-8">
        <DownArrowButton handleClick={scrollToNextSection} />
      </div>
    </div>
  </section>
);
};

export default IntroSection;