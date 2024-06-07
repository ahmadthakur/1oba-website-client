import React from "react";
import PropertyList from "../components/PropertyList";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Steps />
      <PropertyList />
    </div>
  );
};

export default Home;
