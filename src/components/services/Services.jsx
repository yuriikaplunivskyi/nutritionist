import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <motion.div className="services">
            <motion.div className="textContainer">
                <motion.p>Я фокусуюся на підтримці в досягненні<br/>  ваших цілей. </motion.p>
                <motion.hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="people" />
                    <h1><b>Унікальні</b> ідеї</h1>
                </div>
                <div className="title">
                    <h1><b>для вашого</b> здоров&apos;я</h1>
                    <button>Що робимо?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <div className="box">
                    <h2>Lorem impsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Lorem impsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Lorem impsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Lorem impsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button>Go</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Services