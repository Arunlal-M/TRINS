"use client";
import React, { useState } from 'react';
import DiamondButton from './DiamondButton';
import { useRouter } from 'next/navigation';

const CurriculumSection = () => {
  const [activeStage, setActiveStage] = useState(1);
  const [imageVisible, setImageVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [previousStage, setPreviousStage] = useState(1);
  const router = useRouter(); // Initialize the router

  // Handle stage change with animation
  const handleStageChange = (newStage) => {
    if (newStage === activeStage) return;

    setPreviousStage(activeStage);
    setIsAnimatingOut(true);

    // After exit animation completes, change the active stage
    setTimeout(() => {
      setActiveStage(newStage);
      setIsAnimatingOut(false);
      setImageVisible(false); // Start with image invisible

      // After a small delay, begin entrance animation
      setTimeout(() => {
        setImageVisible(true);
      }, 50);
    }, 400); // Exit animation duration
  };

  // Handle navigation to curriculum page
  const handleNavigateToCurriculum = (stageNumber) => {
    const programMap = {
      1: 'Early Year Program',
      2: 'Primary Year Program',
      3: 'Middle School',
      4: 'Secondary School',
      5: 'Senior Secondary School'
    };
    const program = encodeURIComponent(programMap[stageNumber]);
    router.push(`/curriculum?program=${program}`);
  };

  const curriculumStages = [
    {
      number: '01',
      title: 'Early Year Program',
      ageRange: '3 to 5 Years',
      image: '/image/home/curriculum_1.webp',
    },
    {
      number: '02',
      title: 'Primary Year Program',
      ageRange: '6 to 10 Years',
      image: '/image/home/curriculum_2.webp',
    },
    {
      number: '03',
      title: 'Middle School',
      ageRange: '11 to 13 Years',
      image: '/image/home/curriculum_3.webp',
    },
    {
      number: '04',
      title: 'Secondary School',
      ageRange: '14 to 16 Years',
      image: '/image/home/curriculum_4.webp',
    },
    {
      number: '05',
      title: 'Senior Secondary School',
      ageRange: '17 to 18 Years',
      image: '/image/home/curriculum_5.webp',
    },
  ];

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#EAC985] to-[#BC9C5A] py-16 md:py-24 flex flex-col justify-start">
      {/* Main content - Title and description at the top */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center pt-8 md:pt-0">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-black text-center relative" // Adjusted font size
          style={{
            fontFamily: 'Gideon Roman, serif',
            color: 'black',
            letterSpacing: '0.1em', // Reverted from 0.12em, as per image
            fontWeight: 100, // Adjusted from 900
            textTransform: 'uppercase',
            // marginBottom: '0.5em'
          }}
        >
          CURRICULUM
        </h2>

        {/* Description text with specified styling */}
        <div
          className="mx-auto mt-0 mb-8"
          style={{
            width: '992px',
            maxWidth: '100%',
            fontFamily: 'Gideon Roman, serif',
            fontWeight: 400, // Adjusted from 400
            fontSize: '30px', // Adjusted font size
            lineHeight: '1.6',
            letterSpacing: '0.02em', // Reverted from 0.03em, as per image
            textAlign: 'center',
            padding: '0 1rem',
          }}
        >
          <p>
            I am fortunate to have been part of the creation of Trivandrum International School in
            2003. From its inception, Mr George M
          </p>
        </div>
      </div>{' '}
      {/* Content container with CURRICULUM background */}
      <div className="w-full relative">
        {/* Background CURRICULUM text */}{' '}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          style={{
            zIndex: 5,
          }}
        >
          <div
            className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              fontFamily: 'Cormorant, serif',
              fontWeight: '700',
              fontSize: 'clamp(1.3vw, 15vw, 10vw)',
              lineHeight: '1.05em',
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: 'rgba(0, 0, 0, 0)',
              WebkitTextStroke: '2px rgba(0, 0, 0, 1)',
              opacity: '0.4',
              maxWidth: '95%',
              width: '100%',
              padding: '0 2.5%',
            }}
          >
            {' '}
            CURRICULUM
            <br />
            CURRICULUM
          </div>
        </div>
        {/* Container for content that will go on top of the background text */}{' '}
        <div className="container mx-auto px-4 relative z-10 flex flex-col">
          {' '}
          {/* Display image based on active stage with shadow */}{' '}
          <div className="flex flex-col items-center justify-center w-full ">
            {' '}
            <div
              className="relative flex justify-center items-center stageContainer"
              style={{ minHeight: '480px', perspective: '1000px' }}
            >
              {/* Shadow SVG underneath the image */}
              <img
                src="/image/curriculum/Shadow.svg"
                alt="Shadow"
                className="absolute z-10"
                style={{
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 'auto',
                  height: 'auto',
                  opacity: 0.6,
                }}
              />

              {/* Main Image with entrance animation (shrink into position) */}
              <img
                key={`image-${activeStage}`}
                src={curriculumStages[activeStage - 1].image}
                alt={`${curriculumStages[activeStage - 1].title} illustration`}
                className={`max-w-full md:max-w-3xl lg:max-w-4xl transition-all duration-500 ease-in-out relative z-20`}
                style={{
                  // height: activeStage === 1 ? '550px' : '550px', // Conditional height
                  width: 'auto', // Adjust width to maintain aspect ratio
                  objectFit: 'contain',
                  margin: '0 auto',
                  display: 'block',
                  position: 'relative',
                  bottom: '5px',
                  opacity: imageVisible ? 1 : 0,
                  transform: imageVisible ? 'scale(1)' : 'scale(1.15)', // Shrink into position
                  transition:
                    'transform 0.6s ease-out, opacity 0.5s ease-in-out, height 0.5s ease-in-out', // Added height transition
                }}
              />

              {/* Exit animation image (grow and fade) */}
              {isAnimatingOut && (
                <img
                  key={`exit-image-${previousStage}`}
                  src={curriculumStages[previousStage - 1].image}
                  alt="Previous illustration"
                  className="max-w-full md:max-w-3xl lg:max-w-4xl absolute top-0 left-0 right-0 z-9 transition-all duration-500 ease-in-out"
                  style={{
                    height: previousStage === 1 ? '550px' : '550px', // Conditional height
                    width: 'auto', // Adjust width to maintain aspect ratio
                    objectFit: 'contain',
                    margin: '0 auto',
                    display: 'block',
                    opacity: isAnimatingOut ? 0 : 1, // Fade out
                    transform: isAnimatingOut ? 'scale(1.2)' : 'scale(1)', // Grow
                    transition: 'transform 0.5s ease-in, opacity 0.4s ease-out',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>{' '}
      {/* Diamond buttons with connecting lines */}
      <div className="w-full">
        <div className="container mx-auto">
          <div
            className="w-full py-8 overflowAdjust"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div
              className="flex justify-center items-center min-w-max relative"
              style={{
                margin: '0 auto',
                width: 'fit-content',
                gap: 0,
              }}
            >
              {/* Mapped diamonds using DiamondButton component with connecting lines between them */}
              {curriculumStages.map((stage, index) => (
                // <div
                //   key={stage.number}
                //   onClick={() => handleNavigateToCurriculum(index + 1)}
                //   className="cursor-pointer"
                // >
                  <DiamondButton
                    key={stage.number}
                    number={stage.number}
                    title={stage.title}
                    ageRange={stage.ageRange}
                    isActive={activeStage === index + 1}
                    onDiamondClick={() => handleStageChange(index + 1)}
                    onTitleClick={() => handleNavigateToCurriculum(index + 1)}
                    isFirst={index === 0}
                    isLast={index === curriculumStages.length - 1}
                  />
                // </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
