import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import BMWShowcase from "./BMWShowcase";
import Slideshow from "./Slideshow";
import NewsSection from "./NewsSection";
import PartsScroller from "./PartsScroller";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <article>
        <section>
          <Navbar />
          <Hero />
          <BMWShowcase />
          <Slideshow />
          <NewsSection />
          <PartsScroller />
        </section>
        <Footer />
      </article>
    </div>
  );
}

export default App;
