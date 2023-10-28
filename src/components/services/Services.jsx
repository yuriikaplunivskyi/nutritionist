import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Popup from "../popup/Popup";
import Accordions from "../accordion/Accordions";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity:0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-50px"})
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
        document.body.classList.add("popup-open");
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.classList.remove("popup-open");
    }

    return (
        <motion.div 
            className="services" 
            variants={variants} 
            animate={ /* isInView && */ "animate"} 
            initial="initial" 
            ref={ref} 
            /*whileInView="animate" 
            animate="animate" */
            >
            <motion.div 
                className="textContainer" 
                variants={variants}>
                <motion.p>Я фокусуюся на підтримці в досягненні<br/>  ваших цілей. </motion.p>
                <motion.hr />
            </motion.div>
            <motion.div 
                className="titleContainer" 
                variants={variants}
                >
                <div className="title">        
                    <img src="/banana.JPG" alt="people" />
                    <h1><motion.b whileHover={{color: "white"}}>Унікальні</motion.b> ідеї</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color: "white"}}>для вашого</motion.b> здоров&apos;я</h1>
                    <button>Що робимо?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div 
                    className="box" 
                    whileHover={{background:"white", color: "#e2a3ab"}}
                    >
                    <h2>Наставництво</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button onClick={openPopup}>Переглянути</button>
                    {isPopupOpen && 
                    <Popup onClose={closePopup}>
                        <Accordions/>
                    </Popup>}
                </motion.div>
                <motion.div 
                    className="box" 
                    whileHover={{background:"white", color: "#e2a3ab"}}
                    >
                    <h2>Наставництво</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button onClick={openPopup}>Переглянути</button>
                    {isPopupOpen && <Popup onClose={closePopup}/>}
                </motion.div>
                <motion.div 
                    className="box" 
                    whileHover={{background:"white", color: "#e2a3ab"}}
                    >
                    <h2>Наставництво</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button onClick={openPopup}>Переглянути</button>
                    {isPopupOpen && <Popup onClose={closePopup}/>}
                </motion.div>
                <motion.div 
                    className="box" 
                    whileHover={{background:"white", color: "#e2a3ab"}}
                    >
                    <h2>Наставництво</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button onClick={openPopup}>Переглянути</button>
                    {isPopupOpen && <Popup onClose={closePopup}/>}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services