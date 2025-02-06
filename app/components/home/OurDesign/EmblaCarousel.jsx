"useclient";
import "./Embla.css";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div
          className="embla__container"
          onMouseEnter={toggleAutoplay}
          onMouseLeave={toggleAutoplay}
        >
          {slides.map((promise, index) => (
            <div className="embla__slide overflow-hidden" key={index}>
              <div className="embla__slide__number overflow-hidden">
                <div
                  className={`border w-[100%] sm:w-[380px] h-[280px] animate_container sm:mx-[1%] rounded-md mb-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300 `}
                >
                  <div className="font-bold relative text-black text-lg flex flex-col items-start justify-start">
                    <Image
                      src={promise.image}
                      alt="carousel pic"
                      sizes=""
                      width={"auto"}
                      height={"auto"}
                      priority
                      className=" text-white ml-2 mt-2 block pt-[5px] h-[80px] w-[80px] float-start rounded-full"
                    />
                    <span className="block p-4 pt-2 pb-0">{promise.title}</span>
                    <p className=" p-4 font-normal text-[15px] text-justify">
                      {promise.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          {/* <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          /> */}
          {/* <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          /> */}
        </div>

        <button
          className="embla__play text-cyan-500"
          // onClick={toggleAutoplay}
          type="button"
        >
          {/* {isPlaying ? "Stop" : "Start"} */}
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
