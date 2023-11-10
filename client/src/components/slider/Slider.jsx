import "./slider.scss";
import React, { useState } from "react";


const Slider = (props) => {
    const [ currentIndex, setCurrentIndex ] = useState (0) ; 

    const goToNextSlide = () => {
        if (currentIndex === props.slides.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const goToPrevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(props.slides.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const renderSlide = () => {
        return (
            <div>
                {props.slides[currentIndex]}
            </div>
        )
    }

    return (
        <div className="carousel-container">
            <button className="prev-button" onClick={goToPrevSlide}>
            &#10094;
            </button>

            {renderSlide()}

            <button className="next-button" onClick={goToNextSlide}>
                &#10095;
            </button>
        </div>
    )
}

export default Slider