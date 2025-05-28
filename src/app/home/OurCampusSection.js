// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const OurCampusSection = () => {
//   const [isClient, setIsClient] = useState(false);
//   const campusTitleRef = useRef(null);
//   const campusVideoRef = useRef(null);
//   const campusDescRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     setIsClient(true);
//     gsap.registerPlugin(ScrollTrigger);

//     let minW, minH;
//     const currentSection = document.querySelectorAll(".magnet-section")[3];
//     const nextSection = document.querySelectorAll(".magnet-section")[4];
//     const curriculumSection = document.querySelectorAll(".magnet-section")[5];

//     const initVideoAnimation = () => {
//       const video = campusVideoRef.current;
//       if (!video) return;

//       minW = video.parentElement ? video.parentElement.offsetWidth * 0.65 : window.innerWidth * 0.65;
//       minH = video.parentElement
//         ? Math.max(video.parentElement.offsetHeight * 0.7, window.innerHeight * 0.55)
//         : window.innerHeight * 0.55;


//       video.setAttribute("data-original-width", minW);
//       video.setAttribute("data-original-height", minH);

//       gsap.set(video, {
//         width: minW,
//         height: minH,
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         xPercent: -50,
//         yPercent: -50,
//         zIndex: 30,
//         borderRadius: 24,
//         pointerEvents: "none",
//         force3D: true,
//         opacity: 1
//         // clearProps: "transform",
//       });

//       const videoElement = video.querySelector("video");
//       if (videoElement) {
//         gsap.set(videoElement, {
//           borderRadius: 24,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           opacity: 1,
//         });
//       }
//     };

//     const resetVideoToOriginalState = () => {
//       const video = campusVideoRef.current;
//       if (!video) return;

//       const origWidth = parseFloat(video.getAttribute("data-original-width") || minW);
//       const origHeight = parseFloat(video.getAttribute("data-original-height") || minH);

//       gsap.to(video, {
//         width: origWidth,
//         height: origHeight,
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         xPercent: -50,
//         yPercent: -50,
//         borderRadius: 24,
//         zIndex: 30,
//         duration: 0.4,
//         ease: "power2.out",
//         onComplete: () => {
//           const videoElement = video.querySelector("video");
//           if (videoElement) {
//             videoElement.style.borderRadius = "24px";
//           }
//         },
//       });
//     };

//     window.addEventListener("scroll", () => {
//       if (window.scrollY < 100) {
//         resetVideoToOriginalState();
//       }
//     });

//     const setupAnimations = () => {
//       gsap.fromTo(
//         campusTitleRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: campusTitleRef.current,
//             start: "top 80%",
//             toggleActions: "play reverse play reverse",
//           },
//         }
//       );

//       gsap.fromTo(
//         campusVideoRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.1,
//           ease: "power3.out",
//           delay: 0.1,
//           scrollTrigger: {
//             trigger: campusVideoRef.current,
//             start: "top 80%",
//             toggleActions: "play reverse play reverse",
//           },
//         }
//       );

//       gsap.fromTo(
//         campusDescRef.current,
//         { opacity: 0, y: 80, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1.3,
//           ease: "power3.out",
//           delay: 0.2,
//           scrollTrigger: {
//             trigger: currentSection,
//             start: "top 60%",
//             toggleActions: "play reverse play reverse",
//           },
//         }
//       );

//       const video = campusVideoRef.current;
//       const videoElement = video.querySelector("video");

//       const videoAnimTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: currentSection,
//           start: "center center",
//           endTrigger: nextSection,
//           end: "top center",
//           scrub: 1.2,
//           pin: false,
//           anticipatePin: 1,
//           onUpdate: (self) => {
//             if (self.progress > 0 && video.style.position !== "fixed") {
//               gsap.set(video, { position: "fixed", zIndex: 90 });
//             }
//             if (self.progress === 0 && video.style.position !== "absolute") {
//               gsap.set(video, {
//                 position: "absolute",
//                 zIndex: 30,
//                 left: "50%",
//                 top: "50%",
//                 xPercent: -50,
//                 yPercent: -50,
//                 width: minW,
//                 height: minH,
//                 borderRadius: 24,
//               });
//               if (videoElement) videoElement.style.borderRadius = "24px";
//             }
//             if (
//               video.style.position === "fixed" &&
//               (video.style.left !== "0px" || video.style.top !== "0px")
//             ) {
//               gsap.set(video, {
//                 left: "50%",
//                 top: "50%",
//                 xPercent: -50,
//                 yPercent: -50,
//               });
//             }
//           },
//           onComplete: () => {
//             gsap.set(video, {
//               position: "fixed",
//               top: "0%",
//               left: "0%",
//               xPercent: 0,
//               yPercent: 0,
//               width: "100%",
//               height: "100%",
//               borderRadius: 0,
//               zIndex: 90,
//               opacity: 1,
//               visibility: "visible",
//             });
//             if (videoElement) {
//               videoElement.style.borderRadius = "0px";
//               videoElement.style.opacity = "1";
//             }
//           },
//           markers: false,
//         },
//       });

