"use client";
import Image from "next/image";

export default function Management() {
  const managementTeam = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      bio: "With over 20 years of educational leadership experience, Dr. Johnson holds a PhD in Educational Administration and has transformed three schools into nationally recognized institutions.",
      image: "/image/management/principal.jpg"
    },
    {
      name: "Robert Chen",
      position: "Vice Principal",
      bio: "Mr. Chen specializes in curriculum development and innovative teaching methodologies. He has received multiple awards for his contributions to STEM education.",
      image: "/image/management/vice-principal.jpg"
    },
    {
      name: "Amanda Rodriguez",
      position: "Academic Dean",
      bio: "Leading our academic programs since 2010, Ms. Rodriguez has developed our acclaimed literacy program that boosted reading proficiency by 45%.",
      image: "/image/management/academic-dean.jpg"
    },
    {
      name: "David Thompson",
      position: "Board Chair",
      bio: "As founder of Thompson Education Foundation, Mr. Thompson brings extensive governance experience and strategic vision to our institution.",
      image: "/image/management/board-chair.jpg"
    }
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
          src="/image/management/cover.jpg"
          alt="Management Cover"
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
          Management
        </h1>
      </div>

      {/* Management Team Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {managementTeam.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative h-64 md:h-auto md:w-1/3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-bold text-[#085038]">{member.name}</h3>
                  <p className="text-lg font-semibold text-gray-600 mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f0f7f4] rounded-xl p-8 mt-16">
          <h2 className="text-3xl font-bold mb-6 text-[#085038]">Governance Structure</h2>
          <p className="text-lg mb-6">
            Our school operates under a strategic governance model that balances 
            operational excellence with long-term vision. The Board of Trustees 
            provides oversight and strategic direction, while the Academic Council 
            ensures educational quality and innovation.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              "Finance Committee",
              "Academic Excellence Committee",
              "Community Engagement Committee",
              "Facilities Committee",
              "Technology Innovation Group"
            ].map((committee, i) => (
              <div 
                key={i} 
                className="bg-white px-4 py-2 rounded-full shadow-sm"
              >
                {committee}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}