"use client";
import Image from "next/image";

export default function Celebrations() {
  const events = [
    {
      name: "Annual Day",
      description: "Our biggest celebration of the year showcasing student talents and achievements",
      image: "/image/celebrations/annual.jpg",
      date: "May 24, 2025"
    },
    {
      name: "Cultural Fest",
      description: "A vibrant celebration of diversity with performances, food, and traditions from around the world",
      image: "/image/celebrations/cultural.jpg",
      date: "November 8, 2025"
    },
    {
      name: "Sports Day",
      description: "House competitions and athletic showcases with spirited participation from all grades",
      image: "/image/celebrations/sports.jpg",
      date: "February 14, 2025"
    }
  ];

  const traditions = [
    { name: "Founder's Day Assembly", description: "Honoring our school's history and values" },
    { name: "Grade 12 Graduation", description: "Celebrating our graduating class with traditional ceremonies" },
    { name: "Winter Concert", description: "Musical performances to celebrate the season" },
    { name: "Academic Awards", description: "Recognizing outstanding student achievements" }
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
          src="/image/celebrations/cover.jpg"
          alt="Celebrations Cover"
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
          Celebrations
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">Celebrating Our Community</h2>
            <p className="text-lg mb-8">
              Throughout the year, we come together to celebrate achievements, traditions, 
              and the vibrant spirit of our school community. These events create lasting 
              memories and strengthen our bonds.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {events.map((event, index) => (
                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#085038]">{event.name}</h3>
                      <span className="bg-[#e6f2ed] text-[#085038] px-2 py-1 rounded text-sm">{event.date}</span>
                    </div>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f0f7f4] rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-[#085038]">School Traditions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {traditions.map((tradition, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-[#085038] mb-2">{tradition.name}</h4>
                    <p className="text-sm">{tradition.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#085038] text-white p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Event Gallery</h3>
                <p className="mb-4">
                  Browse photos and videos from past celebrations that capture the joy and 
                  excitement of our school community.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="relative aspect-square">
                      <Image
                        src={`/image/celebrations/gallery${i}.jpg`}
                        alt={`Celebration ${i}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Parent Participation</h3>
                <p className="mb-4">
                  Families are encouraged to participate in many of our celebrations. 
                  Volunteer opportunities are available for most events.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                    View Calendar
                  </button>
                  <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#085038] transition-colors">
                    Volunteer Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}