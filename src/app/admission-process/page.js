import AdmissionCard from "../components/AdmissionCard";
import ConnectorLine from "./ConnectorLine";
import "./page.css";

export default function AdmissionProcess() {
  return (
    <div className="w-full mt-38 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/admission-process/admission-process.webp"}
          text="Admission Process"
          active
        />
        <AdmissionCard
          image="/image/admission-process/eligibility.webp"
          text="Eligibility"
          href="/eligibility"
        />
        <AdmissionCard
          image="/image/admission-process/admission-form.webp"
          text="Admission Form"
          href="/admission-form"
        />
        <AdmissionCard
          image="/image/admission-process/admission-contact.webp"
          text="Admission Contact"
          href="/admission-contact"
        />
      </div>
      {/* Title SubSection */}
      <div className="w-full flex flex-row items-stretch mt-4">
        <div className="w-full bannerSectionContainer bg-[#075037] h-96"> {/* Reduced height */}
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer h-96 overflow-hidden"> {/* Adjust image height */}
              <img
                src="/image/admission-process/Copy of 13.webp"
                alt="Admission Process Main"
                style={{ position: 'relative', top: '-130px' }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                ADMISSION <br /> PROCESS
              </h1>
              <p className="text-white mt-2 subTitle">
                Begin your child's journey
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Section - Steps */}
      <div className="w-full flex flex-col items-center relative stepContainer">
        {/* Step One Section */}
        <div className="position-relative">
          <ConnectorLine />
          <div className="w-full max-w-6xl flex flex-row items-center justify-center mt-80 position-relative stepContentContainer">
            <div className="w-1/2 flex justify-end items-center relative overflow-visible stepImage">
              <img
                src="/image/admission-process/step-1.webp"
                alt="Step One"
                className="rounded-lg shadow-lg object-cover"
                style={{
                  width: "600px",
                  height: "auto",
                  position: "relative",
                  right: "50%",
                  transform: "translateX(50%)",
                }}
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start pl-8 stepContent">
              <h3
                className="text-[#075037] text-5xl font-normal mb-4"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Step 1: Inquiry & School Visit

              </h3>
              <p
                className="text-[#222] text-xl"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Connect with our Admissions Team to begin your journey with TRINS. We encourage families to visit the campus while school is in session to get a real sense of our environment. If you're unable to visit in person, we’re happy to arrange a virtual interaction for you and your child.

              </p>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <ConnectorLine />
          {/* Step Two Section */}
          <div className="w-full max-w-6xl flex flex-row items-center justify-center mt-80 position-relative stepContentContainer">
            <div className="w-1/2 flex flex-col justify-center items-end pr-8 stepContent">
              <h3
                className="text-[#075037] text-5xl font-normal mb-4 text-right"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Step 2: Submit Application & Documents

              </h3>
              <p
                className="text-[#222] text-xl text-right"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Complete the application form and submit the required documents:

                Past two years’ academic and co-curricular records.

                Copy of birth certificate or passport.

                Any other relevant documentation.

                Please ensure the application meets the age eligibility criteria.

              </p>
            </div>
            <div className="w-1/2 flex justify-start items-center relative overflow-visible stepImage">
              <img
                src="/image/admission-process/step-2.webp"
                alt="Step Two"
                className="rounded-lg shadow-lg object-cover"
                style={{
                  width: "600px",
                  height: "auto",
                  position: "relative",
                }}
              />
            </div>
          </div>
        </div>
        <div className="position-relative">
          <ConnectorLine />
          <div className="w-full max-w-6xl flex flex-row items-center justify-center mt-80 position-relative stepContentContainer">
            <div className="w-1/2 flex justify-end items-center relative stepImage">
              <img
                src="/image/admission-process/step-3.webp"
                alt="Step Three"
                className="rounded-lg shadow-lg object-cover"
                style={{ width: "600px", height: "auto", position: "relative" }}
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start pl-8 stepContent">
              <h3
                className="text-[#075037] text-5xl font-normal mb-4"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Step 3: Assessment & Interaction

              </h3>
              <p
                className="text-[#222] text-xl"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Your child will take a Proficiency Assessment and participate in a Personal Interview. The assessment includes English, Math, and Science (duration varies by grade). Early Years applicants will have a more informal interaction with the curriculum coordinator.

                Grade	Duration
                Grades 1 – 3	30 minutes
                Grades 4 – 5	45 – 60 minutes
                Grades 6 – 12	2 hours

              </p>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <ConnectorLine />
          <div className="w-full max-w-6xl flex flex-row items-center justify-center mt-80 position-relative stepContentContainer">
            <div className="w-1/2 flex flex-col justify-center items-end pr-8 stepContent">
              <h3
                className="text-[#075037] text-5xl font-normal mb-4 text-right"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Step 4: Review & Admission Decision

              </h3>
              <p
                className="text-[#222] text-xl text-right"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Our academic team will review the assessment results, interview, and submitted records. Based on the outcome, admission decisions will be communicated by the Coordinator and Principal. Upon confirmation, further steps will be shared for enrollment.
                {/* <a href="https://www.royaldubaischool.com/en/Admissions/Enrol-Online"
                  target="_blank"
                  underline="none"
                > Click here </a> or contact the admissions office directly by emailing <a href="mailto:registrar_rds@gemsedu.com"> registrar_rds@gemsedu.com </a> */}
              </p>
            </div>
            <div className="w-1/2 flex justify-start items-center relative stepImage">
              <img
                src="/image/admission-process/step-4.webp"
                alt="Step Four"
                className="rounded-lg shadow-lg object-cover"
                style={{
                  width: "600px",
                  height: "auto",
                  position: "relative",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-15 mt-32 bottomButtonContainer">
          <a
            href="/application-form"
            className="bg-[#075037] text-white text-2xl px-12 py-4 rounded-full shadow-lg hover:bg-[#0a6a4a] transition-colors duration-200 flex items-center gap-2"
            style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400, zindex: 9, position: "relative" }}
          >
            Apply Now{" "}
            <span style={{ fontSize: 24, marginLeft: 8 }}>&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
