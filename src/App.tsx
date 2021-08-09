import React from "react";
// import logo from './logo.svg';
// import './App.css';

import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Banner />
      <ProjectList />
      <Footer />
    </>
  );
}

export default App;
