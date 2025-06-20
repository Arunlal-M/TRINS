"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div
      className="mt-11 w-full flex flex-col items-center justify-center relative mainContainer"
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
          src="/image/about-us/AboutUs.webp"
          alt="About Us Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#074B35",
          }}
          priority
        />
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.5) 100%)"
          }}
        />
          <h1
          style={{
            fontFamily: "Gideon Roman",
            fontWeight: 400,
            fontSize: "clamp(32px, 8vw, 120px)",
            lineHeight: "1",
            letterSpacing: "clamp(2px, 2vw, 4px)",
            textTransform: "uppercase",
            color: "#FFFFFF",
            position: "absolute",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textShadow: "0 4px 32px rgba(0,0,0,0.18)",
            inset: 0,
            padding: "0 16px",
            wordBreak: "break-word",
            opacity: 0.7,
          }}
        >
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl mt-16 mb-24 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#085038]">Our Story</h2>
          <p className="text-lg mb-6">
            Nestled in the midst of pristine hills and commanding a panoramic view of the Ghats in all its splendor, this 20-year-old school stands proud and prominent – a trailblazer in God’s Own Country, the scenic state of Kerala. TRINS is the first school in the State to offer an international curriculum, the International Baccalaureate Diploma Programme and the Primary Year Programme, as well as the Cambridge International Examinations A level and IGCSE. The school also offers the ICSE. The verdant settings surrounded by the serenity of endless miles of plantations provide the perfect ambiance for the teaching-learning experience. The school’s stately architecture is undoubtedly the best that the state has to offer. The teacher-student ratio of 1:20 or less ensures ample personal attention to every child. The school's most valued resource is the ninety-plus hand-picked, committed, and versatile faculty members with international experience and visiting expatriate staff with rich professional experience.
          </p>

          <div className="flex flex-col md:flex-row gap-8 my-12">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-[#085038]">Our Mission</h3>
              <p>
                To inspire lifelong learning, foster intellectual curiosity, and
                develop compassionate leaders who contribute positively to global society.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-[#085038]">Our Vision</h3>
              <p>
                To be a beacon of educational excellence that transforms students
                into innovative thinkers and responsible global citizens.
              </p>
            </div>
          </div>

          <div className="relative h-96 w-full my-12 rounded-lg overflow-hidden">
            <Image
              src="/image/about-us/campusaboutus.webp"
              alt="School Campus"
              fill
              style={{ objectFit: "fill" }}
            />
          </div>

          <h2 className="text-3xl font-bold my-8 text-[#085038]">Core Values</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Integrity in all actions",
              "Respect for diversity",
              "Academic excellence",
              "Innovative thinking",
              "Community responsibility",
              "Lifelong learning"
            ].map((value, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#085038] text-xl mr-2">•</span>
                <span className="text-lg">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}