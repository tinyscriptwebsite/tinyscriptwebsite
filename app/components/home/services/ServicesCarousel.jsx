import React, { useEffect } from "react";
import { DotButton, useDotButton } from "./DotButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // Autoplay interval
  useEffect(() => {
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Adjust autoplay interval as needed (milliseconds)

    // Cleanup
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="s_embla">
      <div className="s_embla__viewport" ref={emblaRef}>
        <div className="s_embla__container">
          {slides.map((item, index) => (
            <div className="s_embla__slide" key={index}>
              <div className="text-lg whitespace-nowrap text-gray-700 w-full flex items-center md:justify-evenly">
                <span className="">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="s_embla__controls">
        <div className="s_embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                "s_embla__dot" +
                (index === selectedIndex ? " s_embla__dot--selected" : "")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
