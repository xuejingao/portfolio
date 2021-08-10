import React from "react";

import NavigationBar from "../../components/NavigationBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

import data from "../../constant/data/data.json";
console.log(data);

const LandingPage = () => {
  return (
    <>
      <NavigationBar landing />
      <Banner
        displayIcons
        title={"Xuejin Gao"}
        description={"Full-Stack Developer"}
      />
      <Footer />
    </>
  );
};

export default LandingPage;
