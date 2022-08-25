import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Graph from "../components/Graph";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[1260px] mx-auto px-6">
        <Hero />
        <About />
        <Graph />
        <Roadmap />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
