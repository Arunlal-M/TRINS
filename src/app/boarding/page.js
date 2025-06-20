import AdmissionCard from "../components/AdmissionCard";
import ConnectorLine from "./ConnectorLine";
import "./page.css";

export default function Boarding() {
    return (
        <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
            <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 boardingContainer">
                <AdmissionCard
                    image={"/image/boarding/boarding-overview.jpg"}
                    text="Overview"
                    href="/boarding/overview"

                />
                <AdmissionCard
                    image="/image/boarding/boarding-accomodation.jpg"
                    text="Accomodation"
                    href="/boarding/accomodation"
                />
                <AdmissionCard
                    image="/image/boarding/food.png"
                    text="Nutrition"
                    href="/boarding/nutrition"
                />
                <AdmissionCard
                    image="/image/boarding/boarding-leisure.jpg"
                    text="Leisure"
                    href="/boarding/leisure"
                />
            </div>

            {/* Title SubSection */}
            <div className="w-full flex flex-row items-stretch mt-8">
                <div className="w-full bannerSectionContainer bg-[#075037]">
                    <div className="contentWidthAdjust h-full w-full">
                        <div className="imgContainer">
                            <img
                                src="/image/boarding/boarding-main.jpg"
                                alt="Boarding Main"
                            />
                        </div>
                        <div className="contentContainer">
                            <h1 className="text-white leading-title font-normal mb-2">
                                BOARDING <br /> FACILITIES
                            </h1>
                            <p className="text-white mt-2 subTitle">
                                A home away from home
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="w-full max-w-6xl py-16 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        Our Boarding Standards
                    </h2>
                    <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        At TRINS, we provide a safe, nurturing, and stimulating environment for our boarding students.
                        Our facilities are designed to offer the perfect balance between academic support and personal development,
                        ensuring each student thrives both academically and socially.
                    </p>
                </div>
            </div>

            {/* Facilities Section */}
            <div className="w-full flex flex-col items-center relative stepContainer">
                {/* Home Environment Section */}
                <div className="position-relative">
                    <ConnectorLine />
                    <div className="w-full max-w-6xl flex flex-row items-center justify-center mt-80 position-relative stepContentContainer">
                        <div className="w-1/2 flex justify-end items-center relative overflow-visible stepImage">
                            <img
                                src="/image/boarding/home-environment.jpg"
                                alt="Home Environment"
                                className="rounded-lg shadow-lg object-cover"
                                style={{
                                    width: "600px",
                                    height: "auto",
                                    position: "relative",
                                    right: "50%",
                                    transform: "translateX(50%)",
                                }}
                            />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-start pl-8 stepContent">
                            <h3 className="text-[#075037] text-5xl font-normal mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                                Home-Like Environment
                            </h3>
                            <p className="text-[#222] text-xl" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                                Our boarding houses are designed to provide a warm, comfortable, and secure environment.
                                Each student has their personal space while enjoying common areas for socializing and relaxation.
                                We maintain small family-style groups to ensure personalized attention and care.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Academic Support Section */}
                <div className="position-relative">
                    <ConnectorLine />
                    <div className="w-full max-w-6xl flex flex-row items-center justify-center mt-80 position-relative stepContentContainer">
                        <div className="w-1/2 flex flex-col justify-center items-end pr-8 stepContent">
                            <h3 className="text-[#075037] text-5xl font-normal mb-4 text-right" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                                Academic Support
                            </h3>
                            <p className="text-[#222] text-xl text-right" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                                Dedicated study hours with supervised prep sessions ensure academic progress.
                                Our boarding staff includes academic tutors available for extra help.
                                Quiet study areas and well-equipped libraries provide the perfect environment for focused learning.
                            </p>
                        </div>
                        <div className="w-1/2 flex justify-start items-center relative overflow-visible stepImage">
                            <img
                                src="/image/boarding/academic-support.jpg"
                                alt="Academic Support"
                                className="rounded-lg shadow-lg object-cover"
                                style={{ width: "600px", height: "auto", position: "relative" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Button */}
                <div className="flex flex-col items-center w-full mb-16 mt-32 bottomButtonContainer">
                    <a
                        href="/contact"
                        className="bg-[#075037] text-white text-2xl px-12 py-4 rounded-full shadow-lg hover:bg-[#0a6a4a] transition-colors duration-200 flex items-center gap-2"
                        style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400, zindex: 9, position: "relative" }}
                    >
                        Contact Us <span style={{ fontSize: 24, marginLeft: 8 }}>&#8594;</span>
                    </a>
                </div>
            </div>
        </div>
    );
}