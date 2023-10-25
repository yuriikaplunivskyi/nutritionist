import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
    return (
        <div className="navbar">
        <Sidebar/>
            <div className="wrapper">
                <div className="social">
                    <a href="#"><img src="/facebook.svg" alt="facebook" /></a>
                    <a href="#"><img src="/instagram.svg" alt="instagram" /></a>
                    <a href="#"><img src="/tiktok.svg" alt="tiktok" /></a>
                    <a href="#"><img src="/telegram.svg" alt="telegram" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;