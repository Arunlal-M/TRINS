import "./Contact.css";
export default function Contact() {
  return (
    <div className="mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/contact/cover.webp"
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
        <iframe className="mapContainer w-1/2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.0913877454773!2d76.83861901504574!3d8.656740632880148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c1ce092f96d5%3A0xe1e7f056442c2ca1!2sTrivandrum%20International%20School!5e0!3m2!1sen!2sin!4v1747817837129!5m2!1sen!2sin" style={{ height: "450px" }}></iframe>
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
              TRINS INTERNATIONAL SCHOOL
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
              Edackode P O, Korani, Trivandrum-695 104,
Kerala, INDIA
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
            <span style={{ fontWeight: 400 }}>Mobile No :</span> +919947066646
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F8D891] flex flex-row justify-center py-12">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 px-4">
          <div className="listContainer" style={{ fontFamily: 'Gideon Roman, serif', fontWeight: 400, fontSize: '18px', lineHeight: '32px', letterSpacing: 0 }}>
            FOR ALL QUERIES RELATED TO ADMISSION<br />
            <b>WRITE TO: ADMISSIONS@TRINS.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO CAREERS<br />
            <b>WRITE TO: CAREERS@TRINS.ORG</b><br /><br />
            TO CONTACT PRINCIPAL<br />
            <b>WRITE TO: PRINCIPAL@TRINS.ORG</b><br /><br />
            FOR ALL QUERIES RELATED TO JUNIOR SCHOOL<br />
            <b>WRITE TO: JS@TRINS.ORG</b>
          </div>
          <div className="listContainer" style={{ fontFamily: 'Gideon Roman, serif', fontWeight: 400, fontSize: '18px', lineHeight: '32px', letterSpacing: 0 }}>
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
