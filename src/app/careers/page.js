import JobCard from "../components/JobCard";

export default function Careers() {
  return (
    <div className="mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/careers/cover.jpg"
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
          If you are innovative and committed, a good team player, continuous learner looking for great job opportunities, TRINS welcomes you to our family of highly skilled and professional teaching faculty.
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
  {/* Replace with your job title, type, and start date */}
  Facilities Supervisor Job Type: Part time Start Date:June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="Facilities Supervisor"
  jobType="Full time"
  startDate="June 2025"
  curriculum="We seek a proactive and experienced facility supervisor to oversee our school facilities' maintenance, safety, and operational efficiency. "
  qualifications={[
    // Add qualifications as strings
    "Manage the day-to-day operations of school facilities.",
    "Oversee maintenance, repairs, and safety inspections.",
    "Ensure compliance with health, safety, and environmental regulations.",
    "Develop and manage facility budgets and procurement processes.",
    "Coordinate with contractors, vendors, and service providers.",
    "Implement sustainability initiatives and energy efficiency programs.",
    "Collaborate with school administration to support events and activities.",
    "Bachelor's degree in facility management, engineering, or a related field.",
    "Diploma in Civil, electrical, or mechanical engineering",
    "Proven experience in facility management, preferably in an educational setting.",
    "Familiarity with building systems, maintenance practices, and safety standards.",


    // ...
  ]}
  email="careers@westerninternationalschool.com"
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
  {/* Replace with your job title, type, and start date */}
  Psychology Teacher Job Type: Part time Start Date:June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="Psychology Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking a dedicated and passionate Psychology Teacher with expertise in the IBDP and A/AS Level curriculum to join our dynamic team. "
  qualifications={[
    // Add qualifications as strings
    "Develop and deliver an engaging psychology curriculum for IBDP.",
    "Create a supportive and inclusive classroom environment.",
    "Assess and evaluate student progress through various methods.",
    "Collaborate with faculty to integrate interdisciplinary teaching approaches.",
    "Foster students' interest in psychology by organizing workshops, seminars, and extracurricular activities.",
    "Maintain communication with parents regarding student performance and well-being.",
    "Stay updated on the latest developments in psychology and education.",
    "Master’s degree in Psychology",
    "Teaching certification or equivalent qualification.",
    "Strong communication and interpersonal skills.",
    "Ability to inspire and motivate students.",
    "Familiarity with international education standards and curricula (IB, IGCSE, etc.) is a plus.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
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
  {/* Replace with your job title, type, and start date */}
  Advancement Officer Job Type: Part time Start Date:June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="Advancement Officer"
  jobType="Part time"
  startDate="June 2025"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    " Creative skills (graphic design, video production).",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  PR Officer Job Type: Part time Start Date:June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="PR Officer"
  jobType="Part time"
  startDate="June 2025"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>

// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>

// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


// Template for adding a new job card
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
  {/* Replace with your job title, type, and start date */}
  [Job Title] Job Type: [Full time/Part time] Start Date: [Month Year]
</div>
<JobCard
  className="jobCardContainer"
  title="[Job Title]"
  jobType="[Full time/Part time]"
  startDate="[Month Year]"
  curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Qualification 1",
    "Qualification 2",
    "Qualification 3",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>

        </div>
      </div>
    </div>
  );
}
