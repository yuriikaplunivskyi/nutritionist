import "./about.scss";
import { useRef} from "react";
import { motion, useInView } from "framer-motion";
import Slider from "../slider/Slider";

const slides = [
    {
      id: 1, 
      img: "./img/certificates/nodiet.png",
      school: "Nodiet school",
      title: "Нутриціологія"
    },
    {
      id: 2, 
      img: "./img/certificates/iFit-group-fit.png",
      school: "iFIT",
      title: "Інструктор групових занять"
    },
    {
      id: 3, 
      img: "./img/certificates/fa-bodyMobility.png",
      school: "Fitness academy",
      title: "Body Mobility"
    },
    {
      id: 4, 
      img: "./img/certificates/fa-dprpm.png",
      school: "Fitness academy",
      title: "Діагностика, профілактика та вирішення проблеми м'язового дисбалансу"
    },
    {
      id: 5, 
      img: "./img/certificates/fa-func_training.png",
      school: "Fitness academy",
      title: "Функціональний тренінг/НІІТ"
    },
    {
      id: 6, 
      img: "./img/certificates/fa-pumpIt.png",
      school: "Fitness academy",
      title: "Силове тренування PUMP IT UP & TABS"
    },
    {
      id: 7, 
      img: "./img/certificates/fa-master-trainer_2l.png",
      school: "Fitness academy",
      title: "Майстер тренер тренажерної зали (рівень ІІ)"
    },
    {
      id: 8, 
      img: "./img/certificates/fa-master-trainer_3l.png",
      school: "Fitness academy",
      title: "Майстер тренер тренажерної зали (рівень ІІІ)"
    }
    ];

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

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-50px"})

    return (
        <div className="about">
            <motion.div 
              className="wrapper"
              variants={variants} 
              animate={ isInView && "animate"} 
              initial="initial" 
              ref={ref} 
              whileInView="animate" >
                <motion.div className="about-imgContainer">
                    <motion.img src="./img/whoami.jpg" alt="eee" />
                </motion.div>
                <Slider slides={slides}/>
                <motion.h3 className="about-title">Я сертифікований фітнес-тренер та нутриціолог</motion.h3>
                <motion.p className="about-text">Вже більше 2-х років я прививаю любов до спорту та збалансованого харчуванню своїм клієнтам. допомагаю людям робити здоровий вибір у харчуванні та житті, набувати фігури мрії, повертати енергію та значно покращувати здоров&apos;я. Я можу вам показати великі можливості збалансованого харчування, а не обмеження, привити любов до фізичної активності без болей і втоми</motion.p>
            </motion.div>
        </div>
    )
}

export default About;