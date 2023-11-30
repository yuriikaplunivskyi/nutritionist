import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
    return (
        <header className="navbar">
        <Sidebar/>
            <div className="wrapper">
                <ul className="social">
                    <li>
                        <a href="#"><img src="../public/facebook.svg" alt="facebook" /></a>
                        </li>
                    <li>
                        <a href="#"><img src="../public/instagram.svg" alt="instagram" /></a>
                        </li>
                    <li>
                        <a href="#"><img  src="../public/tiktok.svg" alt="tiktok" /></a>
                        </li>
                    <li>
                        <a href="#"><img src="../public/telegram.svg" alt="telegram" /></a>
                        </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;