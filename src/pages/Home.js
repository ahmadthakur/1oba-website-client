import React from "react";
import PropertyList from "../components/PropertyList";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Steps />
      <PropertyList />
      <FAQ />
    </div>
  );
};

export default Home;
