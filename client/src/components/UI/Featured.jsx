import { useState, useEffect } from "react";
import { useRef } from "react";

import sample1 from "../../assets/samples/sample1.png";
import sample2 from "../../assets/samples/sample2.png";
import sample3 from "../../assets/samples/sample3.png";
import sample4 from "../../assets/samples/sample4.png";

export default function Featured() {
  const data = [
    {
      id: 1,
      item: "Item 1",
      img: sample1,
    },
    {
      id: 2,
      item: "Item 2",
      img: sample2,
    },
    {
      id: 3,
      item: "Item 3",
      img: sample3,
    },
    {
      id: 4,
      item: "Item 4",
      img: sample4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartIndex = useRef(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartIndex.current = activeIndex;
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dragDistance = e.clientX - dragStartX.current;
      const itemsCount = data.length;
      const dragIndexChange = Math.round((dragDistance / window.innerWidth) * itemsCount);

      setActiveIndex((dragStartIndex.current + dragIndexChange + itemsCount) % itemsCount);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isDragging) {
        handleNext();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered, isDragging]);


  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* {isHovered && (
        <>
          <div className="arrow left" onClick={(handlePrev)}>
            {"<"}
          </div>
          <div className="arrow right" onClick={handleNext}>
            {">"}
          </div>
        </>
      )} */}
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-item ${index === activeIndex ? "active" : ""} ${
            index < activeIndex ? "prev" : index > activeIndex ? "next" : ""
          }`}
        >
          <h3>{item.item}</h3>
          <img
            src={item.img}
            alt={`carousel-${index}`}
            className="carousel-img"
          />
        </div>
      ))}
    </div>
  );
}
