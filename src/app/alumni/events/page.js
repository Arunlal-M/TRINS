import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";
export default function AlumniEvents() {
  const subpages = [
    { image: "/image/alumni/alumni-association.jpg", text: "Alumni Association", href: "/alumni/association" },
    { image: "/image/alumni/alumni-stories.jpg", text: "Alumni Stories", href: "/alumni/stories" },
    { image: "/image/alumni/alumni-events.jpg", text: "Alumni Events", href: "/alumni/events", active: true },
    { image: "/image/alumni/alumni-network.jpg", text: "Alumni Network", href: "/alumni/network" },
    { image: "/image/alumni/alumni-donations.jpg", text: "Alumni Donations", href: "/alumni/donations" },
    { image: "/image/alumni/alumni-engagement.jpg", text: "Alumni Engagement", href: "/alumni/engagement" },
    { image: "/image/alumni/alumni-support.jpg", text: "Alumni Support", href: "/alumni/support" },
    { image: "/image/alumni/alumni-mentorship.jpg", text: "Alumni Mentorship", href: "/alumni/mentorship" }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Alumni Reunion",
      date: "15 December 2023",
      location: "TRINS Campus",
      description: "Join us for our biggest event of the year! Reconnect with old friends, meet current students, and tour the campus upgrades.",
      image: "/image/alumni/event-reunion.jpg"
    },
    {
      id: 2,
      title: "Global Alumni Meet (North America)",
      date: "20 January 2024",
      location: "New York, USA",
      description: "East coast gathering for TRINS alumni living in North America. Special guest speaker from the Class of 1995.",
      image: "/image/alumni/event-global.jpg"
    },
    {
      id: 3,
      title: "Career Networking Night",
      date: "10 February 2024",
      location: "Virtual Event",
      description: "Connect with alumni across industries for career advice and opportunities. Breakout rooms by professional fields.",
      image: "/image/alumni/event-networking.jpg"
    },
    {
      id: 4,
      title: "Founder's Day Celebration",
      date: "5 March 2024",
      location: "TRINS Campus",
      description: "Honoring our school's rich history. Alumni from all decades welcome to share their memories.",
      image: "/image/alumni/event-founders.jpg"
    },
    {
      id: 5,
      title: "Young Alumni Mixer",
      date: "15 April 2024",
      location: "Mumbai, India",
      description: "Special event for graduates of the last decade. Casual atmosphere for making new connections.",
      image: "/image/alumni/event-mixer.jpg"
    },
    {
      id: 6,
      title: "Alumni Sports Day",
      date: "1 May 2024",
      location: "TRINS Sports Complex",
      description: "Friendly competitions between alumni teams and current students. Football, cricket, basketball and more!",
      image: "/image/alumni/event-sports.jpg"
    }
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
              <img src="/image/alumni/events-main.jpg" alt="Alumni Events" />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                ALUMNI <br /> EVENTS
              </h1>
              <p className="text-white mt-2 subTitle">
                Reconnect, network, and celebrate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Upcoming Events
          </h2>
          <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Join us for these special gatherings designed to bring the TRINS alumni community together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl text-[#075037] mb-2" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                  {event.title}
                </h3>
                <div className="flex items-center text-[#666] mb-3">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>{event.date}</span>
                </div>
                <div className="flex items-center text-[#666] mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>{event.location}</span>
                </div>
                <p className="text-[#222] mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                  {event.description}
                </p>
                <button className="text-[#075037] border border-[#075037] px-4 py-2 rounded hover:bg-[#075037] hover:text-white transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f8f8f8] p-8 rounded-lg">
          <h3 className="text-2xl text-[#075037] mb-6 text-center" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Past Event Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/image/alumni/past-event-1.jpg",
              "/image/alumni/past-event-2.jpg",
              "/image/alumni/past-event-3.jpg",
              "/image/alumni/past-event-4.jpg"
            ].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img src={image} alt={`Past event ${index + 1}`} className="w-full h-40 object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}