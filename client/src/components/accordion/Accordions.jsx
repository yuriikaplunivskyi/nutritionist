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
                <h2 className="accordion-header"><span>&#10003;</span>Кому підходить?</h2>
                {data.length ? data.map(item =>(
                <div className="accordion-item" key={item.id}>
                    <div className="accordion-title" onClick={() => toggleAccordion(item.id)}>
                        <div>{item.title}</div>
                        <button
                        className="accordion-btn"
                        >
                            {item.id === activeIndex ? '➖': '➕'}
                        </button>
                    </div>
                    <div className="accordion-content"
                        style={{ maxHeight: item.id === activeIndex ? "300px" : "0" }}
                        >
                            <p>{item.content}</p>
                        </div>
                </div>
                )): console.log("error data accordions")}
            </div>
        </>
    )
}

export default Accordions;
