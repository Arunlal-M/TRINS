// "use client"; // Add this at the top
// import Image from "next/image";
// import { useState, useRef } from "react"; // Import useState and useRef
// import ProgramButton from "../components/curriculum/ProgramButton"; // Import ProgramButton
// import "./Curriculum.css"

// export default function Curriculum() {
//   const [activeProgram, setActiveProgram] = useState("Early Year Program"); // State for active program
//   const [bannerFade, setBannerFade] = useState(false); // State for banner fade effect
//   const prevProgram = useRef(activeProgram); // Ref to track previous program
//   const programs = [
//     "Early Year Program",
//     "Primary Year Program",
//     "Middle School",
//     "Secondary School",
//     "Senior Secondary School",
//   ];

//   // Banner image selection based on active program
//   const bannerImages = {
//     'Early Year Program': '/image/curriculum/DSC08444.jpg',
//     'Primary Year Program': '/image/curriculum/DSC06956.jpg',
//     'Middle School': '/image/curriculum/DSC06980.jpg',
//     'Secondary School': '/image/curriculum/trins-020.jpg',
//     'Senior Secondary School': '/image/curriculum/DSC06228.jpg',
//   };

//   const handleProgramClick = (programName) => {
//     if (programName !== activeProgram) {
//       setBannerFade(true);
//       setTimeout(() => {
//         setActiveProgram(programName);
//         setBannerFade(false);
//         prevProgram.current = programName;
//       }, 350); // Duration matches transition
//     }
//   };

