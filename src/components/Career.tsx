import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Alad Autos */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketer</h4>
                <h5>Alad Autos</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked as a digital marketer for Alad Autos, focusing on online visibility,
              content strategy, and paid ads to drive auto sales.
            </p>
          </div>

          {/* Meetadoll Freelance */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Website Designer (Freelance)</h4>
                <h5>Meetadoll</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and developed a personalized brand website for Meetadoll,
              a Northern Nigerian entrepreneur and influencer.
            </p>
          </div>

          {/* Growth by Imran */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder / Web Developer</h4>
                <h5>Growth by Imran</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Building custom websites and digital growth strategies for businesses across Nigeria.
              Projects include Muhacars, Meetadoll, and personal agency website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;