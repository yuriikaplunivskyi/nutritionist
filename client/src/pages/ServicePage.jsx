import Loader from "../components/loader/Loader";

import Cursor from "../components/cursor/Cursor";
import  {lazy, Suspense } from "react";
export const LazyService = lazy(() => import("../components/service/Service"));
export const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
export const LazyFormService = lazy(() => import("../components/formService/FormService"));


const ServicePage = () => {

    return (
        <main >
            <Cursor/>
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
                <LazyNavbar />
                <LazyService />
                <LazyFormService/>
            </Suspense>
        </main>
    )
}

export default ServicePage