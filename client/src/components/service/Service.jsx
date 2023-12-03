import {useLocation, Navigate } from "react-router-dom";
import Accordions from "../accordion/Accordions";
import "./service.scss";


const Service = () => {
    const { state } = useLocation();
    const selectedService = state.selectedService;
    
    if (!selectedService || !selectedService.passing) {
    return  <Navigate to="*" />;
    }

    return (
    <div className="service">
        <div className="service-container">
            <div className="service-textContainer">
            <h2 className="service-title">{selectedService.title}</h2>
            <img className="service-icon" src={selectedService.icon} alt={`"icon" ${selectedService.title}`} />
            <p className="service-text">{selectedService.content}</p>
            <ol>
                <span>Як проходить</span>
                {selectedService.passing.map((pass) => (
                <li key={pass.id}>{pass.option}</li>
                ))}
            </ol>

            <ul>
                <span className="service-price-title"> Вартість: </span>
                {selectedService.prices.map((price) => (
                <li className="service-price" key={price.id}>{price.price}</li>
                ))}
            </ul>
            </div>
            <Accordions data={selectedService.warnings} />
        </div>
    </div>
    );
};


export default Service