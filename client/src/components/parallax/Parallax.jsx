import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({type}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const yRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

    return (
        <div 
            className="parallax" 
            ref={ref}
            style={{
            background:
            type==="services"
                ? "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(226,163,171,1) 100%, rgba(255,255,255,0.9401961468181023) 100%)"
                : "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(226,163,171,1) 100%, rgba(255,255,255,0.9401961468181023) 100%)"}}>
            <motion.h1 style={{y: yText}}>{type==="services" ? "Як я працюю?": "Хто я? "}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div 
                className="planets"
                style={{y: yBg,
                    rotate: yRotate,
                    backgroundImage:
                    `url(${type==="services"
                        ? "/planets.png"
                        : "/sun.png"})`}}
            ></motion.div>
            <motion.div className="stars" style={{x: yBg}}></motion.div>
        </div>
    )
}

export default Parallax