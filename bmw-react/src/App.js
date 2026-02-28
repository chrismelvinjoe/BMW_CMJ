import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BMWShowcase from "./BMWShowcase";
import Slideshow from "./Slideshow";
import BMWConcepts from "./BMWConcepts";
import CarouselSection from "./CarouselSection";
import BMWM from "./BMW M";
import AllModels from "./AllModels";
import Footer from "./Footer";

function Home() {
  return (
    <article>
      <section>
        <Navbar />
        <Hero />
        <BMWShowcase />
        <Slideshow />
        <BMWConcepts />
        <CarouselSection />
      </section>
      <Footer />
    </article>
  );
}

function AllModelsPage() {
  return (
    <article>
      <section>
        <Navbar />
        <AllModels />
      </section>
      <Footer />
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<AllModelsPage />} />
          <Route path="/BMWM" element={<BMWM />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
