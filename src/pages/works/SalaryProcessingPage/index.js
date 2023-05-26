import React from "react";
import Navbar from "../../../components/works/Navbar";
import Home from "../../../components/works/Home";
import About from "../../../components/works/About";
import Features from "../../../components/works/Features";
import Technologies from "../../../components/works/Technologies";
import SalaryProcessingApp from "../../../assets/projects/salary-processing/salaryprocessingapp.png";

const features = [
  "Feature 1",
  "Feature 2",
  "Feature 3"
];

const images = [
  SalaryProcessingApp
]

const SalaryProcessingPage = () => {
  return (
    <div>
      <Navbar />
      <Home title={'Gestware Next - Processamento Salarial'} description={'// Salary Processing Application'} images={images}/>
      <About/>
      <Features features={features}/>
      <Technologies/>
    </div>
  );
};

export default SalaryProcessingPage;
