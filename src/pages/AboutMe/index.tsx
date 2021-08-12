import React from "react";

import NavigationBar from "../../components/NavigationBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import List from "../../components/List";
import ScrollToTop from "../../components/ScrollToTop";

import EXPERIENCE_DATA from "../../constant/data/experiences.json";
import EXTRACURRICULAR_DATA from "../../constant/data/extracurricular.json";
import EDUCATION_DATA from "../../constant/data/education.json";

const experience = EXPERIENCE_DATA["experience"];
const extracurriculars = EXTRACURRICULAR_DATA["extracurriculars"];
const education = EDUCATION_DATA["education"];

const AboutMePage = () => {
  return (
    <>
      <NavigationBar about />
      <Banner
        displayImage
        title={"Hey, I'm Xuejin."}
        description={`
        I'm a software engineer who recently graduated from Hunter College with a degree in computer science. In my free time I enjoy experimenting with electrical engineering, working out, and writing short stories. 
        `}
      />
      <List title={"Experience"} dataList={experience} />
      <List title={"Extracurricular"} dataList={extracurriculars} />
      <List title={"Education"} dataList={education} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutMePage;
