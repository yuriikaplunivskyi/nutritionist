import "./services.scss";
import { useRef} from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import useServiceData from '../../hooks/useServiceData';
import dotsLoading from "/icon/dots-loading.gif";

const variants = {
    initial: {
        x: -200,
        y: 10,
        opacity:0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5
        }
    }
}


const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-50px"});
    const { serviceData, loading } = useServiceData();

    return (
        <div className="services-container">
        <motion.div 
            className="services" 
            variants={variants} 
            animate={ isInView && "animate"} 
            initial="initial" 
            ref={ref} 
            whileInView="animate"  
            /* animate="animate" */
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
                    <img src="./img/banana.webp" alt="people" />
                    <h2><motion.b whileHover={{color: "#0f0a0a"}}>Виберіть </motion.b> ідеальний</h2>
                </div>
                <div className="title">
                    <h2><motion.b whileHover={{color: "#0f0a0a"}}>варіант </motion.b> співпраці</h2>
                    <button>Що робимо?</button>
                </div>
            </motion.div>

            {loading ? (
                <div className="loading" style={{height: "100%"}}>
                    <img style={{width: "40px"}} src={dotsLoading} alt="loading"/>
                </div>
            ) : (
                <motion.div className="listContainer" 
                    variants={variants} 
                    animate={ isInView && "animate"} 
                    initial="initial" 
                    ref={ref} 
                    whileInView="animate" 
                >
                    {serviceData.map((item) => 
                            (
                            <motion.div 
                                className="box"
                                key={item.id}
                            >
                            <h2 className="box-title">{item.title}</h2>
                            
                            <Link 
                                className="box-btn-container" 
                                to={{ pathname: `/service/${item.path}`}}
                                >
                                {/* <img className="box-icon" src={item.icon} alt={`"icon" ${item.title}`} /> */}
                                <button>Переглянути</button>
                            </Link>
                            
                        </motion.div>)
                    )}
                </motion.div>
            )}
        </motion.div>
        </div>
    )
}

export default Services