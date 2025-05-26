"use client";
import React from "react";
import "../../application-form/ApplicationForm.css";
import AdmissionCard from "../../components/AdmissionCard";

export default function ApplicationForm() {
  const handlePrint = () => {
    window.print();
  };
  return (

    <div className="w-full mt-64 flex flex-col items-center justify-center relative mainContainer">
      <div className="w-full max-w-[1400px] flex flex-row items-stretch justify-center gap-8 mt-16 mb-8 px-4 admissionContainer">
        <AdmissionCard
          image={"/image/admission-process/admission-process.jpg"}
          text="Admission Process"
          href="/admission-process"
        />
        <AdmissionCard
          image="/image/admission-process/eligibility2.jpg"
          text="Eligibility"
          href="/eligibility"
        />
        <AdmissionCard
          image="/image/admission-process/admission-form2.jpg"
          text="Admission Form"
          href="/admission-form"

        />
        <AdmissionCard
          image="/image/admission-process/admission-contact2.jpg"
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
                src="/image/admission-process/rout file.jpg"
                alt="Transport Routes"
              />
            </div>
            <div className="contentContainer">
              <h1 className="text-white leading-title font-normal mb-2">
                TRANSPORT <br /> ROUTES
              </h1>
              <p className="text-white mt-2 subTitle">
                School bus route information
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

      {/* Routes Content Section */}
      <div className="w-full bg-[#FBE9C4] rounded-4xl mt-12 p-10 shadow-md relative print-content  print-only">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "Gideon Roman, serif" }}>
            School Transport Routes
          </h2>

          <div className="space-y-6" style={{ fontFamily: "Gideon Roman, serif" }}>
            <div>
              <h3 className="text-xl font-semibold mb-2">Route-1:</h3>
              <p>Vellayambalam → Jawhar Nagar → Golflinks → Kowdiar → Kurvankonam Jn → Marapallam → Pattom Psc → Chalakuzhy Rd → Medical College → Ulloor Jn → Sreekariyam → Chakalamukku → Chempazthany → Chenkootukonam → kattiyakonam → Pothencode JN → Mangalapuram → School.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-2:</h3>
              <p>Vazhylla → Peerorkada → Narmada → Kowdiar Jn → Kurvankonam Jn → Seasons Apt → Charchira Rd → Plamoodu Jn → Marapallam Jn → TKD Rd → Muttada → Paruthippara → Kesvadasapuram → Ulloor Jn → Pongmoodu Jn → Chavadimukku → Panagappara → Kazhakootam → Vetturoad → Kaniyapuram → School.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-3:</h3>
              <p>Vellayambalam → sasthamangalam → papinmoodu Rd → Amablamukku Jn → Ambalanagar → Kurvankonam Jn → Pattom → Kesvadasapuram → Ulloor Jn → Akkulam Rd → Sreekariyam Jn → Chavadimukku → Kariyavattom → Kazhakootam Jn → Vetturoad → Kaniyapuram → School.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-4:</h3>
              <p>Leela Hotel → Kovalam Jn → Thiruvallam → Kamaleswaram → GK Junction → Enjakkal Jn → Chakkai Jn → Opp Lord's Hospital → Technopark → Kazhakootam Jn → Vetturoad → School</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-5:</h3>
              <p>Thycaud → DPI Jn → Vzxthucaud → Kurvankonam Jn → Pattom → Kesvadaspuram → Pongmoodu Jn → Chavdimukku → Trivandrum Engg College → Kulathur Jn → Arasamoodu Jn → Technopark → Kazhakootam Jn → Pallipuram → School.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-6:</h3>
              <p>Pedaram → Thachaottukavu → Peayad → Elipodu → Vettamuuku → Maruthankuzhi → Kanjirampara → Vattiyoorkavu → Melethumele → Peerorkada → Kudappanakumru → Ambalamuuku → Vayilakada → Muttada → Paruthippara → Kesvadasapuram → Ulloor → Kochulloor → Pongmoodu Jn → Sreekariyam Jn → Chavadimukku Jn → Kazhakootam Jn → School.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-7:</h3>
              <p>Karamana → PRS Hospital → Killipalam → Manacaud SKP Timbers → Manacaud Jn → Attukal Shopping Complex → Ramachandran Textiles → SP Fort Hospital → West Fort → Drainage Rd → Pettah (Керсо) → Kannanmoola Bridge → Avattiom Rd → Kumarapuram → Medical College → Ulloor → Pongmoodu → Chavadimukku → Panagappara → Kariyavattom → Kazhakootam Jn → School</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-8:</h3>
              <p>GPO → PRS Court → Chettikulangara Temple → Vanchiyoor → Pattoor Jn → Thampurammukku → PMG Law College → Anadyil Hospital → Gowersiapattom → Cosmopolitan Hospital → GG Hospital → Kumarapuram → KIMS Hospital Rd → Venpalavattom → Attikuzhy → Kazhakootam → Kaniyapuram → School.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-9:</h3>
              <p>Pallimukku → Pangode Military Qrts → Vijayamohini Mills → Mudvammughal → Poojapura → Jagathy (Milineum apts) → Edpazhanji (CMS Nagar) → Cotton Hill Girls high School → Vazthucaud Forest office → Musem → Nandavanam Police Camp → PMG → Plamoodu → Pattom → School</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-10:</h3>
              <p>Asramam → Polayathadu → Madanada → Pallimukku → Mavaram → Kottiyam → Chathanoor → Karamcode → Kalluvathualkkal → Paripally → Mukkada → Kallammbalam → Manabur → Chatham → Alamcode → Attingal → school</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-11:</h3>
              <p>Vazthucaud (Women's college), Vazthucad Forest office, Althara, Nirmala Bhavan School, Kurvankonam, Marapalam, Pattom, Kesvadasapuram, Paruthippara, Nalanchirra, Mannanthala, keraladhityapuram, powdikonam, Nandoorkonam, Mangalapuram, School.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Route-12:</h3>
              <p>SFS (Near akkulam bridge), Kazhakootam Jn, Mangalapuram, Andoorkonam, Manjumala (near AJ college), School.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Innova Towards Chiryankeezhu</h3>
              <p>Korani → Nalumukku → Azhaoor → Kadakam → Sarakkara Devi Temple → Kadakkaoor.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Innova2 Toward Kazhakootam</h3>
              <p>Veeturoad → Chittamukku → Aswathy Gardens → Aswathy Park → Kazhakootam</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-8 mt-16 mb-32">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-12 py-5 rounded-full shadow-md text-white text-xl font-semibold"
          style={{
            background: "#085038",
            color: "#FFFFFF",
            fontFamily: "Gideon Roman, serif",
            fontWeight: 700,
            boxShadow: "0 4px 16px 0 rgba(224, 90, 71, 0.10)",
          }}
        >
          Print/Save as PDF
          <span style={{ display: "inline-block", marginLeft: 8 }}>
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 14h-4v8h4v-8zM6 14h4v8H6v-8z"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Print-specific styles */}
      <style jsx global>
        {`
          @media print {
            body * {
              visibility: hidden !important;
            }
            .print-only, .print-only * {
              visibility: visible !important;
            }
            .print-only {
              position: absolute !important;
              left: 0 !important;
              top: 0 !important;
              width: 100vw !important;
              margin: 0 !important;
              padding: 0 !important;
              background: white !important;
              color: black !important;
              box-shadow: none !important;
              border-radius: 0 !important;
            }
          }
        `}
      </style>
    </div>
  );
}