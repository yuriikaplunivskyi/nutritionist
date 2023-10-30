import { useState } from "react";
import "./accordions.scss";

const Accordions = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null: index);
    };
    
    return (
        <>
            <div className="accordion">
                <h2 className="accordion-header"><span>&#x26A0;</span>Як проходить</h2>
                {data.length ? data.map(item =>(
                <div className="accordion-item" key={item.id}>
                    <div className="accordion-title">
                        <div>{item.title}</div>
                        <button
                        className="accordion-btn"
                        onClick={() => toggleAccordion(item.id)}
                        >
                            {item.id === activeIndex ? '-': '+'}
                        </button>
                    </div>
                    {item.id == activeIndex && <div className="accordion-content">{item.content}</div>}
                </div>
                )): console.log("error data accordions")}
            </div>
        </>
    )
}

export default Accordions;
