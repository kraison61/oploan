"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Review/Review";
import Offer from "./Offer/Offer";
import { landingdata } from "@/lib/mockBlog";


import AOS from "aos";
import "aos/dist/aos.css"; // You c
import HowItWork from "./HowItWork/HowItWork";

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 2000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  const data = landingdata as unknown as Record<string, string>;

const landingSection = []
for (let i = 21; i <= 29; i++) {
  landingSection.push({
    heading: data[`heading_${i}`],
    content: data[`content_${i}`],
  });
}


  return (
    <div className="overflow-hidden h-full">
      <Hero />
      <WhyChoose />
      <Review blogSection={landingSection} />
      <HowItWork />
      <Offer />
    </div>
  );
};

export default Home;
