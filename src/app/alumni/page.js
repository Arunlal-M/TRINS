// import AdmissionCard from "../components/AdmissionCard";
// import "./page.css";

// export default function Alumni() {
//   return (
//     <div className="w-full mt-11 flex flex-col items-center justify-center relative mainContainer">
//       {/* <div className="w-full max-w-[1400px] flex flex-row flex-wrap items-stretch justify-center gap-8 mt-16 mb-8 px-4 alumniContainer">
//         <AdmissionCard
//           image={"/image/alumni/alumni-association.jpg"}
//           text="Alumni Association"
//           href="/alumni/association"
//         />
//         <AdmissionCard
//           image="/image/alumni/alumni-stories.jpg"
//           text="Alumni Stories"
//           href="/alumni/stories"
//         />
//         <AdmissionCard
//           image="/image/alumni/alumni-events.jpg"
//           text="Alumni Events"
//           href="/alumni/events"
//         />
//         <AdmissionCard
//           image="/image/alumni/alumni-network.jpg"
//           text="Alumni Network"
//           href="/alumni/network"
//         />
//         <AdmissionCard
//           image="/image/alumni/alumni-donations.jpg"
//           text="Alumni Donations"
//           href="/alumni/donations"
//         />
//         <AdmissionCard
//           image="/image/alumni/alumni-engagement.jpg"
//           text="Alumni Engagement"
//           href="/alumni/engagement"
//         />
//         <AdmissionCard
//           image="/image/alumni/alumni-support.jpg"
//           text="Alumni Support"
//           href="/alumni/support"
//         />
//         <AdmissionCard
//           image="/image/alumni/alumni-mentorship.jpg"
//           text="Alumni Mentorship"
//           href="/alumni/mentorship"
//         />
//       </div> */}

