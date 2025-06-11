import AdmissionCard from "../../components/AdmissionCard";
import "../page.css";

export default function BoardingOverview() {
    return (
        <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
            <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 boardingContainer">
                <AdmissionCard
                    image={"/image/boarding/boarding-overview.jpg"}
                    text="Overview"
                    href="/boarding/overview"
                    active
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
                            <img src="/image/boarding/overview-main.jpg" alt="Boarding Overview" />
                        </div>
                        <div className="contentContainer">
                            <h1 className="text-white leading-title font-normal mb-2">
                                BOARDING <br /> OVERVIEW
                            </h1>
                            <p className="text-white mt-2 subTitle">
                                Comprehensive care for holistic development
                            </p>
                        </div>
                    </div>
                </div>
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