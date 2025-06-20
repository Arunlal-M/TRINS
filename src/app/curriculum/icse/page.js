// app/icse/page.js
"use client";

import { useState } from 'react';
import AccreditationSection from "../../home/AccreditationSection"; // Import the new component
import Image from "next/image";

export default function ICSEPage() {
    const [activeTab, setActiveTab] = useState('syllabus');

    return (
        <div className="bg-gradient-to-b from-[#f0f8f2] to-white">
            {/* Hero Section */}
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
                    src="/image/gallery/cover.webp"
                    alt="Gallery Cover"
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
                    ICSE SCHOOLS        </h1>
                <p className="text-white mt-2 subTitle"
                >
                    Providing comprehensive education that promotes critical thinking, creativity, and application-based learning
                </p>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div className="space-y-2">
                            <div className="text-5xl font-bold text-[#0B4F3A]">200+</div>
                            <div className="text-xl font-medium text-gray-700">Staff Count</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold text-[#0B4F3A]">10 : 1</div>
                            <div className="text-xl font-medium text-gray-700">Student Teacher Ratio</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold text-[#0B4F3A]">1k+</div>
                            <div className="text-xl font-medium text-gray-700">Alumni Across the Globe</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Tabs */}
            <div className="py-12 bg-[#f9fbf9]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center mb-12">
                        <button
                            onClick={() => setActiveTab('syllabus')}
                            className={`px-6 py-3 mx-2 mb-4 text-lg font-medium rounded-full ${activeTab === 'syllabus'
                                ? 'bg-[#0B4F3A] text-white shadow-lg'
                                : 'bg-white text-[#0B4F3A] border border-[#0B4F3A] hover:bg-[#0B4F3A]/10'
                                }`}
                        >
                            ICSE Syllabus
                        </button>
                        <button
                            onClick={() => setActiveTab('academics')}
                            className={`px-6 py-3 mx-2 mb-4 text-lg font-medium rounded-full ${activeTab === 'academics'
                                ? 'bg-[#0B4F3A] text-white shadow-lg'
                                : 'bg-white text-[#0B4F3A] border border-[#0B4F3A] hover:bg-[#0B4F3A]/10'
                                }`}
                        >
                            Academic Details
                        </button>
                        <button
                            onClick={() => setActiveTab('why')}
                            className={`px-6 py-3 mx-2 mb-4 text-lg font-medium rounded-full ${activeTab === 'why'
                                ? 'bg-[#0B4F3A] text-white shadow-lg'
                                : 'bg-white text-[#0B4F3A] border border-[#0B4F3A] hover:bg-[#0B4F3A]/10'
                                }`}
                        >
                            Why TRINS?
                        </button>
                        <button
                            onClick={() => setActiveTab('admission')}
                            className={`px-6 py-3 mx-2 mb-4 text-lg font-medium rounded-full ${activeTab === 'admission'
                                ? 'bg-[#0B4F3A] text-white shadow-lg'
                                : 'bg-white text-[#0B4F3A] border border-[#0B4F3A] hover:bg-[#0B4F3A]/10'
                                }`}
                        >
                            Apply for Admission
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                        {activeTab === 'syllabus' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#0B4F3A] mb-6">ICSE Syllabus</h2>
                                <p className="mb-6 text-lg text-gray-700">
                                    The CISCE (Council for the Indian School Certificate Examination) curriculum followed by ICSE schools in Trivandrum and across Kerala, provides a comprehensive education, which promotes critical thinking, creativity, and application-based learning among students. It covers various subjects including languages, with special emphasis on English Language & Literature, mother tongue, foreign languages, Sciences, Mathematics and Social Sciences.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-[#f0f8f2] p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-[#0B4F3A] mb-3">Balanced Approach</h3>
                                        <p className="text-gray-700">
                                            ICSE schools emphasize co-curricular activities, project work, and practicals, fostering practical skills.
                                        </p>
                                    </div>

                                    <div className="bg-[#f0f8f2] p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-[#0B4F3A] mb-3">Evaluation Pattern</h3>
                                        <p className="text-gray-700">
                                            Includes written examinations, project work, practicals, and internal assessments. This diverse assessment method encourages a deeper understanding of the subjects.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-[#0B4F3A] mb-4">Preparation Resources</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>ICSE sample papers provide insights into exam format and marking scheme</li>
                                        <li>ICSE textbooks aligned with syllabus ensure in-depth knowledge acquisition</li>
                                        <li>Regular syllabus revisions keep curriculum updated</li>
                                    </ul>
                                </div>

                                <div className="mt-8 bg-[#0B4F3A] text-white p-6 rounded-xl">
                                    <p className="text-lg">
                                        Join our ICSE syllabus in Trivandrum for a dynamic and well-structured curriculum that promotes academic excellence and all-round development.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'academics' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#0B4F3A] mb-6">Academic Details</h2>
                                <p className="mb-6 text-lg text-gray-700">
                                    At our ICSE school in Trivandrum, we offer a comprehensive academic program designed to provide a strong foundation for students. Our subject list covers a wide range of disciplines, ensuring a broad-based education.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0B4F3A] mb-4">Curriculum Highlights</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Grade-wise curriculum crafted to meet academic needs
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Emphasis on physical education and sports
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Elective subjects based on student interests
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Mandatory subjects for holistic education
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Value education and community service
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-[#f0f8f2] p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-[#0B4F3A] mb-4">Holistic Development</h3>
                                        <p className="text-gray-700">
                                            Our curriculum includes sports, games, value education and service activities to ensure students develop into well-rounded individuals prepared for success in a dynamic world.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <button className="px-8 py-3 bg-[#0B4F3A] text-white rounded-lg shadow-lg font-semibold text-lg hover:bg-[#176b4d] transition">
                                        Download Curriculum Details
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'why' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#0B4F3A] mb-6">Why TRINS?</h2>
                                <p className="mb-6 text-lg text-gray-700">
                                    Experience TRINS, the best ICSE school in Kerala. We take pride in our state-of-the-art facilities, making us stand out among the ICSE schools in Trivandrum and Kerala.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-[#f0f8f2] p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-[#0B4F3A] mb-4">World-Class Facilities</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>Expansive library nurturing a love for reading</li>
                                            <li>Sports facilities: Basketball, Swimming, Badminton, Tennis, Table tennis</li>
                                            <li>Well-equipped science and computer laboratories</li>
                                            <li>Nutritious meals served in our cafeteria</li>
                                            <li>Reliable transport services</li>
                                            <li>Safe and secure boarding facilities</li>
                                        </ul>
                                    </div>

                                    <div className="bg-[#f0f8f2] p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-[#0B4F3A] mb-4">Student Development</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>SUPW (Socially Useful Productive Work) activities</li>
                                            <li>Student Council leadership opportunities</li>
                                            <li>STEM, Art and Humanities Fairs</li>
                                            <li>Round Square international organization membership</li>
                                            <li>Cultural celebrations fostering global outlook</li>
                                            <li>Student-driven productions like "TRINS BROADWAY"</li>
                                            <li>International student exchange programs</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-[#0B4F3A] text-white p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4">Global Recognition</h3>
                                    <p>
                                        As part of Round Square, our students develop leadership, adventure skills, character, service mentality and global competence. Our diverse student community celebrates every festival and National Day, helping students become true global citizens.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'admission' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#0B4F3A] mb-6">Apply for Admission</h2>
                                <p className="mb-6 text-lg text-gray-700">
                                    Applying for admission at our ICSE school in Trivandrum, one of the leading ICSE schools in Kerala, is a seamless process.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0B4F3A] mb-4">Admission Process</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Obtain application form online or from school office
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Transparent process with clear guidelines and timelines
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Grade-specific eligibility criteria
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Entrance exam/assessment for certain grades
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Evaluation of previous academic records
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Merit-based admission decision
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#0B4F3A] mr-2">✓</span>
                                                Special support for international students
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center w-full mb-16 mt-32 bottomButtonContainer">
                                    <a
                                        href="/admission-process"
                                        className="bg-[#075037] text-white text-2xl px-12 py-4 rounded-full shadow-lg hover:bg-[#0a6a4a] transition-colors duration-200 flex items-center gap-2"
                                        style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400, zindex: 9, position: "relative" }}
                                    >
                                        Apply Now{" "}
                                        <span style={{ fontSize: 24, marginLeft: 8 }}>&#8594;</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {/* Accreditation Section */}
            <AccreditationSection />


            {/* Final CTA */}
            <div className="py-16 bg-[#0B4F3A] text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">TRINS Among Best ICSE Schools</h2>
                    <p className="text-xl mb-8">
                        Renowned for academic excellence and holistic education, TRINS follows a well-structured ICSE syllabus covering a wide range of subjects with a balanced approach to education.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <button className="px-8 py-3 bg-white text-[#0B4F3A] rounded-lg shadow-lg font-semibold text-lg hover:bg-gray-100 transition">
                            Schedule a Visit
                        </button>
                        <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg shadow-lg font-semibold text-lg hover:bg-white/10 transition">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}