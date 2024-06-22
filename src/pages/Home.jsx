import React from "react";
import Hero from "../components/Hero";
import HomeMain from "../components/HomeMain";
import HomeGadgetWidget from "../components/HomeGadgetWidget";
import HomeFeatured from "../components/HomeFeatured";
import HomeTopRated from "../components/HomeTopRated";
import HomeRecentAdded from "../components/HomeRecentAdded";
import HomeCarousel from "../components/HomeCarousel";
import HomeOffers from "../components/HomeOffers";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HomeGadgetWidget />
      <HomeFeatured />
      <HomeCarousel />
      <HomeTopRated />
      <HomeOffers />
      <HomeRecentAdded />
    </div>
  );
}
