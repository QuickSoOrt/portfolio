import React from 'react';

const Technologies = (props) => {
  return (
    <div
      name="technologies"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#1DB700]">
            Technologies
          </p>
          <p className="py-4">
            // These are technologies I used to develop the application
          </p>
        </div>
        <div className="w-ful py-8">
          <div>
            <ul className="list-disc space-y-2 marker:text-[#1DB700] list-inside">
              {props.technologies.map((feature, index) => (
                <div>
                  <li key={index} className="p-0 list-decimal">
                    {feature.feature}
                  </li>
                  <ul className="list-disc space-y-2 marker:text-[#1DB700] list-inside mt-2">
                    {feature.subFeatures.map((subFeature, index) => (
                      <li key={index} className="p-0 ml-6 text-sm">
                        {subFeature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;