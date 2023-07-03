import { useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface ICarousel {
  images: string[];
}

export default function Carousel({ images }: ICarousel) {
  const itemsWrapper = useRef<HTMLDivElement>(null);
  const items = useRef<HTMLElement[]>([]);
  const [itemShow, setItemShow] = useState(0);

  const carouselHandler = (index: number) => {
    let scrollTo = index;
    if (scrollTo > items.current.length - 1) scrollTo = 0;
    if (scrollTo < 0) scrollTo = items.current.length - 1;

    itemsWrapper.current?.scrollTo({
      left: items.current[scrollTo].offsetLeft,
      behavior: "smooth",
    });
    setItemShow(scrollTo);
  };

  return (
    <div className="py-8 flex w-8/12 relative">
      <div
        className="flex overflow-y-scroll z-10 border scrollbar-hide"
        ref={itemsWrapper}
      >
        {images.map((item, index) => {
          return (
            <img
              src={item}
              className="h-full w-full"
              key={index}
              ref={(ref) =>
                ref !== null &&
                !items.current.includes(ref) &&
                items.current.push(ref)
              }
            />
          );
        })}
      </div>
      <div className="absolute w-full h-full top-0 flex items-center justify-center">
        <button
          className="absolute text-black -left-16 text-3xl font-thin"
          onClick={() => carouselHandler(itemShow - 1)}
        >
          <SlArrowLeft />
        </button>
        <button
          className="absolute text-black -right-16 text-3xl font-thin"
          onClick={() => carouselHandler(itemShow + 1)}
        >
          <SlArrowRight />
        </button>
        <div className="absolute -bottom-4 flex gap-6">
          {images.map((item, index) => (
            <div
              className={`${
                itemShow !== index && "opacity-20"
              } border bg-blue h-3 w-12 cursor-pointer`}
              key={item}
              onClick={() => carouselHandler(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
