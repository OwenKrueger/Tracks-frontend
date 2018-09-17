import React from "react";
import PropTypes from "prop-types";
import "./Track.css";

function Track(props) {
  return (
    <div className="track">
      <span>{props.title}</span>
    </div>
  );
}

Track.propTypes = {
  title: PropTypes.string.isRequired
};

export default Track;
