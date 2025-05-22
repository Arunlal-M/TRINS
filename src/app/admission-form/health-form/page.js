import React from "react";
import "../../application-form/ApplicationForm.css";
import AdmissionCard from "../../components/AdmissionCard";

export default function ApplicationForm() {
  return (

    <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/admission-process/admission-process.png"}
          text="Admission Process"
          href="/admission-process"
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
      {/* Title Section */}
      <div className="w-full flex flex-row items-stretch mt-8">
        <div className="w-full bannerSectionContainer bg-[#075037]">
          <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer">
              <img
                src="/image/admission-process/admissionProcessMain.png"
                alt="Health Form Main"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                HEALTH <br /> FORM
              </h1>
              <p className="text-white mt-2 subTitle">
                Student Health Information
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
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Gideon Roman, serif" }}>
            HEALTH FORM 1
          </h2>
          <div className="mt-4">
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Admission No: ______ TIS / ______ / 20__
            </label>
            <input 
              type="text" 
              className="w-48 rounded-4xl px-6 py-4 border h-16 border-gray-300 text-center" 
              placeholder="TIS /   / 20__"
            />
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            Personal Information of the Child seeking Admission:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Surname</label>
              <input type="text" className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>First Name</label>
              <input type="text" className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Middle name</label>
              <input type="text" className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Date of Birth</label>
              <input type="date" className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2 h-5 w-5" />
                  <span style={{ fontFamily: "Gideon Roman, serif" }}>Male</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2 h-5 w-5" />
                  <span style={{ fontFamily: "Gideon Roman, serif" }}>Female</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Blood group</label>
              <select className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300">
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            Emergency Contact No:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Preferred Doctor (if any)</label>
              <input type="text" className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Mobile No</label>
              <input type="tel" className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" />
            </div>
          </div>
          <div className="mt-6">
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Sibling(s) at TRINS (Name & Grade)</label>
            <textarea rows={2} className="w-full rounded-4xl px-6 py-4 border border-gray-300"></textarea>
          </div>
        </div>

        {/* Medication Permission Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            MEDICATION PERMISSION
          </h3>
          <p className="mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            I give my consent to the School Nurse to administer over the counter medication for the common ailments. I am conscious of the fact that medication rarely may produce unwanted side effects.
          </p>
          <div className="flex gap-8">
            <label className="flex items-center">
              <input type="radio" name="medicationPermission" className="mr-2 h-5 w-5" />
              <span style={{ fontFamily: "Gideon Roman, serif" }}>Yes</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="medicationPermission" className="mr-2 h-5 w-5" />
              <span style={{ fontFamily: "Gideon Roman, serif" }}>No</span>
            </label>
          </div>
        </div>

        {/* Emergency Permission Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            EMERGENCY PERMISSION
          </h3>
          <p className="mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            I give my consent for emergency measures to be taken in case of an emergency arising due to an accident/violent injury/medical or surgical emergency with the understanding that I (the father/ the mother/ the guardian of the student) shall be notified/informed as soon as possible. The School will accept no responsibility for any unforeseen incident that may occur due to the administration of medicine/treatment in both emergency situations, though necessary precautions are taken.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Signature of Parent</label>
              <div className="w-full h-24 border-b-2 border-black"></div>
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Date</label>
              <input type="date" className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300" />
            </div>
          </div>
        </div>

        {/* Health Form 2 Section */}
        <div className="text-center mb-8 mt-12">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Gideon Roman, serif" }}>
            HEALTH FORM 2
          </h2>
          <p className="mt-2" style={{ fontFamily: "Gideon Roman, serif" }}>
            [TO BE FILLED BY THE PARENT]
          </p>
          <div className="mt-4">
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Admission No: ______ TIS / ______ / 20__
            </label>
            <input 
              type="text" 
              className="w-48 rounded-4xl px-6 py-4 border h-16 border-gray-300 text-center" 
              placeholder="TIS /   / 20__"
            />
          </div>
        </div>

        {/* Past Ailments Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            Did your child have any of the following ailments in the past: (tick '✓' the appropriate)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              'Measles', 'Diabetes', 'Typhoid', 'Rubella (German measles)',
              'Malaria', 'Chickenpox', 'Mumps', 'Goiter/Thyroid disease',
              'Allergies', 'Jaundice', 'Eczema', 'Epilepsy/Seizures',
              'Tonsillitis', 'Meningitis', 'Poliomyelitis', 'Rheumatic Fever',
              'Asthma', 'Pleurisy', 'Heart Murmurs', 'Discharging ears',
              'Tuberculosis', 'Kidney Stones', 'High blood pressure', 'Bladder or kidney infection'
            ].map((ailment) => (
              <label key={ailment} className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5" />
                <span style={{ fontFamily: "Gideon Roman, serif" }}>{ailment}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Other Illness Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            OTHER SPECIFIC SYSTEMIC ILLNESS (if any): Please give details
          </h3>
          <textarea rows={4} className="w-full rounded-4xl px-6 py-4 border border-gray-300"></textarea>
        </div>

        {/* Note Section */}
        <div className="mb-8 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm italic" style={{ fontFamily: "Gideon Roman, serif" }}>
            <strong>NOTE:</strong> If a Child suffers from rheumatic heart disease/bronchial asthma/epilepsy/endocrine disorder/allergy to food, medicines etc., has illness which requires long term medication, please furnish details of the illness giving frequency, severity of disease etc., and a photocopy of the heath records and treatment being administered. This should help the School to understand his/her illness better and should help in better management of the child as and when demand. Any other relevant information:
          </p>
        </div>

        {/* Family History Section */}
        <div className="mb-8">
          <h3 className="text-xl mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            Please check if any relative (parent, siblings, grandparents) have had any of the conditions listed below:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              'Asthma', 'Obesity', 'Kidney disease', 'Heart disease',
              'High blood pressure', 'Bleeding Tendencies', 'Seizures/Epilepsy', 'Diabetes mellitus',
              'Tuberculosis', 'Cancer', 'Psychiatric illness'
            ].map((condition) => (
              <label key={condition} className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5" />
                <span style={{ fontFamily: "Gideon Roman, serif" }}>{condition}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Final Signature Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Signature of Parent</label>
            <div className="w-full h-24 border-b-2 border-black"></div>
          </div>
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>Date</label>
            <div className="flex gap-2">
              <input type="text" className="w-16 rounded-4xl px-4 py-4 border h-16 border-gray-300 text-center" placeholder="DD" />
              <span className="flex items-center">/</span>
              <input type="text" className="w-16 rounded-4xl px-4 py-4 border h-16 border-gray-300 text-center" placeholder="MM" />
              <span className="flex items-center">/</span>
              <input type="text" className="w-24 rounded-4xl px-4 py-4 border h-16 border-gray-300 text-center" placeholder="YYYY" />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-16 mb-32">
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
  );
}