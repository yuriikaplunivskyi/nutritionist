import { useState } from "react";
import "./slider.scss";

const Slider = (props) => {
    const [index, setCurrentIndex] = useState(0);
    let startX = 0;

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e) => {
        const currentX = e.touches[0].clientX;
        const deltaX = startX - currentX;
    
        if (deltaX > 50) {
            goToNextSlide();
        } else if (deltaX < -50) {
            goToPrevSlide();
        }
    };
    

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === props.slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? props.slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div 
            className="carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <button className="prev-button" onClick={goToPrevSlide}>
                &#10094;
            </button>

            <div className="carousel-slideCard">
                {props.slides.map((item, i) => (
                <div
                    key={item.id}
                    className={`slide ${index === i ? "active" : ""}`}
                >
                    <img src={item.img} alt={`Slide ${i}`} />
                    <div className="slide-textContainer">
                        <span>{item.school}</span>
                        <h6>&quot;{item.title}&quot;</h6>
                    </div>
                </div>
                ))}
            </div>

            <button className="next-button" onClick={goToNextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Slider;

