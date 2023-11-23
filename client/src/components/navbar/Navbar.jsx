import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
    return (
        <div className="navbar">
        <Sidebar/>
            <div className="wrapper">
                <div className="social">
                    <a href="#"><img src="%PUBLIC_URL%/facebook.svg" alt="facebook" /></a>
                    <a href="#"><img src="%PUBLIC_URL%/instagram.svg" alt="instagram" /></a>
                    <a href="#"><img src="%PUBLIC_URL%/tiktok.svg" alt="tiktok" /></a>
                    <a href="#"><img src="%PUBLIC_URL%/telegram.svg" alt="telegram" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;