"use client";
import Image from "next/image";

export default function Orientations() {
    const orientationPrograms = [
        {
            name: "New Student Orientation",
            description: "Welcome program for students joining our school",
            image: "/image/orientations/students.jpg",
            items: ["Campus tour", "Meet teachers", "Schedule pickup", "Student panel"]
        },
        {
            name: "Parent Orientation",
            description: "Information session for parents of new students",
            image: "/image/orientations/parents.jpg",
            items: ["Administration intro", "Policy overview", "Parent involvement", "Q&A session"]
        },
        {
            name: "Grade-Level Transitions",
            description: "Programs for students moving to new academic levels",
            image: "/image/orientations/transitions.jpg",
            items: ["Middle school prep", "High school readiness", "College counseling", "Academic planning"]
        }
    ];

    const upcomingDates = [
        { event: "Fall Semester Orientation", date: "Aug 15, 2025" },
        { event: "New Family Welcome", date: "Aug 17, 2025" },
        { event: "Middle School Transition", date: "May 30, 2025" },
        { event: "High School Preview", date: "Jun 5, 2025" }
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
                    src="/image/orientations/ore.webp"
                    alt="Orientation Resources"
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
                    Orientations
                </h1>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-6xl mt-16 mb-24 px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-[#085038]">Orientation Programs</h2>
                        <p className="text-lg mb-8">
                            Students at Trivandrum International School are progressing on their personal journey which will take them beyond school to the careers that they create for themselves. A strong academic performance provides a foundation of knowledge and skills, as well as qualifications that facilitate access to courses and institutions.
                        </p>
                        <p className="text-lg mb-8">We provide university and career counselling which begins in the Middle School and creates a framework for making decisions as students move up through the school. We do not expect all students to have a career planned by the time they reach Grade 12, but we do want them to have been able to have made informed decisions. These should include thoughtful conversations with their parents. As students move from Grade 8 to Grade 9 and then from Grade 10 to Grade 11, there are choices to be made and options available. The links on this page will enable you to explore what we offer. At both Grade 9 and Grade 11 there are subjects available that students have not studied previously, but even if a subject sounds familiar, it should be explored to understand the content and assessment pattern. Following the links, you can find out about the course details and sample some lesson activities.
                        </p>
                        <p className="text-lg mb-8">When students at TRINS enter Grade 9, they have either chosen the ICSE and IGCSE path. Both are two-year courses with examinations written at the end of Grade 10 . The Cambridge IGCSE path provides a range of subject choices. You should explore all of these to find out just what a two-year course of study involves. Whether choosing ICSE or IGCSE, TRINS expects students to follow a broad curriculum that prepares them for life, not just future examinations.
                        </p>
                        <p className="text-lg mb-8">Again, on entering Grade 11 students have a choice of one of two programmes, both international curriculums. Students study either three or four Cambridge International A-levels, or six subjects if following the International Baccalaureate Diploma Programme. The orientation evening will explain the two programmes; the videos you can find on this page proivde a brief introduction to the subjects available. At this stage, students are often making choices with a particular university course in mind. Other students will not have a definite course decided upon – that is quite usual. Working with the university counsellors, students are able to make positive selections.
                        </p>
                        <p className="noteSignature text-2 ">- Richard Hillebrand </p><br/>

                        <p className="font-bold">Director of Academics and Principal.
                        </p><br/><br/>

                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {orientationPrograms.map((program, index) => (
                                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="relative h-48">
                                        <Image
                                            src={program.image}
                                            alt={program.name}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 text-[#085038]">{program.name}</h3>
                                        <p className="mb-4">{program.description}</p>
                                        <h4 className="font-semibold mb-2">Activities:</h4>
                                        <ul className="space-y-1">
                                            {program.items.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-[#085038] text-lg mr-2">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        <div className="bg-[#f0f7f4] rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4 text-[#085038]">Orientation Resources</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <ul className="space-y-2">
                                        {["Welcome packets", "Campus map & directory", "Academic planning guide",
                                            "Technology setup instructions", "FAQ for new families"].map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-[#085038] text-lg mr-2">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src="/image/orientations/ore.webp"
                                        alt="Orientation Resources"
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
                                <h3 className="text-2xl font-bold mb-4">Upcoming Dates</h3>
                                <ul className="space-y-3">
                                    {upcomingDates.map((item, i) => (
                                        <li key={i} className="flex items-baseline">
                                            <span className="text-white text-lg mr-2">📅</span>
                                            <div>
                                                <span className="font-medium">{item.event}</span>
                                                <span className="text-[#a3d9c4] ml-2">{item.date}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-4">Register Now</h3>
                                <p className="mb-4">
                                    Secure your spot at our upcoming orientation sessions.
                                    Registration is required for all participants.
                                </p>
                                <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                                    Register for Orientation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}