//       {/* Title SubSection */}
//       <div className="w-full flex flex-row items-stretch mt-8">
//         <div className="w-full bannerSectionContainer bg-[#075037]">
//           <div className="contentWidthAdjust h-full w-full">
//             <div className="imgContainer">
//               <img
//                 src="/image/alumni/alumni.webp"
//                 alt="Alumni Main"
//               />
//             </div>
//             <div className="contentContainer">
//               <h1 className="text-white leading-title font-normal mb-2">
//                 TRINS <br /> ALUMNI
//               </h1>
//               <p className="text-white mt-2 subTitle">
//                 Once a TRINSian, always a TRINSian
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Description Section */}
//       <div className="w-full max-w-6xl py-16 px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
//             Our Global Alumni Community
//           </h2>
//           <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
//             The TRINS alumni network spans across the globe, with graduates making meaningful contributions in diverse fields.
//             We take pride in maintaining strong connections with our former students and providing opportunities for lifelong engagement.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//           {[
//             { number: "5,000+", label: "Alumni Worldwide" },
//             { number: "12+", label: "Countries Represented" },
//             { number: "25", label: "Annual Events" },
//             { number: "200+", label: "Mentorship Connections" }
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-4xl text-[#075037] mb-2" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
//                 {stat.number}
//               </div>
//               <div className="text-lg text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//       <div className="flex flex-col items-center w-full mb-16 mt-8 bottomButtonContainer">
//         <a
//           href="/alumni/stories"
//           className="bg-[#075037] text-white text-2xl px-12 py-4 rounded-full shadow-lg hover:bg-[#0a6a4a] transition-colors duration-200 flex items-center gap-2"
//           style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400, zindex: 9, position: "relative" }}
//         >
//           View More Stories <span style={{ fontSize: 24, marginLeft: 8 }}>&#8594;</span>
//         </a>
//       </div>
//     </div>
//   );
// }

"use client";

import AdmissionCard from "../components/AdmissionCard";
import "./page.css";
import { useState } from 'react';
import Image from 'next/image';

export default function Alumni() {
  const [activeTab, setActiveTab] = useState('uk');

  // University data grouped by country
  const universityData = {
    uk: {
      name: "UNITED KINGDOM",
      universities: [
        "Imperial College, London",
        "University of Warwick",
        "University of Bristol",
        "The University of Sheffield",
        "University College, London",
        "University of Kent",
        "Lancaster University",
        "University of Bath",
        "University of Nottingham",
        "University of East Anglia",
        "Aston University",
        "University of Birmingham",
        "University of Brighton",
        "University of Sussex"
      ]
    },
    usa: {
      name: "USA",
      universities: [
        "Columbia University",
        "Georgia Institute of Technology",
        "Carnegie Mellon University",
        "Drexel University",
        "Washington State University",
        "University of Missouri",
        "Muhlenberg College",
        "New York University",
        "University of Cincinnati",
        "Stony Brook University",
        "University of Illinois Urbana-Champaign",
        "University of Washington, Seattle"
      ]
    },
    canada: {
      name: "CANADA",
      universities: [
        "McMaster University",
        "University of Toronto",
        "University of Waterloo",
        "Western University"
      ]
    },
    netherlands: {
      name: "NETHERLANDS",
      universities: [
        "Technical University of Delft",
        "Christ University",
        "University of Leiden"
      ]
    },
    others: {
      name: "OTHER COUNTRIES",
      universities: [
        { country: "SOUTH AFRICA", name: "Nelson Mandela University" },
        { country: "GERMANY", name: "Karl Benz School of Engineering" },
        { country: "AUSTRALIA", name: "Western Sydney University" },
        { country: "NEW ZEALAND", name: "University of Otago" },
        { country: "SINGAPORE", name: "Singapore Institute of Management" },
        { country: "MALAYSIA", name: "Monash University" },
        { country: "UAE", name: "Emirates Aviation Academy" },
        { country: "UAE", name: "Amity University, Dubai" },
        { country: "UAE", name: "Bits Pilani Dubai" },
        { country: "UAE", name: "American University of Dubai" }
      ]
    },
    india: {
      name: "INDIA",
      universities: [
        "NIT, Rourkela",
        "St Xavier's College, Mumbai",
        "Birla Institute of Technology and Science",
        "Lady Shri Ram College for Women",
        "Kasturba Medical College",
        "Loyola College",
        "Christ University",
        "Ashoka University",
        "Flame University",
        "Amrita College of Engineering",
        "Ramachandra Medical College",
        "Pushpagiri Medical College",
        "Ramaiah Medical College",
        "Mohandas College of Engineering",
        "Dr. Somervell Memorial CSI Medical College",
        "SCMS School of Engineering and Technology",
        "Dayanand Sagar Institutions",
        "OP Jindal Global University",
        "Srishti School of Design",
        "MOSC Medical College",
        "Gokulam Medical College",
        "Amity University",
        "Symbiosis",
        "ILS Law College",
        "Bennett University",
        "TKM College of Engineering",
        "Manipal Institute of Technology",
        "Vellore Institute of Technology",
        "Krea University",
        "St Joseph's College, Bangalore"
      ]
    }
  };

  return (
    <div className="w-full mt-2 flex flex-col items-center justify-center relative mainContainer">
      {/* <div className="w-full max-w-[1400px] flex flex-row flex-wrap items-stretch justify-center gap-8 mt-16 mb-8 px-4 alumniContainer">
        <AdmissionCard
          image={"/image/alumni/alumni-association.jpg"}
          text="Alumni Association"
          href="/alumni/association"
        />
        <AdmissionCard
          image="/image/alumni/alumni-stories.jpg"
          text="Alumni Stories"
          href="/alumni/stories"
        />
        <AdmissionCard
          image="/image/alumni/alumni-events.jpg"
          text="Alumni Events"
          href="/alumni/events"
        />
        <AdmissionCard
          image="/image/alumni/alumni-network.jpg"
          text="Alumni Network"
          href="/alumni/network"
        />
        <AdmissionCard
          image="/image/alumni/alumni-donations.jpg"
          text="Alumni Donations"
          href="/alumni/donations"
        />
        <AdmissionCard
          image="/image/alumni/alumni-engagement.jpg"
          text="Alumni Engagement"
          href="/alumni/engagement"
        />
        <AdmissionCard
          image="/image/alumni/alumni-support.jpg"
          text="Alumni Support"
          href="/alumni/support"
        />
        <AdmissionCard
          image="/image/alumni/alumni-mentorship.jpg"
          text="Alumni Mentorship"
          href="/alumni/mentorship"
        />
      </div> */}
      {/* Title SubSection */}

      <div className="w-full flex flex-row items-stretch mt-4">
        <div className="w-full bannerSectionContainer bg-[#075037] h-96"> {/* Reduced height */}
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer h-96 overflow-hidden"> {/* Adjust image height */}
              <img
                src="/image/alumni/alumni.webp"
                alt="Alumni Main"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                TRINS <br /> ALUMNI
              </h1>
              <p className="text-white mt-2 subTitle">
                Once a TRINSian, always a TRINSian
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-6xl py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Our Global Alumni Community
          </h2>
          <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            The TRINS alumni network spans across the globe, with graduates making meaningful contributions in diverse fields.
            We take pride in maintaining strong connections with our former students and providing opportunities for lifelong engagement.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "5,000+", label: "Alumni Worldwide" },
            { number: "12+", label: "Countries Represented" },
            { number: "25", label: "Annual Events" },
            { number: "200+", label: "Mentorship Connections" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-[#075037] mb-2" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                {stat.number}
              </div>
              <div className="text-lg text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* University Placements Section */}
      <div className="w-full py-2 bg-[#f9fbf9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#075037] mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
              Global University Placements
            </h2>
            <p className="text-xl text-[#222] max-w-3xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
              TRINS alumni have been accepted to prestigious universities worldwide
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(universityData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === key
                  ? 'bg-[#075037] text-white shadow-lg'
                  : 'bg-white text-[#075037] border border-[#075037] hover:bg-[#075037]/10'
                  }`}
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                {universityData[key].name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universityData[activeTab].universities.map((uni, index) => (
                <div
                  key={index}
                  className="p-4 border border-[#075037]/20 rounded-lg hover:bg-[#f0f8f2] transition-colors"
                >
                  {typeof uni === 'string' ? (
                    <div className="flex items-start">
                      <div className="bg-[#075037] w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>{uni}</span>
                    </div>
                  ) : (
                    <div>
                      <div className="text-sm font-semibold text-[#075037]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        {uni.country}
                      </div>
                      <div className="text-lg" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>{uni.name}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-screen h-screen mb-20">
        <Image
          src="/image/alumni/alumniworld.webp"
          alt="Contact Cover"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
            backgroundColor: "#ffffff",
          }}
          priority
          quality={100}
        />
      </div>


    </div>
  );
}