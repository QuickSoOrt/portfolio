import React from "react";

const Features = (props) => {
  return (
    <div
      name="features"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#1DB700]">
            Features
          </p>
          <p className="py-4">
            // These are the main features of the application
          </p>
        </div>
        <div className="w-ful py-8">
          <div>
            <ul className="list-disc space-y-2 marker:text-[#1DB700] list-inside cursor-default">
              {props.features.map((feature, index) => (
                <div>
                  <li key={index} className="p-0 list-decimal text-xl font-semibold cursor-default">
                    {feature.feature}
                  </li>
                  <ul className="list-disc space-y-2 marker:text-[#1DB700] list-inside mt-2 cursor-default">
                    {feature.subFeatures.map((subFeature, index) => (
                      <li key={index} className="p-0 ml-6 cursor-default">
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
};

export default Features;
