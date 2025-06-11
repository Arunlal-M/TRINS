import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";

export default function BoardingAccomodation() {
    return (
        <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
            <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 boardingContainer">
                <AdmissionCard
                    image={"/image/boarding/boarding-overview.jpg"}
                    text="Overview"
                    href="/boarding"
                />
                <AdmissionCard
                    image="/image/boarding/boarding-accomodation.jpg"
                    text="Accomodation"
                    active
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
                            <img src="/image/boarding/accomodation-main.jpg" alt="Boarding Accomodation" />
                        </div>
                        <div className="contentContainer">
                            <h1 className="text-white leading-title font-normal mb-2">
                                BOARDING <br /> ACCOMODATION
                            </h1>
                            <p className="text-white mt-2 subTitle">
                                Comfortable living spaces for focused learning
                            </p>
                        </div>
                    </div>
                </div>
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
                            content: "Shared lounges with TV, games, and recreational facilities for socializing and relaxation.",
                            image: "/image/boarding/common-area.jpg"
                        },
                        {
                            title: "Study Rooms",
                            content: "Quiet study areas and computer labs available for academic work outside class hours.",
                            image: "/image/boarding/study-room.jpg"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
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
            </div>
        </div>
    );
}