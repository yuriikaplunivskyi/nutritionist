import { useParams } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";

import Accordions from "../accordion/Accordions";
import "./service.scss";
import dotsLoading from "/icon/dots-loading.gif";
import useServiceData from '../../hooks/useServiceData';


const variants = {
    initial: {
        x: -250,
        opacity: 0,
        
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}

const Service = () => {
    const { serviceData } = useServiceData();
    const { serviceId } = useParams();
    const ref = useRef();


    const selectedService = serviceData.find((service) => service.path === serviceId);

    if (!selectedService) {
        return <div className="loading">
                    <img src={dotsLoading} alt='loading'/>
                </div>;
    }

    return (
    <motion.div 
            className="service"
            ref={ref}
            variants={variants} 
            
            >
        <motion.div className="service-container" variants={variants}>
            <motion.div className="service-textContainer" initial="initial" 
            whileInView="animate" variants={variants}>
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
            </motion.div>
            <Accordions data={selectedService.warnings} />
        </motion.div>
    </motion.div>
    );
};


export default Service;