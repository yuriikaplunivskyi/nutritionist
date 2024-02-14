import "./changeShowAllServices.scss"

import axios from 'axios';
import useServiceData from '../../../hooks/useServiceData';
import Accordions from "../../accordion/Accordions";
import UpdateService from "../updateService/UpdateService";
import { useEffect, useState } from "react";

const ChangeShowAllServices = () => {

    const { serviceData: initialServiceData } = useServiceData();

    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const [serviceData, setLocalServiceData] = useState(initialServiceData);

    useEffect(() => {
        setLocalServiceData(initialServiceData);
    }, [initialServiceData]);

    const handleDelete = async (id) => {
        try {
            console.log(id)
            await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/services/${id}`);
            setLocalServiceData((prevData) =>
                prevData.filter((service) => service.id !== id)
            );
        } catch (error) {
            console.log("What the error", error);
        }
    }
    const handleUpdate = (id) => {
        setSelectedServiceId(id);
    }
return (
    <>
    {selectedServiceId ? (
        <UpdateService serviceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} />
    ) : (
    serviceData.map((service) => (
        <div className="serviceAdmin" key={service.id}>
            <div className="service-container" >
                <div className="service-textContainer">
                <h2 className="service-title">{service.title}</h2>
                {/* <img className="service-icon" src={selectedService.icon} alt={`"icon" ${selectedService.title}`} /> */}
                <p className="service-text">{service.descr}</p>
                <ol>
                    <span>Як проходить</span>
                    {service.passing.map((pass) => (
                    <li key={pass.id}>{pass.stage}</li>
                    ))}
                </ol>

                <ul>
                    <span className="service-price-title"> Вартість: </span>
                    {service.prices.map((price) => (
                    <li className="service-price" key={price.id}>{price.price}</li>
                    ))}
                </ul>
                </div>
                <Accordions data={service.warnings} />
                <span>{service.path}</span>
            </div>
            <div className="serviceAdmin-btnWrapper">
                <button className="serviceAdmin delete btn" onClick={() => handleDelete(service.id)}>Видалити</button>
                <button className="serviceAdmin change btn" onClick={() => handleUpdate(service.id)}>Змінити</button>
            </div>
        </div>
    )
    ))}
    </>
)
}

export default ChangeShowAllServices;