"use client";
import Image from "next/image";

export default function Management() {
  const managementTeam = [
    {
      name: "Mr. George M",
      position: "Founder",
      bio: "Envisioned by its founder Mr. George M. Thomas and dedicated to the memory of his parents; TRINS was the fruition of Mr. George Thomas’s burning ambition to create a glorious institution for the youth of today. A school that reflects a virtue that inevitably percolates down to the student community and changes their perspective on life forever, making them better citizens and more importantly good human beings with intrinsic values.",
      image: "/image/management/George.webp"
    },
    {
      name: " Mr. G. Vijaya Raghavan.",
      position: "Vice Principal",
      bio: "Well known for his contribution to the IT industry of Kerala, this man has been the founder CEO of Technopark and has held key positions in several ventures.As for TRINS, the emergence of the school as an academic institution committed to the pursuit of excellence has been due, in no small measure, to the professional competence and dynamism of it’s Honorary Director, Mr. G. Vijaya Raghavan.",
      image: "/image/management/vijaya.webp"
    },
    {
      name: "Ms. Sapnu George",
      position: "Academic Dean",
      bio: "For Ms. Sapnu George, daughter of Mr. George M Thomas, TRINS has always been a venture close to her heart and she has been involved with TRINS since its inception in 2003. She took up the role of Executive Director, 10 years later after completing her higher education. She is an architect who has worked in Bangalore and New York, and she holds a Masters Degree from the New York School of Design. Her presence is deeply reassuring to everyone at TRINS, because of her innate sense of service, a keen eye for detail, and all the innovative ideas that she brings to the table.",
      image: "/image/management/sapnu.webp"
    },

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
          src="/image/management/management.webp"
          alt="Management Cover"
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
            fontSize: "120px",
            lineHeight: "1",
            letterSpacing: "24px",
            color: "#FFFFFF",
            height: 260,
            position: "absolute",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textShadow: "0 4px 32px rgba(0,0,0,1)",
            inset: 0,
          }}
        >
          Management
        </h1>
      </div>

      {/* Management Team Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="space-y-12">
          {managementTeam.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 border-b pb-12  last:pb-0"
            >
              <div className="relative w-75 h-75  rounded-lg flex items-center justify-center p-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#085038]">
                  {member.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-500 font-medium">{member.position}</span>
                </div>
                <p className="mt-4 text-gray-700">{member.bio}</p>
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