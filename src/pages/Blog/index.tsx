import React from "react";

import NavigationBar from "../../components/NavigationBar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

const BlogPage = () => {
  return (
    <>
      <NavigationBar blog />
      <BlogList />
      <Footer />
    </>
  );
};

export default BlogPage;
