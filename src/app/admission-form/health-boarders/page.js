import React from "react";
import "../../application-form/ApplicationForm.css";
import AdmissionCard from "../../components/AdmissionCard";

export default function ApplicationForm() {
  return (

    <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/admission-process/admission-process.webp"}
          text="Admission Process"
          href="/admission-process"
        />
        <AdmissionCard
          image="/image/admission-process/eligibility2.webp"
          text="Eligibility"
          href="/eligibility"
        />
        <AdmissionCard
          image="/image/admission-process/admission-form2.webp"
          text="Admission Form"
          href="/admission-form"

        />
        <AdmissionCard
          image="/image/admission-process/admission-contact2.webp"
          text="Admission Contact"
          href="/admission-contact"
        />
      </div>
           {/* Title Section */}
      <div className="w-full flex flex-row items-stretch mt-8">
        <div className="w-full bannerSectionContainer bg-[#075037]">
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer">
              <img
                src="/image/admission-process/Health.webp"
                alt="Health Form for Boarders"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                HEALTH FORM <br /> FOR BOARDERS
              </h1>
              <p className="text-white mt-2 subTitle">
                Medical information for residential students
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1
        className="text-left"
        style={{
          fontFamily: "Gideon Roman, serif",
          fontWeight: 400,
          fontSize: "52.83px",
          lineHeight: "67.93px",
          letterSpacing: 0,
          color: "#074B35",
        }}
      >
        <br />
        Trivandrum International School
      </h1>

      {/* Health Form Section */}
      <div className="w-full bg-[#FBE9C4] rounded-4xl mt-12 p-10 shadow-md relative">
        <div className="text-center mb-8">
          {/* <h2 className="text-2xl font-bold" style={{ fontFamily: "Gideon Roman, serif" }}>
            Trivandrum International School
          </h2> */}
          <div className="mt-4 italic" style={{ fontFamily: "Gideon Roman, serif" }}>
            [TO BE FILLED BY A PHYSICIAN]
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Gideon Roman, serif" }}>
            HEALTH FORM-3
          </h2>
          <div className="mt-4">
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Admission No: TIS / ______ / 20__
            </label>
            <input 
              type="text" 
              className="w-48 rounded-4xl px-6 py-4 border h-16 border-gray-300 text-center" 
              placeholder="TIS /   / 20__"
            />
          </div>
        </div>

        <div className="mb-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm italic" style={{ fontFamily: "Gideon Roman, serif" }}>
            Alternately, the parent can attach photocopies of the immunization record with dates duly signed by a physician
          </p>
        </div>

        {/* Immunization History Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            IMMUNIZATION HISTORY
          </h3>
          <p className="mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            All the children must have completed their childhood minimum vaccination requirements for their ages as per NATIONAL IMMUNIZATION SCHEDULE at the time of seeking admission to <strong>Trivandrum International School.</strong> Kindly indicate the date of Immunization of the child against each.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: "Gideon Roman, serif" }}>
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Immunization</th>
                  <th className="border p-2 text-left">Recommended age of Immunization</th>
                  <th className="border p-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { immunization: 'BCG & OPV dose', age: 'at birth', date: '' },
                  { immunization: '(For institutional deliveries)', age: 'at 6 weeks 3 months', date: '' },
                  { immunization: 'BCG (if not given at birth)', age: 'at 6 weeks', date: '' },
                  { immunization: 'DPT-1 & OPV-1', age: 'at 10 weeks', date: '' },
                  { immunization: 'Measles', age: 'at 9 months', date: '' },
                  { immunization: 'DPT-3 & OPV-3', age: 'at 16-24 months', date: '' },
                  { immunization: 'DT', age: 'at 5-6 months', date: '' },
                  { immunization: 'TT', age: 'at 10 & 16 years', date: '' },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="border p-2">{row.immunization}</td>
                    <td className="border p-2">{row.age}</td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        className="w-full rounded-4xl px-4 py-2 border border-gray-300" 
                        placeholder="DD/MM/YYYY"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Other Recommended Vaccinations Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            OTHER RECOMMENDED VACCINATIONS (Please furnish the dates)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ fontFamily: "Gideon Roman, serif" }}>
                <tbody>
                  {[
                    'Hepatitis B Vaccine',
                    'Hemophilus Influenzae (HIB) Vaccine',
                    'Varicella virus vaccine (Chicken Pox)'
                  ].map((vaccine, index) => (
                    <tr key={index}>
                      <td className="border p-2 w-1/2">{vaccine}</td>
                      <td className="border p-2">
                        <input 
                          type="text" 
                          className="w-full rounded-4xl px-4 py-2 border border-gray-300" 
                          placeholder="Date"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ fontFamily: "Gideon Roman, serif" }}>
                <tbody>
                  {[
                    'MMR',
                    'Hepatitis A Vaccine',
                    ''
                  ].map((vaccine, index) => (
                    <tr key={index}>
                      <td className="border p-2 w-1/2">{vaccine}</td>
                      <td className="border p-2">
                        <input 
                          type="text" 
                          className="w-full rounded-4xl px-4 py-2 border border-gray-300" 
                          placeholder="Date"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ fontFamily: "Gideon Roman, serif" }}>
                <tbody>
                  {[
                    'Typhoid Vaccine',
                    'Menningococcal vaccine',
                    ''
                  ].map((vaccine, index) => (
                    <tr key={index}>
                      <td className="border p-2 w-1/2">{vaccine}</td>
                      <td className="border p-2">
                        <input 
                          type="text" 
                          className="w-full rounded-4xl px-4 py-2 border border-gray-300" 
                          placeholder="Date"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ fontFamily: "Gideon Roman, serif" }}>
                <tbody>
                  {[
                    'Rabies Pneumococcal',
                    '',
                    ''
                  ].map((vaccine, index) => (
                    <tr key={index}>
                      <td className="border p-2 w-1/2">{vaccine}</td>
                      <td className="border p-2">
                        <input 
                          type="text" 
                          className="w-full rounded-4xl px-4 py-2 border border-gray-300" 
                          placeholder="Date"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Physician Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Name of Physician</label>
            <input 
              type="text" 
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" 
              placeholder="DR."
            />
          </div>
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Registration No.</label>
            <input 
              type="text" 
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" 
            />
          </div>
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Signature</label>
            <div className="w-full h-24 border-b-2 border-black"></div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Address</label>
          <textarea rows={2} className="w-full rounded-4xl px-6 py-4 border border-gray-300"></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-16">
          <button
            type="submit"
            className="flex items-center gap-2 px-12 py-5 rounded-full shadow-md text-white text-xl font-semibold"
            style={{
              background: "#085038",
              color: "#FFFFFF",
              fontFamily: "Gideon Roman, serif",
              fontWeight: 700,
              boxShadow: "0 4px 16px 0 rgba(224, 90, 71, 0.10)",
            }}
          >
            Submit Health Form
            <span style={{ display: "inline-block", marginLeft: 8 }}>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}