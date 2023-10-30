import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Popup from "../popup/Popup";

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

const serviceData = [
    {
        title: 'Наставництво',
        id: 1,
        content: `Повний комплекс підтримки
        +входить "Покричати в голосових" + життя — цікаве, і мотивація то є сильна: філософія, психологія. саме головне — залишайтеся людьми і кричіть, що ви живі 

        Я ЖИВИИИИИЙ! Я СИЛЬНИЙ!`,
        price: '200₴',
        warnings: [
            {
                title: 'Гострий геморой',
                id: 1,
                content: `Проходьте мимо`
            },
            {
                title: 'Простатит',
                id: 2,
                content: `Проходьте мимо`
            },
            {
                title: 'Алкоголізм',
                id: 3,
                content: `Проходьте мимо`
            },
            {
                title: 'Наркозвлежність',
                id: 4,
                content: `Проходьте мимо`
            },
            {
                title: 'Розбите серце',
                id: 5,
                content: `Проходьте мимо`
            }
        ]
    },
    {
        title: 'Персональний тренер',
        id: 2,
        content: `Супроводжую вас на тренування онлайн. Пишу план тренувань.`,
        price: '200₴',
        warnings: [
            {
                title: 'Гострий геморой',
                id: 1,
                content: `Проходьте мимо`
            },
            {
                title: 'Простатит',
                id: 2,
                content: `Проходьте мимо`
            },
            {
                title: 'Алкоголізм',
                id: 3,
                content: `Проходьте мимо`
            },
            {
                title: 'Наркозвлежність',
                id: 4,
                content: `Проходьте мимо`
            },
            {
                title: 'Розбите серце',
                id: 5,
                content: `Проходьте мимо`
            }
        ]
    },
    {
        title: 'Консультація',
        id: 3,
        content: `Обговоримо план дій`,
        price: '200₴',
        warnings: [
            {
                title: 'Гострий геморой',
                id: 1,
                content: `Проходьте мимо`
            },
            {
                title: 'Простатит',
                id: 2,
                content: `Проходьте мимо`
            },
            {
                title: 'Алкоголізм',
                id: 3,
                content: `Проходьте мимо`
            },
            {
                title: 'Наркозвлежність',
                id: 4,
                content: `Проходьте мимо`
            },
            {
                title: 'Розбите серце',
                id: 5,
                content: `Проходьте мимо`
            }
        ]
    },
    {
        title: 'Покричу, щоб ходили в зал',
        id: 4,
        content: `Голосові повідомлення з мотивацією, три рази в тиждень
        .`,
        price: '200₴',
        warnings: [
            {
                title: 'Гострий геморой',
                id: 1,
                content: `Проходьте мимо`
            },
            {
                title: 'Простатит',
                id: 2,
                content: `Проходьте мимо`
            },
            {
                title: 'Алкоголізм',
                id: 3,
                content: `Проходьте мимо`
            },
            {
                title: 'Наркозвлежність',
                id: 4,
                content: `Проходьте мимо`
            },
            {
                title: 'Розбите серце',
                id: 5,
                content: `Проходьте мимо`
            }
        ]
    }
];

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-50px"})
    const [selectedService, setSelectedService] = useState(null);

    const openPopup = (item) => {
        setSelectedService(item);
        document.body.classList.add("popup-open");
    };

    const closePopup = () => {
        setSelectedService(null);
        document.body.classList.remove("popup-open");
    };

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
                {serviceData.map((item) => 
                        (<motion.div 
                        className="box"
                        key={item.id}
                        >
                        <h2 className="box-title">{item.title}</h2>
                        <p className="box-text">{item.content}</p>
                        <button className="learn-more" onClick={() => openPopup(item)}>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Переглянути</span>
                        </button>
                        {selectedService && 
                            <Popup 
                            item={selectedService} 
                            onClose={closePopup} 
                            />}
                    </motion.div>)
                )}
            </motion.div>
        </motion.div>
    )
}

export default Services