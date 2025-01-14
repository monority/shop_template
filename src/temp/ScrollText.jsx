import React, { useEffect, useRef, useState } from "react";

const HorizontalScroller = ({ data_handle }) => {
	const boxRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(data_handle)
		console.log(data_handle + "ok")
	}, [data_handle]);
 	const handleArrowClick = (direction) => {
		const box = boxRef.current;
		const boxWidth = box.offsetWidth;

		const newScrollPosition =
			direction === "next"
				? Math.min(box.scrollLeft + boxWidth, box.scrollWidth - boxWidth)
				: Math.max(box.scrollLeft - boxWidth, 0);

		box.scrollTo({
			left: newScrollPosition,
			behavior: "smooth",
		});

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
	
	const render_data = data?.data?.map(item => {
		return (
			<div key={item.id}>{item.image}</div>
		)
	})
	return (
		<div className="wrapper_box">
			<button
				className={`arrow arrow-prev ${isPrevDisabled ? "disabled" : ""}`}
				onClick={() => handleArrowClick("prev")}
				disabled={isPrevDisabled}
			>
				Prev
			</button>
			<div
				className="element_box"
				ref={boxRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onScroll={handleScroll}
				style={{

					cursor: isDragging ? "grabbing" : "grab",
				}}
			>
					  {render_data}
			</div>
			<button
				className={`arrow arrow-next ${isNextDisabled ? "disabled" : ""}`}
				onClick={() => handleArrowClick("next")}
				disabled={isNextDisabled}
			>
				Next
			</button>
		</div>
	);
};

export default HorizontalScroller;
