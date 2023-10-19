import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Review from "./components/reviews/Review";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="about">
      <Parallax type="services"/>
    </section>
    <section id="services">
      <Services/>
    </section>
    <section>
      <Parallax type="reviews"/>
    </section>
      <Review/>
    <section id="contacts">
      <Contact/>
    </section>
  </div>;
};

export default App;
