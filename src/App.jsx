import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
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
    <section id="reviews">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="contacts">Contact</section>
  </div>;
};

export default App;
