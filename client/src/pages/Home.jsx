import Loader from "../components/loader/Loader";
import Cursor from "../components/cursor/Cursor";
import  {lazy, Suspense } from "react";
export const LazyHero = lazy(() => import("../components/hero/Hero"));
export const LazyNavbar = lazy(() => import("../components/navbar/Navbar"));
/* export const LazyCursor = lazy(() => import("../components/cursor/Cursor")); */

export const LazyAbout = lazy(() => import("../components/about/About"));
export const LazyReview = lazy(() => import("../components/reviews/Review"));
export const LazyServices = lazy(() => import("../components/services/Services"));
export const LazyContact = lazy(() => import("../components/contact/Contact"));
export const LazyParallax = lazy(() => import("../components/parallax/Parallax"));
function Home() {
    return (
        <main>
            <Cursor/>
            <Suspense fallback={<div className="loader-container"><Loader/></div>}>

            <section id="homepage">
                <LazyNavbar/>
                <LazyHero/>
            </section> 
            <section id="about">
                <LazyParallax type="reviews"/>
            </section>
            <section >
                <LazyAbout/>
            </section>
            <LazyReview id="reviews" />
            <section >
                <LazyParallax type="services"/>
            </section>
            <section id="services">
                <LazyServices/>
            </section>
            {/* <section id="contacts">
                <LazyContact/>
            </section> */}
            </Suspense>
        </main>
    )
}

export default Home