"use client";
import Image from "next/image";

export default function WellbeingSocialService() {
  const initiatives = [
    {
      area: "Student Well-being",
      description: "Programs to support mental, emotional, and physical health of our students",
      image: "/image/activities/student.jpg",
      programs: ["Counseling Services", "Mindfulness Programs", "Health Education", "Peer Support"]
    },
    {
      area: "Community Service",
      description: "Opportunities to give back and make a difference in local and global communities",
      image: "/image/activities/SOCIAL SERVICE1.jpg",
      programs: ["Food Drives", "Elderly Visits", "Environmental Cleanups", "Charity Fundraisers"]
    },
    {
      area: "Social Responsibility",
      description: "Initiatives that develop awareness and action on important social issues",
      image: "/image/activities/SOCIAL SERVICE.webp",
      programs: ["Diversity Workshops", "Sustainability Projects", "Human Rights Education", "Social Justice Forums"]
    }
  ];

  const upcomingEvents = [
    { name: "Mental Health Awareness Week", date: "October 7-11, 2025" },
    { name: "Community Food Drive", date: "November 15, 2025" },
    { name: "Beach Cleanup Day", date: "March 22, 2025" },
    { name: "Diversity & Inclusion Symposium", date: "April 5, 2025" }
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
          src="/image/activities/community.webp"
          alt="Well-being & Social Service Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
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
            height: 300,
            position: "absolute",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textShadow: "0 4px 32px rgba(0,0,0,0.18)",
            inset: 0,
          }}>
         Social Service
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">Caring for Ourselves and Others</h2>
            <p className="text-lg mb-8">
              We believe education extends beyond academics to include personal well-being and 
              social responsibility. Our programs nurture compassionate, resilient individuals 
              who contribute positively to society.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {initiatives.map((initiative, index) => (
                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={initiative.image}
                      alt={initiative.area}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#085038]">{initiative.area}</h3>
                    <p className="mb-4">{initiative.description}</p>
                    <h4 className="font-semibold mb-2">Key Programs:</h4>
                    <ul className="space-y-1">
                      {initiative.programs.map((item, i) => (
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
              <h3 className="text-2xl font-bold mb-4 text-[#085038]">Support Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    {["Full-time counseling staff", "24/7 crisis support line", "Peer mentoring program", 
                      "Parent support workshops", "Health and nutrition guidance", "Stress management resources"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#085038] text-lg mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/image/activities/socialservice3.jpg"
                    alt="Support Services"
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
                  {upcomingEvents.map((event, i) => (
                    <li key={i} className="flex items-baseline">
                      <span className="text-white text-lg mr-3">❤️</span>
                      <div>
                        <span className="font-medium">{event.name}</span>
                        <div className="text-[#a3d9c4]">{event.date}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
                <p className="mb-4">
                  Every student completes 50 hours of community service to graduate. 
                  We offer diverse opportunities to meet this requirement while making 
                  a meaningful impact.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                    Service Opportunities
                  </button>
                  <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#085038] transition-colors">
                    Well-being Resources
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