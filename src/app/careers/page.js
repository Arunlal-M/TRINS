import JobCard from "../components/JobCard";

export default function Careers() {
  return (
    <div className="mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/careers/cover.webp"
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
            Violin Educator Job Type: Part time Start Date: June 2025
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
            Guitar Educator Job Type: Part time Start Date: June 2025
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
            email="careers@Trivandruminternationalschool.com"
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
            email="careers@Trivandruminternationalschool.com"
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
  curriculum="Location - Cochin
Qualification: Bachelor’s /Master’s degree in Marketing,
Communications, Development-related field."
  qualifications={[
    // Add qualifications as strings
    "  Creative skills (graphic design, video production).",
    " Experience in marketing or advancement.",
    " Strong communication and interpersonal skills.",
    " Active participant and assist in all processes of marketing.",
    " Participate in visit programs, yield events, and other special events.",
    " Participate in visit programs, yield events, and other special events.",
    "Develop creative content (videos, graphics, social media posts) topromote school initiatives.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


 {/* Template for adding a new job card */}
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
  curriculum="Location - Cochin
Qualification: Bachelor /Master’s Degree in Public relations,
Communications, Journalism, or a related field."
  qualifications={[
    // Add qualifications as strings
    " Excellent communication and interpersonal skills.",
    " Ability to build rapport with parents and staff.",
    "Organizational and problem-solving skills.",
    "Relevant experience in customer service or education.",
    " Foster positive relationships with parents/guardians through regular communication.",
    "Address parental concerns, queries, and feedback.",
    "Organize parent-teacher meetings, events, and activities.",
    " Collaborate with teachers and staff to ensure parent engagement.",
    " Develop and implement strategies to enhance parent-school partnerships.",
    "Maintain accurate records of parent interactions.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>

{/* // Template for adding a new job card */}
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
  Economics Teacher Job Type: Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="Economics Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking a passionate and dedicated Economics Teacher with expertise in the IGCSE and A/AS Level curriculum to join Trivandrum International School. The ideal candidate will inspire students to understand and engage with economic concepts and business principles, fostering critical thinking and analytical skills."
  qualifications={[
    // Add qualifications as strings
    " Develop and implement engaging lesson plans that align with the curriculum.",
    "Assess and evaluate student progress, providing constructive feedback.",
    "Create a positive and inclusive classroom environment that encourages student participation.",
    "Stay updated with the latest developments in economics and business education.",
    "Collaborate with colleagues to enhance the learning experience and participate in professional development activities.",
    "Communicate effectively with parents regarding student progress and classroom activities.",
    " Master’s degree in Economics; B.Ed.",
    " Proven experience in teaching at the IGCSE and A/AS Levels",
    "Familiarity with assessment criteria and exam techniques for IGCSE and A/AS Level",
    "Previous teaching experience in Economics",
    "Excellent communication and interpersonal skills.",
    "Ability to inspire and motivate students.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>

{/* // Template for adding a new job card */}
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
 History Teacher Job Type: Part time Start Date: June 2025</div>
<JobCard
  className="jobCardContainer"
  title="History Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum=" We are seeking a knowledgeable and enthusiastic History Teacher with expertise in the DP and A/AS Level curriculum to join Trivandrum International School"
  qualifications={[
    // Add qualifications as strings
    "Develop and implement comprehensive lesson plans that align with the DP and A/AS Level History curriculum.",
    "Deliver engaging and interactive lessons that stimulate critical thinking, analytical skills, and historical inquiry.",
    "Foster a supportive and inclusive learning environment that encourages active student participation and intellectual growth.",
    "Utilize a range of teaching strategies, resources, and technologies to accommodate diverse learning styles and enhance student engagement.",
    "Assign and assess homework, essays, projects, and practice exams to gauge student progress and identify areas for improvement.",
    "Provide timely and constructive feedback to students to support their academic development and enhance their exam performance.",
    "Master's degree in History, Education",
    "Teaching certification or licensure in History or Social Studies.",
    "Proven experience in teaching History at the DP and A/AS Level.",
    " In-depth knowledge of the DP and A/AS Level History curriculum, including key topics, themes, and historical periods.",
    " Familiarity with assessment criteria and exam techniques for DP and A/AS Level History.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Drama Teacher Job Type:Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="Drama Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="TRINS is seeking a passionate and creative Drama Teacher to inspire students across Classes 6 to 8 through engaging theatrical experiences. The ideal candidate should be skilled in developing performance techniques, building confidence, and fostering teamwork through drama. A working knowledge of IGCSE framework is preferred, as it will help align the performing arts curriculum with inquiry-based, interdisciplinary learning. Experience in directing school plays, organizing performances, and integrating drama into broader learning themes will be highly valued."
  qualifications={[
    // Add qualifications as strings
    "We are looking for an educator who brings energy, empathy, and innovation to the classroom—someone who can create a safe and expressive space for students to explore storytelling, voice, movement, and character.",
    " If you are enthusiastic about cultivating young performers and building a vibrant drama program within a progressive international school environment, we welcome your application to join the TRINS community.",
   
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  QUANTITY SURVEYORS Job Type: Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="QUANTITY SURVEYORS"
  jobType="Part time"
  startDate="June 2025"
  curriculum="Immediate hiring for the infrastructural development of the 2nd phase of Cochin International School and Charter School, Kochi, and thereafter for the future construction projects in other properties. Preference will be given for candidates with a proven track record of successfully managing large-scale civil construction projects."
  qualifications={[
    // Add qualifications as strings
    "Degree / Diploma holders or certificate course in quantity surveying with at least 5 years’ experience as Quantity Surveyor with a reputed construction contracting company or similar.",
   
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
  PROJECT ENGINEERS (2 no’s) Job Type: Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="PROJECT ENGINEERS (2 no’s)"
  jobType="Part time"
  startDate="June 2025"
  curriculum="Immediate hiring for the infrastructural development of the 2nd phase of Cochin International School and Charter School, Kochi, and thereafter for the future construction projects in other properties. Preference will be given for candidates with a proven track record of successfully managing large-scale civil construction projects."
  qualifications={[
    // Add qualifications as strings
    "Graduate / Diploma in Civil Engineering with a minimum of 3 years’ experience in similar capacity, having successfully executed various types of Civil Engineering Projects like Schools, Colleges, Commercial complexes and other infrastructure developments.",
    
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
PROJECT MANAGER Job Type: Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="PROJECT MANAGER"
  jobType="Part time"
  startDate="June 2025"
  curriculum="Immediate hiring for the infrastructural development of the 2nd phase of Cochin International School and Charter School, Kochi, and thereafter for the future construction projects in other properties. Preference will be given for candidates with a proven track record of successfully managing large-scale civil construction projects"
  qualifications={[
    // Add qualifications as strings
    "Graduate / Diploma in Civil Engineering with a minimum of 8 years of experience in similar capacity, having successfully executed various types of Civil Engineering Projects like Schools, Colleges, Commercial complexes and other infrastructure developments.",
    
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  MEP Engineer Job Type: Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="MEP Engineer"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking an experienced and motivated MEP Engineer to join our dynamic team for our ongoing and upcoming School projects at Cochin. As an MEP Engineer, you will be responsible for the design, implementation, and maintenance of mechanical, electrical, plumbing and ELV systems for our ongoing and proposed projects. Salary and perks will be comparable to the best in the Industry."
  qualifications={[
    // Add qualifications as strings
    " Diploma/ Degree in Electrical Engineering or related field.",
    "10 years of experience in MEP design and execution.",
    "Proficient in MEP design software (AutoCAD, Revit, etc.).",
    "Solid knowledge of local building codes and regulations.",
    "Ability to manage multiple projects and deadlines.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  ART Teacher Job Type: Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="ART Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="TRINS is seeking a passionate and skilled Art Teacher to join our creative learning community, teaching students from Class 4 to Class 8. The ideal candidate should have a strong foundation in developing students’ artistic skills, along with the ability to introduce basic art history to enhance cultural understanding. Familiarity with international curricula such as PYP, MYP, or IGCSE is preferred to support a structured, inquiry-led, and skill-based approach. Additional expertise in pottery, sculpting, or multi-media art will be considered a valuable asset."
  qualifications={[
    // Add qualifications as strings
    "We are looking for an educator who brings energy, innovation, and inclusivity into the classroom- someone who can nurture creativity, encourage exploration, and build technical confidence in young learners. If you are excited about shaping artistic expression within a progressive, internationally-minded curriculum, we invite you to apply and become a part of the vibrant TRINS family.",
    
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Biology Teacher Job Type: Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="Biology Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="Trivandrum International School seeks a passionate and knowledgeable Biology Teacher"
  qualifications={[
    // Add qualifications as strings
    "Conduct engaging and interactive lessons that promote critical thinking and analytical skills.",
    "Create a supportive and inclusive classroom environment that encourages active student participation and fosters intellectual growth.",
    "Utilize diverse teaching strategies, resources, and technologies to address various learning styles and enhance student engagement.",
    "Assign and evaluate homework and practice exams to monitor student progress and identify areas for improvement.",
    "Provide timely, constructive feedback to students to aid their academic development and boost exam performance.",
    " Master's degree in Zoology, B.Ed. B.Ed",
    "Preferably experience teaching Biology at the IGCSE curriculum.",
   
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Chef/Cook Job Type: Part time Start Date: June 2025

</div>
<JobCard
  className="jobCardContainer"
  title="Chef/Cook"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking a passionate and experienced Chef/Cook to join our team. The ideal candidate will be responsible for preparing a variety of healthy and delicious meals that cater to the diverse dietary needs of our students."
  qualifications={[
    // Add qualifications as strings
    "Plan and prepare nutritious meals that align with dietary guidelines and student preferences.",
    "Ensure all meals are prepared in a safe and hygienic environment.",
    "Collaborate with school administration to develop menus that reflect cultural diversity.",
    "Manage kitchen inventory, including ordering and maintaining stock levels.",
    "Monitor and adhere to food safety and sanitation standards.",
    "Provide training and supervision to kitchen staff and assist with their development.",
    "Engage with students and staff to gather feedback and make improvements.",
    "Participate in special events and theme days as required.",
    "Proven experience as a Chef or Cook, preferably in an educational or institutional setting.",
    "Knowledge of international cuisines and dietary restrictions (e.g., vegetarian, vegan, gluten-free).",
    "Culinary degree or equivalent experience is preferred.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Sous Chef – Kerala Cuisine Job Type: Part time Start Date: June 2025
</div>
<JobCard
  className="jobCardContainer"
  title="Sous Chef – Kerala Cuisine"
  jobType="Part time"
  startDate="June 2025"
  // curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Positive, Well-Organized, and Energetic",
    "Passion for Authentic Kerala Cuisine",
    "Team Player with Culinary Expertise",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Pre-School Teacher 
</div>
<JobCard
  className="jobCardContainer"
  title="Pre-School Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking a dedicated and passionate Preschool Teacher to join our team. The ideal candidate will have a strong understanding of early childhood education principles and practices,"
  qualifications={[
    // Add qualifications as strings
    "Develop and implement age-appropriate lesson plans that nurture children's growth and development.",
    "Create a safe, welcoming, and inclusive environment for all students.",
    "Encourage social interaction and cooperation among students to foster a sense of community.",
    "Observe and assess children’s progress, documenting their growth and development.",
    "Communicate openly and regularly with parents about their child’s progress and challenges.",
    "Collaborate with colleagues to enhance the educational experience for all students.",
    "Maintain a clean and organized classroom environment.",
    "Attend staff meetings, training sessions, and professional development workshops.",
    "Bachelor’s degree in Early Childhood Education, Elementary Education, or a related field",
    "Experience working with preschool-aged children.",
    "Strong understanding of childhood development theories and practices.",
    "Excellent communication and interpersonal skills.",
    "Patience, creativity, and a genuine love for working with young children.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Physics lab Assistant 
</div>
<JobCard
  className="jobCardContainer"
  title="Physics lab Assistant"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking a detail-oriented and motivated Physics Lab Assistant to support the instructional and operational activities of our physics lab. The ideal candidate will be responsible for assisting faculty and students in conducting experiments, maintaining lab equipment, and ensuring a safe and efficient lab environment."
  qualifications={[
    // Add qualifications as strings
    "Assist instructors in preparing for laboratory experiments and demonstrations.",
    "Set up, maintain, and calibrate lab equipment and instruments.",
    "Provide guidance and support to students during lab sessions, ensuring proper safety protocols are followed.",
    "Monitor experiments and collect data as required, assisting students in understanding physical concepts",
    "Maintain inventory of lab supplies and equipment, including ordering and organizing materials as needed.",
    "Ensure the lab is clean, organized, and compliant with safety regulations.",
    "Assist in the development of lab instructional materials and resources.",
    "Bachelor’s degree in Physics",
    "Previous experience in a laboratory setting or academic environment is highly desirable.",
    "Strong understanding of physics principles and laboratory techniques.",
    "Familiarity with laboratory equipment, tools, and safety procedures.",
    
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Early Years or Kindergarten Teacher 
</div>
<JobCard
  className="jobCardContainer"
  title="Early Years or Kindergarten Teacher"
  jobType="Part time"
  startDate="June 2025"
  // curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Graduation / Post Graduation in any discipline with B.Ed. / or Certification in Early Childhood / Montessori Training / Teacher Training etc.",
    "Job Location - Trivandrum",
    
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Special Educational Needs (SEN) 
</div>
<JobCard
  className="jobCardContainer"
  title="Special Educational Needs (SEN)."
  jobType="Part time"
  startDate="June 2025"
  //curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Relevant qualifications and experience in the respective field",
    "Passion for working with children with special educational needs",
    "Strong communication and collaboration skills",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Business Management/ Business Studies Teacher 
</div>
<JobCard
  className="jobCardContainer"
  title="Business Management/ Business Studies Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking a passionate and dedicated Business Management/studies teacher with expertise in the IGCSE, IB DP and A/AS Level curriculum to join Trivandrum International School. The ideal candidate will inspire students to understand and engage with business principles, fostering critical thinking and analytical skills."
  qualifications={[
    // Add qualifications as strings
    "Develop and implement engaging lesson plans that align with the curriculum.",
    "Teach Business Management and Business Studies.",
    "Assess and evaluate student progress, providing constructive feedback.",
    "Create a positive and inclusive classroom environment that encourages student participation.",
    "Stay updated with the latest developments in business education.",
    "Collaborate with colleagues to enhance the learning experience and participate in professional development activities.",
    "Communicate effectively with parents regarding student progress and classroom activities.",
    "Master’s degree in Business Education",
    "Proven experience in teaching at the IBDP and A/AS Level.",
    "Familiarity with assessment criteria and exam techniques for IBDP and A/AS Level",
    "Teaching certification/license",
    "Previous teaching experience in Business management and Business Studies is mandatory.",
    "Strong understanding of business practices.",
    "Excellent communication and interpersonal skills.",
    "Ability to inspire and motivate students.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Head of Boarding 
</div>
<JobCard
  className="jobCardContainer"
  title="Head of Boarding"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking a passionate and experienced Head of Boarding who is committed not only to managing the boarding facilities but also to fostering the well-being and development of our students."
  qualifications={[
    // Add qualifications as strings
    "Leadership and Management: Oversee all aspects of the boarding program, ensuring a safe, supportive, and nurturing environment for all students.",
    "Student Well-Being: Implement programs and initiatives that promote the emotional, mental, and physical well-being of students within the boarding community.",
    "Staff Development: Lead and support boarding staff in their roles, providing training and guidance to ensure high standards of care and support.",
    "Parental Communication: Maintain open lines of communication with parents, keeping them informed about their child’s progress and well-being.",
    "Community Engagement: Foster a sense of community within the boarding environment, encouraging involvement in school activities and events.",
    "Crisis Management: Address and manage any issues or crises that may arise, ensuring the safety and well-being of all students.",
    "Policy Development: Develop and enforce policies that promote a positive boarding experience, emphasizing respect, responsibility, and personal growth.",
    "Master's in Psychology, Social Work, or a related field",
    "Bachelor's degree in Education",
    "Proven experience in an international school boarding",
    "Strong understanding of adolescent development and student well-being.",
    "Excellent interpersonal and communication skills.",
    "Ability to work collaboratively with staff, students, and parents.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Mathematics Teacher 
</div>
<JobCard
  className="jobCardContainer"
  title="Mathematics Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="Trivandrum International School seeks a passionate and knowledgeable Mathematics Teacher with expertise in the IGCSE or MYP curriculum."
  qualifications={[
    // Add qualifications as strings
    "Design and implement comprehensive lesson plans aligned with the IGCSE curriculum.",
    "Conduct engaging and interactive lessons that promote critical thinking and analytical skills.",
    "Create a supportive and inclusive classroom environment that encourages active student participation and fosters intellectual growth.",
    "Utilize diverse teaching strategies, resources, and technologies to address various learning styles and enhance student engagement.",
    "Assign and evaluate homework and practice exams to monitor student progress and identify areas for improvement.",
    "Provide timely, constructive feedback to students to aid their academic development and boost exam performance.",
    "Master's degree in Mathematics, B.Ed.",
    "Demonstrated experience teaching Mathematics at the IGCSE curriculum.",
    "Strong understanding of the IGCSE Maths curriculum.",
    "Familiarity with assessment criteria and exam techniques for IGCSE Mathematics.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  School Counsellor 
</div>
<JobCard
  className="jobCardContainer"
  title="School Counsellor"
  jobType="Part time"
  startDate="June 2025"
  // curriculum=""
  qualifications={[
    // Add qualifications as strings
    "Master’s Degree in Psychology",
    "Minimum 2 years of relevant experience in a reputed school",
    "Conduct individualised sessions to assess students' needs and develop tailored counselling plans",
    "Collaborate with groups, families, and communities to promote long-term mental health support.",
    " Encourage open discussions about emotions and personal experiences among students.",
    "Assist students in building resilience and adopting healthy coping strategies for improved mental well-being.",
    "Help students set personal goals and create actionable plans to achieve them",
    "Raise awareness on various issues including trauma, adjustment, anger management, bullying, depression, anxiety, gender identity and fluidity, relationships, self-concept, sleep hygiene, stress, and time management.",
    "Coordinate with healthcare providers, consultants, and community resources to create comprehensive mental health care plans.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Content Creator 
</div>
<JobCard
  className="jobCardContainer"
  title="Content Creator"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are looking for a proactive and experienced content creator to join our team."
  qualifications={[
    // Add qualifications as strings
    "Strong Communication Skills: Excellent verbal and written communication abilities, with a talent for building relationships.",
    "Content Creation & Editing: Proficient in developing and editing engaging content.",
    "Marketing Experience: Familiarity with marketing strategies and social media platforms to enhance visibility.",
    "Customer Service Excellence: Ability to effectively engage with parents and provide top-notch service.",
    "Multitasking Ability: Capable of working independently and managing multiple tasks in a fast-paced environment.",
    "Engaging Content Development: Skill in creating authentic content that resonates with our target audience.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Physical Education Teacher 
</div>
<JobCard
  className="jobCardContainer"
  title="Physical Education Teacher"
  jobType="Part time"
  startDate="June 2025"
  // curriculum="[Curriculum: Job description here  ]"
  qualifications={[
    // Add qualifications as strings
    "Preferred experience in coaching senior girls’ basketball.",
    "Must possess a BPEd/MPEd (with specialisation in basketball) or a BPEd along with a one-year diploma in basketball from SAI.",
    "Experience in participating in international, national, or state-level competitions is desirable.",
    "The ability to conduct swimming lessons is required.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
 French Teacher
</div>
<JobCard
  className="jobCardContainer"
  title="French Teacher with expertise in the IGCSE & IB curriculum"
  jobType="Part time"
  startDate="June 2025"
  // curriculum="[Curriculum: Job description here]"
  qualifications={[
    // Add qualifications as strings
    "Bachelor’s/Master’s degree in French language and literature",
    "Teaching certification (e.g., DELF, DALF)",
    "Qualified teachers should have a minimum of 2 years of experience in teaching French in the IBDP curriculum.",
    "Proven experience teaching High School students",
    "Excellent communication and interpersonal skills",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>


{/* // Template for adding a new job card */}
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
  Support Teacher 
</div>
<JobCard
  className="jobCardContainer"
  title="Support Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We seek a passionate and skilled PYP Support Teacher to join our school. The ideal candidate will support the implementation of the International Baccalaureate (IB) Primary Years Programme."
  qualifications={[
    // Add qualifications as strings
    "Collaborate with classroom teachers to provide support for students",
    "Assist in the planning and delivery of inquiry-based lessons that align with the PYP framework.",
    "Monitor and assess student progress, providing feedback and support to enhance learning outcomes.",
    "Foster a positive classroom environment that encourages student participation, collaboration, and respect.",
    "Work closely with parents and caregivers to communicate student progress and strategies for support at home",
    "Participate in meetings, professional development, and school events to enhance the PYP experience.",
    "MA English,",
    "Bachelor’s degree in Education or a related field.",
    "Teaching certification or relevant qualification.",
    "Excellent communication, organizational, and interpersonal skills.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>
{/* // Template for adding a new job card */}
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
  Physical Education Teacher - Track & Field Coach 
</div>
<JobCard
  className="jobCardContainer"
  title="Physical Education Teacher - Track & Field Coach"
  jobType="Part time"
  startDate="June 2025"
  curriculum="We are seeking a passionate and experienced physical education teacher to join our school. The successful candidate will be responsible for teaching PE classes to students as well as coaching our varsity track and field team."
  qualifications={[
    // Add qualifications as strings
    "Develop and implement engaging physical education curriculum aligned with state/district standards",
    "Instruct students in a variety of sports, fitness and recreational activities",
    "Coach and lead the varsity track and field team, including organizing practices, meets and team development",
    "Collaborate with other faculty to integrate physical activity across the curriculum",
    "Maintain a safe and inclusive learning environment",
    "Master's degree in physical education or coaching",
    "Certification in additional coaching specialties (e.g. strength & conditioning)",
    "Experience working with diverse student populations",
    "Minimum 3 years of experience teaching PE and/or coaching track and field",
    "Excellent communication, organization and leadership skills",
    "Commitment to promoting health, fitness and sportsmanship",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>
{/* // Template for adding a new job card */}
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
 PYP HRT vacancy 
</div>
<JobCard
  className="jobCardContainer"
  title="IB PYP Home Room Teacher"
  jobType="Part time"
  startDate="June 2025"
  curriculum="The role of the IB Primary Years Teacher (Grade 1 – 5) is to build and maintain a successful Primary Years Programme (PYP) within the school by providing an educational atmosphere conductive to learning and developing through the process of inquiry."
  qualifications={[
    // Add qualifications as strings
    "Design, prepare and deliver high quality lessons to suit the individual needs of all students in line with the PYP",
    "Inspire mixed culture and ability classes, by creating challenging and engaging learning opportunities for all students",
    "Assess and monitor student progress and provide targets so that all learners can see success and improve",
    "Collaborate with other teachers to share new ideas, approaches and professional knowledge",
    "Communicate accurately and regularly with parents",
    "Liaise with the Head of Primary School and PYP Coordinator to ensure effective delivery of the curriculum to specified classes, including selecting resources and managing them efficiently in the classroom",
    "Contribute to the extra-curricular activities programme and participate in school activities such as assemblies, evening events, conferences",
    "Post Graduate degree preferred",
    "Preference will be given to candidates with prior IB PYP experience.",
    "Preference will be given to candidates with international exposure.",
    // ...
  ]}
  email="careers@westerninternationalschool.com"
/>
{/* // Template for adding a new job card */}
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
  Leadership Position
 
</div>
<JobCard
  className="jobCardContainer"
  title="Leadership Position"
  jobType="Part time"
  startDate="June 2025"
  // curriculum="{[Curriculum: Job description here]}"
  qualifications={[
    // Add qualifications as strings
    "Assisting the Principal in developing and implementing the school's vision, mission, and strategic goals.",
    "Developing and improving the quality of education offered to the students in the school through the promotion of the highest possible standards of education, equality of opportunity, and an environment which is conducive to excellence in learning and teaching;",
    "Promoting the ethos of the school through participation in the construction and implementation of the school development plan and in relevant curriculum committees.",
    "Supporting the recruitment, selection, and professional development of teaching and support staff.",
    "Overseeing the curriculum development and implementation to ensure alignment with international standards.",
    "Promoting a positive school culture and maintaining a safe, inclusive, and respectful learning environment.",
    "Collaborating with teachers, parents, and other stakeholders to enhance student success and well-being.",
    "Leading and coordinating various school programmes and initiatives.",
    "Providing guidance and support to students, including disciplinary matters and academic performance.",
    "Assisting with budgeting and resource allocation.",
    "Representing the school in external events and building partnerships with the local and international community.",
    "A minimum of 10 years of experience in educational leadership roles, preferably in an international school setting.",
    "In-depth knowledge of international curricula and best educational practices.",
    "Strong interpersonal and communication skills, with the ability to engage and collaborate effectively.",
    "Demonstrated experience in strategic planning, staff development, and curriculum management.",
    "Proven ability to lead and inspire a team of educators.",
    "Sound understanding of child protection policies and procedures.",
    "Familiarity with educational technology and its integration into teaching and learning.",
    "Fluency in English (additional language proficiency is an advantage).",
    "Exceptional organisational and problem-solving skills.",
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
