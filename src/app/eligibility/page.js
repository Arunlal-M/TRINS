import AdmissionCard from "../components/AdmissionCard";
// import ConnectorLine from "./ConnectorLine";
// import "./page.css";

export default function Eligibility() {
  return (
    <div className="w-full mt-38 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/admission-process/admission-process.jpg"}
          text="Admission Process"
          href="/admission-process"
        />
        <AdmissionCard
          image="/image/admission-process/eligibility.jpg"
          text="Eligibility"
          active
        />
        <AdmissionCard
          image="/image/admission-process/admission-form.jpg"
          text="Admission Form"
          href="/admission-form"
        />
        <AdmissionCard
          image="/image/admission-process/admission-contact.jpg"
          text="Admission Contact"
          href="/admission-contact"
        />
      </div>

      {/* Eligibility Content */}
      <div className="w-full flex flex-row items-stretch mt-4">
        <div className="w-full bannerSectionContainer bg-[#075037] h-96">
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer h-96 overflow-hidden">
              <img
                src="/image/admission-process/eligibility2.jpg"
                alt="Eligibility Main"
                style={{ position: 'relative', top: '-130px' }}

              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                ELIGIBILITY
              </h1>
              <p className="text-white mt-2 subTitle">
                Requirements for admission
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Details */}
      <div className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#075037] mb-8">Eligibility Criteria</h2>
        <div className="grid gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Age Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>FS1: 3 years old by August 31st</li>
              <li>FS2: 4 years old by August 31st</li>
              <li>Year 1: 5 years old by August 31st</li>
              {/* Add more age requirements as needed */}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Documentation</h3>
            <p>Required documents for admission:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Copy of passport</li>
              <li>Copy of Emirates ID</li>
              <li>Recent passport-sized photographs</li>
              <li>Previous school reports (if applicable)</li>
              <li>Transfer certificate (for certain grades)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}