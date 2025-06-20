"use client";
import Image from "next/image";

export default function ArtsCulture() {
  const programs = [
    {
      category: "Visual Arts",
      description: "From traditional techniques to digital media, our visual arts program nurtures creative expression",
      image: "/image/activities/visual.jpg",
      offerings: ["Painting", "Sculpture", "Photography", "Digital Art", "Ceramics"]
    },
    {
      category: "Performing Arts",
      description: "Opportunities to shine on stage and develop performance skills",
      image: "/image/activities/performing.jpg",
      offerings: ["Theater", "Dance", "Music Ensembles", "Orchestra", "Choir"]
    },
    {
      category: "Cultural Studies",
      description: "Exploring world cultures through art, music, and traditions",
      image: "/image/activities/cultural.jpg",
      offerings: ["World Music", "Folk Arts", "Cultural Festivals", "Language Arts", "History of Art"]
    }
  ];

  const events = [
    { name: "Annual Art Exhibition", date: "May 15-17, 2025" },
    { name: "Spring Musical Production", date: "March 28-30, 2025" },
    { name: "Cultural Heritage Week", date: "November 4-8, 2025" },
    { name: "Winter Concert Series", date: "December 12-14, 2025" }
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
          src="/image/activities/ARTS.webp"
          alt="Arts & Culture Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 29%",
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
          Arts & Culture
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">Creative Expression at Its Best</h2>
            <p className="text-lg mb-8">
              Our arts programs provide students with diverse opportunities to explore their creativity,
              appreciate cultural diversity, and develop artistic skills that last a lifetime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {programs.map((program, index) => (
                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={program.image}
                      alt={program.category}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#085038]">{program.category}</h3>
                    <p className="mb-4">{program.description}</p>
                    <h4 className="font-semibold mb-2">Programs Include:</h4>
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

            <div className="bg-[#f0f7f4] rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#085038]">Facilities & Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2">
                    {["Professional art studios", "Black box theater", "Music practice rooms",
                      "Digital media lab", "Pottery kiln", "Exhibition gallery"].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#085038] text-lg mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/image/activities/facilities.jpg"
                    alt="Arts Facilities"
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
                <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
                <ul className="space-y-4">
                  {events.map((event, i) => (
                    <li key={i} className="flex items-baseline">
                      <span className="text-white text-lg mr-3">🎭</span>
                      <div>
                        <span className="font-medium">{event.name}</span>
                        <div className="text-[#a3d9c4]">{event.date}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Showcase Your Talent</h3>
                <p className="mb-4">
                  We encourage all students to participate in our arts programs, regardless of
                  experience level. Auditions and portfolio reviews happen each semester.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                    View Gallery
                  </button>
                  <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#085038] transition-colors">
                    Join a Program
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