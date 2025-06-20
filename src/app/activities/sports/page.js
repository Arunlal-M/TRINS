"use client";
import Image from "next/image";

export default function Sports() {
  const sportsPrograms = [
    {
      name: "Competitive Athletics",
      description: "Our school competes in regional and national leagues across multiple sports with dedicated coaching staff",
      image: "/image/activities/competitive.jpg",
      offerings: ["Basketball", "Soccer", "Swimming", "Track & Field", "Volleyball"]
    },
    {
      name: "Physical Education",
      description: "Structured PE curriculum focusing on fitness, skills development, and sportsmanship",
      image: "/image/activities/pe.jpg",
      offerings: ["Fitness Training", "Team Sports", "Individual Sports", "Health Education"]
    },
    {
      name: "Recreational Sports",
      description: "Non-competitive opportunities for students to stay active and have fun",
      image: "/image/activities/recreational.webp",
      offerings: ["Yoga", "Martial Arts", "Dance", "Ultimate Frisbee", "Rock Climbing"]
    }
  ];

  const achievements = [
    { title: "State Basketball Champions", year: "2024" },
    { title: "Regional Swimming Gold Medalists", year: "2023" },
    { title: "National Track & Field Finalists", year: "2023" },
    { title: "Best Sports Program Award", year: "2022" }
  ];

  return (
    <div className="mt-11 w-full flex flex-col items-center justify-center relative mainContainer" style={{ minHeight: 320 }}>
      {/* Cover Section */}
      <div style={{
        position: "relative",
        width: "100%",
        height: 300,
        margin: "0 auto",
        overflow: "hidden",
      }}>
        <Image
          src="/image/activities/SPORTS.webp"
          alt="Sports Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#074B35",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.5) 100%)"
          }}
        />
        <h1 style={{
          fontFamily: "Gideon Roman",
          fontWeight: 400,
          fontSize: "120px",
          lineHeight: "1",
          letterSpacing: "24px",
          color: "#FFFFFF",
          height: 300,
          position: "absolute",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          textShadow: "0 4px 32px rgba(0,0,0,0.18)",
          inset: 0,
        }}>
          Sports
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">Our Sports Programs</h2>
            <p className="text-lg mb-8">
              We believe in the power of sports to build character, discipline, and teamwork.
              Our comprehensive athletics program caters to all skill levels from recreational to competitive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {sportsPrograms.map((program, index) => (
                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#085038]">{program.name}</h3>
                    <p className="mb-4">{program.description}</p>
                    <h4 className="font-semibold mb-2">Offerings:</h4>
                    <ul className="space-y-1">
                      {program.offerings.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#085038] text-lg mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f0f7f4] rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#085038]">Sports Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2">
                    {["Olympic-size swimming pool", "Full-size gymnasium", "Synthetic track field",
                      "Tennis courts", "Dance studio", "Fitness center"].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#085038] text-lg mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/image/activities/facilities2.jpg"
                    alt="Sports Facilities"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#085038] text-white p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Recent Achievements</h3>
                <ul className="space-y-3">
                  {achievements.map((item, i) => (
                    <li key={i} className="flex items-baseline">
                      <span className="text-white text-lg mr-2">🏆</span>
                      <div>
                        <span className="font-medium">{item.title}</span>
                        <span className="text-[#a3d9c4] ml-2">{item.year}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Join Our Teams</h3>
                <p className="mb-4">
                  Tryouts are held at the beginning of each season. All students are encouraged
                  to participate regardless of experience level.
                </p>
                <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                  View Sports Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
