"use client";
import Image from "next/image";

export default function Accreditations() {
  const accreditations = [
    {
      organization: "International Baccalaureate",
      logo: "/image/accreditations/ib-logo.png",
      description: "Fully authorized IB World School offering Primary Years, Middle Years, and Diploma Programmes",
      year: "Since 2010"
    },
    {
      organization: "New England Association of Schools and Colleges",
      logo: "/image/accreditations/neasc-logo.png",
      description: "Accredited with commendation for excellence in curriculum and student support services",
      year: "Since 2005"
    },
    {
      organization: "Council of International Schools",
      logo: "/image/accreditations/cis-logo.png",
      description: "Full membership in recognition of our global education standards",
      year: "Since 2018"
    },
    {
      organization: "National STEM Foundation",
      logo: "/image/accreditations/stem-logo.png",
      description: "Certified STEM Excellence School with specialized programming",
      year: "2020-Present"
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
          src="/image/accreditations/cover.jpg"
          alt="Accreditations Cover"
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
          Accreditations
        </h1>
      </div>

      {/* Accreditations Section */}
      <div className="w-full max-w-4xl mt-16 mb-24 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-[#085038]">
            Recognized Excellence
          </h2>
          
          <p className="text-lg mb-12">
            Our commitment to educational excellence is validated by prestigious 
            accreditations from leading educational organizations worldwide. 
            These recognitions ensure we meet rigorous international standards 
            and continuously improve our programs.
          </p>
          
          <div className="space-y-12">
            {accreditations.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-start gap-6 border-b pb-12 last:border-0 last:pb-0"
              >
                <div className="relative w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4">
                  <Image
                    src={item.logo}
                    alt={item.organization}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#085038]">
                    {item.organization}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500 font-medium">{item.year}</span>
                  </div>
                  <p className="mt-4 text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-[#f0f7f4] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-[#085038]">Quality Assurance</h3>
            <p>
              Our accreditation process involves comprehensive evaluations every 
              5 years, including self-studies, peer reviews, and improvement plans. 
              This commitment to continuous improvement ensures we maintain the 
              highest educational standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}