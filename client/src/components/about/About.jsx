import "./about.scss";
import { useEffect, useRef, useState} from "react";
import { motion, useInView } from "framer-motion";
import Slider from "../slider/Slider";
import axios from "axios";

const slides = [
    {
      id: 1, 
      img_path: "/img/certificates/nodiet.png",
      school: "Nodiet school",
      title: "Нутриціологія"
    },
    {
      id: 2, 
      img_path: "/img/certificates/iFit-group-fit.png",
      school: "iFIT",
      title: "Інструктор групових занять"
    },
    {
      id: 3, 
      img_path: "/img/certificates/fa-bodyMobility.png",
      school: "Fitness academy",
      title: "Body Mobility"
    },
    {
      id: 4, 
      img_path: "/img/certificates/fa-dprpm.png",
      school: "Fitness academy",
      title: "Діагностика, профілактика та вирішення проблеми м'язового дисбалансу"
    },
    {
      id: 5, 
      img_path: "/img/certificates/fa-func_training.png",
      school: "Fitness academy",
      title: "Функціональний тренінг/НІІТ"
    },
    {
      id: 6, 
      img_path: "/img/certificates/fa-pumpIt.png",
      school: "Fitness academy",
      title: "Силове тренування PUMP IT UP & TABS"
    },
    {
      id: 7, 
      img_path: "/img/certificates/fa-master-trainer_2l.png",
      school: "Fitness academy",
      title: "Майстер тренер тренажерної зали (рівень ІІ)"
    },
    {
      id: 8, 
      img_path: "/img/certificates/fa-master-trainer_3l.png",
      school: "Fitness academy",
      title: "Майстер тренер тренажерної зали (рівень ІІІ)"
    }
    ];

const itemVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5, 
    },
  },
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "0px"})

  const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/certificates`);

                setData(response.data);
                console.log(response.data);
    
                
            } catch (error) {
                console.log(error);
                console.error('Error fetching service data:', error);
                setData(slides);
                /* setLoading(false); */
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="about">
            <motion.div 
              className="wrapper"
              variants={containerVariants} 
              animate={ isInView && "animate"} 
              initial="initial" 
              ref={ref} 
              whileInView="animate">
                <motion.h3 variants={itemVariants} className="about-title">Я сертифікований фітнес-тренер та нутриціолог</motion.h3>
                <motion.div variants={itemVariants} className="about-imgContainer">
                    <motion.img src="./img/whoami.webp" alt="who I am" />
                </motion.div>
                <Slider variants={itemVariants} slides={data}/>

                <motion.p variants={itemVariants} className="about-text">З першого дня моєї роботи, моя мета полягає у внесенні позитивних змін у життя моїх клієнтів через тренування та збалансоване харчування. Я прагну допомогти людям зробити свідомий вибір на користь здорового харчування та активного способу життя. Моя місія - показати, що збалансоване харчування та тренування не є обмеженням, а скрізь та завжди відкривають великі можливості для досягнення мети та гармонії в житті.</motion.p>
            </motion.div>
        </div>
    )
}

export default About;