//       videoAnimTimeline.to(
//         video,
//         {
//           width: minW * 1.4,
//           height: minH * 1.4,
//           borderRadius: 16,
//           left: "50%",
//           top: "50%",
//           xPercent: -50,
//           yPercent: -50,
//           ease: "power3.inOut",
//           duration: 0.6,
//           onUpdate: () => {
//             if (videoElement) {
//               videoElement.style.borderRadius = video.style.borderRadius;
//             }
//           },
//         },
//         0
//       );

//       videoAnimTimeline.to(
//         video,
//         {
//           width: "100%",
//           height: "100%",
//           borderRadius: 0,
//           left: "0%",
//           top: "0%",
//           xPercent: 0,
//           yPercent: 0,
//           ease: "power3.inOut",
//           duration: 0.8,
//           onUpdate: () => {
//             if (videoElement) {
//               videoElement.style.borderRadius = video.style.borderRadius;
//               videoElement.style.opacity = "1";
//             }
//           },
//         },
//         0.7
//       );

//       if (curriculumSection) {
//         ScrollTrigger.create({
//           trigger: curriculumSection,
//           start: "top center",
//           end: "bottom top",
//           onEnter: () => {
//             gsap.to([campusTitleRef.current, campusDescRef.current], {
//               opacity: 0,
//               duration: 0.2,
//               pointerEvents: "none",
//             });
//           },
//           onLeaveBack: () => {
//             gsap.to([campusTitleRef.current, campusDescRef.current], {
//               opacity: 1,
//               duration: 0.3,
//               pointerEvents: "auto",
//             });
//           },
//         });
//       }

//       ScrollTrigger.create({
//         trigger: nextSection,
//         start: "top center",
//         end: "bottom top",
//         onEnter: () => {
//           gsap.set(video, { visibility: "visible" });
//           gsap.to(video, { opacity: 1, duration: 0.1 });
//           if (videoElement) {
//             gsap.set(videoElement, { opacity: 1 });
//             if (videoElement.paused) videoElement.play();
//           }
//         },
//         onLeave: () => {
//           gsap.to(video, {
//             opacity: 0,
//             duration: 0.3,
//             onComplete: () => {
//               gsap.set(video, { visibility: "hidden" });
//               if (videoElement && !videoElement.paused) videoElement.pause();
//             },
//           });
//         },
//         onEnterBack: () => {
//           gsap.set(video, { visibility: "visible" });
//           gsap.to(video, { opacity: 1, duration: 0.3 });
//           if (videoElement) {
//             gsap.set(videoElement, { opacity: 1 });
//             if (videoElement.paused) videoElement.play();
//           }
//         },
//         onLeaveBack: () => {
//           if (
//             videoElement &&
//             videoElement.paused &&
//             videoAnimTimeline.progress() > 0 &&
//             videoAnimTimeline.progress() < 1 &&
//             videoAnimTimeline.isActive()
//           ) {
//             videoElement.play();
//           }
//         },
//       });
//     };

//     initVideoAnimation();
//     setupAnimations();

//     let resizeTimeout;
//     const handleResize = () => {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(() => {
//         initVideoAnimation();
//         ScrollTrigger.refresh();
//       }, 250);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", resetVideoToOriginalState);
//       clearTimeout(resizeTimeout);
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="relative w-full flex flex-col items-center justify-center min-h-screen h-screen overflow-hidden magnet-section bg-gradient-to-br from-[#085038] to-[#02BA89]"
//     >
//       <div className="relative flex flex-col items-center justify-center w-full max-w-[1920px] z-10 px-4 mt-0 pt-4 gap-0 md:gap-0 h-full">
//         <h2
//           ref={campusTitleRef}
//           className="text-[#F5DE9C] font-serif font-[400] text-[3.5vw] md:text-[56px] lg:text-[64px] leading-tight md:leading-[88px] uppercase tracking-normal text-center mb-[-24px] mt-10 md:mt-8 z-50"
//           style={{ fontFamily: "Gideon Roman, serif" }}
//         >
//           OUR CAMPUS
//         </h2>

//         <div className="displayMob my-16">
//           <video
//                 src="https://trins-media.s3.ap-southeast-2.amazonaws.com/public/video/ourCampus.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover rounded-[24px]"
//                 style={{ opacity: 1 }}
//               />
//         </div>

