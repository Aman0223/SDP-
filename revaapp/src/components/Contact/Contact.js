import React from "react";
import './Contact.css';
const ContactCard = (props) => {
    return(
        <div id="ContactCard">
            <h3>Name : {props.name} </h3>
            <h3>Number: {props.Number} </h3>
            <button>Info : {props.info} </button>
            <p>Info Desvription Here</p>
        </div>
    );
} 
export default ContactCard;