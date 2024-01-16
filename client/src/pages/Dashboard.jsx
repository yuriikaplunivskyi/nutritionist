import Loader from "../components/loader/Loader";
import Cursor from "../components/cursor/Cursor";
import "./notfound.scss";
import  {lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Userfront from "@userfront/toolkit/react";
import AddServices from "../components/dashboard/addServices/AddServices";
import ChangeShowAllServices from "../components/dashboard/changeShowAllServices/changeShowAllServices";
export const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
/* export const LazyCursor = lazy(() => import("../components/cursor/Cursor")); */

const DashboardPage = () => {
    const userData = JSON.stringify(Userfront.user, null, 2);
    return (
        <>
            <Cursor/>
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
            <LazyNavbar/>
            <pre>{userData}</pre>
            <button onClick={Userfront.logout}>Logout</button>

            <ChangeShowAllServices/>
            <AddServices/>
            <Link className="notfound-btn" to="/">Повернутися на головну</Link>
            </Suspense>
        </>
    )
}

export default DashboardPage;