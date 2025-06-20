"use client";
import Image from "next/image";

export default function ClubsActivities() {
  const clubCategories = [
    {
      category: "Academic",
      description: "Clubs that extend classroom learning and explore intellectual pursuits",
      image: "/image/activities/academic.jpg",
      clubs: ["Debate Team", "Math Olympiad", "Science Club", "Robotics", "Model UN"]
    },
    {
      category: "Arts & Creativity",
      description: "Opportunities for artistic expression and creative development",
      image: "/image/activities/arts.jpg",
      clubs: ["Drama Club", "Photography Club", "Creative Writing", "Digital Arts", "Pottery Club"]
    },
    {
      category: "Special Interest",
      description: "Groups formed around shared hobbies and unique interests",
      image: "/image/activities/special.jpg",
      clubs: ["Chess Club", "Anime Club", "Eco Warriors", "Coding Club", "Entrepreneurship Society"]
    }
  ];

  const highlights = [
    { name: "Robotics Team Wins Regional", date: "March 2025" },
    { name: "Debate Team National Finalists", date: "February 2025" },
    { name: "Eco Club's Recycling Initiative", date: "January 2025" },
    { name: "Drama Club Spring Production", date: "Coming April 2025" }
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
          src="/image/activities/IN-HOUSE ACTIVITIES.webp"
          alt="Clubs & Activities Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 45%",
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
          Clubs & Activities
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">Explore Your Passions</h2>
            <p className="text-lg mb-8">
              With over 50 clubs and activities, there's something for every interest.
              Students are encouraged to join existing clubs or start new ones with faculty support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {clubCategories.map((category, index) => (
                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.category}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#085038]">{category.category}</h3>
                    <p className="mb-4">{category.description}</p>
                    <h4 className="font-semibold mb-2">Featured Clubs:</h4>
                    <ul className="space-y-1">
                      {category.clubs.map((item, i) => (
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
              <h3 className="text-2xl font-bold mb-4 text-[#085038]">Club Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    {highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#085038] text-xl mr-3">🏅</span>
                        <div>
                          <span className="font-medium">{highlight.name}</span>
                          <div className="text-gray-600">{highlight.date}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/image/activities/club.jpg"
                    alt="Club Highlights"
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
                <h3 className="text-2xl font-bold mb-4">Start a New Club</h3>
                <p className="mb-4">
                  Have an idea for a new club? We provide resources and faculty advisors
                  to help students establish new organizations that reflect their interests.
                </p>
                <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                  Club Proposal Form
                </button>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Club Fair</h3>
                <p className="mb-2">
                  Our annual Club Fair happens each September, where all clubs showcase
                  their activities and recruit new members.
                </p>
                <div className="text-[#a3d9c4] font-medium mb-4">Next Fair: September 5, 2025</div>
                <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#085038] transition-colors">
                  View Club Directory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}