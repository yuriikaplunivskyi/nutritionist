import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

import instagramIcon from "/img/instagram.svg";
import telegramIcon from "/img/telegram.svg";
import tiktokIcon from "/img/tiktok.svg";

const Navbar = () => {
    return (
        <header className="navbar">
        <Sidebar />
            <div className="wrapper">
                <ul className="social">
                    <li>
                        <a href="https://www.instagram.com/kateryna_kaplunivska?igsh=NXF5NzBwMHcxczEw"><img src={instagramIcon} alt="instagram" /></a>
                        </li>
                    <li>
                        <a href="https://www.tiktok.com/@kateryna_kaplunivska?_t=8jaFid5BF4v&_r=1"><img  src={tiktokIcon} alt="tiktok" /></a>
                        </li>
                    <li>
                        <a href="https://t.me/kateryna_kaplunivska"><img src={telegramIcon} alt="telegram" /></a>
                        </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;