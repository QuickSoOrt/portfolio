import React from "react";
import SalaryProcessingApp from "../../../assets/projects/salary-processing/salaryprocessingapp.png";
import FixedAssetManagementApp from "../../../assets/projects/fixed-asset-management/fixedassetmanagementapp.png";
import WorkItem from "./WorkItem";

const Work = () => {
  return (
    <div name="work" className="w-full min-h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#1DB700]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <WorkItem
            name={"Gestware Next - Processamento Salarial"}
            image={SalaryProcessingApp}
            aboutUrl={"/works/salary-processing-app"}
            hasDemo={false}
            demoUrl={"/"}
          />
          <WorkItem
            name={"Gestware Next - Gestão de Ativos Imobilizados"}
            image={FixedAssetManagementApp}
            aboutUrl={"/works/fixed-asset-management-app/"}
            hasDemo={false}
            demoUrl={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
