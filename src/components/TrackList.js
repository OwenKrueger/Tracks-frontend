import React from "react";
import PropTypes from "prop-types";

// import the Track component
import Track from "./Track";

function TrackList(props) {
  return (
    <div>{props.tracks.map(c => <Track key={c.id} title={c.title} />)}</div>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default TrackList;
