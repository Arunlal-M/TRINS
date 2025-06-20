// app/campus/page.js
"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ProgramButton from "../components/curriculum/ProgramButton";
import "./Campus.css";

// Style objects for consistent formatting
const titleStyle = {
    fontFamily: "Gideon Roman, serif",
    fontWeight: 100,
    fontSize: "61.12px",
    lineHeight: "73.66px",
    letterSpacing: 0,
    textAlign: "left",
};

const subtitleStyle = {
    fontFamily: "Gideon Roman, serif",
    fontWeight: 400,
    fontSize: "36px",
    lineHeight: "44px",
    letterSpacing: 0,
    textAlign: "left",
};

const paragraphStyle = {
    fontFamily: "Gideon Roman, serif",
    fontWeight: 400,
    fontSize: "23.07px",
    lineHeight: "27.81px",
    letterSpacing: 0,
};

export default function Campus() {
    const [activeSection, setActiveSection] = useState("Campus Tour");
    const [activeSubSection, setActiveSubSection] = useState(null);
    const [bannerFade, setBannerFade] = useState(false);
    const prevSection = useRef(activeSection);

    // Handle URL parameters
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const sectionParam = urlParams.get('section');

            if (sectionParam && [
                'Campus Tour',
                'Facilities',
                'Library',
                'Science Labs',
                'Sports Facilities',
                'Dining',
                'Technology'
            ].includes(sectionParam)) {
                setActiveSection(sectionParam);
            }
        }
    }, []);

    const sections = [
        "Campus Tour",
        "Facilities",
        "Library",
        "Science Labs",
        "Sports Facilities",
        "Dining",
        "Technology"
    ];

    const subSections = {
        "Science Labs": ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab"],
        "Sports Facilities": ["Indoor Sports", "Outdoor Sports", "Aquatics"]
    };

    const bannerImages = {
        'Campus Tour': '/image/campus/campus-tour-banner.jpg',
        'Facilities': '/image/campus/facilities-banner.jpg',
        'Library': '/image/campus/library-banner.jpg',
        'Science Labs': '/image/campus/science-labs-banner.jpg',
        'Physics Lab': '/image/campus/physics-lab.jpg',
        'Chemistry Lab': '/image/campus/chemistry-lab.jpg',
        'Biology Lab': '/image/campus/biology-lab.jpg',
        'Computer Lab': '/image/campus/computer-lab.jpg',
        'Sports Facilities': '/image/campus/sports-facilities-banner.jpg',
        'Indoor Sports': '/image/campus/indoor-sports.jpg',
        'Outdoor Sports': '/image/campus/outdoor-sports.jpg',
        'Aquatics': '/image/campus/aquatics.jpg',
        'Dining': '/image/campus/dining-banner.jpg',
        'Technology': '/image/campus/technology-banner.jpg'
    };

    const handleSectionClick = (sectionName) => {
        if (sectionName !== activeSection) {
            setBannerFade(true);
            setTimeout(() => {
                setActiveSection(sectionName);
                setActiveSubSection(null);
                setBannerFade(false);
                prevSection.current = sectionName;
            }, 350);
        } else if (subSections[sectionName]) {
            setActiveSubSection(activeSubSection ? null : subSections[sectionName][0]);
        }
    };

    const handleSubSectionClick = (subSectionName) => {
        setActiveSubSection(subSectionName);
    };

    return (
        <div className="w-screen mt-38 mainContainer">
            {/* Banner Section */}
            <div className="relative w-full h-[40svh] magnet-section">
                <Image
                    src={bannerImages[activeSubSection || activeSection]}
                    alt="TRINS Campus"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className={`-z-10 transition-opacity duration-500 ease-in-out ${bannerFade ? 'opacity-0' : 'opacity-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1
                        className="text-white text-7xl md:text-8xl lg:text-9xl font-normal uppercase"
                        style={{
                            fontFamily: "Gideon Roman, serif",
                            letterSpacing: "0.05em",
                        }}
                    >
                        CAMPUS
                    </h1>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5/6 w-[80vw] max-w-[2000px]">
                    <img
                        src="/image/curriculum/Dashboard.svg"
                        alt="Dashboard decorative element"
                        className="w-full h-auto"
                        style={{ display: "block" }}
                    />
                </div>
            </div>

            {/* Navigation Section */}
            <div className="w-full h-[40svh] overflow-x-auto px-4 pb-4" style={{ overflowY: "visible", marginTop: "-90px" }}>
                <div className="flex flex-col md:flex-row gap-2 h-full justify-center left-1/2 mb-16 md:gap-4 min-w-max mt-[-0px] mx-auto transform">
                    {sections.map((section) => (
                        <div key={section} className="relative">
                            <ProgramButton
                                programName={section}
                                isActive={activeSection === section}
                                hasSubMenu={!!subSections[section]}
                                isExpanded={activeSection === section && activeSubSection !== null}
                                onClick={() => handleSectionClick(section)}
                            />

                            {activeSection === section && subSections[section] && (
                                <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 w-full">
                                    {subSections[section].map((subSection) => (
                                        <button
                                            key={subSection}
                                            className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${activeSubSection === subSection ? 'bg-[#FBE9C4]' : ''}`}
                                            onClick={() => handleSubSectionClick(subSection)}
                                            style={{ fontFamily: "Gideon Roman, serif" }}
                                        >
                                            {subSection}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 pb-16 mt-2">
                {/* Campus Tour Section */}
                {activeSection === "Campus Tour" && !activeSubSection && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Campus Tour
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/campus-tour.jpg"
                                    alt="TRINS Campus Tour"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Discover Our Beautiful Campus
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Spread across 25 acres of lush greenery, TRINS campus is designed to inspire learning and growth.
                                    Our state-of-the-art facilities blend seamlessly with natural surroundings, creating an ideal
                                    environment for academic excellence and personal development.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    HIGHLIGHTS OF OUR CAMPUS
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Modern, eco-friendly architecture</li>
                                    <li>Spacious, well-equipped classrooms</li>
                                    <li>Extensive sports facilities</li>
                                    <li>Beautifully landscaped gardens and outdoor spaces</li>
                                    <li>Dedicated arts and performance areas</li>
                                    <li>Safe and secure learning environment</li>
                                </ul>
                                <p className="ml-5 mt-6" style={paragraphStyle}>
                                    <a href="/virtual-tour" className="text-blue-600 hover:underline">
                                        Take our virtual campus tour
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Facilities Section */}
                {activeSection === "Facilities" && !activeSubSection && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Campus Facilities
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/facilities.jpg"
                                    alt="TRINS Facilities"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    World-Class Learning Environment
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    TRINS provides exceptional facilities designed to enhance every aspect of student life.
                                    Our campus combines cutting-edge technology with thoughtfully designed spaces to create
                                    an environment where students can thrive academically, socially, and physically.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    KEY FACILITIES
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Modern, technology-enabled classrooms</li>
                                    <li>Specialized laboratories for all sciences</li>
                                    <li>Comprehensive library with digital resources</li>
                                    <li>Performing arts theater and music rooms</li>
                                    <li>Olympic-size swimming pool and sports complex</li>
                                    <li>Health center with full-time medical staff</li>
                                    <li>Spacious cafeteria with nutritious meal options</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Library Section */}
                {activeSection === "Library" && !activeSubSection && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Knowledge Hub: Our Library
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/library.jpg"
                                    alt="TRINS Library"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    A Sanctuary for Learning
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our expansive library is more than just a collection of books - it's the intellectual
                                    heart of our campus. With over 25,000 volumes, extensive digital resources, and comfortable
                                    study spaces, it provides an ideal environment for research, study, and discovery.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    LIBRARY FEATURES
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Dedicated sections for all academic disciplines</li>
                                    <li>Quiet study zones and collaborative workspaces</li>
                                    <li>Digital resource center with computer stations</li>
                                    <li>Access to global academic databases and journals</li>
                                    <li>Regular author visits and literary events</li>
                                    <li>Comfortable reading lounges with natural light</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Science Labs Sections */}
                {activeSection === "Science Labs" && !activeSubSection && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Science Laboratories
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/science-labs.jpg"
                                    alt="TRINS Science Labs"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Where Discovery Comes to Life
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our science laboratories are designed to inspire the next generation of scientists and innovators.
                                    Equipped with the latest technology and safety features, these spaces allow students to engage in
                                    hands-on experimentation and develop critical scientific skills.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    LABORATORY FEATURES
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Modern equipment for advanced experiments</li>
                                    <li>Dedicated preparation rooms for each lab</li>
                                    <li>Safety-first design with emergency systems</li>
                                    <li>Digital data collection and analysis tools</li>
                                    <li>Industry-standard research equipment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Physics Lab */}
                {activeSubSection === "Physics Lab" && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Physics Laboratory
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/physics-lab.jpg"
                                    alt="Physics Laboratory"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Exploring the Laws of Nature
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our physics lab provides students with the tools to investigate fundamental principles of the universe.
                                    From mechanics to electromagnetism, quantum physics to astrophysics, our facilities support exploration
                                    at all levels of complexity.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    EQUIPMENT HIGHLIGHTS
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Advanced optics and laser equipment</li>
                                    <li>Digital oscilloscopes and function generators</li>
                                    <li>High-precision measurement instruments</li>
                                    <li>Electronics and circuit-building stations</li>
                                    <li>Interactive physics simulation software</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Chemistry Lab */}
                {activeSubSection === "Chemistry Lab" && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Chemistry Laboratory
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/chemistry-lab.jpg"
                                    alt="Chemistry Laboratory"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Where Molecules Come Alive
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our chemistry lab is designed for safe, hands-on exploration of chemical principles.
                                    With state-of-the-art fume hoods, analytical instruments, and dedicated workspaces,
                                    students can conduct experiments ranging from basic reactions to advanced synthesis.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    FEATURES AND EQUIPMENT
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Modern fume hoods with safety monitoring</li>
                                    <li>Spectrophotometers and chromatography equipment</li>
                                    <li>Chemical storage with strict safety protocols</li>
                                    <li>Digital pH meters and analytical balances</li>
                                    <li>Molecular modeling software and visualization tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Biology Lab */}
                {activeSubSection === "Biology Lab" && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Biology Laboratory
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/biology-lab.jpg"
                                    alt="Biology Laboratory"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Exploring the World of Life Sciences
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our biology lab provides students with the tools to explore life at all levels,
                                    from cellular biology to ecosystem dynamics. With advanced microscopy, DNA analysis
                                    equipment, and dedicated research areas, students can engage in authentic scientific inquiry.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    LABORATORY FEATURES
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Compound and dissecting microscopes with digital imaging</li>
                                    <li>Gel electrophoresis and PCR equipment</li>
                                    <li>Controlled environment chambers for experiments</li>
                                    <li>Anatomical models and specimens</li>
                                    <li>Interactive biology simulation software</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Computer Lab */}
                {activeSubSection === "Computer Lab" && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Computer Laboratory
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/computer-lab.jpg"
                                    alt="Computer Laboratory"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Digital Innovation Hub
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our computer lab is a state-of-the-art facility designed for digital learning and innovation.
                                    With high-performance workstations, specialized software, and dedicated spaces for collaboration,
                                    students develop essential skills for the digital age.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    TECHNOLOGY RESOURCES
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>High-performance workstations with dual monitors</li>
                                    <li>Programming and development environments</li>
                                    <li>3D modeling and printing capabilities</li>
                                    <li>Robotics and AI development kits</li>
                                    <li>Video production and editing stations</li>
                                    <li>High-speed internet and secure network</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Sports Facilities Sections */}
                {activeSection === "Sports Facilities" && !activeSubSection && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Sports Facilities
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/sports-facilities.jpg"
                                    alt="TRINS Sports Facilities"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Where Champions Are Made
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our comprehensive sports facilities are designed to develop athletic skills, promote teamwork,
                                    and foster a lifelong love of physical activity. From competitive sports to recreational activities,
                                    our campus offers something for every student.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    FACILITY HIGHLIGHTS
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Olympic-size swimming pool with diving facilities</li>
                                    <li>Multi-purpose indoor sports arena</li>
                                    <li>FIFA-standard soccer field</li>
                                    <li>Professional basketball and volleyball courts</li>
                                    <li>400-meter synthetic track</li>
                                    <li>Fitness center with modern equipment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Indoor Sports */}
                {activeSubSection === "Indoor Sports" && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Indoor Sports Facilities
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/indoor-sports.jpg"
                                    alt="Indoor Sports Facilities"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    All-Weather Athletic Excellence
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our indoor sports complex provides year-round opportunities for athletic development.
                                    With professional-grade courts, specialized training areas, and spectator seating,
                                    it's designed for both competitive sports and recreational activities.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    FACILITIES INCLUDE
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Multi-court gymnasium for basketball, volleyball, and badminton</li>
                                    <li>Indoor climbing wall with safety systems</li>
                                    <li>Martial arts dojo with specialized flooring</li>
                                    <li>Table tennis and squash courts</li>
                                    <li>Dance studio with mirrored walls and ballet barres</li>
                                    <li>Fitness center with cardio and strength equipment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Outdoor Sports */}
                {activeSubSection === "Outdoor Sports" && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Outdoor Sports Facilities
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/outdoor-sports.jpg"
                                    alt="Outdoor Sports Facilities"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Championship-Level Fields and Courts
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our outdoor sports facilities rival those of professional training centers.
                                    Set against the backdrop of our beautiful campus, these spaces inspire athletic
                                    excellence while promoting teamwork and sportsmanship.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    FACILITIES INCLUDE
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>FIFA-regulation soccer field with artificial turf</li>
                                    <li>Professional cricket pitch and nets</li>
                                    <li>Olympic-standard 400-meter synthetic track</li>
                                    <li>Tennis courts with professional surfaces</li>
                                    <li>Field hockey pitch with irrigation system</li>
                                    <li>Archery range with electronic scoring</li>
                                    <li>Adventure sports area with obstacle courses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Aquatics */}
                {activeSubSection === "Aquatics" && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Aquatic Center
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/aquatics.jpg"
                                    alt="Aquatic Center"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Excellence in Water Sports
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our aquatic center is a state-of-the-art facility designed for competitive swimming,
                                    water safety training, and recreational aquatic activities. With Olympic specifications
                                    and advanced filtration systems, it's one of the finest school swimming facilities in the region.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    FACILITY FEATURES
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>10-lane, 50-meter Olympic competition pool</li>
                                    <li>Separate diving pool with platforms up to 10 meters</li>
                                    <li>Learner pool for swimming instruction</li>
                                    <li>Advanced water filtration and UV treatment system</li>
                                    <li>Electronic timing and scoring systems</li>
                                    <li>Spectator seating for 500 people</li>
                                    <li>Professional lifeguard team on duty at all times</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Dining Section */}
                {activeSection === "Dining" && !activeSubSection && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Dining Facilities
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/dining.jpg"
                                    alt="TRINS Dining Hall"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Nutritious Meals in a Welcoming Space
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Our dining facilities prioritize nutrition, variety, and food safety while creating
                                    a welcoming community space. With multiple serving stations, diverse menu options,
                                    and comfortable seating areas, dining at TRINS is both nourishing and enjoyable.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    DINING HIGHLIGHTS
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Nutritionist-planned menus for balanced diets</li>
                                    <li>Multiple cuisine options daily</li>
                                    <li>Special dietary accommodations available</li>
                                    <li>Fresh ingredients sourced from local farms</li>
                                    <li>Modern, hygienic kitchen facilities</li>
                                    <li>Comfortable, spacious dining areas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Technology Section */}
                {activeSection === "Technology" && !activeSubSection && (
                    <div className="text-left">
                        <h2 className="mb-12 text-left" style={titleStyle}>
                            Campus Technology
                        </h2>
                        <div className="md:flex md:items-start md:space-x-8 text-left">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="/image/campus/technology.jpg"
                                    alt="Campus Technology"
                                    width={700}
                                    height={450}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    Cutting-Edge Learning Environment
                                </h3>
                                <p className="mb-6 ml-5" style={paragraphStyle}>
                                    Technology at TRINS is seamlessly integrated throughout the campus to enhance learning,
                                    communication, and operations. Our infrastructure supports innovation while ensuring
                                    security and reliability for all users.
                                </p>
                                <h3 className="mb-3 text-left" style={subtitleStyle}>
                                    TECHNOLOGY INFRASTRUCTURE
                                </h3>
                                <ul className="list-disc ml-5 mt-2" style={paragraphStyle}>
                                    <li>Campus-wide high-speed Wi-Fi network</li>
                                    <li>Smart classrooms with interactive displays</li>
                                    <li>1:1 device program for students</li>
                                    <li>Digital learning management system</li>
                                    <li>Robotics and AI labs</li>
                                    <li>Advanced security and access control systems</li>
                                    <li>Green technology initiatives for sustainability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Photo Gallery Section */}
            <div className="bg-[#E3C274] p-4 rounded-lg shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-24 md:mx-24">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <div className="rounded-lg shadow-lg" key={idx}>
                            <Image
                                src={`/image/campus/gallery${idx + 1}.jpg`}
                                alt={`Campus Image ${idx + 1}`}
                                width={700}
                                height={450}
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

