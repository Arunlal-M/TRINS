import AdmissionCard from "../components/AdmissionCard";
// import "./page.css";

export default function AdmissionContact() {
  return (
    <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/admission-process/admission-process.webp"}
          text="Admission Process"
          href="/admission-process"
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
          active
        />
      </div>
      
      {/* Admission Contact Content */}
      <div className="w-full flex flex-row items-stretch mt-8">
        <div className="w-full bannerSectionContainer bg-[#075037]">
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer">
              <img
                src="/image/admission-process/admission-contact2.webp"
                alt="Admission Contact Main"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                ADMISSION CONTACT
              </h1>
              <p className="text-white mt-2 subTitle">
                Get in touch with us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#075037] mb-6">Contact Details</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-4 text-xl">📞</span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>9961336565 / 9847416464</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-4 text-xl">✉️</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>admissions@trins.org </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-4 text-xl">🏫</span>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Trivandrum International School,
<br />Edackode P O, Korani, Trivandrum-695 104,<br />Kerala, INDIA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#075037] mb-6">Office Hours</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Sunday - Thursday</h3>
                <p>7:30 AM - 4:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold">Friday - Saturday</h3>
                <p>Closed</p>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold">Admission Inquiries</h3>
                <p>We recommend scheduling an appointment for personalized attention.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}