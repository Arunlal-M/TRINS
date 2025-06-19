import ActivitiesCard from "../components/ActivitiesCard";

export default function Activities() {
  return (
    <div
      className="mt-64 w-full flex flex-col items-center justify-center relative mainContainer"
      style={{ minHeight: 320 }}
    >
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/activities/cover.webp"
          alt="Activities Cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src="/image/activities/coverOverGradient.png"
          alt="Activities Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <h1
          className="relative z-20 text-white text-7xl font-normal"
          style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 2 }}
        >
          School Activities | TRINS
        </h1>
      </div>
      <div className="w-full bg-white flex flex-col items-center py-20 px-4">
        <h2
          className="text-4xl md:text-5xl font-normal mb-8 text-center"
          style={{
            fontFamily: "Gideon Roman, serif",
            letterSpacing: 0,
            textTransform: "uppercase",
          }}
        >
          AN ENVIRONMENT TO EXCEL
        </h2>
        <div
          className="max-w-6xl mx-auto text-center text-xl md:text-2xl text-[#222]"
          style={{
            fontFamily: "Gideon Roman, serif",
            fontWeight: 400,
            lineHeight: "1.6",
          }}
        >
          TRINS constantly strives to ensure the best possible teaching and
          learning environment for its students, integrating educational
          philosophy and practice, while also attending to their co-curricular
          needs and well-being.
          In addition to a spectacular location, the school features facilities
          to enhance teaching and learning activities at each stage of
          development and to create a beautiful, practical and welcoming
          environment for the students.
          The school offers a variety of activities which allow the students to
          develop their talents, share common interests and gain wider
          experiences. The extensive co-curricular program aims to promote
          participation in recreational activities that will stimulate an
          interest in school life as well as provide a platform for students to
          showcase themselves.
        </div>
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full my-16"
        >
          <ActivitiesCard title="ARTS & CULTURAL" />
          <ActivitiesCard title="SPORTS" />
          <ActivitiesCard title="OUTBOUND LEARNING" />
          <ActivitiesCard title="SOCIAL SERVICE" />
          <ActivitiesCard title="IN-HOUSE ACTIVITIES" />
          <ActivitiesCard title="CELEBRATION" />
        </div>
      </div>
    </div>
  );
}
