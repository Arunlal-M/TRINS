"use client";
import Image from "next/image";

export default function Policies() {
    const policyCategories = [
        {
            name: "Academic Policies",
            description: "Guidelines for academic integrity and performance",
            image: "/image/policies/academic.jpg",
            items: ["Grading system", "Attendance requirements", "Homework policy", "Exam protocols"]
        },
        {
            name: "Behavior & Conduct",
            description: "Expectations for student behavior and discipline",
            image: "/image/policies/conduct.jpg",
            items: ["Code of conduct", "Bullying prevention", "Dress code", "Digital citizenship"]
        },
        {
            name: "Safety Protocols",
            description: "Procedures to ensure student safety and well-being",
            image: "/image/policies/safety.jpg",
            items: ["Emergency procedures", "Health policies", "Campus security", "Visitor protocols"]
        }
    ];

    const importantPolicies = [
        { title: "Academic Honesty Policy", effective: "2024-2025" },
        { title: "Technology Acceptable Use", effective: "2023-2024" },
        { title: "Anti-Bullying Program", effective: "2022-2023" },
        { title: "Health & Wellness Guidelines", effective: "2024-2025" }
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
                    src="/image/policies/cover.jpg"
                    alt="Policies Cover"
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
                    Policies
                </h1>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-6xl mt-16 mb-24 px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-[#085038]">School Policies</h2>
                        <p className="text-lg mb-8">
                            Our policies create a safe, respectful, and productive learning environment
                            for all members of our school community.
                        </p>


                        <div className="bg-[#f0f7f4] rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4 text-[#085038]">Policy Resources</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <ul className="space-y-2">
                                        {["Complete policy handbook (PDF)", "Parent guide to school policies",
                                            "Policy update archive", "Frequently asked questions",
                                            "Contact for policy questions"].map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-[#085038] text-lg mr-2">•</span>
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
        </div>
    );
}