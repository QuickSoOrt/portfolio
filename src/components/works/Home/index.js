import React, { useState } from "react";

const Home = (props) => {
  const [images, setImages] = useState(props.images);

  const [selectedImage, setSelectedImage] = useState(0);

  const handleNext = () => {
    if (images.length > 0) {
      const nextImage = (selectedImage + 1) % images.length;

      setSelectedImage(nextImage);
    }
  };

  const handlePrev = () => {
    if (images.length > 0) {
      const prevImage = Math.abs((selectedImage - 1) % images.length);

      setSelectedImage(prevImage);
    }
  };

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-2xl font-bold inline border-b-4 border-[#1DB700] text-center">
            {props.title}
          </p>
          <p className="py-4">{props.description}</p>
        </div>
        <div className="mt-[40px]">
          <img
            src={images[selectedImage]}
            className="w-full aspect-video"
          ></img>
          <div className="flex justify-between w-full mt-4">
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
