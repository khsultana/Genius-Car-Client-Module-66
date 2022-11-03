import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import LocationCenter from "../Location/LocationCenter";
import Products from "../Products/Products";
import MoreService from "../Services/MoreService";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <MoreService></MoreService>
      <LocationCenter></LocationCenter>
      <Products></Products>
    </div>
  );
};

export default Home;
