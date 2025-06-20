import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";

export default function BoardingLeisure() {
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
                    active
                    href="/boarding/leisure"
                />
            </div>

            <div className="mt-64 w-full flex flex-col items-center justify-center relative mainContainer"
                style={{
                    position: "relative",
                    width: "100%",
                    height: 350,
                    margin: "0 auto",
                    overflow: "hidden",
                }}>
                <img
                    src="/image/boarding/leisure.webp"
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
                {/* <img
                    src="/image/food-menu/coverOverGradient.webp"
                    alt="Food Menu Gradient Overlay"
                    className="absolute inset-0 w-full h-full object-cover z-10"
                /> */}
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
                    LEISURE
                </h1>
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