"use client"; // Add this at the top
import Image from "next/image";
import { useState, useRef } from "react"; // Import useState and useRef
import ProgramButton from "../components/curriculum/ProgramButton"; // Import ProgramButton
import "./Curriculum.css"

export default function Curriculum() {
  const [activeProgram, setActiveProgram] = useState("Early Year Program"); // State for active program
  const [bannerFade, setBannerFade] = useState(false); // State for banner fade effect
  const prevProgram = useRef(activeProgram); // Ref to track previous program
  const programs = [
    "Early Year Program",
    "Primary Year Program",
    "Middle School",
    "Secondary School",
    "Senior Secondary School",
  ];

  // Banner image selection based on active program
  const bannerImages = {
    'Early Year Program': '/image/curriculum/earlyYearProgram.png',
    'Primary Year Program': '/image/curriculum/PrimaryYearProgram.png',
    'Middle School': '/image/curriculum/MiddleSchool.png',
    'Secondary School': '/image/curriculum/MiddleSchool.png',
    'Senior Secondary School': '/image/curriculum/MiddleSchool.png',
  };

  const handleProgramClick = (programName) => {
    if (programName !== activeProgram) {
      setBannerFade(true);
      setTimeout(() => {
        setActiveProgram(programName);
        setBannerFade(false);
        prevProgram.current = programName;
      }, 350); // Duration matches transition
    }
  };

  return (
    <div className="w-screen mt-64 mainContainer">
      {" "}
      {/* Don't remove "mt-64" class to fix typo and spacing */}
      {/* Banner Section */}
      <div className="relative w-full h-[70svh] magnet-section">
        <Image
          src={bannerImages[activeProgram]}
          alt="Students in a classroom with CURRICULUM text overlay"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={`-z-10 transition-opacity duration-500 ease-in-out ${bannerFade ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white text-7xl md:text-8xl lg:text-9xl font-normal uppercase"
            style={{
              fontFamily: "Gideon Roman, serif",
              letterSpacing: "0.05em",
            }}
          >
            CURRICULUM
          </h1>
        </div>
        {/* Dashboard SVG */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5/6 w-[80vw] max-w-[2000px]">
          <img
            src="/image/curriculum/Dashboard.svg"
            alt="Dashboard decorative element"
            className="w-full h-auto"
            style={{ display: "block" }}
          />
        </div>
      </div>
      {/* Button Navigation Section - All buttons in one row */}
      <div className="w-full overflow-x-auto px-4 pb-4" style={{overflowY: "visible", marginTop: "-90px"}}>
        <div className="flex gap-2 h-full justify-center left-1/2 mb-16 md:gap-4 min-w-max mt-[-0px] mx-auto transform">
          {programs.map((program) => (
            <ProgramButton
              key={program}
              programName={program}
              isActive={activeProgram === program}
              onClick={() => handleProgramClick(program)}
            />
          ))}
        </div>
      </div>
      {/* Program Content Section */}
      <div className="container mx-auto px-4 pb-16 mt-2">
        {/* Early Year Program Section (Content based on screenshot) */}
        {activeProgram === "Early Year Program" && (
          <div className="text-left">
            <h2
              className="mb-12 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 100,
                fontSize: "61.12px",
                lineHeight: "73.66px",
                letterSpacing: 0,
                textAlign: "left",
              }}
            >
              Early Year Program
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/contentImg.png" // Path is already correct
                  alt="Early Year Program students learning"
                  width={700} // Intrinsic width of the image or desired display width
                  height={450} // Intrinsic height or desired display height
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  A secure and nurturing environment
                </h3>
                <p
                  className="mb-6 ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum, inspired by the Primary Years Programme (IB), is an enriched play-based trans-disciplinary course designed to empower children. It also aims at giving the child a chance to develop emotionally and socially as they grow.
                </p>
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  PLAY BASED TEACHING AND LEARNING METHODOLOGY
                </h3>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum design focuses on students' emotional, physical
                  and social needs that provide a safe and secure environment to
                  learn and grow. The programme highlights a balance of
                  co-curricular and extra-curricular activities. The early year
                  stage of our programme delivers the following:
                </p>
                <ul className="list-disc ml-5 mt-2" style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}>
                  <li>
                    Child's inquiry-led through play based teaching and
                    learning methodology
                  </li>
                  <li>Physical and emotional health of the child</li>
                  <li>
                    Developing communication, thinking, reasoning and social
                    skills
                  </li>
                </ul>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "20.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                > For details check out&nbsp;
                  <a
                    href="https://www.trinsearlylearningcentre.com"
                    target="_blank"
                  > www.trinsearlylearningcentre.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Primary Year Program Section */}
        {activeProgram === "Primary Year Program" && (
          <div className="text-left">
            <h2
              className="mb-12 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 100,
                fontSize: "61.12px",
                lineHeight: "73.66px",
                letterSpacing: 0,
                textAlign: "left",
              }}
            >
              Primary Year Program
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/contentImg.png" // Path is already correct
                  alt="Early Year Program students learning"
                  width={700} // Intrinsic width of the image or desired display width
                  height={450} // Intrinsic height or desired display height
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  A secure and nurturing environment
                </h3>
                <p
                  className="mb-6 ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum, inspired by the Primary Years Programme (IB),
                  is an enriched play-based trans-disciplinary course designed
                  to empower children. It also aims at giving the child a chance
                  to develop emotionally and socially as they grow.
                </p>
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  PLAY BASED TEACHING AND LEARNING METHODOLOGY
                </h3>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum design focuses on students’ emotional, physical
                  and social needs that provide a safe and secure environment to
                  learn and grow. The programme highlights a balance of
                  co-curricular and extra-curricular activities. The early year
                  stage of our programme delivers the following:
                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Child’s inquiry-led through play based teaching and
                    learning methodology
                  </li>
                  <li>Physical and emotional health of the child</li>
                  <li>
                    Developing communication, thinking, reasoning and social
                    skills
                  </li>
                </ul>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  For details check out&nbsp;
                  <a
                    href="https://www.trinsearlylearningcentre.com"
                    target="_blank"
                  >
                    www.trinsearlylearningcentre.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Middle School Section */}
        {activeProgram === "Middle School" && (
          <div className="text-left">
            <h2
              className="mb-12 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 100,
                fontSize: "61.12px",
                lineHeight: "73.66px",
                letterSpacing: 0,
                textAlign: "left",
              }}
            >
              Middle School
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/contentImg.png" // Path is already correct
                  alt="Early Year Program students learning"
                  width={700} // Intrinsic width of the image or desired display width
                  height={450} // Intrinsic height or desired display height
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  A secure and nurturing environment
                </h3>
                <p
                  className="mb-6 ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum, inspired by the Primary Years Programme (IB),
                  is an enriched play-based trans-disciplinary course designed
                  to empower children. It also aims at giving the child a chance
                  to develop emotionally and socially as they grow.
                </p>
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  PLAY BASED TEACHING AND LEARNING METHODOLOGY
                </h3>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum design focuses on students’ emotional, physical
                  and social needs that provide a safe and secure environment to
                  learn and grow. The programme highlights a balance of
                  co-curricular and extra-curricular activities. The early year
                  stage of our programme delivers the following:
                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Child’s inquiry-led through play based teaching and
                    learning methodology
                  </li>
                  <li>Physical and emotional health of the child</li>
                  <li>
                    Developing communication, thinking, reasoning and social
                    skills
                  </li>
                </ul>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  For details check out&nbsp;
                  <a
                    href="https://www.trinsearlylearningcentre.com"
                    target="_blank"
                  >
                    www.trinsearlylearningcentre.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Secondary School Section */}
        {activeProgram === "Secondary School" && (
          <div className="text-left">
            <h2
              className="mb-12 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 100,
                fontSize: "61.12px",
                lineHeight: "73.66px",
                letterSpacing: 0,
                textAlign: "left",
              }}
            >
              Secondary School
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/contentImg.png" // Path is already correct
                  alt="Early Year Program students learning"
                  width={700} // Intrinsic width of the image or desired display width
                  height={450} // Intrinsic height or desired display height
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  A secure and nurturing environment
                </h3>
                <p
                  className="mb-6 ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum, inspired by the Primary Years Programme (IB),
                  is an enriched play-based trans-disciplinary course designed
                  to empower children. It also aims at giving the child a chance
                  to develop emotionally and socially as they grow.
                </p>
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  PLAY BASED TEACHING AND LEARNING METHODOLOGY
                </h3>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum design focuses on students’ emotional, physical
                  and social needs that provide a safe and secure environment to
                  learn and grow. The programme highlights a balance of
                  co-curricular and extra-curricular activities. The early year
                  stage of our programme delivers the following:
                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Child’s inquiry-led through play based teaching and
                    learning methodology
                  </li>
                  <li>Physical and emotional health of the child</li>
                  <li>
                    Developing communication, thinking, reasoning and social
                    skills
                  </li>
                </ul>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  For details check out&nbsp;
                  <a
                    href="https://www.trinsearlylearningcentre.com"
                    target="_blank"
                  >
                    www.trinsearlylearningcentre.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Senior Secondary School Section */}
        {activeProgram === "Senior Secondary School" && (
          <div className="text-left">
            <h2
              className="mb-12 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 100,
                fontSize: "61.12px",
                lineHeight: "73.66px",
                letterSpacing: 0,
                textAlign: "left",
              }}
            >
              Senior Secondary School
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/contentImg.png" // Path is already correct
                  alt="Early Year Program students learning"
                  width={700} // Intrinsic width of the image or desired display width
                  height={450} // Intrinsic height or desired display height
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  A secure and nurturing environment
                </h3>
                <p
                  className="mb-6 ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum, inspired by the Primary Years Programme (IB),
                  is an enriched play-based trans-disciplinary course designed
                  to empower children. It also aims at giving the child a chance
                  to develop emotionally and socially as they grow.
                </p>
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  PLAY BASED TEACHING AND LEARNING METHODOLOGY
                </h3>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  The curriculum design focuses on students’ emotional, physical
                  and social needs that provide a safe and secure environment to
                  learn and grow. The programme highlights a balance of
                  co-curricular and extra-curricular activities. The early year
                  stage of our programme delivers the following:
                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Child’s inquiry-led through play based teaching and
                    learning methodology
                  </li>
                  <li>Physical and emotional health of the child</li>
                  <li>
                    Developing communication, thinking, reasoning and social
                    skills
                  </li>
                </ul>
                <p
                  className="ml-5"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  For details check out&nbsp;
                  <a
                    href="https://www.trinsearlylearningcentre.com"
                    target="_blank"
                  >
                    www.trinsearlylearningcentre.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#E3C274] p-4 rounded-lg shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-24 md:mx-24">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div className="rounded-lg shadow-lg" key={idx}>
              <Image
                src={`/image/curriculum/phSet${idx + 1}.png`}
                alt={`Curriculum Image ${idx + 1}`}
                width={700}
                height={450}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
