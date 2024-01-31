import { useScroll } from "framer-motion";
import { useRef } from "react";

import Cursor from "../components/cursor/Cursor";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

import About from "../components/about/About";
import Review from "../components/reviews/Review";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Parallax from "../components/parallax/Parallax";

function Home() {
    const mainRef = useRef(null);
    const { scrollY } = useScroll({ container: mainRef });

    return (
        <main ref={mainRef}>
            <Cursor/>

            <section id="homepage">
                <Navbar/>
                <Hero/>
            </section> 
            <section id="about">
                <Parallax type="reviews" mainRef={mainRef}/>
            </section>
            <section >
                <About/>
            </section>
            <Review id="reviews" mainRef={mainRef} />
            <section >
                <Parallax type="services" mainRef={mainRef}/>
            </section>
            <section id="services">
                <Services/>
            </section>
            <section id="contacts">
                <Contact/>
            </section>
        </main>
    )
}

export default Home