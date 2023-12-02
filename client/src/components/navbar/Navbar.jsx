import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
    return (
        <header className="navbar">
        <Sidebar/>
            <div className="wrapper">
                <ul className="social">
                    <li>
                        <a href="#"><img src="/facebook.svg" alt="facebook" /></a>
                        </li>
                    <li>
                        <a href="#"><img src="/instagram.svg" alt="instagram" /></a>
                        </li>
                    <li>
                        <a href="#"><img  src="/tiktok.svg" alt="tiktok" /></a>
                        </li>
                    <li>
                        <a href="#"><img src="/telegram.svg" alt="telegram" /></a>
                        </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;