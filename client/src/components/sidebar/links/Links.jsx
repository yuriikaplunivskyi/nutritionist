import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const variants = {
    open: {
        transition: {
            staggeredChildren: 0.09,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.08,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {
    const items = [
        { path: "#homepage", title: "Головна" },
        { path: "#about", title: "Про мене" },
        { path: "#reviews", title: "Як я працюю" },
        { path: "#services", title: "Послуги" },
        { path: "#contacts", title: "Контакти" },
    ];

    const location = useLocation();
    const isHomepage = location.pathname === '/';

    return (
        <motion.ul className="links" variants={variants}>
            {isHomepage ? 
                (items.map((item, index) => (
                    <motion.li key={index} 
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        <Link to={`${item.path}`} >
                            {item.title}
                        </Link>
                        
                    </motion.li>
                ))
            ) : (
                <motion.span
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <Link to="/#services">Головна</Link>
                </motion.span>
            )}
        </motion.ul>
    );
};

export default Links;
