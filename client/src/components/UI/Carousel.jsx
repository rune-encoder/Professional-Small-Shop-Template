import { useState, useEffect } from "react";

import carouselContent from "../../content/carouselContent";

import CarouselItem from "./CarouselItem";
import {
  IoIosRadioButtonOn,
  IoIosRadioButtonOff,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "react-icons/io";

export default function Carousel() {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === carouselContent.length - 1) {
        updateIndex(0);
        return;
      }

      updateIndex(activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= carouselContent.length) {
      newIndex = carouselContent.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselContent.map((item) => {
          return (
            <CarouselItem
              key={item.id}
              item={item.item}
              img={item.img}
              width={"100%"}
            />
          );
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <IoIosArrowDropleft />
        </button>

        <div className="indicators">
          {carouselContent.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                {activeIndex === index ? (
                  <IoIosRadioButtonOn />
                ) : (
                  <IoIosRadioButtonOff />
                )}
              </button>
            );
          })}
        </div>

        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <IoIosArrowDropright />
        </button>
      </div>
    </div>
  );
}