//   return (
//     <div className="w-screen mt-64 mainContainer">
//       {" "}
//       {/* Don't remove "mt-64" class to fix typo and spacing */}
//       {/* Banner Section */}
//       <div className="relative w-full h-[70svh] magnet-section">
//         <Image
//           src={bannerImages[activeProgram]}
//           alt="Students in a classroom with CURRICULUM text overlay"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           priority
//           className={`-z-10 transition-opacity duration-500 ease-in-out ${bannerFade ? 'opacity-0' : 'opacity-100'}`}
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1
//             className="text-white text-7xl md:text-8xl lg:text-9xl font-normal uppercase"
//             style={{
//               fontFamily: "Gideon Roman, serif",
//               letterSpacing: "0.05em",
//             }}
//           >
//             CURRICULUM
//           </h1>
//         </div>
//         {/* Dashboard SVG */}
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5/6 w-[80vw] max-w-[2000px]">
//           <img
//             src="/image/curriculum/Dashboard.svg"
//             alt="Dashboard decorative element"
//             className="w-full h-auto"
//             style={{ display: "block" }}
//           />
//         </div>
//       </div>
//       {/* Button Navigation Section - All buttons in one row */}
//       <div className="w-full overflow-x-auto px-4 pb-4" style={{overflowY: "visible", marginTop: "-90px"}}>
//         <div className="flex gap-2 h-full justify-center left-1/2 mb-16 md:gap-4 min-w-max mt-[-0px] mx-auto transform">
//           {programs.map((program) => (
//             <ProgramButton
//               key={program}
//               programName={program}
//               isActive={activeProgram === program}
//               onClick={() => handleProgramClick(program)}
//             />
//           ))}
//         </div>
//       </div>
//       {/* Program Content Section */}
//       <div className="container mx-auto px-4 pb-16 mt-2">
//         {/* Early Year Program Section (Content based on screenshot) */}
//         {activeProgram === "Early Year Program" && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Early Year Program
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/DSC08431.JPG" // Path is already correct
//                   alt="Early Year Program students learning"
//                   width={700} // Intrinsic width of the image or desired display width
//                   height={450} // Intrinsic height or desired display height
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   A secure and nurturing environment
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum, inspired by the Primary Years Programme (IB), is an enriched play-based trans-disciplinary course designed to empower children. It also aims at giving the child a chance to develop emotionally and socially as they grow.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PLAY BASED TEACHING AND LEARNING METHODOLOGY
//                 </h3>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum design focuses on students' emotional, physical
//                   and social needs that provide a safe and secure environment to
//                   learn and grow. The programme highlights a balance of
//                   co-curricular and extra-curricular activities. The early year
//                   stage of our programme delivers the following:
//                 </p>
//                 <ul className="list-disc ml-5 mt-2" style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}>
//                   <li>
//                     Child's inquiry-led through play based teaching and
//                     learning methodology
//                   </li>
//                   <li>Physical and emotional health of the child</li>
//                   <li>
//                     Developing communication, thinking, reasoning and social
//                     skills
//                   </li>
//                 </ul>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "20.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 > For details check out&nbsp;
//                   <a
//                     href="https://www.trinsearlylearningcentre.com"
//                     target="_blank"
//                   > www.trinsearlylearningcentre.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//         {/* Primary Year Program Section */}
//         {activeProgram === "Primary Year Program" && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Primary Year Program
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/DSC06877.jpg" // Path is already correct
//                   alt="Early Year Program students learning"
//                   width={700} // Intrinsic width of the image or desired display width
//                   height={450} // Intrinsic height or desired display height
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   A secure and nurturing environment
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum, inspired by the Primary Years Programme (IB),
//                   is an enriched play-based trans-disciplinary course designed
//                   to empower children. It also aims at giving the child a chance
//                   to develop emotionally and socially as they grow.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PLAY BASED TEACHING AND LEARNING METHODOLOGY
//                 </h3>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum design focuses on students’ emotional, physical
//                   and social needs that provide a safe and secure environment to
//                   learn and grow. The programme highlights a balance of
//                   co-curricular and extra-curricular activities. The early year
//                   stage of our programme delivers the following:
//                 </p>
//                 <ul className="list-disc ml-5 mt-2">
//                   <li>
//                     Child’s inquiry-led through play based teaching and
//                     learning methodology
//                   </li>
//                   <li>Physical and emotional health of the child</li>
//                   <li>
//                     Developing communication, thinking, reasoning and social
//                     skills
//                   </li>
//                 </ul>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   For details check out&nbsp;
//                   <a
//                     href="https://www.trinsearlylearningcentre.com"
//                     target="_blank"
//                   >
//                     www.trinsearlylearningcentre.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Middle School Section */}
//         {activeProgram === "Middle School" && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Middle School
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/DSC07007.jpg" // Path is already correct
//                   alt="Early Year Program students learning"
//                   width={700} // Intrinsic width of the image or desired display width
//                   height={450} // Intrinsic height or desired display height
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   A secure and nurturing environment
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum, inspired by the Primary Years Programme (IB),
//                   is an enriched play-based trans-disciplinary course designed
//                   to empower children. It also aims at giving the child a chance
//                   to develop emotionally and socially as they grow.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PLAY BASED TEACHING AND LEARNING METHODOLOGY
//                 </h3>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum design focuses on students’ emotional, physical
//                   and social needs that provide a safe and secure environment to
//                   learn and grow. The programme highlights a balance of
//                   co-curricular and extra-curricular activities. The early year
//                   stage of our programme delivers the following:
//                 </p>
//                 <ul className="list-disc ml-5 mt-2">
//                   <li>
//                     Child’s inquiry-led through play based teaching and
//                     learning methodology
//                   </li>
//                   <li>Physical and emotional health of the child</li>
//                   <li>
//                     Developing communication, thinking, reasoning and social
//                     skills
//                   </li>
//                 </ul>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   For details check out&nbsp;
//                   <a
//                     href="https://www.trinsearlylearningcentre.com"
//                     target="_blank"
//                   >
//                     www.trinsearlylearningcentre.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Secondary School Section */}
//         {activeProgram === "Secondary School" && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Secondary School
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/trins-001.jpg" // Path is already correct
//                   alt="Early Year Program students learning"
//                   width={700} // Intrinsic width of the image or desired display width
//                   height={450} // Intrinsic height or desired display height
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   A secure and nurturing environment
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum, inspired by the Primary Years Programme (IB),
//                   is an enriched play-based trans-disciplinary course designed
//                   to empower children. It also aims at giving the child a chance
//                   to develop emotionally and socially as they grow.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PLAY BASED TEACHING AND LEARNING METHODOLOGY
//                 </h3>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum design focuses on students’ emotional, physical
//                   and social needs that provide a safe and secure environment to
//                   learn and grow. The programme highlights a balance of
//                   co-curricular and extra-curricular activities. The early year
//                   stage of our programme delivers the following:
//                 </p>
//                 <ul className="list-disc ml-5 mt-2">
//                   <li>
//                     Child’s inquiry-led through play based teaching and
//                     learning methodology
//                   </li>
//                   <li>Physical and emotional health of the child</li>
//                   <li>
//                     Developing communication, thinking, reasoning and social
//                     skills
//                   </li>
//                 </ul>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   For details check out&nbsp;
//                   <a
//                     href="https://www.trinsearlylearningcentre.com"
//                     target="_blank"
//                   >
//                     www.trinsearlylearningcentre.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Senior Secondary School Section */}
//         {activeProgram === "Senior Secondary School" && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Senior Secondary School
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/DSC07138.jpg" // Path is already correct
//                   alt="Early Year Program students learning"
//                   width={700} // Intrinsic width of the image or desired display width
//                   height={450} // Intrinsic height or desired display height
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   A secure and nurturing environment
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum, inspired by the Primary Years Programme (IB),
//                   is an enriched play-based trans-disciplinary course designed
//                   to empower children. It also aims at giving the child a chance
//                   to develop emotionally and socially as they grow.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PLAY BASED TEACHING AND LEARNING METHODOLOGY
//                 </h3>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum design focuses on students’ emotional, physical
//                   and social needs that provide a safe and secure environment to
//                   learn and grow. The programme highlights a balance of
//                   co-curricular and extra-curricular activities. The early year
//                   stage of our programme delivers the following:
//                 </p>
//                 <ul className="list-disc ml-5 mt-2">
//                   <li>
//                     Child’s inquiry-led through play based teaching and
//                     learning methodology
//                   </li>
//                   <li>Physical and emotional health of the child</li>
//                   <li>
//                     Developing communication, thinking, reasoning and social
//                     skills
//                   </li>
//                 </ul>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   For details check out&nbsp;
//                   <a
//                     href="https://www.trinsearlylearningcentre.com"
//                     target="_blank"
//                   >
//                     www.trinsearlylearningcentre.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="bg-[#E3C274] p-4 rounded-lg shadow-2xl">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-24 md:mx-24">
//           {Array.from({ length: 6 }).map((_, idx) => (
//             <div className="rounded-lg shadow-lg" key={idx}>
//               <Image
//                 src={`/image/curriculum/phSet${idx + 1}.png`}
//                 alt={`Curriculum Image ${idx + 1}`}
//                 width={700}
//                 height={450}
//                 className="rounded-lg shadow-lg w-full h-auto object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";
// import Image from "next/image";
// import { useState, useRef } from "react";
// import ProgramButton from "../components/curriculum/ProgramButton";
// import "./Curriculum.css";

