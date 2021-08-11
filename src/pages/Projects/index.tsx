import React from "react";

import NavigationBar from "../../components/NavigationBar";
import List from "../../components/List";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

import projectData from "../../constant/data/projects.json";

const projects = projectData["projects"];

const ProjectsPage = () => {
  return (
    <>
      <NavigationBar projects />
      <List title={"Projects"} dataList={projects} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProjectsPage;
