import Loader from "../components/loader/Loader";

import Cursor from "../components/cursor/Cursor";
import  {lazy, Suspense } from "react";
export const LazyService = lazy(() => import("../components/service/Service"));
export const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
export const LazyContact = lazy(() => import("../components/contact/Contact"));


const ServicePage = () => {

    return (
        <div>
            <>
            <Cursor/>
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>
                <LazyNavbar />
                <LazyService />
                {/* <section>
                    <LazyContact/>
                </section> */}
            </Suspense>
            </>
        </div>
    )
}

export default ServicePage