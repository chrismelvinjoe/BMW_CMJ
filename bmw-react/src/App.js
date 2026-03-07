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
import Evolution from "./Evolution";
import BMWM3 from "./BMWM3";
import NeueKlasse from "./NeueKlasse";
import Garmisch from "./Garmisch";
import Racing from './Racing';
import Interior from "./Interior";
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

function EvolutionPage() {
  return (
    <article>
      <section>
        <Navbar />
        <Evolution />
      </section>
      <Footer />
    </article>
  );
}

function BMWM3Page() {
  return (
    <article>
      <section>
        <Navbar />
        <BMWM3 />
      </section>
      <Footer />
    </article>
  );
}

const NeueKlassePage = () => <><Navbar /><NeueKlasse /><Footer /></>;
const GarmischPage = () => <><Navbar /><Garmisch /><Footer /></>;
const RacingPage = () => <><Navbar /><Racing /><Footer /></>;
const InteriorPage = () => <><Navbar /><Interior /><Footer /></>;

function App() {
  return (
    <div className="App">
      <style>
        {`
          @font-face {
            font-family: 'Openspace';
            src: url('/assets/fonts/openspace/OpenspaceRegular.otf') format('opentype');
          }
          @font-face {
            font-family: 'Mirano';
            src: url('/assets/fonts/mirano/MiranoExtendedFreebie-Light.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Chiroto';
            src: url('/assets/fonts/chiroto/Chiroto DEMO.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Nuqun';
            src: url('/assets/fonts/nuqun/Nuqun-Regular.otf') format('opentype');
          }
          @font-face {
            font-family: 'Chat Favour';
            src: url('/assets/fonts/chat_favour/Chat Favour.otf') format('opentype');
          }
          @font-face {
            font-family: 'Nose Transport';
            src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport16-RegularSquare.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Nose Transport BoldDot';
            src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport16-BoldDot.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Nose Transport ThinDot';
            src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport16-ThinDot.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Nose Transport RegularDot';
            src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport16-RegularDot.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Corpta';
            src: url('/assets/fonts/corpta/Corpta DEMO.otf') format('opentype');
          }
          @font-face {
            font-family: 'Mirano Italic';
            src: url('/assets/fonts/mirano/MiranoExtendedFreebie-LightItalic.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Openspace Black';
            src: url('/assets/fonts/openspace/OpenspaceBlack.otf') format('opentype');
          }
          @font-face {
            font-family: 'Openspace Bold';
            src: url('/assets/fonts/openspace/OpenspaceBold.otf') format('opentype');
          }
          @font-face {
            font-family: 'Openspace Line';
            src: url('/assets/fonts/openspace/OpenspaceLine.otf') format('opentype');
          }
          @font-face {
            font-family: 'Openspace Thin';
            src: url('/assets/fonts/openspace/OpenspaceThin.otf') format('opentype');
          }
          @font-face {
            font-family: 'Glint Race';
            src: url('/assets/fonts/glint_race/Glint Race.otf') format('opentype');
          }
          @font-face {
            font-family: 'Red Planet';
            src: url('/assets/fonts/red_planet/LjP RedPlanet.otf') format('opentype');
          }
          @font-face {
            font-family: 'Red Planet Bold';
            src: url('/assets/fonts/red_planet/LjP RedPlanet Bold.otf') format('opentype');
          }
          @font-face { font-family: 'Nose Transport 16 BoldSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport16-BoldSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 16 LightDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport16-LightDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 16 LightSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport16-LightSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 16 ThinSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport16-ThinSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 13 BoldDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport13-BoldDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 13 BoldSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport13-BoldSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 13 LightDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport13-LightDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 13 LightSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport13-LightSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 13 RegularDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport13-RegularDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 13 RegularSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport13-RegularSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 13 ThinDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport13-ThinDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 13 ThinSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport13-ThinSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 9 BoldDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport9-BoldDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 9 BoldSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport9-BoldSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 9 LightDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport9-LightDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 9 LightSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport9-LightSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 9 RegularDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport9-RegularDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 9 RegularSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport9-RegularSquare.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 9 ThinDot'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport9-ThinDot.woff2') format('woff2'); }
          @font-face { font-family: 'Nose Transport 9 ThinSquare'; src: url('/assets/fonts/nose_tansport/Nose Transport/Web/NoseTransport9-ThinSquare.woff2') format('woff2'); }
        `}
      </style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<AllModelsPage />} />
          <Route path="/evolution" element={<EvolutionPage />} />
          <Route path="/bmw-m3" element={<BMWM3Page />} />
          <Route path="/neue-klasse" element={<NeueKlassePage />} />
          <Route path="/garmisch" element={<GarmischPage />} />
          <Route path="/racing" element={<RacingPage />} />
          <Route path="/interior" element={<InteriorPage />} />
          <Route path="/BMWM" element={<BMWM />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
