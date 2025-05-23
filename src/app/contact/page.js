import "./Contact.css";
export default function Contact() {
  return (
    <div className="mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/contact/cover.png"
          alt="Contact Cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src="/image/contact/coverOverGradient.png"
          alt="Contact Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <h1
          className="relative z-20 text-white text-7xl font-normal"
          style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 2 }}
        >
          CONTACT
        </h1>
      </div>
      <div className="w-full flex flex-col items-center py-12 bg-white">
        <iframe className="mapContainer w-1/2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4438465040907!2d76.8412774!3d8.6492673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c0337358f711%3A0x2ec0e4e2188421be!2sRashaj%20Royale%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1747510286593!5m2!1sen!2sin" style={{ height: "450px" }}></iframe>
        <div className="w-full max-w-5xl flex flex-row justify-between items-start mt-8 px-4">
          <div>
            <div
              style={{
                fontFamily: 'Gideon Roman, serif',
                fontWeight: 400,
                fontSize: '25.66px',
                lineHeight: '46.64px',
                letterSpacing: 0,
                textTransform: 'uppercase',
              }}
            >
              WESTERN INTERNATIONAL SCHOOL
            </div>
            <div
              style={{
                fontFamily: 'Gideon Roman, serif',
                fontWeight: 400,
                fontSize: '25.66px',
                lineHeight: '46.64px',
                letterSpacing: 0,
                textTransform: 'uppercase',
              }}
            >
              Kollam, Kerala, India
            </div>
          </div>
          <div
            style={{
              fontFamily: 'Gideon Roman, serif',
              fontWeight: 400,
              fontSize: '25.66px',
              lineHeight: '46.64px',
              letterSpacing: 0,
              textTransform: 'uppercase',
              textAlign: 'right',
            }}
          >
            <span style={{ fontWeight: 400 }}>Mobile No :</span> +91 9495154836
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F8D891] flex flex-row justify-center py-12">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 px-4">
          <div className="listContainer" style={{ fontFamily: 'Gideon Roman, serif', fontWeight: 400, fontSize: '18px', lineHeight: '32px', letterSpacing: 0 }}>
            FOR ALL QUERIES RELATED TO ADMISSION<br />
            <b>WRITE TO: ADMISSIONS@WESTERN.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO CAREERS<br />
            <b>WRITE TO: CAREERS@WESTERN.ORG</b><br /><br />
            TO CONTACT PRINCIPAL<br />
            <b>WRITE TO: PRINCIPAL@WESTERN.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO JUNIOR SCHOOL<br />
            <b>WRITE TO: JS@WESTERN.ORG</b>
          </div>
          <div className="listContainer" style={{ fontFamily: 'Gideon Roman, serif', fontWeight: 400, fontSize: '18px', lineHeight: '32px', letterSpacing: 0 }}>
            FOR ALL QUERIES RELATED TO MIDDLE SCHOOL,<br />
            <b>WRITE TO: MS@WESTERN.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO HIGH SCHOOL,<br />
            <b>WRITE TO: HS@WESTERN.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO SENIOR SECONDARY SCHOOL,<br />
            <b>WRITE TO: SS@WESTERN.ORG</b><br /><br />
            FOR ALL GENERAL QUERIES<br />
            <b>WRITE TO: TIS@WESTERN.ORG</b>
          </div>
        </div>
      </div>
    </div>
  );
}
