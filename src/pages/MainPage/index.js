import React from "react";

import About from "../../components/main-page/About";
import Home from "../../components/main-page/Home";
import Navbar from "../../components/main-page/Navbar";
import Skills from "../../components/main-page/Skills";
import Work from "../../components/main-page/Work";
import Contacts from "../../components/main-page/Contacts";
import Journey from "../../components/main-page/Journey";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Journey />
      <Skills />
      <Work />
      <Contacts />
    </div>
  );
};

export default MainPage;
