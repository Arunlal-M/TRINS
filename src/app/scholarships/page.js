"use client";
import Image from "next/image";

export default function Scholarships() {
  const scholarships = [
    {
      name: "Academic Excellence Scholarship",
      amount: "Up to 50% tuition",
      deadline: "March 15, 2025",
      description: "Awarded to students with outstanding academic records and demonstrated intellectual curiosity",
      requirements: [
        "Minimum 3.8 GPA",
        "Standardized test scores in top 10%",
        "Two teacher recommendations",
        "Personal essay"
      ]
    },
    {
      name: "Arts Talent Scholarship",
      amount: "Up to 30% tuition",
      deadline: "April 1, 2025",
      description: "For students demonstrating exceptional talent in visual arts, music, theater, or dance",
      requirements: [
        "Portfolio or audition required",
        "Participation in regional/national competitions preferred",
        "Teacher recommendation",
        "Interview with arts faculty"
      ]
    },
    {
      name: "Community Leadership Scholarship",
      amount: "Up to 40% tuition",
      deadline: "March 30, 2025",
      description: "Recognizes students who have made significant contributions to their communities",
      requirements: [
        "Documented leadership experience",
        "Minimum 3.5 GPA",
        "Two recommendations (one community-based)",
        "Essay on leadership philosophy"
      ]
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
          src="/image/scholarships/cover.jpg"
          alt="Scholarships Cover"
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
          Scholarships
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">
              Financial Support Opportunities
            </h2>
            <p className="text-lg mb-8">
              We believe exceptional students from all backgrounds should have access to our
              education. Each year, we award over $2 million in scholarships to deserving
              students. Explore our scholarship programs below.
            </p>
            
            <div className="space-y-8">
              {scholarships.map((scholarship, index) => (
                <div 
                  key={index} 
                  className="border border-[#e0e0e0] rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-[#085038]">
                      {scholarship.name}
                    </h3>
                    <span className="bg-[#e6f2ed] text-[#085038] px-3 py-1 rounded-full font-medium">
                      {scholarship.amount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2 mb-4">
                    <span className="text-gray-600">
                      Deadline: {scholarship.deadline}
                    </span>
                  </div>
                  <p className="mb-4">{scholarship.description}</p>
                  
                  <h4 className="font-semibold text-[#085038] mt-4 mb-2">
                    Requirements:
                  </h4>
                  <ul className="space-y-2">
                    {scholarship.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#085038] text-xl mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f0f7f4] p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#085038]">
              How to Apply
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[#085038]">
                  Application Process
                </h4>
                <ol className="space-y-3 list-decimal pl-5">
                  {[
                    "Complete the general admission application",
                    "Submit scholarship application form",
                    "Provide required supporting documents",
                    "Interview (for selected candidates)",
                    "Notification by May 1"
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[#085038]">
                  Need-Based Financial Aid
                </h4>
                <p className="mb-3">
                  In addition to merit scholarships, we offer need-based financial
                  aid to qualifying families. Our aid program considers family
                  circumstances to make education accessible.
                </p>
                <button className="bg-[#085038] text-white px-6 py-2 rounded-lg hover:bg-[#0a6a4a] transition-colors">
                  Apply for Financial Aid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}