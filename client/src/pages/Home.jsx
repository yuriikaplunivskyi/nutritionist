import Cursor from "../components/cursor/Cursor";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

import About from "../components/about/About";
import Review from "../components/reviews/Review";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Parallax from "../components/parallax/Parallax";
function Home() {
    return (
        <main>
            <Cursor/>

            <section id="homepage">
                <Navbar/>
                <Hero/>
            </section> 
            <section id="about">
                <Parallax type="reviews"/>
            </section>
            <section >
                <About/>
            </section>
            <Review id="reviews" />
            <section >
                <Parallax type="services"/>
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