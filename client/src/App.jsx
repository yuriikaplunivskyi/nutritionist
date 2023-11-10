import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Review from "./components/reviews/Review";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";

const slides = [
  <img src="/people.webp" key="1" alt="Slide 1" />,
  <img src="/paper.png" key="2" alt="Slide 2" />,
  <img src="//sun.png" key="3" alt="Slide 3" />
];

const App = () => {
  return <div>
    <Cursor/>
    <section>
      <Slider slides={slides}/>
    </section>
    <section id="homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section>
      <Parallax type="reviews"/>
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
    </section>
  </div>
};

export default App;
