import AdmissionCard from "../components/AdmissionCard";
import ConnectorLine from "./ConnectorLine";
import "./page.css";

export default function AdmissionProcess() {
  return (
    <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/admission-process/admission-process.png"}
          text="Admission Process"
           active
        />
        <AdmissionCard
          image="/image/admission-process/eligibility.png"
          text="Eligibility"
          href="/eligibility"
        />
        <AdmissionCard
          image="/image/admission-process/admission-form.png"
          text="Admission Form"
          href="/admission-form"
        />
        <AdmissionCard
          image="/image/admission-process/admission-contact.png"
          text="Admission Contact"
          href="/admission-contact"
        />
      </div>
      {/* Title SubSection */}
      <div className="w-full flex flex-row items-stretch mt-8">
        <div className="w-full bannerSectionContainer bg-[#075037]">
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer">
              <img
                src="/image/admission-process/admissionProcessMain.png"
                alt="Admission Process Main"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2"
              >
                ADMISSION <br /> PROCESS
              </h1>
              <p className="text-white mt-2 subTitle"
              >
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
                src="/image/admission-process/step-1.png"
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
                Step One
              </h3>
              <p
                className="text-[#222] text-xl"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                To begin the application process, click here to Enrol Online and
                register.
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
                Step Two
              </h3>
              <p
                className="text-[#222] text-xl text-right"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                Once the online application is completed, an acknowledgement email
                will be sent to the email address you provided, containing a link
                The only documents required to move on to Step 3 are recent school
                reports (not needed for FS1, FS2), copies of Emirates ID's and/or
                copies of passport copies. Please upload any of the other
                documents that you have immediately to speed up the process.
              </p>
            </div>
            <div className="w-1/2 flex justify-start items-center relative overflow-visible stepImage">
              <img
                src="/image/admission-process/step-2.png"
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
                src="/image/admission-process/step-3.png"
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
                Step Three
              </h3>
              <p
                className="text-[#222] text-xl"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                You will be contacted by the school to arrange an interview and/or
                admissions assessment for your child.
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
                Step Four
              </h3>
              <p
                className="text-[#222] text-xl text-right"
                style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
              >
                If we are able to offer your child a place in our school, we will contact you to make the non-refundable registration fee payment that will secure your child's seat. GEMS Royal Dubai School welcomes all families to apply and we thank you for considering our school. To start your application, please
                <a href="https://www.royaldubaischool.com/en/Admissions/Enrol-Online"
                  target="_blank"
                  underline="none"
                > Click here </a> or contact the admissions office directly by emailing <a href="mailto:registrar_rds@gemsedu.com"> registrar_rds@gemsedu.com </a>
              </p>
            </div>
            <div className="w-1/2 flex justify-start items-center relative stepImage">
              <img
                src="/image/admission-process/step-4.png"
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
        <div className="flex flex-col items-center w-full mb-16 mt-32 bottomButtonContainer">
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