//         <div className="w-full flex flex-col items-center justify-center relative mt-0 md:mt-0 displayMobNone">
//           <div
//             className="w-full md:w-[65%] lg:w-[60%] h-[70vh] max-h-[70vh] min-h-[150px]"
//             style={{
//               aspectRatio: "16/9",
//               background: "transparent",
//               pointerEvents: "none",
//             }}
//           />
//           <div
//             ref={campusVideoRef}
//             className="pointer-events-none absolute left-1/2 top-[40%] z-30 overflow-hidden rounded-[24px]"
//             style={{
//               aspectRatio: "16/9",
//               transform: "translate(-50%, -50%)",
//               width: "65%",
//               height: "auto",
//               willChange: "transform, opacity",
//             }}
//           >
//             {isClient && (
//               <video
//                 src="https://trins-media.s3.ap-southeast-2.amazonaws.com/public/video/ourCampus.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover rounded-[24px]"
//                 style={{ opacity: 1 }}
//               />
//             )}
//           </div>
//         </div>

//         <p
//           ref={campusDescRef}
//           className="font-[Gideon_Roman] font-normal text-[24px] leading-[44px] text-center text-white mt-[-20px] mb-0 px-4 max-w-7/10 mx-auto capitalize tracking-normal"
//           style={{
//             letterSpacing: 0,
//             fontFamily: "Gideon Roman, serif",
//             wordSpacing: "0.15em",
//             zIndex: 5,
//             position: "relative",
//             background: "transparent",
//           }}
//         >
//           At TRINS, Our Campus Provides A Nurturing Environment With Modern
//           At TRINS, Our Campus Provides A Nurturing Environment With Modern
//           Classrooms, Fully Equipped Labs, And A Resource-Rich Library. Spacious
//           Outdoor Areas Encourage Physical Activity, While The Safe,
//           Well-Maintained Surroundings Ensure Students Thrive Academically And
//           Socially.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OurCampusSection;
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const OurCampusSection = () => {
  const [isClient, setIsClient] = useState(false);
  const campusTitleRef = useRef(null);
  const campusVideoRef = useRef(null);
  const campusDescRef = useRef(null);
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    gsap.registerPlugin(ScrollTrigger);

    let minW, minH;
    const currentSection = document.querySelectorAll(".magnet-section")[3];
    const nextSection = document.querySelectorAll(".magnet-section")[4];
    const curriculumSection = document.querySelectorAll(".magnet-section")[5];

    const initVideoAnimation = () => {
      const videoContainer = videoContainerRef.current;
      const video = campusVideoRef.current;
      if (!video || !videoContainer) return;

      // Get container dimensions
      const containerWidth = videoContainer.offsetWidth;
      const containerHeight = videoContainer.offsetHeight;

      // Set video dimensions relative to container
      minW = containerWidth * 0.65;
      minH = Math.min(containerHeight * 0.7, window.innerHeight * 0.7);

      video.setAttribute("data-original-width", minW);
      video.setAttribute("data-original-height", minH);

      gsap.set(video, {
        width: minW,
        height: minH,
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        zIndex: 30,
        borderRadius: 24,
        pointerEvents: "none",
        force3D: true,
        opacity: 1,
        transformStyle: "preserve-3d",
        willChange: "transform, width, height"
      });

      const videoElement = video.querySelector("video");
      if (videoElement) {
        gsap.set(videoElement, {
          borderRadius: 24,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
        });
      }
    };

    const resetVideoToOriginalState = () => {
      const video = campusVideoRef.current;
      if (!video) return;

      const origWidth = parseFloat(video.getAttribute("data-original-width") || minW);
      const origHeight = parseFloat(video.getAttribute("data-original-height") || minH);

      gsap.to(video, {
        width: origWidth,
        height: origHeight,
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        borderRadius: 24,
        zIndex: 30,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          const videoElement = video.querySelector("video");
          if (videoElement) {
            videoElement.style.borderRadius = "24px";
          }
        },
      });
    };

    const setupAnimations = () => {
      // Title animation
      gsap.fromTo(
        campusTitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: campusTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        campusDescRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: currentSection,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );

      const video = campusVideoRef.current;
      const videoElement = video.querySelector("video");

      // Main video animation timeline
      const videoAnimTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: currentSection,
          start: "center center",
          endTrigger: nextSection,
          end: "top center",
          scrub: 1.2,
          pin: false,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0 && video.style.position !== "fixed") {
              gsap.set(video, {
                position: "fixed",
                zIndex: 90,
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50
              });
            }
            if (self.progress === 0) {
              gsap.set(video, {
                position: "absolute",
                zIndex: 30,
                left: "50%",
                top: "50%",
                xPercent: -50,
                yPercent: -50,
                width: minW,
                height: minH,
                borderRadius: 24,
              });
              if (videoElement) videoElement.style.borderRadius = "24px";
            }
          },
          onEnter: () => {
            if (videoElement && videoElement.paused) {
              videoElement.play();
            }
          },
          onLeave: () => {
            if (videoElement && !videoElement.paused) {
              videoElement.pause();
            }
          },
          onEnterBack: () => {
            if (videoElement && videoElement.paused) {
              videoElement.play();
            }
          },
          onLeaveBack: () => {
            if (videoElement && !videoElement.paused) {
              videoElement.pause();
            }
          },
          markers: false,
        },
      });

      // Smooth scaling animation
      videoAnimTimeline.to(
        video,
        {
          width: minW * 1.4,
          height: minH * 1.4,
          borderRadius: 16,
          ease: "power3.inOut",
          duration: 0.8,
          onUpdate: () => {
            if (videoElement) {
              videoElement.style.borderRadius = video.style.borderRadius;
            }
          },
        },
        0
      );

      // Fullscreen animation
      videoAnimTimeline.to(
        video,
        {
          width: "100%",
          height: "100%",
          borderRadius: 0,
          top: "0%",
          left: "0%",
          xPercent: 0,
          yPercent: 0,
          ease: "power3.inOut",
          duration: 1.2,
          onUpdate: () => {
            if (videoElement) {
              videoElement.style.borderRadius = video.style.borderRadius;
              videoElement.style.opacity = "1";
            }
          },
        },
        0.5
      );

      // Hide title and description when video goes fullscreen
      if (curriculumSection) {
        ScrollTrigger.create({
          trigger: curriculumSection,
          start: "top center",
          end: "bottom top",
          onEnter: () => {
            gsap.to([campusTitleRef.current, campusDescRef.current], {
              opacity: 0,
              duration: 0.4,
              pointerEvents: "none",
              ease: "power2.out"
            });
          },
          onLeaveBack: () => {
            gsap.to([campusTitleRef.current, campusDescRef.current], {
              opacity: 1,
              duration: 0.5,
              pointerEvents: "auto",
              ease: "power2.out"
            });
          },
        });
      }

      // Video visibility control
      ScrollTrigger.create({
        trigger: nextSection,
        start: "top center",
        end: "bottom top",
        onEnter: () => {
          gsap.set(video, { visibility: "visible" });
          gsap.to(video, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          if (videoElement) {
            gsap.set(videoElement, { opacity: 1 });
          }
        },
        onLeave: () => {
          gsap.to(video, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(video, { visibility: "hidden" });
            },
          });
        },
        onEnterBack: () => {
          gsap.set(video, { visibility: "visible" });
          gsap.to(video, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        },
      });
    };

    initVideoAnimation();
    setupAnimations();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initVideoAnimation();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center min-h-screen h-screen overflow-hidden magnet-section bg-gradient-to-br from-[#085038] to-[#02BA89]"
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-[1920px] z-10 px-4 mt-0 pt-4 gap-0 md:gap-0 h-full">
        <h2
          ref={campusTitleRef}
          className="text-[#F5DE9C] font-serif font-[400] text-[3.5vw] md:text-[56px] lg:text-[64px] leading-tight md:leading-[88px] uppercase tracking-normal text-center mb-[-24px] mt-10 md:mt-8 z-50"
          style={{ fontFamily: "Gideon Roman, serif" }}
        >
          OUR CAMPUS
        </h2>

        <div className="displayMob my-16">
          <video
            src="https://trins-media.s3.ap-southeast-2.amazonaws.com/public/video/ourCampus.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[24px]"
            style={{ opacity: 1 }}
          />
        </div>

        <div
          ref={videoContainerRef}
          className="w-full flex flex-col items-center justify-center relative mt-0 md:mt-0 displayMobNone"
          style={{
            height: "70vh",
            maxHeight: "70vh",
            minHeight: "150px",
            width: "100%"
          }}
        >
          <div
            ref={campusVideoRef}
            className="pointer-events-none absolute z-30 overflow-hidden rounded-[24px]"
            style={{
              aspectRatio: "16/9",
              willChange: "transform, width, height"
            }}
          >
            {isClient && (
              <video
                src="https://trins-media.s3.ap-southeast-2.amazonaws.com/public/video/ourCampus.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-[24px]"
                style={{ opacity: 1 }}
              />
            )}
          </div>
        </div>

        <p
          ref={campusDescRef}
          className="font-[Gideon_Roman] font-normal text-[24px] leading-[44px] text-center text-white mt-[-20px] mb-0 px-4 max-w-7/10 mx-auto capitalize tracking-normal"
          style={{
            letterSpacing: 0,
            fontFamily: "Gideon Roman, serif",
            wordSpacing: "0.15em",
            zIndex: 5,
            position: "relative",
            background: "transparent",
          }}
        >
          Trivandrum International School (TRINS) is set in a serene, 20-acre eco-friendly campus atop a hill on the outskirts of Trivandrum, the capital city of the State of Kerala, India. 
        </p>
      </div>
    </div>
  );
};

export default OurCampusSection;