import React, { useState } from "react";
import "./ContactForm.css";
import "../../App.css";
import axios from "axios";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    const msgObject = {
      name: firstName + " " + lastName,
      email: email,
      phoneNumber: phone,
      msg: message,
      seen: false,
    };
    try {
      const response = await axios.post(
        "https://quizsurveyapp-production.up.railway.app/msg",
        msgObject
      );
      setLastName("");
      setFirstName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact_form_container">
      <div className="contact_form_container_name">
        <div>
          <p>First name</p>
          <input
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <p>Last name</p>
          <input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="contact_form_container_phone">
        <div>
          <p>Email address </p>
          <input
            placeholder="Email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Phonne number</p>
          <input
            placeholder="+1 234 567 890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="contact_form_container_msg">
        <p>Message :</p>
        <textarea
          placeholder="Message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={fetchData}>Send</button>
    </div>
  );
}

export default ContactForm;
