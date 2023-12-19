import "./hero.scss"
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const textVariants = {
    initial: {
        x: -900,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.15
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 50,
            repeatType: "mirror",
            repeat: Infinity
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    >
                    <motion.h2 variants={textVariants}>Катерина Каплунівська</motion.h2>
                    <motion.h1 variants={textVariants}>Персональний тренер та нутриціолог</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.span variants={textVariants}>
                            <HashLink to={`#about`} smooth>Про мене</HashLink>
                        </motion.span>
                        <motion.span variants={textVariants}>
                            <HashLink to={`#contacts`} smooth>Зв&#39;язатися зі мною</HashLink>
                        </motion.span>
                    </motion.div>
                    <motion.img 
                        variants={textVariants}
                        animate="scrollButton"
                        src="./img/scroll.png" 
                        alt="scroll button" 
                    />
                </motion.div>                
            </div>

            <motion.div 
                className="slidingTextContainer"
                initial="initial"
                animate="animate" 
                variants={sliderVariants}
            >
                NUTRITIONIST PERSONAL COACH HEALTH COACH  ---------------------------------------------            </motion.div>
            
            <div className="imageContainer">
                <img  src="./img/hero.png" alt="hero img" />
            </div>
        </div>
    )
}

export default Hero