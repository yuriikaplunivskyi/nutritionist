import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Review from "./components/reviews/Review";
import Services from "./components/services/Services";



const App = () => {
  return <div>
    <Cursor/>
    <section id="homepage">
      <Navbar/>
      <Hero/>
    </section>
    {/* <section>
      <Parallax type="reviews"/>
    </section>
    <section>
      <About/>
    </section>
    <Review/>
    <section id="about">
      <Parallax type="services"/>
    </section>
    <section id="services">
      <Services/>
    </section>
    <section id="contacts">
      <Contact/>
    </section> */}
  </div>
};

export default App;
