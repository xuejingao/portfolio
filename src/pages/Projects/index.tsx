import React from "react";

import NavigationBar from "../../components/NavigationBar";
import List from "../../components/List";
import Footer from "../../components/Footer";

const ProjectsPage = () => {
  return (
    <>
      <NavigationBar projects />
      <List />
      <Footer />
    </>
  );
};

export default ProjectsPage;
