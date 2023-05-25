import React from "react";

import About from "../../components/About";
import Home from "../../components/Home";
import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills";
import Work from "../../components/Work";
import Contacts from "../../components/Contacts";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contacts />
    </div>
  );
};

export default MainPage;
