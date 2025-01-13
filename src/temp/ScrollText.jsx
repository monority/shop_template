import React, { useRef, useState } from "react";

const HorizontalScroller = () => {
  const boxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleArrowClick = (direction) => {
    const box = boxRef.current;
    const boxWidth = box.offsetWidth;

    // Calculer la position cible
    const newScrollPosition =
      direction === "next"
        ? Math.min(box.scrollLeft + boxWidth, box.scrollWidth - boxWidth)
        : Math.max(box.scrollLeft - boxWidth, 0);

    // Défilement fluide
    box.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    // Mettre à jour l'état des flèches après un léger délai
    setTimeout(() => toggleArrows(box), 300);
  };

  const handleMouseDown = (e) => {
    const box = boxRef.current;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(box.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const box = boxRef.current;
    const x = e.pageX;
    const distance = startX - x;
    box.scrollLeft = scrollLeft + distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleArrows = (box) => {
    const maxScrollWidth = box.scrollWidth - box.offsetWidth;
    setIsPrevDisabled(box.scrollLeft <= 0);
    setIsNextDisabled(box.scrollLeft >= maxScrollWidth);
  };

  const handleScroll = () => {
    const box = boxRef.current;
    toggleArrows(box);
  };

  return (
    <div className="hs__wrapper" style={{ display: "flex", alignItems: "center" }}>
      <button
        className={`arrow arrow-prev ${isPrevDisabled ? "disabled" : ""}`}
        onClick={() => handleArrowClick("prev")}
        disabled={isPrevDisabled}
        style={{ marginRight: "10px" }}
      >
        Prev
      </button>
      <div
        className="hs"
        ref={boxRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onScroll={handleScroll}
        style={{
          overflowX: "scroll",
          display: "flex",
          cursor: isDragging ? "grabbing" : "grab",
          width: "400px",
          height: "120px",
          border: "1px solid #ccc",
          userSelect: "none",
        }}
      >
        {/* Example content */}
        <div style={{ minWidth: "200px", height: "100px", backgroundColor: "red" }}></div>
        <div style={{ minWidth: "200px", height: "100px", backgroundColor: "blue" }}></div>
        <div style={{ minWidth: "200px", height: "100px", backgroundColor: "green" }}></div>
        <div style={{ minWidth: "200px", height: "100px", backgroundColor: "yellow" }}></div>
        <div style={{ minWidth: "200px", height: "100px", backgroundColor: "purple" }}></div>
      </div>
      <button
        className={`arrow arrow-next ${isNextDisabled ? "disabled" : ""}`}
        onClick={() => handleArrowClick("next")}
        disabled={isNextDisabled}
        style={{ marginLeft: "10px" }}
      >
        Next
      </button>
    </div>
  );
};

export default HorizontalScroller;
