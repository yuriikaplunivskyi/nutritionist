import { useParams } from "react-router-dom";
import Accordions from "../accordion/Accordions";
import "./service.scss";
import dotsLoading from "/icon/dots-loading.gif";
import useServiceData from '../../hooks/useServiceData';


const Service = () => {
    const { serviceData } = useServiceData();
    const { serviceId } = useParams();

    const selectedService = serviceData.find((service) => service.path === serviceId);

    if (!selectedService) {
        return <div>
                    <span>Loading</span>
                    <img src={dotsLoading} alt='loading'/>
                </div>;
    }

    return (
    <div className="service">
        <div className="service-container">
            <div className="service-textContainer">
            <h2 className="service-title">{selectedService.title}</h2>
            {/* <img className="service-icon" src={selectedService.icon} alt={`"icon" ${selectedService.title}`} /> */}
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


export default Service;