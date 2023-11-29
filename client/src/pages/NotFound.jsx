import Loader from "../components/loader/Loader";
import "./notfound.scss";
import  {lazy, Suspense } from "react";
import { Link } from "react-router-dom";
export const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
export const LazyCursor = lazy(() => import("../components/cursor/Cursor"));

const NotFound = () => {
    return (
        <Suspense fallback={<div className="loader-container"><Loader/></div>}>
        <LazyCursor/>
        <LazyNavbar/>
        <section className="notfound">
                <h2>404 Сторінка нажаль відсутня</h2>
                <Link className="notfound-btn" to="/">Повернутися на головну</Link>
            </section>
        </Suspense>
    )
}

export default NotFound