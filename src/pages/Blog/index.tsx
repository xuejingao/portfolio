import React from "react";

import NavigationBar from "../../components/NavigationBar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const BlogPage = () => {
  return (
    <>
      <NavigationBar blog />
      <BlogList />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BlogPage;
