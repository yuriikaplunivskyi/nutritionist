import { useState } from "react";
import { motion } from "framer-motion";
import "./slider.scss";

const Slider = (props) => {
    const [index, setCurrentIndex] = useState(0);
    let startX = 0;
    let pointerId = null;

    const handlePointerDown = (e) => {
        startX = e.clientX;
        pointerId = e.pointerId;
        e.target.setPointerCapture(pointerId);
    };

    const handlePointerMove = (e) => {
        if (e.pointerId === pointerId) {
            const currentX = e.clientX;
            const deltaX = startX - currentX;

            if (deltaX > 50) {
                goToNextSlide();
            } else if (deltaX < -50) {
                goToPrevSlide();
            }
        }
    };

    const handlePointerUp = (e) => {
        if (e.pointerId === pointerId) {
            e.target.releasePointerCapture(pointerId);
            pointerId = null;
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
            className="slider carousel-container"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
        >
            <button className="prev-button" onClick={goToPrevSlide}>
                &#10094;
            </button>

            <div className="carousel-slideCard">
                {Array.isArray(props.slides) && props.slides.map((item, i) => (
                    <motion.div
                        key={item.id}
                        className={`slide ${index === i ? "active" : ""}`}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{
                            opacity: index === i ? 1 : 0,
                            x: index === i ? 0 : i > index ? 300 : -300,
                            z: index === i ? 0 : i > index ? 50 : 50,
                        }}
                        exit={{ opacity: 0, x: i > index ? 300 : -300 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="slide-imgContainer">
                            <img
                                src={`${import.meta.env.VITE_REACT_APP_API_URL_IMG}/${item.img_path}`}
                                alt={`Slide ${i}`}
                            />
                        </div>
                        <div className="slide-textContainer">
                            <span>{item.school}</span>
                            <h6>&quot;{item.title}&quot;</h6>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="next-button" onClick={goToNextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
