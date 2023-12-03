import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
    open: {
        transition:{
            staggeredChildren: 0.09,
        }
    },
    closed: {
        transition:{
            staggerChildren: 0.08,
            staggerDirection: -1
        }
    }
}
const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
}

const Links = () => {
    const items = [
        { english: "homepage", ukrainian: "Головна" },
        { english: "about", ukrainian: "Про мене" },
        { english: "reviews", ukrainian: "Як я працюю" },
        { english: "services", ukrainian: "Послуги" },
        { english: "contacts", ukrainian: "Контакти" }
    ];

    return (
        <motion.div 
            className="links" 
            variants={variants}
            >
            {items.map((item, index) => (
                <Link href={`#${item.english}`}  key={index} >
                    <motion.span
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{scale: 0.9}}
                        >
                        {item.ukrainian}
                    </motion.span>
                </Link>
            ))}
        </motion.div>
    );
};

export default Links;
