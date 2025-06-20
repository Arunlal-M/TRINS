"use client";
import Image from "next/image";
import AdmissionCard from "@/app/components/AdmissionCard";

export default function Newsletter() {
    const newsletterFeatures = [
        {
            name: "Monthly Digest",
            description: "Curated highlights from the past month",
            image: "/image/newsletter/monthly.jpg",
            items: ["Key announcements", "Event recaps", "Upcoming dates", "Photo gallery"]
        },
        {
            name: "Department Updates",
            description: "Specialized news from academic departments",
            image: "/image/newsletter/department.jpg",
            items: ["Curriculum changes", "Faculty spotlights", "Student projects", "Resource updates"]
        },
        {
            name: "Community News",
            description: "Engagement opportunities and local partnerships",
            image: "/image/newsletter/community.jpg",
            items: ["Volunteer opportunities", "Local events", "Alumni news", "Parent resources"]
        }
    ];

    const pastIssues = [
        { title: "Spring Semester Kickoff", date: "Jan 2025" },
        { title: "Winter Arts Special", date: "Dec 2024" },
        { title: "Thanksgiving Edition", date: "Nov 2024" },
        { title: "Homecoming Highlights", date: "Oct 2024" }
    ];

    return (
        <div className="mt-11 w-full flex flex-col items-center justify-center relative mainContainer" style={{ minHeight: 320 }}>
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
                    src="/image/newsletter/newscover.webp"
                    alt="Newsletter Cover"
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
                        fontSize: "clamp(32px, 8vw, 120px)",
                        lineHeight: "1",
                        letterSpacing: "clamp(2px, 2vw, 4px)",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        position: "absolute",
                        zIndex: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        textShadow: "0 4px 32px rgba(0,0,0,0.18)",
                        inset: 0,
                        padding: "0 16px",
                        wordBreak: "break-word",
                        opacity: 0.7,
                    }}
                >
                    News Letters
                </h1>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-6xl mt-16 mb-24 px-4">

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-50 mb-12 mt-38 mb-38 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/newsletter/download-newsletter.webp"}
          text="TOT week 37"
          href="/pdf/newsletter/newsletter-week-37-01-04-2025.pdf"
        />
        <AdmissionCard
          image="/image/newsletter/download-newsletter.webp"
          text="TOT week 38"
          href="/pdf/newsletter/newsletter-week-38-08-04-2025.pdf"
        />
        <AdmissionCard
          image="/image/newsletter/download-newsletter.webp"
          text="TOT week 39"
          href="/pdf/newsletter/newsletter-week-39-15-04-2025.pdf"

        />
        <AdmissionCard
          image="/image/newsletter/download-newsletter.webp"
          text="TOT week 40"
          href="/pdf/newsletter/Newsletter-Week-40-22.-04.-2025.pdf"
        />
      </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">


                    {/* <div className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-[#085038]">School Newsletter</h2>
                        <p className="text-lg mb-8">
                            Our newsletter keeps our community connected with regular updates,
                            stories, and important information about school life.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {newsletterFeatures.map((feature, index) => (
                                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="relative h-48">
                                        <Image
                                            src={feature.image}
                                            alt={feature.name}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 text-[#085038]">{feature.name}</h3>
                                        <p className="mb-4">{feature.description}</p>
                                        <h4 className="font-semibold mb-2">Features:</h4>
                                        <ul className="space-y-1">
                                            {feature.items.map((item, i) => (
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

                        <div className="bg-[#f0f7f4] rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4 text-[#085038]">Subscription Benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <ul className="space-y-2">
                                        {["Early access to event registrations", "Exclusive parent resources",
                                            "Digital archive of past issues", "Special seasonal editions",
                                            "Direct communication channel"].map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-[#085038] text-lg mr-2">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src="/image/newsletter/benefits.jpg"
                                        alt="Newsletter Benefits"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="bg-[#085038] text-white p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-4">Past Issues</h3>
                                <ul className="space-y-3">
                                    {pastIssues.map((item, i) => (
                                        <li key={i} className="flex items-baseline">
                                            <span className="text-white text-lg mr-2">📚</span>
                                            <div>
                                                <span className="font-medium">{item.title}</span>
                                                <span className="text-[#a3d9c4] ml-2">{item.date}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-4">Subscribe Now</h3>
                                <p className="mb-4">
                                    Join our mailing list to receive the latest newsletter directly
                                    to your inbox. Available to parents, students, and community members.
                                </p>
                                <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                                    Subscribe to Newsletter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}