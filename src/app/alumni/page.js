import AdmissionCard from "../components/AdmissionCard";
import "./page.css";

export default function Alumni() {
  return (
    <div className="w-full mt-38 flex flex-col items-center justify-center relative mainContainer">
      {/* <div className="w-full max-w-[1400px] flex flex-row flex-wrap items-stretch justify-center gap-8 mt-16 mb-8 px-4 alumniContainer">
        <AdmissionCard
          image={"/image/alumni/alumni-association.jpg"}
          text="Alumni Association"
          href="/alumni/association"
        />
        <AdmissionCard
          image="/image/alumni/alumni-stories.jpg"
          text="Alumni Stories"
          href="/alumni/stories"
        />
        <AdmissionCard
          image="/image/alumni/alumni-events.jpg"
          text="Alumni Events"
          href="/alumni/events"
        />
        <AdmissionCard
          image="/image/alumni/alumni-network.jpg"
          text="Alumni Network"
          href="/alumni/network"
        />
        <AdmissionCard
          image="/image/alumni/alumni-donations.jpg"
          text="Alumni Donations"
          href="/alumni/donations"
        />
        <AdmissionCard
          image="/image/alumni/alumni-engagement.jpg"
          text="Alumni Engagement"
          href="/alumni/engagement"
        />
        <AdmissionCard
          image="/image/alumni/alumni-support.jpg"
          text="Alumni Support"
          href="/alumni/support"
        />
        <AdmissionCard
          image="/image/alumni/alumni-mentorship.jpg"
          text="Alumni Mentorship"
          href="/alumni/mentorship"
        />
      </div> */}

      {/* Title SubSection */}
      <div className="w-full flex flex-row items-stretch mt-8">
        <div className="w-full bannerSectionContainer bg-[#075037]">
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer">
              <img
                src="/image/alumni/alumni-main.jpg"
                alt="Alumni Main"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                TRINS <br /> ALUMNI
              </h1>
              <p className="text-white mt-2 subTitle">
                Once a TRINSian, always a TRINSian
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-6xl py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Our Global Alumni Community
          </h2>
          <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            The TRINS alumni network spans across the globe, with graduates making meaningful contributions in diverse fields. 
            We take pride in maintaining strong connections with our former students and providing opportunities for lifelong engagement.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "5,000+", label: "Alumni Worldwide" },
            { number: "40+", label: "Countries Represented" },
            { number: "25", label: "Annual Events" },
            { number: "200+", label: "Mentorship Connections" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-[#075037] mb-2" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                {stat.number}
              </div>
              <div className="text-lg text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Alumni Section */}
      <div className="w-full flex flex-col items-center relative">
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-3xl text-[#075037] mb-8 text-center" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Featured Alumni Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Dr. Ananya Sharma",
                year: "Class of 2005",
                role: "Medical Researcher",
                image: "/image/alumni/featured-1.jpg",
                excerpt: "Pioneering new treatments in neurology at Harvard Medical School"
              },
              {
                name: "Rohan Patel",
                year: "Class of 2012",
                role: "Tech Entrepreneur",
                image: "/image/alumni/featured-2.jpg",
                excerpt: "Founder of a successful AI startup valued at $50M"
              },
              {
                name: "Priya Khanna",
                year: "Class of 2018",
                role: "Environmental Activist",
                image: "/image/alumni/featured-3.jpg",
                excerpt: "Leading sustainability initiatives across Southeast Asia"
              }
            ].map((alum, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={alum.image} alt={alum.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl text-[#075037] mb-1" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                    {alum.name}
                  </h3>
                  <p className="text-[#666] mb-2" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                    {alum.year} | {alum.role}
                  </p>
                  <p className="text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                    {alum.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mb-16 mt-8 bottomButtonContainer">
        <a
          href="/alumni/stories"
          className="bg-[#075037] text-white text-2xl px-12 py-4 rounded-full shadow-lg hover:bg-[#0a6a4a] transition-colors duration-200 flex items-center gap-2"
          style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400, zindex: 9, position: "relative" }}
        >
          View More Stories <span style={{ fontSize: 24, marginLeft: 8 }}>&#8594;</span>
        </a>
      </div>
    </div>
  );
}