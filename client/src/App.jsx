import React, { Suspense } from "react";
import "./app.scss";
import { LazyHero, LazyNavbar, LazyCursor, LazyAbout, LazyReview, LazyServices, LazyContact } from "./LazyComponents";

import Loader from "./components/loader/Loader";


const App = () => {
  return (
    <div>
      <Suspense fallback={<div className="loader-container"><Loader/></div>}>
        <LazyCursor />
        <section id="homepage">
          <LazyNavbar />
          <LazyHero />
        </section>
        <section>
          <LazyReview />
        </section>
        <section id="about">
          <LazyAbout />
        </section>
        <section>
          <LazyServices />
        </section>
        <section id="services">
          <LazyContact />
        </section>
      </Suspense>
    </div>
  );
};

export default App;
