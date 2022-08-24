import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[1260px] mx-auto px-6">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
