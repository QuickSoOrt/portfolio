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

const images = [SalaryProcessingApp];

const about = "Gestware Next - Processamento Salarial is a salary processing application that simplifies the complex task of payroll management. With Gestware Next - Processamento Salarial, you can effortlessly handle all aspects of payroll, from calculating salaries to generating mandatory documents to authorities like 'Autoridade Tributária' and 'Segurança Social'. The intuitive interface allows users to add, edit, and delete employee records with ease. Keep a comprehensive employee history, including records of absences, overtime, vacations, salary changes, and contracts. What sets Gestware Next - Processamento Salarial apart is its seamless integration with 'Autoridade Tributária' and 'Segurança Social' web services. Submit mandatory documents and effortlessly consult communicated records, ensuring compliance is a breeze. Plus, Gestware Next - Processamento Salarial offers accounting integration for a streamlined HR and payroll experience."

const SalaryProcessingPage = () => {
  return (
    <div>
      <Navbar />
      <Home
        title={"Gestware Next - Processamento Salarial"}
        description={"// Salary Processing Application"}
        images={images}
      />
      <About about={about}/>
      <Features features={features} />
      <Technologies technologies={technologies}/>
    </div>
  );
};

export default SalaryProcessingPage;
