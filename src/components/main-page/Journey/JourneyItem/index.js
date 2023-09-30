import React from 'react';
import PropTypes from "prop-types";

const JourneyItem = (props) => {
    return (
        <div class="flex flex-col">
            <h3 class="text-xl font-semibold">{props.title}</h3>
            <h3 class="text-xs font-semibold">{props.company}</h3>
            <time class="text-xs">{props.period}</time>
            <p class="mt-3">{props.description}</p>
        </div>
    )
}

JourneyItem.prototype = {
    title: PropTypes.string,
    period: PropTypes.string,
    description: PropTypes.string,
  };

export default JourneyItem