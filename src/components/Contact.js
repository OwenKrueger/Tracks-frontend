import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
      <span>{props.title}</span>
    </div>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired
};

export default Contact;
