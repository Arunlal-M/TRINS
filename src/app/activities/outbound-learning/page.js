"use client";
import Image from "next/image";

export default function OutboundLearning() {
  const programs = [
    {
      type: "Field Trips",
      description: "Local excursions that connect classroom learning to real-world experiences",
      image: "/image/outbound/field.jpg",
      examples: ["Museum visits", "Historical sites", "Science centers", "Art galleries", "Local businesses"]
    },
    {
      type: "Adventure Camps",
      description: "Outdoor education programs focusing on teamwork, leadership, and environmental awareness",
      image: "/image/outbound/adventure.jpg",
      examples: ["Rock climbing", "Canoeing", "Hiking expeditions", "Survival skills", "Ecology studies"]
    },
    {
      type: "International Exchange",
      description: "Global learning opportunities through partnerships with schools worldwide",
      image: "/image/outbound/international.jpg",
      examples: ["Cultural immersion", "Language study", "Service learning", "Homestays", "Global conferences"]
    }
  ];

  const upcomingTrips = [
    { destination: "Amazon Rainforest Expedition", date: "June 15-30, 2025", grade: "Grades 10-12" },
    { destination: "Washington D.C. History Tour", date: "October 5-8, 2025", grade: "Grades 7-9" },
    { destination: "Japan Cultural Exchange", date: "March 10-20, 2026", grade: "Grades 9-11" },
    { destination: "Local Ecosystem Study", date: "November 12, 2025", grade: "Grade 5" }
  ];

  return (
    <div className="mt-64 w-full flex flex-col items-center justify-center relative mainContainer" style={{ minHeight: 320 }}>
      {/* Cover Section */}
      <div style={{
          position: "relative",
          width: "100%",
          height: 300,
          margin: "0 auto",
          overflow: "hidden",
        }}>
        <Image
          src="/image/outbound/cover.jpg"
          alt="Outbound Learning Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#074B35",
          }}
        />
        <h1 style={{
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
          }}>
          Outbound Learning
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">Learning Beyond Classroom Walls</h2>
            <p className="text-lg mb-8">
              Our outbound learning programs take education into the real world, providing 
              transformative experiences that develop skills, broaden perspectives, and 
              create lifelong memories.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {programs.map((program, index) => (
                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={program.image}
                      alt={program.type}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#085038]">{program.type}</h3>
                    <p className="mb-4">{program.description}</p>
                    <h4 className="font-semibold mb-2">Examples Include:</h4>
                    <ul className="space-y-1">
                      {program.examples.map((item, i) => (
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

            <div className="bg-[#f0f7f4] rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-[#085038]">Safety & Preparation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#085038]">Our Safety Standards</h4>
                  <ul className="space-y-2">
                    {["Certified instructors", "1:8 staff-student ratio", "24/7 medical support", 
                      "Comprehensive risk assessments", "Emergency response plans", "Parent communication protocols"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#085038] text-lg mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#085038]">Pre-Trip Preparation</h4>
                  <ul className="space-y-2">
                    {["Orientation sessions", "Packing lists", "Cultural briefings", 
                      "Skill-building workshops", "Health checks", "Parent information meetings"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#085038] text-lg mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#085038] text-white p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Upcoming Trips</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-[#1a6b4e]">
                        <th className="pb-2">Destination</th>
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Grade Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingTrips.map((trip, i) => (
                        <tr key={i} className="border-b border-[#1a6b4e]">
                          <td className="py-3 font-medium">{trip.destination}</td>
                          <td className="py-3">{trip.date}</td>
                          <td className="py-3">{trip.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Trip Reflections</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/image/outbound/reflection.jpg"
                    alt="Student Reflection"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="mb-4">
                  Students document their learning journeys through photos, journals, and 
                  presentations. Read about their transformative experiences.
                </p>
                <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#085038] transition-colors">
                  View Student Blogs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}