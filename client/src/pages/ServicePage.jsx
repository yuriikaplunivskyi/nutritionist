
import Loader from "../components/loader/Loader";
import  {lazy, Suspense } from "react";
export const LazyService = lazy(() => import("../components/service/Service"));
export const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
export const LazyCursor = lazy(() => import("../components/cursor/Cursor"));
const ServicePage = () => {
    return (
        <div>
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
                <LazyCursor/>
                <LazyNavbar/>
                <LazyService/>
            </Suspense>
        </div>
    )
}

export default ServicePage