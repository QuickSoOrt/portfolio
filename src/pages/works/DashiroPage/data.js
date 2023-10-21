
import DashiroApp from "../../../assets/projects/dashiro/dashiroapp.png";
import Image00000 from "../../../assets/projects/dashiro/00000.png";
import Image00001 from "../../../assets/projects/dashiro/00001.png";
import Image00002 from "../../../assets/projects/dashiro/00002.png";
import Image00003 from "../../../assets/projects/dashiro/00003.png";
import Image00004 from "../../../assets/projects/dashiro/00004.png";

const images = [
  DashiroApp,
  Image00000,
  Image00001,
  Image00002,
  Image00003,
  Image00004,
];

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
    feature: "Captial Gains Calculation:",
    subFeatures: [
      "Automatic calculation of capital gains from dividends and transactions (not supported yet)",
    ],
  },
  {
    feature: "Captial Gains Declaration:",
    subFeatures: [
      "Automatic declaration of capital gains from dividends and transactions at IRS (not supported yet)",
    ],
  },
];

const technologies = [
  {
    category: "Frontend:",
    technologies: ["React + MUI"],
  },
];

const about = "'Gestware Next - Processamento Salarial' is a portuguese salary processing application that simplifies the complex task of payroll management. The application was developed at the company Gestware with the purpose of replacing its old legacy salary processing application built in Delphi with a modern application built in .Net. The application provides a wide array of features, including employee management, salary receipt processing, mandatory document generation, seamless integration with web services provided by the 'Autoridade Tributária' and 'Segurança Social' and many other features. Due to its user-friendly and contemporary interface, coupled with a range of advanced features, the application garnered significant success among customers.";

const data = {
  images: images,
  features: features,
  about: about,
  technologies,
}

export default data;