import AdmissionCard from "../components/AdmissionCard";

export default function AdmissionForm() {
  return (
    <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/admission-process/admission-process.jpg"}
          text="Admission Process"
          href="/admission-process"
        />
        <AdmissionCard
          image="/image/admission-process/eligibility.jpg"
          text="Eligibility"
          href="/eligibility"
        />
        <AdmissionCard
          image="/image/admission-process/admission-form.jpg"
          text="Admission Form"
          active
        />
        <AdmissionCard
          image="/image/admission-process/admission-contact.jpg"
          text="Admission Contact"
          href="/admission-contact"
        />
      </div>
      
      {/* Admission Form Content */}
      <div className="w-full flex flex-row items-stretch mt-8">
        <div className="w-full bannerSectionContainer bg-[#075037]">
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer">
              <img
                src="/image/admission-process/admission-form2.jpg"
                alt="Admission Form Main"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                ADMISSION FORM
              </h1>
              <p className="text-white mt-2 subTitle">
                Start your application
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-4xl mx-auto my-16 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#075037] mb-6 ">Online Admission Form</h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25 mt-8">
          {/* Admission Form Card */}
          <AdmissionCard
            image="/image/admission-process/Admission3.jpg"
            text="Admission Form"
            href="/application-form"
            active
          />
          
          {/* Transport Form Card */}
          <AdmissionCard
            image="/image/admission-process/Bus Form.jpg"
            text="Transport Form"
            href="/admission-form/transport-form"
          />
          
          {/* Route Form Card */}
          <AdmissionCard
            image="/image/admission-process/rout file.jpg"
            text="Route File"
            href="/admission-form/route-pdf"
          />
          
          {/* Health Form Card */}
          <AdmissionCard
            image="/image/admission-process/Healthform.jpg"
            text="Health Form"
            href="/admission-form/health-form"
          />
          
          {/* Boarders Form Card */}
          <AdmissionCard
            image="/image/admission-process/Health.jpg"
            text="Health Boarders"
            href="/admission-form/health-boarders"
          />
          
        </div>
      </div>
    </div>
  );
}