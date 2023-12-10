import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    
    const navigate = useNavigate();
    const items = [
        { path: "homepage", title: "Головна" },
        { path: "about", title: "Про мене" },
        { path: "reviews", title: "Як я працюю" },
        { path: "services", title: "Послуги" },
        { path: "contacts", title: "Контакти" }
    ];

    return (
        <motion.ul 
            className="links" 
            variants={variants}
            >
            {items.map((item, index) => (
                <li key={index} >
                    <motion.a
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{scale: 0.9}}
                        onClick={() => {
                        if (item.path === "homepage") {
                            navigate("/");
                        } else {
                            navigate(
                            `/#${item.path}`,
                            );
                        }
                        }}
                        >
                        {item.title}
                    </motion.a>
                </li>
            ))}
        </motion.ul>
    );
};

export default Links;
