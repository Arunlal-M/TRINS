import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";

export default function BoardingAccomodation() {
    return (
        <div className="w-full mt-38 flex flex-col items-center justify-center relative mainContainer">
            <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 boardingContainer">
                <AdmissionCard
                    image={"/image/boarding/boarding-overview.webp"}
                    text="Overview"
                    href="/boarding/overview"
                />
                <AdmissionCard
                    image="/image/boarding/accomodation.webp"
                    text="Accomodation"
                    active
                    href="/boarding/accomodation"
                />
                <AdmissionCard
                    image="/image/boarding/food.webp"
                    text="Nutrition"
                    href="/boarding/nutrition"
                />
                <AdmissionCard
                    image="/image/boarding/leisure.webp"
                    text="Leisure"
                    href="/boarding/leisure"
                />
            </div>

            {/* Title SubSection */}
            <div className="mt-38 w-full flex flex-col items-center justify-center relative mainContainer"
                style={{
                    position: "relative",
                    width: "100%",
                    height: 350,
                    margin: "0 auto",
                    overflow: "hidden",
                }}>
                <img
                    src="/image/boarding/accomodation.webp"
                    alt="Food Menu Cover"
                    style={{
                        width: "100%",
                        height: 350,
                        objectFit: "cover",
                        objectPosition: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        backgroundColor: "#074B35",
                    }}
                />
                <div
                    className="absolute inset-0 w-full h-full z-10"
                    style={{
                        background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(255,255,255,0.2) 100%)"
                    }}
                />
                <h1
                    className="relative z-20 text-white text-7xl font-normal"
                    style={{
                        fontFamily: "Gideon Roman",
                        fontWeight: 400,
                        fontSize: "120px",
                        lineHeight: "1",
                        letterSpacing: "24px",
                        color: "#FFFFFF",
                        width: "100%",
                        height: 350,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        textShadow: "0 4px 32px rgba(0,0,0,0.18)",
                    }}
                >
                    ACCOMODATION

                </h1>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-6xl py-16 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        Living Quarters
                    </h2>
                    <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        Our boarding facilities are designed to provide a comfortable, safe, and conducive environment for living and learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            title: "Dormitories",
                            content: "Spacious shared rooms (2-4 students) with individual study areas, wardrobe space, and comfortable bedding.",
                            image: "/image/boarding/dormitory.jpg"
                        },
                        {
                            title: "Common Areas",
                            content: "Shared lounges with games, and recreational facilities for socializing and relaxation.",
                            image: "/image/boarding/common-area.jpg"
                        },
                        {
                            title: "Study Rooms",
                            content: "Quiet study areas and computer labs available for academic work outside class hours.",
                            image: "/image/boarding/study-room.jpg"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* <img src={item.image} alt={item.title} className="w-full h-48 object-cover" /> */}
                            <div className="p-6">
                                <h3 className="text-xl text-[#075037] mb-3" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                                    {item.title}
                                </h3>
                                <p className="text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#f0f7f4] rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-[#085038]">Accomodation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src="/image/boarding/room.webp" alt="Careers Cover" className="w-full m-4 pb-4 h-48 object-cover" />
                            <ul className="space-y-2">
                                {["Spacious Air Conditioned rooms",
                                    "3-4 students per room",
                                    "En suite washroom facility",

                                    "Well ventilated rooms with ample natural light",
                                    "Secure wardrobes for each student",
                                    "Bed and study desk for each student",
                                    "Regular cleaning and maintenance",
                                    "Hot water facility in all rooms"].map((item, i) => (
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
    );
}