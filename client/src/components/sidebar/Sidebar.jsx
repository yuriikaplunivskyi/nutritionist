import { useEffect, useState } from "react";
import Links from "./links/Links";
import { motion } from "framer-motion";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 430);
        };

        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (open && !event.target.closest(".sidebar")) {
            setOpen(false);
        }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    const variants = {
        open: {
        clipPath: isMobile ? "circle(1200px at 45px 45px)" : "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20
        }
        },
        closed: {
        clipPath: isMobile ? "circle(20px at 45px 45px)" : "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
        }
    };

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton id="menu button" setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;
