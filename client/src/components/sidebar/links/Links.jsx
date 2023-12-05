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
        { path: "homepage", title: "Головна" },
        { path: "about", title: "Про мене" },
        { path: "reviews", title: "Як я працюю" },
        { path: "services", title: "Послуги" },
        { path: "contacts", title: "Контакти" }
    ];

    return (
        <motion.div 
            className="links" 
            variants={variants}
            >
            {items.map((item, index) => (
                <Link to={`${location.pathname}#${item.path}`}  key={index} >
                    <motion.span
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{scale: 0.9}}
                        >
                        {item.title}
                    </motion.span>
                </Link>
            ))}
        </motion.div>
    );
};

export default Links;
