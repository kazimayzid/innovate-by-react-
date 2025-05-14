import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Navbar/Banner/banner";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Features from "./components/Features/Features";
import Integration from "./components/Integration/Integration";
import Services from "./components/Services/Services";
import Facts from "./components/Facts/Facts";
import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonial/Testimonial";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer"

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <Navbar />
        <Banner />
      </Header>
      <Content/>
      <Features/>
      <Integration/>
      <Services/>
      <Facts/>
      <Pricing/>
      <Testimonial/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
