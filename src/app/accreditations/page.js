"use client";
import Image from "next/image";

export default function Accreditations() {
  const accreditations = [
    {
      organization: "Cambridge Assessment International Education",
      logo: "/image/accreditations/acc_cam.jpg",
      description: "First Accredited Centre In Kerala for Cambridge Assessment International Education(IGCSE and A LEVELS)",
      year: "Since 2010"
    },
    {
      organization: "International Baccalaureate Organization",
      logo: "/image/accreditations/acc_ib.png",
      description: "First and only IB World School in the State authorized by the International Baccalaureate Organization (IBO) to implement the IB Diploma ProgrammeOne among 125 schools in India offering this programme",
      year: "Since 2005"
    },
    {
      organization: "Primary Years Programme",
      logo: "/image/accreditations/acc_pyp.png",
      description: "The 1st authorised IB PYP (Primary Years Programme) School in KeralaOne among 82 schools in India offering this programme",
      year: "Since 2018"
    },
    {
      organization: "Diploma Programme",
      logo: "/image/accreditations/acc_dp.png",
      description: "The only authorised IB DP school in Kerala",
      year: "2020-Present"
    },
    {
      organization: "Council for the Indian School Certificate Examination",
      logo: "/image/accreditations/acc_cisce.png",
      description: "Accredited by the Council for the Indian School Certificate Examination",
      year: "2020-Present"
    },
   
    {
      organization: "British Council’s International School Award",
      logo: "/image/accreditations/acc_bcisa.png",
      description: "Proud Recipient of the British Council’s International School Award",
      year: "2020-Present"
    },
    {
      organization: "Round Square ",
      logo: "/image/accreditations/acc_rs.png",
      description: "The first School from Kerala to be awarded Global Membership into the Round Square Association Of Schools",
      year: "2020-Present"
    },
    {
      organization: "College Board ",
      logo: "/image/accreditations/acc_cb.png",
      description: "The first School from Kerala to be awarded Global Membership into the Round Square Association Of Schools",
      year: "2020-Present"
    },
    {
      organization: "Cambridge Assessments Admissions Testing",
      logo: "/image/accreditations/stem-logo.png",
      description: "Trivandrum International School is an authorized Test Centre for Admissions Testing Services of Cambridge Assessments",
      year: "2020-Present"
    },
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
                <div className="relative w-75 h-75  rounded-lg flex items-center justify-center p-4">
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