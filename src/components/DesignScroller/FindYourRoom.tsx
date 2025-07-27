import { useState } from "react";
import Scroller from "./Scroller";
import roomImg1 from "assets/images/room-with-pictures.png";
import ArrowActionLink from "shared/components/ArrowActionLink";


const slides = [
                {imgRoute: roomImg1, title:"Title1", description:"Description1"},
                {imgRoute: roomImg1, title:"Title2", description:"Description2"},
                {imgRoute: roomImg1, title:"Title3", description:"Description3"},
                {imgRoute: roomImg1, title:"Title4", description:"Description4"},
                {imgRoute: roomImg1, title:"Title5", description:"Description5"},
                {imgRoute: roomImg1, title:"Title6", description:"Description6"},
            ];

const FindYourRoom: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 2) % slides.length
        );
    };

    return (
        <section className="px-6 py-12">
            <div className="w-full max-w-[1440px] mx-auto justify-between px-10 py-6">    
                <h2 className="text-[34px] mb-4">Find your room</h2>

                    <div className="flex flex-col items-center gap-8">
                        {/* LEFT TEXT + SLIDES */}
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* LEFT TEXT */}
                        <p className="max-w-[200px] leading-relaxed text-center lg:text-left">
                            Dining room, bedroom, bathroom or office. Find what you need
                        </p>

                        {/* SCROLLER */}
                        <Scroller currentIndex={currentIndex} slides={slides} />
                    </div>

                    {/* COUNTER + BUTTON */}
                    <div className="flex items-center gap-4 text-sm">
                        <ArrowActionLink handleClick={handleNext} linkText="Next" />
                    </div>
                </div> 
            </div>
        </section>
    );
}

export default FindYourRoom;