// export default function Curriculum() {
//   const [activeProgram, setActiveProgram] = useState("Early Year Program");
//   const [activeSubProgram, setActiveSubProgram] = useState(null);
//   const [bannerFade, setBannerFade] = useState(false);
//   const prevProgram = useRef(activeProgram);
//   const programs = [
//     "Early Year Program",
//     "Primary Year Program",
//     "Middle School",
//     "Secondary School",
//     "Senior Secondary School",
//   ];

//   const subPrograms = {
//     "Early Year Program": ["EARLY LEARNING CENTER", "KINDERGARTEN"],
//   };

//   const bannerImages = {
//     'Early Year Program': '/image/curriculum/DSC08444.jpg',
//     'EARLY LEARNING CENTER': '/image/curriculum/DSC08444.jpg',
//     'KINDERGARTEN': '/image/curriculum/DSC08444.jpg',
//     'Primary Year Program': '/image/curriculum/DSC06956.jpg',
//     'Middle School': '/image/curriculum/DSC06980.jpg',
//     'Secondary School': '/image/curriculum/trins-020.jpg',
//     'Senior Secondary School': '/image/curriculum/DSC06228.jpg',
//   };

//   const handleProgramClick = (programName) => {
//     if (programName !== activeProgram) {
//       setBannerFade(true);
//       setTimeout(() => {
//         setActiveProgram(programName);
//         setActiveSubProgram(null);
//         setBannerFade(false);
//         prevProgram.current = programName;
//       }, 350);
//     } else if (subPrograms[programName]) {
//       // Toggle subprogram visibility if clicking the same program
//       setActiveSubProgram(activeSubProgram ? null : subPrograms[programName][0]);
//     }
//   };

