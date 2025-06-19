import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";
export default function AlumniStories() {
  const subpages = [
    { image: "/image/alumni/alumni-association.jpg", text: "Alumni Association", href: "/alumni/association" },
    { image: "/image/alumni/alumni-stories.jpg", text: "Alumni Stories", href: "/alumni/stories", active: true },
    { image: "/image/alumni/alumni-events.jpg", text: "Alumni Events", href: "/alumni/events" },
    { image: "/image/alumni/alumni-network.jpg", text: "Alumni Network", href: "/alumni/network" },
    { image: "/image/alumni/alumni-donations.jpg", text: "Alumni Donations", href: "/alumni/donations" },
    { image: "/image/alumni/alumni-engagement.jpg", text: "Alumni Engagement", href: "/alumni/engagement" },
    { image: "/image/alumni/alumni-support.jpg", text: "Alumni Support", href: "/alumni/support" },
    { image: "/image/alumni/alumni-mentorship.jpg", text: "Alumni Mentorship", href: "/alumni/mentorship" }
  ];

  const stories = [
    {
      id: 1,
      name: "Dr. Meera Krishnan",
      class: "2008",
      profession: "Neuroscientist",
      story: "After TRINS, I pursued medicine at AIIMS and later specialized in neurology at Johns Hopkins. My research on neurodegenerative diseases has been published in several international journals.",
      image: "/image/alumni/story-1.jpg"
    },
    {
      id: 2,
      name: "Arjun Malhotra",
      class: "2015",
      profession: "Social Entrepreneur",
      story: "TRINS instilled in me the value of community service. I now run an NGO that provides digital education to underprivileged children across rural India.",
      image: "/image/alumni/story-2.jpg"
    },
    {
      id: 3,
      name: "Priyanka Rao",
      class: "2012",
      profession: "Tech Executive",
      story: "From computer labs at TRINS to leading product development at a Silicon Valley startup, the problem-solving skills I developed at school continue to guide my career.",
      image: "/image/alumni/story-3.jpg"
    },
    {
      id: 4,
      name: "Rahul Verma",
      class: "2003",
      profession: "Environmental Lawyer",
      story: "My passion for environmental justice began during TRINS' ecology club. Today, I represent communities fighting for environmental rights across South Asia.",
      image: "/image/alumni/story-4.jpg"
    },
    {
      id: 5,
      name: "Ananya Singh",
      class: "2018",
      profession: "Professional Athlete",
      story: "The sports facilities and coaching at TRINS laid the foundation for my professional badminton career. I now represent India in international tournaments.",
      image: "/image/alumni/story-5.jpg"
    },
    {
      id: 6,
      name: "Vikram Patel",
      class: "2005",
      profession: "Aerospace Engineer",
      story: "My curiosity about flight was nurtured by TRINS science teachers. I now work on next-generation aircraft designs for a major aerospace company.",
      image: "/image/alumni/story-6.jpg"
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
              <img src="/image/alumni/stories-main.jpg" alt="Alumni Stories" />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                ALUMNI <br /> STORIES
              </h1>
              <p className="text-white mt-2 subTitle">
                Where TRINSians are making an impact
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Inspiring Journeys
          </h2>
          <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
            Discover how our alumni are applying their TRINS education to make a difference in diverse fields around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((alum) => (
            <div key={alum.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <img src={alum.image} alt={alum.name} className="w-full h-64 object-cover" />
              <div className="p-6 flex-grow">
                <h3 className="text-xl text-[#075037] mb-1" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                  {alum.name}
                </h3>
                <p className="text-[#666] mb-3" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                  Class of {alum.class} | {alum.profession}
                </p>
                <p className="text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                  {alum.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#075037] text-white text-lg px-8 py-3 rounded-full shadow hover:bg-[#0a6a4a] transition-colors duration-200">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
}