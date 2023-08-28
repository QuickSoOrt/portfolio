import React from "react";
import Navbar from "../../../components/works/Navbar";
import Home from "../../../components/works/Home";
import About from "../../../components/works/About";
import Features from "../../../components/works/Features";
import Technologies from "../../../components/works/Technologies";
import SalaryProcessingApp from "../../../assets/projects/salary-processing/salaryprocessingapp.png";

const features = [
  {
    feature: "Employee Management:",
    subFeatures: ["Add, edit and delete employees"],
  },
  {
    feature: "Employee History:",
    subFeatures: [
      "Record of absences, overtime, vacations, salary changes, contracts, etc.",
    ],
  },
  {
    feature: "Salary Processing:",
    subFeatures: [
      'Issue of all mandatory documents such as "Declaração Mensal de Remunerações - Autoridade Tributária", "Declaração Mensal de Remunerações - Segurança Social", "Modelo 10", "Folhas de Férias", etc...',
    ],
  },
  {
    feature: "Mandatory Documents:",
    subFeatures: [
      'Issue of all mandatory documents such as "Declaração Mensal de Remunerações - Autoridade Tributária", "Declaração Mensal de Remunerações - Segurança Social", "Modelo 10", "Folhas de Férias", etc...',
    ],
  },
  {
    feature: 'Integration with "Autoridade Tributária" and "Segurança Social" web services:',
    subFeatures: [
      'Communication of mandatory documents by web services',
      'Consultation of communicated documents',
      'Communication of employees by web services'
    ]
  },
  {
    feature: 'Accounting Integration.',
    subFeatures: []
  }
];

const images = [SalaryProcessingApp];

const SalaryProcessingPage = () => {
  return (
    <div>
      <Navbar />
      <Home
        title={"Gestware Next - Processamento Salarial"}
        description={"// Salary Processing Application"}
        images={images}
      />
      <About />
      <Features features={features} />
      <Technologies />
    </div>
  );
};

export default SalaryProcessingPage;
