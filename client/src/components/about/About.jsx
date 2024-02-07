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
/*   const [loading, setLoading] = useState(true); */

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${window.location.origin}/api/certificates`);
                
    
                setData(response.data);
                console.log(response.data);
    
                /* setLoading(false); */
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

                <motion.p variants={itemVariants} className="about-text">Вже більше 2-х років я прививаю любов до спорту та збалансованого харчуванню своїм клієнтам. допомагаю людям робити здоровий вибір у харчуванні та житті, набувати фігури мрії, повертати енергію та значно покращувати здоров&apos;я. Я можу вам показати великі можливості збалансованого харчування, а не обмеження, привити любов до фізичної активності без болей і втоми</motion.p>
            </motion.div>
        </div>
    )
}

export default About;