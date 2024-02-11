import { useState } from "react";
import "./accordions.scss";
import dotsLoading from "/icon/dots-loading.gif";

const Accordions = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null: index);
    };

    if (!data) {
        console.log(`error data in Accordions`);
        return <div className="loading" style={{height: "100%"}}>
        <img style={{width: "40px"}} src={dotsLoading} alt="loading"/>
    </div>; // або поверніть компонент завантаження, наприклад <Loading />
    }
    
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
                )): console.log(`error data in Accordions`)}
            </div>
        </>
    )
}

export default Accordions;
