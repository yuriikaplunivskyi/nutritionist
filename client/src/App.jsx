import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Review from "./components/reviews/Review";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";

const slides = [
  {
    id: 1, 
    img: "/certificates/noDiet-nutritionists.jpg",
    school: "Nodiet school",
    title: "Нутріціологія"
  },
  {
    id: 2, 
    img: "/certificates/iFit-group-fit.png",
    school: "iFIT",
    title: "Інструктор групових занять"
  },
  {
    id: 3, 
    img: "/certificates/fa-bodyMobility.png",
    school: "Fitness academy",
    title: "Body Mobility"
  },
  {
    id: 4, 
    img: "/certificates/fa-dprpm.png",
    school: "Fitness academy",
    title: "Діагностика, профілактика та вирішення проблеми м'язового дисбалансу"
  },
  {
    id: 5, 
    img: "/certificates/fa-func_training.png",
    school: "Fitness academy",
    title: "Функціональний тренінг/НІІТ"
  },
  {
    id: 6, 
    img: "/certificates/fa-pumpIt.png",
    school: "Fitness academy",
    title: "Силове тренування IT UP & TABS"
  },
  {
    id: 7, 
    img: "/certificates/fa-master-trainer_2l.png",
    school: "Fitness academy",
    title: "Майстер тренажерної зали (рівень ІІ)"
  },
  {
    id: 8, 
    img: "/certificates/fa-master-trainer_3l.png",
    school: "Fitness academy",
    title: "Майстер тренажерної зали (рівень ІІІ)"
  }
];

const App = () => {
  return <div>
    <Cursor/>
    <section id="homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section>
      <About/>
    </section>
    <section>
      <Parallax type="reviews"/>
    </section>
    <Review/>
    <section id="certs">
      <Slider slides={slides}/>
    </section>
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