//   const handleSubProgramClick = (subProgramName) => {
//     setActiveSubProgram(subProgramName);
//   };

//   return (
//     <div className="w-screen mt-64 mainContainer">
//       {/* Banner Section */}
//       <div className="relative w-full h-[70svh] magnet-section">
//         <Image
//           src={bannerImages[activeSubProgram || activeProgram]}
//           alt="Students in a classroom with CURRICULUM text overlay"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           priority
//           className={`-z-10 transition-opacity duration-500 ease-in-out ${bannerFade ? 'opacity-0' : 'opacity-100'}`}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1
//             className="text-white text-7xl md:text-8xl lg:text-9xl font-normal uppercase"
//             style={{
//               fontFamily: "Gideon Roman, serif",
//               letterSpacing: "0.05em",
//             }}
//           >
//             CURRICULUM
//           </h1>
//         </div>
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5/6 w-[80vw] max-w-[2000px]">
//           <img
//             src="/image/curriculum/Dashboard.svg"
//             alt="Dashboard decorative element"
//             className="w-full h-auto"
//             style={{ display: "block" }}
//           />
//         </div>
//       </div>

//       {/* Button Navigation Section */}
//       <div className="w-full overflow-x-auto px-4 pb-4" style={{overflowY: "visible", marginTop: "-90px"}}>
//         <div className="flex flex-col md:flex-row gap-2 h-full justify-center left-1/2 mb-16 md:gap-4 min-w-max mt-[-0px] mx-auto transform">
//           {programs.map((program) => (
//             <div key={program} className="relative">
//               <ProgramButton
//                 programName={program}
//                 isActive={activeProgram === program}
//                 hasSubMenu={!!subPrograms[program]}
//                 isExpanded={activeProgram === program && activeSubProgram !== null}
//                 onClick={() => handleProgramClick(program)}
//               />
              
