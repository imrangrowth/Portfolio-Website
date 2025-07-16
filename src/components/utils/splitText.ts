import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setBasicScrollAnimations() {
  // Animate paragraphs with fade-in
  gsap.utils.toArray<HTMLElement>(".para").forEach((para) => {
    gsap.fromTo(
      para,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Animate titles with fade-in
  gsap.utils.toArray<HTMLElement>(".title").forEach((title) => {
    gsap.fromTo(
      title,
      { autoAlpha: 0, y: 60 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}