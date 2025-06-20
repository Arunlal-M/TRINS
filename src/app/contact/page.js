import "./Contact.css";
import Image from "next/image";

export default function Contact() {
  return (
   <div
    className="mt-11 w-full flex flex-col items-center justify-center relative mainContainer"
    style={{ minHeight: 320 }}
>
    {/* Cover Section */}
    <div
        style={{
            position: "relative",
            width: "100%",
            height: 300,
            margin: "0 auto",
            overflow: "hidden",
        }}
    >
        <Image
          src="/image/contact/cover.jpg"
          alt="Contact Cover"
            fill
            style={{
                objectFit: "cover",
                objectPosition: "center",
                backgroundColor: "#074B35",
            }}
            priority
        />
        <div
            className="absolute inset-0 w-full h-full z-10"
            style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0.5) 100%)"
            }}
        />
        <h1
            style={{
                fontFamily: "Gideon Roman",
                fontWeight: 400,
                fontSize: "clamp(32px, 8vw, 120px)",
                lineHeight: "1",
                letterSpacing: "clamp(2px, 2vw, 4px)",
                textTransform: "uppercase",
                color: "#FFFFFF",
                position: "absolute",
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                textShadow: "0 4px 32px rgba(0,0,0,0.18)",
                inset: 0,
                padding: "0 16px",
                wordBreak: "break-word",
                opacity: 0.7,
            }}
        >
          CONTACT
        </h1>
      </div>

      {/* Map and Address Section - Made responsive */}
      <div className="w-full flex flex-col items-center py-8 md:py-12 bg-white">
        <iframe
          className="p-5 mapContainer w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] md:w-4/5 lg:w-1/2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.0913877454773!2d76.83861901504574!3d8.656740632880148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c1ce092f96d5%3A0xe1e7f056442c2ca1!2sTrivandrum%20International%20School!5e0!3m2!1sen!2sin!4v1747817837129!5m2!1sen!2sin"
        ></iframe>

        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start mt-6 md:mt-8 px-4 gap-4 md:gap-0">
          <div>
            <div className="contact-info-text"
              style={{
                fontFamily: 'Gideon Roman, serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '1.8',
                letterSpacing: 0,
                textTransform: 'uppercase',
              }}
            >
              TRIVANDRUM INTERNATIONAL SCHOOL
            </div>
            <div className="contact-info-text"
              style={{
                fontFamily: 'Gideon Roman, serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '1.8',
                letterSpacing: 0,
                textTransform: 'uppercase',
              }}
            >
              Edackode P O, Korani, Trivandrum-695 104,<br />
              Kerala, INDIA
            </div>
          </div>
          <div className="contact-info-text"
            style={{
              fontFamily: 'Gideon Roman, serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '1.8',
              letterSpacing: 0,
              textTransform: 'uppercase',
              textAlign: 'right',
            }}
          >
            <span style={{ fontWeight: 400 }}>Mobile No :</span> +919947066646
          </div>
        </div>
      </div>

      {/* Email Section - Made responsive */}
      <div className="w-full bg-[#F8D891] flex flex-row justify-center py-8 md:py-12">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4">
          <div className="listContainer contact-email-text"
            style={{
              fontFamily: 'Gideon Roman, serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.8',
              letterSpacing: 0
            }}
          >
            FOR ALL QUERIES RELATED TO ADMISSION<br />
            <b>WRITE TO: ADMISSIONS@TRINS.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO CAREERS<br />
            <b>WRITE TO: CAREERS@TRINS.ORG</b><br /><br />
            TO CONTACT PRINCIPAL<br />
            <b>WRITE TO: PRINCIPAL@TRINS.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO JUNIOR SCHOOL<br />
            <b>WRITE TO: JS@TRINS.ORG</b>
          </div>
          <div className="listContainer contact-email-text"
            style={{
              fontFamily: 'Gideon Roman, serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.8',
              letterSpacing: 0
            }}
          >
            FOR ALL QUERIES RELATED TO MIDDLE SCHOOL,<br />
            <b>WRITE TO: MS@TRINS.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO HIGH SCHOOL,<br />
            <b>WRITE TO: HS@TRINS.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO SENIOR SECONDARY SCHOOL,<br />
            <b>WRITE TO: SS@TRINS.ORG</b><br /><br />
            FOR ALL GENERAL QUERIES<br />
            <b>WRITE TO: TIS@TRINS.ORG</b>
          </div>
        </div>
      </div>
    </div>
  );
}