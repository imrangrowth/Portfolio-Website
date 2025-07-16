import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:imrangrowth@gmail.com" data-cursor="disable">
                imrangrowth@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+2349025452309" data-cursor="disable">
                +234 902 545 2309
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/imrangrowth"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/imran.muhaa"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/2349025452309"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="https://growthbyimran.netlify.app"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Imran Muhammad</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;