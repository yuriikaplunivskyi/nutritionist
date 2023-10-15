import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/navbar";

const App = () => {
  return <div>
    <section id="homepage">
      <Navbar/>
    </section>
    <section id="about">Parallax</section>
    <section id="services">Services</section>
    <section>Parallax</section>
    <section id="reviews">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="contacts">Contact</section>
  </div>;
};

export default App;