//               {activeProgram === program && subPrograms[program] && (
//                 <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 w-full">
//                   {subPrograms[program].map((subProgram) => (
//                     <button
//                       key={subProgram}
//                       className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
//                         activeSubProgram === subProgram ? 'bg-[#FBE9C4]' : ''
//                       }`}
//                       onClick={() => handleSubProgramClick(subProgram)}
//                       style={{ fontFamily: "Gideon Roman, serif" }}
//                     >
//                       {subProgram}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Program Content Section */}
//       <div className="container mx-auto px-4 pb-16 mt-2">
//         {/* Early Year Program Section */}
//         {activeProgram === "Early Year Program" && !activeSubProgram && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Early Year Program
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/DSC08431.JPG"
//                   alt="Early Year Program students learning"
//                   width={700}
//                   height={450}
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   A secure and nurturing environment
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The Early Year Program at Trivandrum International School offers two specialized tracks:
//                   our Early Learning Center for the youngest learners and our Kindergarten program 
//                   preparing children for primary education. Click on the options above to learn more 
//                   about each program.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   HOLISTIC DEVELOPMENT APPROACH
//                 </h3>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   Both programs follow our philosophy of nurturing the whole child through:
//                 </p>
//                 <ul className="list-disc ml-5 mt-2" style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}>
//                   <li>Play-based learning methodologies</li>
//                   <li>Social-emotional development</li>
//                   <li>Creative expression and discovery</li>
//                   <li>Language and cognitive skill building</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Early Learning Center Sub-Program */}
//         {activeSubProgram === "EARLY LEARNING CENTER" && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               EARLY LEARNING CENTER
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/elc-demo.jpg"
//                   alt="Early Learning Center students"
//                   width={700}
//                   height={450}
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   Nurturing Our Youngest Learners
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   Our Early Learning Center provides a warm, welcoming environment 
//                   for children ages 2-4. Inspired by Reggio Emilia and Montessori 
//                   approaches, we focus on sensory exploration, early socialization, 
//                   and foundational skill development.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PROGRAM HIGHLIGHTS
//                 </h3>
//                 <ul className="list-disc ml-5 mt-2" style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}>
//                   <li>Small class sizes with individualized attention</li>
//                   <li>Daily outdoor exploration and play</li>
//                   <li>Music, movement, and art integration</li>
//                   <li>Early literacy and numeracy through play</li>
//                   <li>Focus on self-help and independence skills</li>
//                 </ul>
//                 <p
//                   className="ml-5 mt-6"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "20.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 > 
//                   For more details visit:&nbsp;
//                   <a
//                     href="https://www.trinsearlylearningcentre.com"
//                     target="_blank"
//                     className="text-blue-600 hover:underline"
//                   > 
//                     www.trinsearlylearningcentre.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Kindergarten Sub-Program */}
//         {activeSubProgram === "KINDERGARTEN" && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               KINDERGARTEN
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/kindergarten-demo.jpg"
//                   alt="Kindergarten students learning"
//                   width={700}
//                   height={450}
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   Preparing for Academic Success
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   Our Kindergarten program for ages 4-6 provides a bridge between 
//                   early childhood and formal schooling. We maintain a play-based 
//                   approach while introducing more structured learning experiences 
//                   to prepare children for Primary Year Program.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   CURRICULUM FOCUS AREAS
//                 </h3>
//                 <ul className="list-disc ml-5 mt-2" style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}>
//                   <li>Phonics-based reading readiness</li>
//                   <li>Mathematical thinking and problem solving</li>
//                   <li>Scientific inquiry and discovery</li>
//                   <li>Social studies and community awareness</li>
//                   <li>Creative arts and self-expression</li>
//                   <li>Physical education and healthy habits</li>
//                 </ul>
//                 <p
//                   className="ml-5 mt-6"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "20.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 > 
//                   Learn more about our Kindergarten program:&nbsp;
//                   <a
//                     href="https://www.trins.org/kindergarten"
//                     target="_blank"
//                     className="text-blue-600 hover:underline"
//                   > 
//                     www.trins.org/kindergarten
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Primary Year Program Section (unchanged) */}
//         {activeProgram === "Primary Year Program" && !activeSubProgram && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Primary Year Program
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/DSC06877.jpg"
//                   alt="Primary Year Program students learning"
//                   width={700}
//                   height={450}
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   A secure and nurturing environment
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum, inspired by the Primary Years Programme (IB),
//                   is an enriched play-based trans-disciplinary course designed
//                   to empower children. It also aims at giving the child a chance
//                   to develop emotionally and socially as they grow.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PLAY BASED TEACHING AND LEARNING METHODOLOGY
//                 </h3>
//                 <p
//                   className="ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   The curriculum design focuses on students' emotional, physical
//                   and social needs that provide a safe and secure environment to
//                   learn and grow. The programme highlights a balance of
//                   co-curricular and extra-curricular activities. The early year
//                   stage of our programme delivers the following:
//                 </p>
//                 <ul className="list-disc ml-5 mt-2">
//                   <li>
//                     Child's inquiry-led through play based teaching and
//                     learning methodology
//                   </li>
//                   <li>Physical and emotional health of the child</li>
//                   <li>
//                     Developing communication, thinking, reasoning and social
//                     skills
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Middle School Section (unchanged) */}
//         {activeProgram === "Middle School" && !activeSubProgram && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Middle School
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/DSC07007.jpg"
//                   alt="Middle School students learning"
//                   width={700}
//                   height={450}
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   Transition to Advanced Learning
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   Our Middle School program builds on foundational skills while introducing
//                   more specialized subject areas. We focus on developing critical thinking,
//                   research skills, and independent learning habits.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   CURRICULUM HIGHLIGHTS
//                 </h3>
//                 <ul className="list-disc ml-5 mt-2">
//                   <li>Integrated project-based learning</li>
//                   <li>Exploratory elective courses</li>
//                   <li>Advisory program for social-emotional development</li>
//                   <li>Technology integration across subjects</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Secondary School Section (unchanged) */}
//         {activeProgram === "Secondary School" && !activeSubProgram && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Secondary School
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/trins-001.jpg"
//                   alt="Secondary School students learning"
//                   width={700}
//                   height={450}
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   Preparing for Senior Studies
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   Our Secondary School program offers a rigorous academic curriculum
//                   that prepares students for the challenges of senior secondary education.
//                   We emphasize both depth of knowledge and breadth of experience.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PROGRAM FEATURES
//                 </h3>
//                 <ul className="list-disc ml-5 mt-2">
//                   <li>Subject specialization with expert faculty</li>
//                   <li>Research and independent study opportunities</li>
//                   <li>Career exploration and guidance</li>
//                   <li>Leadership development programs</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Senior Secondary School Section (unchanged) */}
//         {activeProgram === "Senior Secondary School" && !activeSubProgram && (
//           <div className="text-left">
//             <h2
//               className="mb-12 text-left"
//               style={{
//                 fontFamily: "Gideon Roman, serif",
//                 fontWeight: 100,
//                 fontSize: "61.12px",
//                 lineHeight: "73.66px",
//                 letterSpacing: 0,
//                 textAlign: "left",
//               }}
//             >
//               Senior Secondary School
//             </h2>
//             <div className="md:flex md:items-start md:space-x-8 text-left">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <Image
//                   src="/image/curriculum/DSC07138.jpg"
//                   alt="Senior Secondary School students learning"
//                   width={700}
//                   height={450}
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   College and Career Readiness
//                 </h3>
//                 <p
//                   className="mb-6 ml-5"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "23.07px",
//                     lineHeight: "27.81px",
//                     letterSpacing: 0,
//                   }}
//                 >
//                   Our Senior Secondary program offers specialized tracks to prepare
//                   students for higher education and future careers. With a focus on
//                   critical thinking and real-world applications, we help students
//                   excel in their chosen fields.
//                 </p>
//                 <h3
//                   className="mb-3 text-left"
//                   style={{
//                     fontFamily: "Gideon Roman, serif",
//                     fontWeight: 400,
//                     fontSize: "36px",
//                     lineHeight: "44px",
//                     letterSpacing: 0,
//                     textAlign: "left",
//                   }}
//                 >
//                   PROGRAM OPTIONS
//                 </h3>
//                 <ul className="list-disc ml-5 mt-2">
//                   <li>Science stream with advanced lab facilities</li>
//                   <li>Commerce stream with business applications</li>
//                   <li>Humanities with interdisciplinary focus</li>
//                   <li>University counseling and placement support</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Photo Gallery Section */}
//       <div className="bg-[#E3C274] p-4 rounded-lg shadow-2xl">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-24 md:mx-24">
//           {Array.from({ length: 6 }).map((_, idx) => (
//             <div className="rounded-lg shadow-lg" key={idx}>
//               <Image
//                 src={`/image/curriculum/phSet${idx + 1}.png`}
//                 alt={`Curriculum Image ${idx + 1}`}
//                 width={700}
//                 height={450}
//                 className="rounded-lg shadow-lg w-full h-auto object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import ProgramButton from "../components/curriculum/ProgramButton";
import "./Curriculum.css";

