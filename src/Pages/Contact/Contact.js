import React from "react";
import "../../App.css";
import "./Contact.css";
import ContactForm from "../../Sections/ContactForm/ContactForm";

function Contact() {
  return (
    <div className="body_container">
      <div className="contact_container">
        <div className="contact_text_info">
          <p>Have an Idea? Let’s Bring it to Life! Message Me.</p>
          <div className="contact_text_info_1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 14.5h2v-2.275l1.95 1.15l1-1.75L14 10.5l1.95-1.125l-1-1.75L13 8.775V6.5h-2v2.275l-1.95-1.15l-1 1.75L10 10.5l-1.95 1.125l1 1.75l1.95-1.15Zm1 4.85q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Zm0-11.8Z"
              />
            </svg>
            <div>
              <p>Location</p>
              <p>Tallin, Estonia</p>
            </div>
          </div>
          <div className="contact_text_info_1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15q.65 0 1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20h5v2h-5Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"
              />
            </svg>
            <div>
              <p>Email Address :</p>
              <p>Yahiabahhous@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
