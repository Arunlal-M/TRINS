"use client";
import Image from "next/image";

export default function FeesStructure() {
  const feeItems = [
    {
      grade: "Pre-K to Grade 2",
      tuition: "$8,500",
      activities: "$500",
      technology: "$300",
      total: "$9,300"
    },
    {
      grade: "Grades 3-5",
      tuition: "$9,800",
      activities: "$600",
      technology: "$400",
      total: "$10,800"
    },
    {
      grade: "Grades 6-8",
      tuition: "$11,200",
      activities: "$700",
      technology: "$500",
      total: "$12,400"
    },
    {
      grade: "Grades 9-12",
      tuition: "$13,500",
      activities: "$800",
      technology: "$600",
      total: "$14,900"
    }
  ];

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
          src="/image/fees/feestructure.webp"
          alt="Fees Structure Cover"
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
          Fees Structure
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">
              2024-2025 Academic Year Fees
            </h2>
            <p className="text-lg mb-8">
              Our fee structure is designed to provide exceptional value while maintaining
              the highest standards of education. All fees are annual unless otherwise noted.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#085038] text-white">
                    <th className="p-4 text-left">Grade Level</th>
                    <th className="p-4 text-right">Tuition</th>
                    <th className="p-4 text-right">Activities Fee</th>
                    <th className="p-4 text-right">Technology Fee</th>
                    <th className="p-4 text-right font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeItems.map((item, index) => (
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? "bg-white" : "bg-[#f0f7f4]"}
                    >
                      <td className="p-4 font-medium">{item.grade}</td>
                      <td className="p-4 text-right">{item.tuition}</td>
                      <td className="p-4 text-right">{item.activities}</td>
                      <td className="p-4 text-right">{item.technology}</td>
                      <td className="p-4 text-right font-bold">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#f0f7f4] p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#085038]">
              Additional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[#085038]">
                  Payment Options
                </h4>
                <ul className="space-y-2">
                  {[
                    "Annual payment (5% discount if paid by July 1)",
                    "Semi-annual payments (due July 1 and January 1)",
                    "10-month payment plan (additional $100 processing fee)",
                    "Payment via check, bank transfer, or credit card"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#085038] text-xl mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[#085038]">
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {[
                    "All textbooks and learning materials",
                    "Standard field trips",
                    "Basic technology devices (iPad/Chromebook)",
                    "After-school academic support",
                    "School-wide events and performances"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#085038] text-xl mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}