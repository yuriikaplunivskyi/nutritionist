import Loader from "../components/loader/Loader";
import Cursor from "../components/cursor/Cursor";
import { lazy, Suspense } from "react";
import useServiceData from '../hooks/useServiceData';

const LazyService = lazy(() => import("../components/service/Service"));
const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
const LazyFormService = lazy(() => import("../components/contact/Contact"));

const ServicePage = () => {
    const { serviceData } = useServiceData();

    if (!serviceData) {
        return <Loader />;
    }

    return (
        <main>
            <Cursor />
            <Suspense fallback={<div className="loader-container"><Loader /></div>}>
                <LazyNavbar />
                <LazyService />
                <LazyFormService />
            </Suspense>
        </main>
    );
};

export default ServicePage;
