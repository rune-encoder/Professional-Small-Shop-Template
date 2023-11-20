import { useState, useEffect } from "react";
import { useRef } from "react";

import sample1 from "../../assets/samples/sample1.png";
import sample2 from "../../assets/samples/sample2.png";
import sample3 from "../../assets/samples/sample3.png";
import sample4 from "../../assets/samples/sample4.png";

import CarouselItem from "./CarouselItem";
import {
  IoIosRadioButtonOn,
  IoIosRadioButtonOff,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "react-icons/io";

export default function Carousel() {
  const data = [
    {
      id: 1,
      item: "Item 1: Short Description of Item 1",
      img: sample1,
    },
    {
      id: 2,
      item: "Item 2: Short Description of Item 2",
      img: sample2,
    },
    {
      id: 3,
      item: "Item 3: Short Description of Item 3",
      img: sample3,
    },
    {
      id: 4,
      item: "Item 4: Short Description of Item 4",
      img: sample4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {data.map((item, index) => {
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
          {data.map((item, index) => {
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
