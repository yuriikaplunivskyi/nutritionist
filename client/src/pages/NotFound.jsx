import Loader from "../components/loader/Loader";
import Cursor from "../components/cursor/Cursor";
import "./notfound.scss";
import  {lazy, Suspense } from "react";
import { Link } from "react-router-dom";
export const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
/* export const LazyCursor = lazy(() => import("../components/cursor/Cursor")); */

const NotFound = () => {
    return (
        <>
            <Cursor/>
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
            <LazyNavbar/>
            <section className="notfound">
                <h2>Сторінка нажаль відсутня</h2>
                <Link className="notfound-btn" to="/">Повернутися на головну</Link>
            </section>
            </Suspense>
        </>
    )
}

export default NotFound;