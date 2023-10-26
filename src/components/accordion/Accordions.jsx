import { useState } from "react";
import "./accordions.scss";

const Accordions = () => {
    const [activeIndex, setActiveIndex] = useState(false);

    const accordionDate = [
        {
            title: 'Section 1',
            id: 1,
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },
        {
            title: 'Section 3',
            id: 2,
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },
        {
            title: 'Section 2',
            id: 3,
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null: index);
    };

    return (
        <>
            <div className="accordion">
            {accordionDate.map(item =>(
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
            ))}
                </div>
        </>
    )
}

export default Accordions;
