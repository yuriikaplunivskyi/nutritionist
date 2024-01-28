import Cursor from "../components/cursor/Cursor";
import "./notfound.scss";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const NotFound = () => {
    return (
        <>
            <Cursor/>
            <Navbar/>
            <section className="notfound">
                <h2>Сторінка нажаль відсутня</h2>
                <Link className="notfound-btn" to="/">Повернутися на головну</Link>
            </section>
        </>
    )
}

export default NotFound;