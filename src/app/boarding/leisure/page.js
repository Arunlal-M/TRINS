import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";

export default function BoardingLeisure() {
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
                    active
                    href="/boarding/leisure"
                />
            </div>

            {/* Title SubSection */}
            <div className="w-full flex flex-row items-stretch mt-8">
                <div className="w-full bannerSectionContainer bg-[#075037]">
                    <div className="contentWidthAdjust h-full w-full">
                        <div className="imgContainer">
                            <img src="/image/boarding/leisure-main.jpg" alt="Boarding Leisure" />
                        </div>
                        <div className="contentContainer">
                            <h1 className="text-white leading-title font-normal mb-2">
                                BOARDING <br /> LEISURE
                            </h1>
                            <p className="text-white mt-2 subTitle">
                                Balanced activities for personal growth
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-6xl py-16 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        Recreational Activities
                    </h2>
                    <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        We believe in the importance of a balanced lifestyle that includes time for relaxation, creativity, and physical activity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl text-[#075037] mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            Weekday Activities
                        </h3>
                        <ul className="space-y-3" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            <li>Sports (football, basketball, swimming, badminton)</li>
                            <li>Arts and crafts workshops</li>
                            <li>Music practice rooms and group sessions</li>
                            <li>Movie nights and board game tournaments</li>
                            <li>Reading clubs and debate societies</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl text-[#075037] mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            Weekend Excursions
                        </h3>
                        <ul className="space-y-3" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            <li>Cultural trips to museums and historical sites</li>
                            <li>Nature hikes and outdoor adventures</li>
                            <li>Community service projects</li>
                            <li>Shopping trips (with supervision)</li>
                            <li>Local festival participation</li>
                        </ul>
                    </div>
                </div>

                <div className="relative h-96 rounded-lg overflow-hidden mb-16">
                    <img
                        src="/image/boarding/activity-collage.jpg"
                        alt="Leisure Activities"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h3 className="text-white text-3xl text-center" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            Building Memories Beyond the Classroom
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}