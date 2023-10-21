import React from "react";
import Navbar from "../../../components/works/Navbar";
import Home from "../../../components/works/Home";
import About from "../../../components/works/About";
import Features from "../../../components/works/Features";
import Technologies from "../../../components/works/Technologies";
import data from "./data";

const DashiroPage = () => {
  return (
    <div>
      <Navbar />
      <Home
        title={"Dashiro"}
        description={"// DEGIRO Dashboard"}
        images={data.images}
      />
      <About about={data.about}/>
      <Features features={data.features} />
      <Technologies technologies={data.technologies}/>
    </div>
  );
};

export default DashiroPage;
