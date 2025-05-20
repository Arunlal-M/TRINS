"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import WelcomeSection from "./WelcomeSection";
import PrincipalMessageSection from "./PrincipalMessageSection";
import OurCampusSection from "./OurCampusSection";
import SpacerSection from "./SpacerSection";
import BeyondTheClassroomSection from "./BeyondTheClassroomSection";
import CurriculumSection from "./CurriculumSection";
import GallerySection from "./GallerySection";
import AccreditationSection from "./AccreditationSection"; // Import the new component

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let isScrolling = false;

    // SAFELY convert to an array
    const rawSections = gsap.utils.toArray(".magnet-section");
    const sections = Array.isArray(rawSections) ? rawSections : [rawSections];

    requestAnimationFrame(() => {
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: (self) => {
            if (self.direction === 0 && !isScrolling && sections[i + 1]) {
              isScrolling = true;
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: sections[i + 1], offsetY: 0 },
                ease: "power2.inOut",
                onComplete: () => (isScrolling = false),
              });
            }
          },
          onEnterBack: (self) => {
            if (self.direction === -1 && !isScrolling && sections[i - 1]) {
              isScrolling = true;
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: sections[i - 1], offsetY: 0 },
                ease: "power2.inOut",
                onComplete: () => (isScrolling = false),
              });
            }
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#074D36] w-screen">
      {/* landing section*/}
      <div className="relative w-full h-screen magnet-section">
        <Image
          src="/image/home/landing.png"
          alt="Classroom background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>
      {/* Welcome section (modularized) */}
      <WelcomeSection />
      {/* Principal's Message Section (modularized) */}
      <PrincipalMessageSection />
      {/* Our Campus Section (modularized) */}
      <OurCampusSection />
      {/* Beyond the Classroom Section */} 
      <BeyondTheClassroomSection />
      {/* Curriculum Section */}
      <CurriculumSection />
      {/* Gallery - not using magnet-section to create a freeform flow */}
      <GallerySection />
      {/* Accreditation Section */}
      <AccreditationSection />
    </div>
  );
};

export default Home;
