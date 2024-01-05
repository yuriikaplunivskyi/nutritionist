import Loader from "../components/loader/Loader";
import Cursor from "../components/cursor/Cursor";
import "./notfound.scss";
import  {lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import AddServices from "../components/addServices/AddServices";
export const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
/* export const LazyCursor = lazy(() => import("../components/cursor/Cursor")); */

const DashboardPage = () => {
    return (
        <>
            <Cursor/>
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
            <LazyNavbar/>
            <AddServices/>
            <Link className="notfound-btn" to="/">Повернутися на головну</Link>
            
            </Suspense>
        </>
    )
}

export default DashboardPage;