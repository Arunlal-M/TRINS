"use client";
import Image from "next/image";

export default function Achievements() {
  const achievements = [
    {
      title: "Mathew Mariel Joseph",
      year: "2024",
      description: `Cambridge Outstanding Learner November 2023 "Top In India".`,
      image: "/image/achievements/Mathew.webp"
    },
    {
      title: "Arati Nair",
      year: "2023",
      description: "Cambridge A-LEVEL Topper, 4A*, 1A 2023",
      image: "/image/achievements/Arati.webp"
    },
    {
      title: "Nitin Nandakumar",
      year: "2023",
      description: "Cambridge A-LEVEL Topper, 3A*, 2a 2023",
      image: "/image/achievements/Nitin.webp"
    },

  ];

  const stats = [
    { value: "98%", label: "University Acceptance Rate" },
    { value: "35+", label: "National Awards Annually" },
    { value: "1st", label: "State Ranking in Academics" },
    { value: "100%", label: "College Scholarship Rate" }
  ];

  return (
    <div
      className="mt-64 w-full flex flex-col items-center justify-center relative mainContainer"
      style={{ minHeight: 320 }}
    >
      {/* Cover Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 300,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Image
          src="/image/achievements/acheivements.webp"
          alt="Achievements Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#074B35",
          }}
        />
        <h1
          style={{
            fontFamily: "Gideon Roman",
            fontWeight: 400,
            fontSize: "120px",
            lineHeight: "1",
            letterSpacing: "24px",
            color: "#FFFFFF",
            height: 260,
            position: "absolute",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textShadow: "0 4px 32px rgba(0,0,0,0.18)",
            inset: 0,
          }}
        >
          Achievements
        </h1>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-6xl mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#085038] text-white text-center py-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="w-full max-w-4xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold p-8 pb-0 text-[#085038]">
            Recent Achievements
          </h2>
          
          <div className="divide-y">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="p-8 flex flex-col md:flex-row gap-6"
              >
                <div className="relative w-full md:w-1/3 h-56 rounded-lg overflow-hidden">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-[#085038]">
                      {achievement.title}
                    </h3>
                    <span className="bg-[#e6f2ed] text-[#085038] px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-700">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[#f0f7f4] p-8">
            <h3 className="text-xl font-bold mb-4 text-[#085038]">Alumni Success</h3>
            <p className="mb-4">
              Our graduates have gone on to excel at top universities and make 
              significant contributions in diverse fields:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "15 Rhodes Scholars since 2005",
                "3 Forbes 30 Under 30 recipients",
                "12 NCAA Championship athletes",
                "Published authors and researchers",
                "Tech entrepreneurs with successful startups"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#085038] text-xl mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}