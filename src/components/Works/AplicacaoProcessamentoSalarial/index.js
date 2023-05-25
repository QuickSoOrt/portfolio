import React from 'react'
import SalaryProcessingApp from "../../../assets/projects/salary-processing/salaryprocessingapp.png";

const AplicacaoProcessamentoSalarial = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="text-center">
            <p className="text-2xl font-bold inline border-b-4 border-[#1DB700] text-center">
              Gestware Next - Processamento Salarial
            </p>
            <p className="py-4">// Salary Processing Application</p>
          </div>
          <div className='mt-[40px]'>
            <img src={SalaryProcessingApp} className="w-full aspect-video"></img>
          </div>
        </div>
      </div>
  )
}

export default AplicacaoProcessamentoSalarial;