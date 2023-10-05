import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

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
      let nextImage;
      if (selectedImage > 0) {
        nextImage = Math.abs((selectedImage - 1) % images.length);
      }
      else {
        nextImage = images.length - 1;
      }

      setSelectedImage(nextImage);
    }
  };

  return (
    <div name="home" className="w-full min-h-screen pt-[80px] bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-2xl font-bold inline border-b-4 border-[#1DB700] text-center">
            {props.title}
          </p>
          <p className="py-4">{props.description}</p>
        </div>
        <div className="mt-[40px] relative">
          <img
            src={images[selectedImage]}
            className="w-full aspect-video"
          >

          </img>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex justify-between w-full mt-4 px-5">
              <button onClick={handlePrev}>
                <div className="text-[#1DB700] text-xl font-semibold">
                <FontAwesomeIcon icon={faBackward} beat/>
                </div>
              </button>
              <button onClick={handleNext}>
                <div className="text-[#1DB700] text-xl font-semibold">
                <FontAwesomeIcon icon={faForward} beat/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
