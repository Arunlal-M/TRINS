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
                src="/image/admission-process/Bus Form.webp"
                alt="Transport Form Main"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                TRANSPORT <br /> FORM
              </h1>
              <p className="text-white mt-2 subTitle">
                School Transportation Request
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 admissionContainer">
        <a
          href="/pdf/forms/transport-form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-500 transition"
          style={{ textDecoration: "none" }}
        >
          <img
            src="/image/download.svg"
            alt="Download"
            style={{ width: 24, height: 24, transform: "scale(0.85)" }}
          />
          Download Transport Form
        </a>
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

      {/* Transport Form Section */}
      <div className="w-full bg-[#FBE9C4] rounded-4xl mt-12 p-10 shadow-md relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Admission No:
            </label>
            <input
              type="text"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
              placeholder="TIS /   / 20"
            />
          </div>
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Academic Year:
            </label>
            <input
              type="text"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              First Name:
            </label>
            <input
              type="text"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Middle Name:
            </label>
            <input
              type="text"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Last Name:
            </label>
            <input
              type="text"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
            Grade:
          </label>
          <select className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300">
            <option>Select Grade</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1}>{i + 1}th</option>
            ))}
          </select>
        </div>

        <div className="mt-8">
          <p className="mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            I/We hereby request <strong>Trivandrum International School</strong> to provide daily transport to my previously mentioned ward to attend the school. I/We have apprised my/our self of the current transport routes run by the school. Nearest pick up / drop, point preferred by me/ us is:
          </p>

          <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
            Land Mark:
          </label>
          <input
            type="text"
            className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
          />
        </div>

        <div className="mt-8">
          <p className="mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            In case, the school transport did not cover this point or if the school transport ceases to ply to this point, I/ we will arrange to pick up/drop my/our son/ward at the nearest stop advised by the school. I/ we undertake that my/our child/ward shall abide to and follow all the Rules, Regulations, Do's and Don'ts as prescribed and may be prescribed by the school from time to time. I/ We understand that all reasonable safety precautions are followed by the school. I/ We do release, absolve, indemnify, and hold harmless <strong>Trivandrum International School</strong> their officers, employees, directors their agents, representatives, or assigns. (I/ We) hereby waive all claims, liabilities, and/ or suits against the <strong>Trivandrum International School</strong> officers, employees, directors, their agents, representatives, or assigns, for any injury to(my/ our) (child/ward) or any loss due to the use of such transport.
          </p>

          <p className="mt-4 mb-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            I/ We agree to pay the school the Transport Fee prescribed by the school and I understand that this is an annual charge.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Place:
            </label>
            <input
              type="text"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
              Date:
            </label>
            <input
              type="date"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="block mb-2" style={{ fontFamily: "Gideon Roman, serif" }}>
            Parent's Signature:
          </label>
          <div className="w-full h-24 border-b-2 border-black mb-2"></div>

          <label className="block mb-2 mt-4" style={{ fontFamily: "Gideon Roman, serif" }}>
            Name in Capitals:
          </label>
          <input
            type="text"
            className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300"
          />
        </div>

        <div className="mt-12 text-center">
          <p style={{ fontFamily: "Gideon Roman, serif" }}>
            <strong>Trivandrum International School</strong><br />
            Edackode, Korani P.O, Trivandrum- 695 104, Kerala, INDIA<br />
            📞 +91 471 2619510 📞 +91471 2619051<br />
            📗 tis@trins.org 💡 www.trins.org
          </p>
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
          Submit Transport Form
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