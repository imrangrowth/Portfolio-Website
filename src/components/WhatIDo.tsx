"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const WhatIDo = () => {
  return (
    <section className="section" id="what">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          {/* TEXT */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 mb-6 xl:mb-12">What I Do</h2>

            {/* DEVELOP */}
            <div className="mb-6">
              <h3 className="h3">DEVELOP</h3>
              <h4 className="text-xl font-semibold text-accent mb-2">Description</h4>
              <p className="mb-4">
                I build responsive, SEO-optimized, and high-performing websites using tools like React, Next.js, and TypeScript. My focus is on clean code, speed, and delivering real business results for clients.
              </p>
              <h5 className="text-lg font-medium mb-2">Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">PHP</div>
                <div className="what-tags">MySQL</div>
              </div>
            </div>

            {/* DESIGN */}
            <div className="mb-6">
              <h3 className="h3">DESIGN</h3>
              <h4 className="text-xl font-semibold text-accent mb-2">Description</h4>
              <p className="mb-4">
                I create clean, modern, and impactful web designs that align with business goals. From wireframes to UI/UX, every element is crafted to engage users and elevate your online presence.
              </p>
              <h5 className="text-lg font-medium mb-2">Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">UI Design</div>
                <div className="what-tags">Figma</div>
                <div className="what-tags">Adobe XD</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">Branding</div>
                <div className="what-tags">Responsive Design</div>
              </div>
            </div>

            {/* 3D */}
            <div>
              <h3 className="h3">3D & ANIMATION</h3>
              <h4 className="text-xl font-semibold text-accent mb-2">Description</h4>
              <p className="mb-4">
                I also explore the world of 3D web and motion design, adding interactivity and stunning effects using modern tools. Whether it’s product mockups or animated sections, I make experiences pop.
              </p>
              <h5 className="text-lg font-medium mb-2">Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Three.js</div>
                <div className="what-tags">React Three Fiber</div>
                <div className="what-tags">Blender</div>
                <div className="what-tags">Spline</div>
                <div className="what-tags">ZBrush</div>
                <div className="what-tags">3D Mockups</div>
              </div>
            </div>
          </motion.div>

          {/* VISUAL */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;