import React, { useRef, useEffect } from 'react';
// import Image from 'next/image';
import gsap from 'gsap';
import ReadMoreButton from '../components/ReadMoreButton';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const PrincipalMessageSection = () => {
  const principalHeadingRef = useRef(null);
  const principalNoteRef = useRef(null);
  const principalNoteRefContent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      principalHeadingRef.current,
      { opacity: 0, y: 0, x: -80 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: principalHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
    gsap.fromTo(
      principalNoteRef.current,
      { y: 100, x: 100, rotate: 18, transformOrigin: '0% 100%' },
      {
        y: 0,
        x: 0,
        rotate: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: principalNoteRef.current,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
    gsap.fromTo(
      principalNoteRefContent.current,
      { y: 100, x: 100, rotate: 18, transformOrigin: '0% 100%' },
      {
        y: 0,
        x: 0,
        rotate: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: principalNoteRefContent.current,
          start: 'top 95%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <div className="principal-message-section relative w-full flex flex-col items-center justify-center min-h-screen h-screen bg-[#fefbff] overflow-hidden magnet-section mob-height-adjust">
      {/* <Image
        src="/image/home/PrincipalsMessage.png"
        alt="Principal's Message background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className="z-0 principalMessageImg"
      /> */}
      <div className="relative flex flex-col md:flex-row items-start justify-center w-full max-w-[1920px] z-10 px-4 mt-12 md:mt-24 pt-0 gap-4 h-full">
        <div
          className="flex flex-col items-start justify-start flex-shrink-0 w-full md:w-auto md:min-w-0 lg:min-w-0 xl:min-w-0 max-sm:-mt-30 mt-8 md:mt-28 md:mr-0 lg:mr-0 xl:mr-0"
          style={{ maxWidth: 'min-content' }}
        >
          <h2
            ref={principalHeadingRef}
            className="text-[#0A523B] font-serif font-[400] text-[8vw] md:text-[56px] lg:text-[64px] leading-tight md:leading-[88px] uppercase tracking-normal text-left"
            style={{ fontFamily: 'Gideon Roman, serif' }}
          >
            PRINCIPAL'S
            <br />
            MESSAGE
          </h2>
        </div>
        <div className="flex items-start justify-center w-full md:w-auto">
          <div className="position-relative principalNoteContainer principalLetter">
            <img
              ref={principalNoteRef}
              src="/image/home/PsNote-bg.svg"
              alt="Principal's note"
              className="w-full min-w-[125%] sm:min-w-[90%] md:min-w-0 md:max-w-[520px] lg:max-w-[700px] xl:max-w-[800px] h-auto drop-shadow-xl PrincipalsNote"
            />
            <div className="noteContentContainer" ref={principalNoteRefContent}>
              <p className="note">
                I am fortunate to have been part of the creation of Trivandrum International School in
                2003. From its inception, Mr George M. Thomas has been determined that The school
                should not just have an outstanding campus, but also a curriculum that makes it a
                distinct international school.
              </p>
              <p className="noteSignature">- Gourab Das Sharma</p>
              <ReadMoreButton className="ml-2 angle" href="/PrincipalMessage" bgColor="bg-[#075037] text-white" hoverColor="hover:bg-[#f5de9c]  hover:text-black" />{' '}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col mb-24 items-center"> */}
      {' '}
      {/* Added items-center */}
      {/* <ReadMoreButton href="#" bgColor="bg-[#6cff97]" hoverColor="hover:bg-[#f5de9c]" />{' '} */}
      {/* Use the new component */}
      {/* This invisible spacer ensures additional space at the bottom of the section */}
      {/* <div className="invisible"></div> */}
      {/* </div> */}
    </div>
  );
};

export default PrincipalMessageSection;