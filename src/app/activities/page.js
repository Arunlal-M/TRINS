import ActivitiesCard from "../components/ActivitiesCard";
import Image from "next/image";
import Link from "next/link";

export default function Activities() {
  return (
    <div
      className="mt-11 w-full flex flex-col items-center justify-center relative mainContainer"
      style={{ minHeight: 320 }}
    >
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
          src="/image/activities/cover.webp"
          alt="About Us Cover"
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
          School Activities
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
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 last gap-10 w-full my-16"
        >
          <Link href="/activities/arts-culture">
            <ActivitiesCard title="ARTS & CULTURAL"
              imageSrc="/image/activities/ARTS.webp"
            />
          </Link>

          <Link href="/activities/sports">
            <ActivitiesCard title="SPORTS"
             imageSrc="/image/activities/SPORTS.webp" />
          </Link>
          <Link href="/activities/yoga">
            <ActivitiesCard title="YOGA"
             imageSrc="/image/activities/bcr_yoga.webp" />
          </Link>

          <Link href="/activities/outbound-learning">
            <ActivitiesCard title="OUTBOUND LEARNING"
             imageSrc="/image/activities/" />
          </Link>

          <Link href="/activities/wellbeing-social-service">
            <ActivitiesCard title="SOCIAL SERVICE"
             imageSrc="/image/activities/" />
          </Link>

          <Link href="/activities/clubs-activities">
            <ActivitiesCard title="IN-HOUSE ACTIVITIES"
             imageSrc="/image/activities/" />
          </Link>

          <Link
            href="/activities/celebrations"
            className="md:col-span-3 md:justify-self-center"
          >
            <ActivitiesCard title="CELEBRATION"
             imageSrc="/image/activities/" />
          </Link>

        </div>
      </div>
    </div>
  );
}
