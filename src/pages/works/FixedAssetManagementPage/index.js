import React from "react";
import Navbar from "../../../components/works/Navbar";
import Home from "../../../components/works/Home";
import About from "../../../components/works/About";
import Features from "../../../components/works/Features";
import Technologies from "../../../components/works/Technologies";
import FixedAssetManagementApp from "../../../assets/projects/fixed-asset-management/fixedassetmanagementapp.png";

const features = [];

const technologies = [
  {
    feature: "Programing Languages:",
    subFeatures: ["C#"],
  },
  {
    feature: "Frameworks:",
    subFeatures: [
      ".NET, WPF + DevExpress",
    ],
  },
  {
    feature: "Database:",
    subFeatures: [
      "PostgreSQL",
    ],
  }
];

const images = [FixedAssetManagementApp];

const FixedAssetManagementPage = () => {
  return (
    <div>
      <Navbar />
      <Home title={'Gestware Next - Gestão de Ativos Imobilizados'} description={'// Fixed Asset Management Application'} images={images}/>
      <About/>
      <Features features={features}/>
      <Technologies technologies={technologies}/>
    </div>
  );
};

export default FixedAssetManagementPage;
