import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;

      const containerLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const boxRect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;

      const padding = parseInt(
        window.getComputedStyle(box[0]).padding || "0"
      ) / 2;

      translateX = boxRect.width * box.length - (containerLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(6)].map((_val, i) => (
            <div className="work-box" key={i}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{i + 1}</h3>
                  <div>
                    <h4>Project {i + 1}</h4>
                    <p>Category {i + 1}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>React, TypeScript, GSAP, Three.js</p>
              </div>
              <WorkImage
                image={`/images/placeholder.webp`}
                alt={`Project ${i + 1}`}
                video={`project${i + 1}.mp4`}
                link={"https://example.com/project" + (i + 1)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;