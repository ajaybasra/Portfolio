import "./contact.css";
import Github from "../../images/github.png";
import Email from "../../images/email.png";
import Linkedin from "../../images/linkedin.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u2amuzs",
        "template_wkhy9ti",
        formRef.current,
        "user_iI6HQcWXQ7kVgNPMkIOIG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" /> 
              ajay_b@hotmail.co.nz
            </div>
            <div className="c-info-item">
              <a href="https://github.com/ajaybasra"><img className="c-icon" src={Github} alt="" /> </a>
                https://github.com/ajaybasra
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/ajay-basra/"><img className="c-icon" src={Linkedin} alt="" /> </a>
                https://www.linkedin.com/in/ajay-basra/
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Have any queries or exciting opportunities?</b> Feel free to get in touch by simply just completing the form below.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " Thank you, I'll respond asap!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;