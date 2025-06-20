import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";

export default function BoardingOverview() {
    return (
        <div className="w-full mt-38 flex flex-col items-center justify-center relative mainContainer">
            <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 boardingContainer">
                <AdmissionCard
                    image={"/image/boarding/boarding-overview.webp"}
                    text="Overview"
                    href="/boarding/overview"
                    active
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
                    href="/boarding/leisure"
                />
            </div>

            {/* Title SubSection */}
            <div className="mt-64 w-full flex flex-col items-center justify-center relative mainContainer"
                style={{
                    position: "relative",
                    width: "100%",
                    height: 350,
                    margin: "0 auto",
                    overflow: "hidden",
                }}>
                <img
                    src="/image/boarding/boarding-overview.webp"
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
                    OVERVIEW
                </h1>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-6xl py-16 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-[#075037] mb-6" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        Our Boarding Philosophy
                    </h2>
                    <p className="text-xl text-[#222] max-w-4xl mx-auto" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                        TRINS boarding program is designed to provide a structured yet nurturing environment that fosters independence,
                        responsibility, and personal growth while maintaining strong academic focus.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl text-[#075037] mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            Residential Life
                        </h3>
                        <p className="text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            Our boarding houses are separated by gender and age groups, with dedicated housemasters and housemothers
                            who provide guidance and support. Students enjoy comfortable shared rooms with 2-4 occupants, creating
                            a balanced social environment.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl text-[#075037] mb-4" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            Daily Routine
                        </h3>
                        <p className="text-[#222]" style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}>
                            A structured daily schedule includes supervised study periods, meal times, recreational activities,
                            and adequate rest. Weekdays focus on academic commitments while weekends offer relaxation and enrichment activities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}