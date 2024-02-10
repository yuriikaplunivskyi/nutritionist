import { useState, useEffect, useRef } from "react";
import "./popup.scss";
import Accordions from "../accordion/Accordions";


const Popup = ({onClose, item}) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
    
        if (container) {
            const handleScroll = () => {
                const scrollPosition = container.scrollTop;
                const maxScroll = container.scrollHeight - container.clientHeight;
                const percentage = (scrollPosition / maxScroll) * 100;
        
                setScrollPercentage(percentage);
            };
        
            container.addEventListener("scroll", handleScroll);
        
            return () => {
                container.removeEventListener("scroll", handleScroll);
            };
            }
    }, [containerRef]);


    const handleBackgroundClick = e => {
        if (e.target.classList.contains("popup-container")) {
            onClose()
        } 
    }

    return (
        <div className="popup-container" onClick={handleBackgroundClick}>
            <div 
                ref={containerRef}
                className="popup"
                >
                <div className="popup-textContainer">
                    <h2 className="popup-title">{item.title}</h2>
                    <p className="popup-text">{item.content}</p>
                    <ol> <span>Як проходить</span>
                    {item.passing.length ? item.passing.map(item =>(
                        <li key={item.id}>{item.option}</li>
                    )): console.log("error data accordions")}
                    </ol>
                    
                    <ul>
                        <span className="popup-price-title"> Вартість: </span>
                        {item.prices.length ? item.prices.map(item =>(
                            <li className="popup-price" key={item.id}>{item.price}</li>
                        )): console.log("error data accordions")}
                    </ul>
                </div>
                {scrollPercentage < 50 && (
                    <button className="scroll-button" onClick={() => containerRef.current.scrollBy(0, 50)}>
                        ⬇️
                    </button>
                )}
                {scrollPercentage >= 50 && (
                    <button className="scroll-button" onClick={() => containerRef.current.scrollBy(0, -50)}>
                        ⬆️
                    </button>
                )}
                <Accordions data={item.warnings}/>
                <button 
                    className="popup-btn_close"
                    onClick={onClose}
                    >❌</button>
            </div>
        </div>
    )
}

export default Popup;