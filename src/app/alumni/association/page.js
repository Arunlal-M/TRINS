import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";
export default function AlumniAssociation() {
  const subpages = [
    { image: "/image/alumni/alumni-association.jpg", text: "Alumni Association", href: "/alumni/association", active: true },
    { image: "/image/alumni/alumni-stories.jpg", text: "Alumni Stories", href: "/alumni/stories" },
    { image: "/image/alumni/alumni-events.jpg", text: "Alumni Events", href: "/alumni/events" },
    { image: "/image/alumni/alumni-network.jpg", text: "Alumni Network", href: "/alumni/network" },
    { image: "/image/alumni/alumni-donations.jpg", text: "Alumni Donations", href: "/alumni/donations" },
    { image: "/image/alumni/alumni-engagement.jpg", text: "Alumni Engagement", href: "/alumni/engagement" },
    { image: "/image/alumni/alumni-support.jpg", text: "Alumni Support", href: "/alumni/support" },
    { image: "/image/alumni/alumni-mentorship.jpg", text: "Alumni Mentorship", href: "/alumni/mentorship" }
  ];

  return (
    <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row flex-wrap items-stretch justify-center gap-8 mt-16 mb-8 px-4 alumniContainer">
        {subpages.map((page, index) => (
          <AdmissionCard
            key={index}
            image={page.image}
            text={page.text}
            href={page.href}
            active={page.active}
          />
        ))}
      </div>

      {/* Title SubSection */}
      <div className="w-full flex flex-row items-stretch mt-8">
        <div className="w-full bannerSectionContainer bg-[#075037]">
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer">
              <img src="/image/alumni/association-main.jpg" alt="Alumni Association" />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                ALUMNI <br /> ASSOCIATION
              </h1>
              <p className="text-white mt-2 subTitle">
                Connecting generations of TRINSians
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            About the Alumni Association
          </h2>
          <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            The TRINS Alumni Association serves as the official bridge between the school and its graduates, fostering lifelong connections and supporting the school's mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl text-[#075037] mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
              Our Mission
            </h3>
            <p className="text-[#222] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
              To strengthen the bond between TRINS and its alumni through meaningful engagement, professional networking, and mutual support while upholding the school's values and traditions.
            </p>
            
            <h3 className="text-2xl text-[#075037] mb-4 mt-8" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
              Executive Committee
            </h3>
            <p className="text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
              The association is governed by an elected committee of alumni representatives from different graduating classes, working in collaboration with school administration.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-[#075037] mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
              Key Initiatives
            </h3>
            <ul className="space-y-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
              <li>• Organizing annual reunions and regional meetups</li>
              <li>• Maintaining the alumni directory and database</li>
              <li>• Facilitating mentorship programs</li>
              <li>• Coordinating career networking events</li>
              <li>• Managing scholarship and fundraising programs</li>
              <li>• Publishing alumni newsletters and updates</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#f8f8f8] p-8 rounded-lg">
          <h3 className="text-2xl text-[#075037] mb-6 text-center" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Join the Alumni Association
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Membership Benefits", 
                items: [
                  "Access to alumni network",
                  "Invitations to exclusive events",
                  "Career development resources",
                  "School updates and newsletters"
                ]
              },
              { 
                title: "Get Involved", 
                items: [
                  "Attend events and reunions",
                  "Volunteer for committees",
                  "Become a class representative",
                  "Share your professional expertise"
                ]
              },
              { 
                title: "Stay Connected", 
                items: [
                  "Update your contact information",
                  "Follow us on social media",
                  "Subscribe to our newsletter",
                  "Visit the alumni portal regularly"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white p-6 rounded shadow">
                <h4 className="text-xl text-[#075037] mb-3" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}