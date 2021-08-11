import React from "react";

import NavigationBar from "../../components/NavigationBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import List from "../../components/List";

const AboutMePage = () => {
  return (
    <>
      <NavigationBar about />
      <Banner
        displayImage
        title={"Hey, I'm Xuejin."}
        description={`
        I'm a software engineer who recently graduated from Hunter College with a degree in computer science. In my free time I enjoy experimenting with eletrical engineering, working out, and writing short stories. 
        `}
      />
      <List title={"Experience"} />
      <Footer />
    </>
  );
};

export default AboutMePage;
