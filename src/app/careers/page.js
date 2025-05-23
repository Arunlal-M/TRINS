import JobCard from "../components/JobCard";

export default function Careers() {
  return (
    <div className="mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/careers/cover.png"
          alt="Careers Cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src="/image/careers/coverOverGradient.png"
          alt="Careers Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <h1
          className="relative z-20 text-white text-7xl font-normal"
          style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 2 }}
        >
          CAREERS
        </h1>
      </div>
      <div className="w-full flex flex-col items-center py-20 px-4 bg-white">
        <h2
          className="text-center mb-6"
          style={{
            fontFamily: "Gideon Roman, serif",
            fontWeight: 400,
            fontSize: "45.49px",
            lineHeight: "58.48px",
            letterSpacing: "1.46px",
          }}
        >
          Opportunities at TRINS
        </h2>
        <p
          className="max-w-6xl mb-8 text-[#222]"
          style={{
            fontFamily: "Gideon Roman, serif",
            fontWeight: 400,
            fontSize: "25px",
            lineHeight: "41.71px",
            letterSpacing: "1.04px",
            textAlign: "center",
          }}
        >
          If you are innovative and committed, a good team player, continuous
          learner looking for great job opportunities, TRINS welcomes you to
          our family of highly skilled and professional teaching faculty.
        </p>
        <div className="w-full flex justify-center mb-10">
          <span
            className="bg-[#085038] text-white text-5xl font-normal md:w-1/2 text-center py-5 px-2 rounded-sm"
            style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 1 }}
          >
            Academics
          </span>
        </div>
        <div className="w-full flex flex-col items-center gap-16">
          <div
            style={{
              fontFamily: "Gideon Roman, serif",
              fontWeight: 400,
              fontSize: "33.43px",
              lineHeight: "42.98px",
              letterSpacing: "1.08px",
              textAlign: "center",
            }}
            className="mb-4"
          >
            Piano Educator Job Type: Part time Start Date: June 2025
          </div>
          <JobCard
            className="jobCardContainer"
            title="Piano Educator"
            jobType="Part time"
            startDate="June 2025"
            curriculum="Curriculum: We are seeking a passionate and qualified Music Teacher specializing in Piano/Keyboard to join our dynamic faculty. The ideal candidate will be able to deliver high-quality music instruction aligned with the MYP and IGCSE curriculum frameworks."
            qualifications={[
              "A minimum of Grade 5 Practical in Piano/Keybaord from Trinity College London (TCL), ABRSM,or an equivalent internationally recognized examination board.",
              "Proficient in teaching Music Theory up to Grade 3. A certificate of the same will be an advantage",
              "Strong command over spoken and written English.",
              "Prior experience teaching in an IB or IGCSE environment will be an advantage.Key Responsibilities:",
              "Deliver engaging and effective music lessons.",
              "Prepare students for school performances, practical and theory examinations.",
              "Encourage musical creativity, performance, and appreciation on a solo and ensemble level.",
              "Participate in school events, performances, and co-curricular activities.",
              "Participate in school events, performances, and co-curricular activities.",
            ]}
            email="careers@TRINSinternationalschool.com"
          />

          <div
            style={{
              fontFamily: "Gideon Roman, serif",
              fontWeight: 400,
              fontSize: "33.43px",
              lineHeight: "42.98px",
              letterSpacing: "1.08px",
              textAlign: "center",
            }}
            className="mb-4"
          >
            Piano Educator Job Type: Part time Start Date: June 2025
          </div>
          <JobCard
            title="Violin Educator"
            jobType="Full time"
            startDate="August 2025"
            curriculum="Curriculum: We are seeking a passionate and qualified Music Teacher specializing in Violin to join our dynamic faculty. The ideal candidate will be able to deliver high-quality music instruction aligned with the MYP and IGCSE curriculum frameworks."
            qualifications={[
              "A minimum of Grade 5 Practical in Violin from Trinity College London (TCL), ABRSM,or an equivalent internationally recognized examination board.",
              "Proficient in teaching Music Theory up to Grade 3. A certificate of the same will be an advantage",
              "Strong command over spoken and written English.",
              "Prior experience teaching in an IB or IGCSE environment will be an advantage.Key Responsibilities:",
              "Deliver engaging and effective music lessons.",
              "Prepare students for school performances, practical and theory examinations.",
              "Encourage musical creativity, performance, and appreciation on a solo and ensemble level.",
              "Participate in school events, performances, and co-curricular activities.",
            ]}
            email="careers@TRINSinternationalschool.com"
          />

          <div
            style={{
              fontFamily: "Gideon Roman, serif",
              fontWeight: 400,
              fontSize: "33.43px",
              lineHeight: "42.98px",
              letterSpacing: "1.08px",
              textAlign: "center",
            }}
            className="mt-5"
          >
            Piano Educator Job Type: Part time Start Date: June 2025
          </div>
          <JobCard
            title="Guitar Educator"
            jobType="Part time"
            startDate="September 2025"
            curriculum="Curriculum: We are seeking a passionate and qualified Music Teacher specializing in Guitar to join our dynamic faculty. The ideal candidate will be able to deliver high-quality music instruction aligned with the MYP and IGCSE curriculum frameworks."
            qualifications={[
              "A minimum of Grade 5 Practical in Guitar from Trinity College London (TCL), ABRSM,or an equivalent internationally recognized examination board.",
              "Proficient in teaching Music Theory up to Grade 3. A certificate of the same will be an advantage",
              "Strong command over spoken and written English.",
              "Prior experience teaching in an IB or IGCSE environment will be an advantage.Key Responsibilities:",
              "Deliver engaging and effective music lessons.",
              "Prepare students for school performances, practical and theory examinations.",
              "Encourage musical creativity, performance, and appreciation on a solo and ensemble level.",
              "Participate in school events, performances, and co-curricular activities.",
            ]}
            email="careers@TRINSinternationalschool.com"
          />
        </div>
      </div>
    </div>
  );
}
