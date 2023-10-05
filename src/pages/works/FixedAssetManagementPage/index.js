import React from "react";
import Navbar from "../../../components/works/Navbar";
import Home from "../../../components/works/Home";
import About from "../../../components/works/About";
import Features from "../../../components/works/Features";
import Technologies from "../../../components/works/Technologies";
import data from "./data";

const FixedAssetManagementPage = () => {
  return (
    <div>
      <Navbar />
      <Home title={'Gestware Next - Gestão de Ativos Imobilizados'} description={'// Fixed Asset Management Application'} images={data.images}/>
      <About about={data.about}/>
      <Features features={data.features}/>
      <Technologies technologies={data.technologies}/>
    </div>
  );
};

export default FixedAssetManagementPage;
