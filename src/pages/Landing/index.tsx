import React from "react";

import NavigationBar from "../../components/NavigationBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <NavigationBar landing />
      <Banner
        displayIcons
        title={"Xuejin Gao"}
        description={"Software Engineer @ Amex"}
      />
      <Footer />
    </>
  );
};

export default LandingPage;
