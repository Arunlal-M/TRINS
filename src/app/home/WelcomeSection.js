import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ReadMoreButton from '../components/ReadMoreButton';
import './WelcomeSection.css';

const WelcomeSection = () => {
  const childrenRef = useRef(null);
  const slateRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      slateRef.current,
      { opacity: 1, y: -120, scale: 0.7 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: slateRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
    gsap.fromTo(
      groupRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: groupRef.current,
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);
  return (
    <div className="relative w-full min-h-screen h-screen flex flex-col items-center justify-start pt-16 md:pt-24 overflow-hidden bg-[#074D36] magnet-section">
      <div
        ref={childrenRef}
        className="absolute left-0 w-full pointer-events-none z-0 overflow-hidden flex justify-center -top-2"
      >
        <img src="/image/home/WelcomeChildren.svg" alt="Welcome Children" />
      </div>{' '}
      <div
        ref={slateRef}
        className="relative flex flex-col items-center justify-center z-20 -mt-48 welcomeSlateImgContainer"
      >
        <img src="/image/home/Slate-edited.svg" alt="Slate" className="w-[950px] h-[600px]" />
      </div>
      <div
        ref={groupRef}
        className="flex flex-col items-center justify-center mt-2 md:mt-0 z-20 max-h-[65vh] flex-grow"
      >
        <h2
          ref={headingRef}
          className="text-[#F5DE9C] text-5xl md:text-5xl font-serif font-normal text-center mb-2 font-cormorant"
        >
          TRIVANDRUM
          <br />
          INTERNATIONAL SCHOOL
        </h2>
        <p
          ref={descRef}
          className=" normal tracking-normal md:max-w-7/10"
        >
          Trivandrum International School (TRINS) is committed to nurturing young minds into confident, compassionate, and responsible leaders of tomorrow.
          Through a holistic and globally-minded education, TRINS inspires students to develop critical thinking, creativity, and a genuine love for lifelong learning.
        </p>
        <div className="flex flex-col mt-4 mb-24 items-center">
          {" "}
          {/* Added items-center */}
          <ReadMoreButton href="/curriculum" /> {/* Use the new component */}
          {/* This invisible spacer ensures additional space at the bottom of the section */}
          <div className="invisible"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
