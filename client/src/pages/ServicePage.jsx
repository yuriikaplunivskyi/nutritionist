import { lazy, Suspense, useEffect } from "react";
import Loader from "../components/loader/Loader";
import Cursor from "../components/cursor/Cursor";
import useServiceData from '../hooks/useServiceData';
const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
const LazyService = lazy(() => import("../components/service/Service"));
const LazyFormService = lazy(() => import("../components/contact/Contact"));

const ServicePage = () => {
    const { serviceData  } = useServiceData();


    if (!serviceData) {
        return <Loader />;
    }

    return (
        <main>
            <Cursor />
            <Suspense fallback={<div className="loader-container"><Loader /></div>}>
                <LazyNavbar />
            </Suspense>

            <Suspense fallback={<div className="loader-container"><Loader /></div>}>
                <LazyService />
            </Suspense>

            <Suspense fallback={<div className="loader-container"><Loader /></div>}>
                <LazyFormService />
            </Suspense>
        </main>
    );
};

export default ServicePage;
