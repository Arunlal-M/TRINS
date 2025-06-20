"use client";
import Image from "next/image";

export default function Yoga() {
  const yogaPrograms = [
    {
      name: "Hatha Yoga",
      description: "Traditional yoga focusing on physical postures and breathing techniques",
      image: "/image/activities/hatha.jpg",
      offerings: ["Beginner friendly", "Focus on alignment", "Breath control", "60 minutes"]
    },
    {
      name: "Vinyasa Flow",
      description: "Dynamic style linking movement with breath in fluid sequences",
      image: "/image/activities/vinyasa.png",
      offerings: ["Intermediate level", "Cardiovascular benefits", "Creative sequencing", "75 minutes"]
    },
    {
      name: "Restorative Yoga",
      description: "Gentle practice using props to support deep relaxation",
      image: "/image/activities/restorative.webp",
      offerings: ["All levels", "Stress reduction", "Deep stretching", "90 minutes"]
    }
  ];

  const benefits = [
    { title: "Improves Flexibility", icon: "🌿" },
    { title: "Reduces Stress", icon: "🧘" },
    { title: "Enhances Mindfulness", icon: "✨" },
    { title: "Strengthens Core", icon: "💪" }
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
          src="/image/activities/Inhouse.webp"
          alt="Yoga Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
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
          YOGA
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">Our Yoga Programs</h2>
            <p className="text-lg mb-8">
              Discover inner peace and physical strength through our diverse yoga offerings.
              Suitable for all levels, our classes focus on mindfulness, flexibility, and holistic well-being.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {yogaPrograms.map((program, index) => (
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
                    <h4 className="font-semibold mb-2">Features:</h4>
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
              <h3 className="text-2xl font-bold mb-4 text-[#085038]">Yoga Studio Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2">
                    {["Heated studio spaces", "Premium yoga mats & props", "Tranquil meditation garden",
                      "Ayurvedic relaxation room", "Changing rooms with showers", "Herbal tea lounge"].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#085038] text-lg mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/image/activities/recreational.webp"
                    alt="Yoga Studio"
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
                <h3 className="text-2xl font-bold mb-4">Benefits of Yoga</h3>
                <ul className="space-y-3">
                  {benefits.map((item, i) => (
                    <li key={i} className="flex items-baseline">
                      <span className="text-white text-lg mr-2">{item.icon}</span>
                      <div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Join Our Classes</h3>
                <p className="mb-4">
                  New students welcome anytime! We offer beginner workshops and multi-class packages.
                  All equipment provided for your first session.
                </p>
                <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                  View Class Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}