export default function Curriculum() {
  const [activeProgram, setActiveProgram] = useState("Early Year Program");
  const [activeSubProgram, setActiveSubProgram] = useState(null);
  const [bannerFade, setBannerFade] = useState(false);
  const prevProgram = useRef(activeProgram);
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
    'ICSE': '/image/curriculum/icse-demo.jpg',
    'IGCSE': '/image/curriculum/igcse-demo.jpg',
    'Senior Secondary School': '/image/curriculum/DSC06228.jpg',
    'IBDP': '/image/curriculum/ibdp-demo.jpg',
    'A LEVELS': '/image/curriculum/alevels-demo.jpg',
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
    <div className="w-screen mt-64 mainContainer">
      {/* Banner Section */}
      <div className="relative w-full h-[70svh] magnet-section">
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
      <div className="w-full overflow-x-auto px-4 pb-4" style={{overflowY: "visible", marginTop: "-90px"}}>
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
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                        activeSubProgram === subProgram ? 'bg-[#FBE9C4]' : ''
                      }`}
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
                  src="/image/curriculum/DSC08431.JPG" // Path is already correct
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
                  src="/image/curriculum/elc-demo.jpg"
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
                  Nurturing Our Youngest Learners
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
                  Our Early Learning Center provides a warm, welcoming environment 
                  for children ages 2-4. Inspired by Reggio Emilia and Montessori 
                  approaches, we focus on sensory exploration, early socialization, 
                  and foundational skill development.
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
                  PROGRAM HIGHLIGHTS
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}>
                  <li>Small class sizes with individualized attention</li>
                  <li>Daily outdoor exploration and play</li>
                  <li>Music, movement, and art integration</li>
                  <li>Early literacy and numeracy through play</li>
                  <li>Focus on self-help and independence skills</li>
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
              KINDERGARTEN
            </h2>
            <div className="md:flex md:items-start md:space-x-8 text-left">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/image/curriculum/kindergarten-demo.jpg"
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
                  Preparing for Academic Success
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
                  Our Kindergarten program for ages 4-6 provides a bridge between 
                  early childhood and formal schooling. We maintain a play-based 
                  approach while introducing more structured learning experiences 
                  to prepare children for Primary Year Program.
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
                  CURRICULUM FOCUS AREAS
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
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
                  Learn more about our Kindergarten program:&nbsp;
                  <a
                    href="https://www.trins.org/kindergarten"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  > 
                    www.trins.org/kindergarten
                  </a>
                </p>
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
                 From the Middle School, the curriculum takes on a broader facet. It focuses on a subject-based curriculum using meaningful and rich assignments for accentuating learning experience. Middle School continues with the international teaching practices that are child-centric and activity based but expands to accommodate more scientific inquiry and explorations. It is an integrated curriculum that prepares the students to meet the requirements of the Indian (ICSE ) and the International (IGCSE) boards that are offered at TRINS.

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
                  src="/image/curriculum/icse-demo.jpg"
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
                  Comprehensive Indian Curriculum
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
                  The ICSE program at Trivandrum International School offers a
                  rigorous curriculum that emphasizes in-depth knowledge across
                  subjects while developing analytical and problem-solving skills.
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
                  PROGRAM HIGHLIGHTS
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}>
                  <li>Comprehensive syllabus with emphasis on English proficiency</li>
                  <li>Wide range of subject choices including Indian languages</li>
                  <li>Internal assessments contributing to final grades</li>
                  <li>Strong foundation for competitive exams in India</li>
                  <li>Emphasis on practical knowledge and application</li>
                </ul>
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
                  src="/image/curriculum/igcse-demo.jpg"
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
                  Globally Recognized Curriculum
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
                  The IGCSE program offers an international curriculum that
                  develops students' knowledge, understanding and skills in
                  subject content and intellectual inquiry.
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
                  PROGRAM HIGHLIGHTS
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
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
                </ul>
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
                  src="/image/curriculum/DSC06228.jpg"
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
                  src="/image/curriculum/ibdp-demo.jpg"
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
                  Holistic International Education
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
                  The IBDP is a rigorous two-year program that prepares students
                  for success in higher education and life in a global society.
                  It emphasizes intellectual, personal, emotional and social growth.
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
                  PROGRAM COMPONENTS
                </h3>
                <ul className="list-disc ml-5 mt-2" style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "23.07px",
                    lineHeight: "27.81px",
                    letterSpacing: 0,
                  }}>
                  <li>Six subject groups including languages, sciences, and arts</li>
                  <li>Theory of Knowledge (TOK) course</li>
                  <li>Extended Essay (4,000-word research paper)</li>
                  <li>Creativity, Activity, Service (CAS) requirements</li>
                  <li>Internationally mobile curriculum recognized by top universities</li>
                </ul>
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
                  src="/image/curriculum/alevels-demo.jpg"
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
                  Specialized Subject Focus
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
                  The Cambridge A Levels program offers in-depth study of selected
                  subjects, developing deep understanding and independent learning
                  skills valued by universities worldwide.
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
                </ul>
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