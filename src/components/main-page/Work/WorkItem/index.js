import React from "react";
import PropTypes from "prop-types";

const WorkItem = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100 text-center">
        <span className="text-1xl font-bold text-white tracking-wider text-center">
          {props.name}
        </span>
        <div className="pt-8 text-center ">
          <a href={props.aboutUrl}>
            <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              About
            </button>
          </a>
          {props.hasDemo && (
            <a href={props.demoUrl}>
              <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

WorkItem.prototype = {
  name: PropTypes.string,
  image: PropTypes.object,
};

export default WorkItem;
