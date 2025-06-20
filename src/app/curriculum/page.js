"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ProgramButton from "../components/curriculum/ProgramButton";
import "./Curriculum.css";
import Link from 'next/link';

export default function Curriculum() {
  const [activeProgram, setActiveProgram] = useState("Early Year Program");
  const [activeSubProgram, setActiveSubProgram] = useState(null);
  const [bannerFade, setBannerFade] = useState(false);
  const prevProgram = useRef(activeProgram);

  // Add this useEffect to handle URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const programParam = urlParams.get('program');

      if (programParam && [
        'Early Year Program',
        'Primary Year Program',
        'Middle School',
        'Secondary School',
        'Senior Secondary School'
      ].includes(programParam)) {
        setActiveProgram(programParam);
      }
    }
  }, []);

  const programs = [
    "Early Year Program",
    "Primary Year Program",
    "Middle School",
    "Secondary School",
    "Senior Secondary School",
  ];

  const subPrograms = {
    "Early Year Program": ["EARLY LEARNING CENTER", "KINDERGARTEN"],
    "Secondary School": ["ICSE", "IGCSE"],
    "Senior Secondary School": ["IBDP", "A LEVELS"],
  };

  const bannerImages = {
    'Early Year Program': '/image/curriculum/DSC08444.jpg',
    'EARLY LEARNING CENTER': '/image/curriculum/DSC08444.jpg',
    'KINDERGARTEN': '/image/curriculum/DSC08444.jpg',
    'Primary Year Program': '/image/curriculum/DSC06956.jpg',
    'Middle School': '/image/curriculum/DSC06980.jpg',
    'Secondary School': '/image/curriculum/trins-020.jpg',
    'ICSE': '/image/curriculum/ICSEBAN.jpg',
    'IGCSE': '/image/curriculum/IGCSEBAN.jpg',
    'Senior Secondary School': '/image/curriculum/senior.jpg',
    'IBDP': '/image/curriculum/IBDPBAN.jpg',
    'A LEVELS': '/image/curriculum/ALEVELSBAN.jpg',
  };

  const handleProgramClick = (programName) => {
    if (programName !== activeProgram) {
      setBannerFade(true);
      setTimeout(() => {
        setActiveProgram(programName);
        setActiveSubProgram(null);
        setBannerFade(false);
        prevProgram.current = programName;
      }, 350);
    } else if (subPrograms[programName]) {
      setActiveSubProgram(activeSubProgram ? null : subPrograms[programName][0]);
    }
  };

  const handleSubProgramClick = (subProgramName) => {
    setActiveSubProgram(subProgramName);
  };

  return (
    <div className="w-screen mt-11 mainContainer">
      {/* Banner Section */}
      <div className="relative w-full h-[40svh] magnet-section">
        <Image
          src={bannerImages[activeSubProgram || activeProgram]}
          alt="Students in a classroom with CURRICULUM text overlay"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={`-z-10 transition-opacity duration-500 ease-in-out ${bannerFade ? 'opacity-0' : 'opacity-100'}`}
        />
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
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5/6 w-[80vw] max-w-[2000px]">
          <img
            src="/image/curriculum/Dashboard.svg"
            alt="Dashboard decorative element"
            className="w-full h-auto"
            style={{ display: "block" }}
          />
        </div>
      </div>

      {/* Button Navigation Section */}
      <div className="w-full overflow-x-auto px-4 pb-4" style={{ overflowY: "visible", marginTop: "-90px" }}>
        <div className="flex flex-col md:flex-row gap-2 h-full justify-center left-1/2 mb-16 md:gap-4 min-w-max mt-[-0px] mx-auto transform">
          {programs.map((program) => (
            <div key={program} className="relative">
              <ProgramButton
                programName={program}
                isActive={activeProgram === program}
                hasSubMenu={!!subPrograms[program]}
                isExpanded={activeProgram === program && activeSubProgram !== null}
                onClick={() => handleProgramClick(program)}
              />

              {activeProgram === program && subPrograms[program] && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 w-full">
                  {subPrograms[program].map((subProgram) => (
                    <button
                      key={subProgram}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${activeSubProgram === subProgram ? 'bg-[#FBE9C4]' : ''}`}
                      onClick={() => handleSubProgramClick(subProgram)}
                      style={{ fontFamily: "Gideon Roman, serif" }}
                    >
                      {subProgram}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Program Content Section */}
      <div className="container mx-auto px-4 pb-16 mt-2">
        {/* Early Year Program Sections (unchanged) */}
        {activeProgram === "Early Year Program" && !activeSubProgram && (
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
                  src="/image/curriculum/DSC08431.jpg" // Path is already correct
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
        {activeSubProgram === "EARLY LEARNING CENTER" && (
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
              EARLY LEARNING CENTER
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/DSC08431.jpg"
                  alt="Early Learning Center students"
                  width={700}
                  height={450}
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
                  <li>Child's inquiry-led through play based teaching and
                    learning methodology</li>
                  <li>Physical and emotional health of the child</li>
                  <li>Developing communication, thinking, reasoning and social
                    skills</li>
                </ul>
                <p
                  className="ml-5 mt-6"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "20.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                >
                  For more details visit:&nbsp;
                  <a
                    href="https://www.trinsearlylearningcentre.com"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    www.trinsearlylearningcentre.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
        {activeSubProgram === "KINDERGARTEN" && (
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
              KINDERGARTEN PROGRAMME
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/KINDERGARTEN.jpg"
                  alt="Kindergarten students learning"
                  width={700}
                  height={450}
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
                  At the main campus, there is ample room for the wonderful world of play to develop. This forms effective leadership qualities in students, and sows the seeds towards establishing early patterns of goal setting, problem solving, making informed choices and taking on challenges.
                </p>
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

                  Children have an innate sense of wonderment that encompass all that they see around them. Their natural curiosity makes them excellent learners and this is beautifully integrated into the scheme of the Kindergarten curriculum. The co-curricular and academic goals at TRINS are enveloped in a mantle of unconditional love and support provided by a team of dedicated and talented teaching and supporting staff with many years of international teaching experience. All measures are taken to ensure that your child is provided with a safe and comfortable environment that is conducive to happy learning.
                </p>
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

                  The wide spectrum of learning experiences provided through dance, music ,art craft, sports and computer classes apart from Language, Mathematics , Science and Social Studies ensure that a multi-pronged platform is created to include all types of learners.

                </p>
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

                  The motto of the school ‘Learning is for Life’ creates an atmosphere of enthusiasm and encouragement and provides opportunities that nurture each and every student’s talent and interest and allows them to bloom unrestrained. The philosophy of the school is founded on the belief that each child is unique and is a winner!

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

                </h3>
                {/* <ul className="list-disc ml-5 mt-2" style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}>
                  <li>Phonics-based reading readiness</li>
                  <li>Mathematical thinking and problem solving</li>
                  <li>Scientific inquiry and discovery</li>
                  <li>Social studies and community awareness</li>
                  <li>Creative arts and self-expression</li>
                  <li>Physical education and healthy habits</li>
                </ul> */}
                {/* <p
                  className="ml-5 mt-6"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "20.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}
                > 
                  Learn more about our Kindergarten program:&nbsp;
                  <a
                    href="https://www.trins.org/kindergarten"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  > 
                    www.trins.org/kindergarten
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        )}

        {/* Primary Year Program Section (unchanged) */}
        {activeProgram === "Primary Year Program" && !activeSubProgram && (
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
                  src="/image/curriculum/DSC06877.jpg" // Path is already correct
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
                  An inquiry based teaching and learning methodology that aims to develop an independent, confident and committed student.

                  The whole school community, including parents, are viewed as partners in learning who can actively contribute to a holistic educational experience. This empowers the student to take control of their learning and boost their confidence and self-motivation.

                  The programme is designed to equip the student for a successful life, focusing on five essential elements:

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

                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Knowledge

                  </li>
                  <li>Concepts
                  </li>
                  <li>
                    Skills
                  </li>
                  <li>
                    Attitudes

                  </li>
                  <li>
                    Action
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
                  At TRINS, the students are guided by six trans-disciplinary themes of global significance. This helps them to deepen their learning by developing their conceptual understanding, strengthening their knowledge and skills across and beyond their subject areas.


                </p>
              </div>
            </div>
          </div>
        )}

        {/* Middle School Section (unchanged) */}
        {activeProgram === "Middle School" && !activeSubProgram && (
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
                  src="/image/curriculum/DSC07007.jpg" // Path is already correct
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
                  From the Middle School, the curriculum takes on a broader facet. It focuses on a subject-based curriculum using meaningful and rich assignments for accentuating learning experience. Middle School continues with the international teaching practices that are child-centric and activity based but expands to accommodate more scientific inquiry and explorations. It is an integrated curriculum that prepares the students to meet the requirements of the Indian (<Link style={{ color: 'blue', textDecoration: 'underline' }} href="/curriculum/icse">ICSE</Link> ) and the International (IGCSE) boards that are offered at TRINS.

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
                  SUBJECTS
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

                  The curriculum in Middle School comprises a wider range of subjects reflecting those required for the Grade 10 Board Examinations.

                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Sciences – Physics, Chemistry & Biology

                  </li>
                  <li>Mathematics
                  </li>
                  <li>
                    Humanities – History & Geography

                  </li>
                  <li>ICT</li>
                  <li>English
                  </li>
                  <li>Second Language – French, Hindi, German
                  </li>
                  <li>Practical Sessions – Physics, Chemistry and Biology laboratories where students learn through experiments.
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
                  The Middle School timetable accommodates a whole range of co-curricular activities in both athletics, art, music, swimming and several clubs.

                </p>
              </div>
            </div>
          </div>
        )}

        {/* Secondary School Sections */}
        {activeProgram === "Secondary School" && !activeSubProgram && (
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
                  src="/image/curriculum/trins-020.jpg"
                  alt="Secondary School students"
                  width={700}
                  height={450}
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
                  Academic Excellence Pathways
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
                  Our Secondary School offers two distinguished curriculum options:
                  the Indian Certificate of Secondary Education (ICSE) and the
                  International General Certificate of Secondary Education (IGCSE).
                  Select from the options above to learn more about each program.
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
                  COMMON FEATURES
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
                  fontFamily: "Gideon Roman, serif",
                  fontWeight: 400,
                  fontSize: "23.07px",
                  lineHeight: "27.81px",
                  letterSpacing: 0,
                }}>
                  <li>Comprehensive subject offerings</li>
                  <li>Experienced and dedicated faculty</li>
                  <li>Regular assessments and feedback</li>
                  <li>Holistic development programs</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ICSE Sub-Program */}
        {activeSubProgram === "ICSE" && (
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
              ICSE (Indian Certificate of Secondary Education)
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/ICSE.jpg"
                  alt="ICSE students learning"
                  width={700}
                  height={450}
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
                  ICSE is affiliated to the Council for Indian School Certificate Examinations (www.cisce.org)
                </p>
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
                  The faculty helps the students and their parents make an informed choice of subjects taking into account the interests of the students and their plans for University education.
                </p>
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
                  The subjects offered in ICSE are:
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

                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
                  fontFamily: "Gideon Roman, serif",
                  fontWeight: 400,
                  fontSize: "23.07px",
                  lineHeight: "27.81px",
                  letterSpacing: 0,
                }}>
                  <li>GROUP 1: English, History & Geography and Second Languages (Hindi, Malayalam & French)</li>
                  <li>GROUP 2: Sciences & Mathematics</li>
                  <li>GROUP 3: Economics/Computer Applications</li>
                </ul>
                .
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
                  The final board exams are scheduled in March. The assessment in this curriculum includes an internal assessment component as well.
                  Meaningful and rich assignments for accentuating learning experience are an integral part of the curriculum.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* IGCSE Sub-Program */}
        {activeSubProgram === "IGCSE" && (
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
              IGCSE (International General Certificate of Secondary Education)
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/IGCSE.jpg"
                  alt="IGCSE students learning"
                  width={700}
                  height={450}
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
                  Education forms the cornerstone of a child’s development. Long gone are the days when access to knowledge came from four-walled classrooms, with students clad in uniforms and using mechanisms like slates.
                </p>
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
                  Modern-day problems need a modern-day solution. That is exactly where we step in. With our focus on holistic education, we aim to curate an environment of learning for life in all spheres.
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
                  WE ARE THE FUTURE OF IGCSE SCHOOLS IN KERALA
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
                  Our general pedagogy allows children to explore individual characteristics while focusing on overall character development. Our flexible subject combinations are the first step in that direction. At the end of Class 8, students choose whether to follow:
                </p>
                <h3
                  className="mb-3 text-left"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "34px",
                    lineHeight: "44px",
                    letterSpacing: 0,
                    textAlign: "left",
                  }}
                >
                  ICSE or Cambridge International Examination’s IGCSE curriculum for the next two years.
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
                  Both the curriculum empowers the students to progress to either the CIE A-levels or the IBDP at any IGCSE school in Kerala.
                </p>
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
                  This curriculum is Affiliated with the Cambridge Assessment International Education (www.cambridgeinternational.org)
                </p>
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
                  The faculty helps the students and their parents make an informed choice of subjects, taking into account the interests of the students and their plans for future.
                </p>
                {/* <ul className="list-disc ml-5 mt-2" style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}>
                  <li>Internationally recognized qualification</li>
                  <li>Flexible subject combinations</li>
                  <li>Emphasis on application of knowledge</li>
                  <li>Development of creative thinking and problem-solving</li>
                  <li>Preparation for international higher education</li>
                </ul> */}
              </div>
            </div>
          </div>
        )}

        {/* Senior Secondary School Sections */}
        {activeProgram === "Senior Secondary School" && !activeSubProgram && (
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
                  src="/image/curriculum/trins-001.jpg"
                  alt="Senior Secondary School students"
                  width={700}
                  height={450}
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
                  University Preparation Programs
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
                  Our Senior Secondary School offers two prestigious international
                  programs: the International Baccalaureate Diploma Programme (IBDP)
                  and Cambridge Advanced Levels (A LEVELS). Select from the options
                  above to learn more about each program.
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
                  COMMON BENEFITS
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
                  fontFamily: "Gideon Roman, serif",
                  fontWeight: 400,
                  fontSize: "23.07px",
                  lineHeight: "27.81px",
                  letterSpacing: 0,
                }}>
                  <li>Globally recognized qualifications</li>
                  <li>University counseling and placement support</li>
                  <li>Specialized subject faculty</li>
                  <li>Research and independent study opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* IBDP Sub-Program */}
        {activeSubProgram === "IBDP" && (
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
              IBDP (International Baccalaureate Diploma Programme)
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/IBDP.jpg"
                  alt="IBDP students learning"
                  width={700}
                  height={450}
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
                  The Diploma Programme (DP) curriculum is made up of six subject groups and a DP core comprising of three elements.
                </p>

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
                  The DP core aims for the students to reflect on the nature of knowledge, complete independent research and undertake a project that often involves community service.
                </p>
                <p>The three elements of the DP core are:</p>
                <p>Theory of Knowledge (TOK): Reflection on the nature of knowledge and on how we know what we claim to know.</p>
                <p>The Extended Essay(EE): An independent, self-directed piece of research, finishing with a 4,000-word paper.</p>
                <p>Creativity, Activity, Service (CAS): A project focusing those three concepts.</p>
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
                  The six subject groups are:</p>
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
                  PROGRAM COMPONENTS
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
                  fontFamily: "Gideon Roman, serif",
                  fontWeight: 400,
                  fontSize: "23.07px",
                  lineHeight: "27.81px",
                  letterSpacing: 0,
                }}>
                  <li>Studies in Language and Literature</li>
                  <li>Language Acquisition</li>
                  <li>Individuals and Societies</li>
                  <li>Sciences</li>
                  <li>Mathematics</li>
                  <li>Arts</li>
                </ul>
                .
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
                  The DP is open to any student aged between 16 and 19.</p>
              </div>
            </div>
          </div>
        )}

        {/* A LEVELS Sub-Program */}
        {activeSubProgram === "A LEVELS" && (
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
              A LEVELS (Cambridge Advanced Levels)
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/Alevels.jpg"
                  alt="A LEVELS students learning"
                  width={700}
                  height={450}
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
                  The A Level programme consists of AS qualification (studied in Class 11) and A2 qualification (studied in class 12). A student may choose to study four subjects in Class 11, but this will often be reduced to 3 subjects in Class 12 (students obtaining three A-Levels and one AS-Level)
                </p>
                .
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
                  Subjects may be chosen in any combination that suits their requirements for their University education. Accordingly, there are no fixed subject groups. However, choices will be also influenced by schedules set for the school year:
                </p>
                {/* <h3
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
                  PROGRAM FEATURES
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}>
                  <li>Typically 3-4 subject specialization</li>
                  <li>Flexible subject combinations</li>
                  <li>Internationally benchmarked assessments</li>
                  <li>Development of analytical and critical thinking skills</li>
                  <li>Excellent preparation for UK and Commonwealth universities</li>
                </ul> */}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Photo Gallery Section */}
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