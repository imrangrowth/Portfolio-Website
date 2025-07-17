import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const flexRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const flex = flexRef.current;

    if (!section || !flex) return;

    const boxes = flex.querySelectorAll(".work-box");

    const totalWidth = Array.from(boxes).reduce((acc, box) => {
      const rect = box.getBoundingClientRect();
      return acc + rect.width;
    }, 0);

    const sectionWidth = section.getBoundingClientRect().width;
    const translateX = totalWidth - sectionWidth;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(flex, {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {[...Array(6)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>Project Name</h4>
                    <p>Category</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>JavaScript, TypeScript, React, Three.js</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="Project preview" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
