import "./ApplicationForm.css"

export default function ApplicationForm() {
  return (
    <div className="mt-64 w-4/5 mx-auto mainContainer">
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
        Application Form For Admission
      </h1>
      <p
        className="text-left mt-4 w-3/4"
        style={{
          fontFamily: "Gideon Roman, serif",
          fontWeight: 400,
          fontSize: "22.64px",
          lineHeight: "40.25px",
          letterSpacing: 0,
          color: "#767676",
          width: "65%"
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu dolorol
        egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
      </p>
      {/* Admission Section */}
      <div className="w-full flex flex-col md:flex-row items-stretch bg-[#FBE9C4] rounded-4xl mt-12 p-10 gap-8 shadow-md relative">
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className="text-left mb-4"
            style={{
              fontFamily: "Gideon Roman, serif",
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "36px",
              color: "#074B35",
            }}
          >
            Admission At Trins School
          </h2>
          <div className="flex flex-col md:flex-row gap-8 m:w-2/4 items-center marginAdjust" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", margin: "auto 40% 0 auto"}}>
            <div>
              <label
                htmlFor="branch"
                className="block mb-2 text-left"
                style={{
                  fontFamily: "Gideon Roman, serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#767676",
                }}
              >
                Please Select Branch
              </label>
              <select
                id="branch"
                className="w-64 md:w-80 rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
                style={{ fontFamily: "Gideon Roman, serif" }}
              >
                <option value="">XPHP</option>
                <option value="XPHP-1">XPHP-1</option>
                <option value="XPHP-2">XPHP-2</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="regNumber"
                className="block mb-2 text-left"
                style={{
                  fontFamily: "Gideon Roman, serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#767676",
                }}
              >
                Registration Number*
              </label>
              <input
                id="regNumber"
                type="text"
                placeholder="--------"
                className="w-64 md:w-80 rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
                style={{ fontFamily: "Gideon Roman, serif" }}
              />
            </div>
            <div className="flex flex-col items-center justify-center uploadSectionContainer">

              {/* Photo Upload Section */}

              <label
                htmlFor="photo-upload"
                className="absolute right-0 -top-16 z-10 flex flex-col items-center mobRelative"
                style={{
                  width: 208,
                  height: 298,
                  borderTopLeftRadius: 11,
                  borderTopRightRadius: 11,
                  borderBottomRightRadius: 11,
                  borderBottomLeftRadius: 82,
                  borderWidth: 3,
                  borderStyle: "solid",
                  borderColor: "#FBE9C4",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  top: -42,
                  right: "20%"
                }}
              >
                <span
                  className="block mb-2 text-center absolute -top-8 left-1/2 -translate-x-1/2 z-20 bg-white px-2"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    width: "192px",
                    fontSize: "18px",
                    color: "#767676",
                  }}
                >
                  Photo of the Student
                </span>
                <span
                  className="text-[#E05A47] text-center mb-2"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    fontWeight: 400,
                    fontSize: "28px",
                  }}
                >
                  Upload
                  <br />
                  PDF/Doc
                </span>
                <input
                  id="photo-upload"
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Student Info Section */}
      <div className="w-full bg-[#FBE9C4] rounded-4xl mt-12 p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="middleName"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Middle Name
            </label>
            <input
              id="middleName"
              type="text"
              placeholder="Middle Name"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Gender
            </label>
            <select
              id="gender"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="dob"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="admissionClass"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Admission To Class
            </label>
            <select
              id="admissionClass"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
        </div>
      </div>
      {/* Parent/Guardian Section */}
      <div className="w-full bg-[#FBE9C4] rounded-4xl mt-12 p-10 shadow-md">
        <h3
          className="text-left mb-4"
          style={{
            fontFamily: "Gideon Roman, serif",
            fontWeight: 400,
            fontSize: "20px",
            color: "#074B35",
          }}
        >
          *Parent/Guardian
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <label
              htmlFor="relation"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Choose Relation
            </label>
            <select
              id="relation"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            >
              <option value="">Select Relation</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Guardian">Guardian</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="parentFirstName"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Father First Name
            </label>
            <input
              id="parentFirstName"
              type="text"
              placeholder="First Name"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="parentLastName"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Father Last Name
            </label>
            <input
              id="parentLastName"
              type="text"
              placeholder="Last Name"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="parentEmail"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Email Address
            </label>
            <input
              id="parentEmail"
              type="email"
              placeholder="Example@gmail.com"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="parentPhone"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Phone Number
            </label>
            <input
              id="parentPhone"
              type="tel"
              placeholder="+91 123 456 7890"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="parentQualification"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Education Qualification
            </label>
            <select
              id="parentQualification"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            >
              <option value="">Select Qualification</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="B.Sc">B.Sc</option>
              <option value="M.Sc">M.Sc</option>
              <option value="B.A">B.A</option>
              <option value="M.A">M.A</option>
              <option value="PhD">PhD</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="parentAddress"
            className="block mb-2 text-left"
            style={{
              fontFamily: "Gideon Roman, serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#767676",
            }}
          >
            Residential Address of the Parent/Guardian
          </label>
          <textarea
            id="parentAddress"
            rows={3}
            placeholder="Please type your address here..."
            className="w-full rounded-4xl px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg resize-none"
            style={{ fontFamily: "Gideon Roman, serif" }}
          />
        </div>
      </div>
      {/* Additional Parent/Guardian Section (Optional) */}
      <div className="w-full bg-[#FBE9C4] rounded-4xl mt-12 p-10 shadow-md">
        <h3
          className="text-left mb-4"
          style={{
            fontFamily: "Gideon Roman, serif",
            fontWeight: 400,
            fontSize: "20px",
            color: "#000000",
          }}
        >
          Parent/Guardian
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <label
              htmlFor="relation2"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Choose Relation
            </label>
            <select
              id="relation2"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            >
              <option value="">Select Relation</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Guardian">Guardian</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="parentFirstName2"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              First Name
            </label>
            <input
              id="parentFirstName2"
              type="text"
              placeholder="First Name"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="parentLastName2"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Last Name
            </label>
            <input
              id="parentLastName2"
              type="text"
              placeholder="Last Name"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="parentEmail2"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Email Address
            </label>
            <input
              id="parentEmail2"
              type="email"
              placeholder="Example@gmail.com"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="parentPhone2"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Phone Number
            </label>
            <input
              id="parentPhone2"
              type="tel"
              placeholder="+91 123 456 7890"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            />
          </div>
          <div>
            <label
              htmlFor="parentQualification2"
              className="block mb-2 text-left"
              style={{
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#767676",
              }}
            >
              Education Qualification
            </label>
            <select
              id="parentQualification2"
              className="w-full rounded-4xl px-6 py-4 border h-16 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg"
              style={{ fontFamily: "Gideon Roman, serif" }}
            >
              <option value="">Select Qualification</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="B.Sc">B.Sc</option>
              <option value="M.Sc">M.Sc</option>
              <option value="B.A">B.A</option>
              <option value="M.A">M.A</option>
              <option value="PhD">PhD</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="parentAddress2"
            className="block mb-2 text-left"
            style={{
              fontFamily: "Gideon Roman, serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#767676",
            }}
          >
            Residential Address of the Parent/Guardian
          </label>
          <textarea
            id="parentAddress2"
            rows={3}
            placeholder="Please type your address here..."
            className="w-full rounded-4xl px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E3C274] bg-white text-lg resize-none"
            style={{ fontFamily: "Gideon Roman, serif" }}
          />
        </div>
      </div>
      {/* Submit Button Section */}
      <div className="flex justify-start mt-16 mb-8">
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
          Apply Now
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
      <p
        className="mt-2 mb-16 text-left w-3/4 text-[#767676] text-base"
        style={{
          fontFamily: "Gideon Roman, serif",
          fontWeight: 400,
          fontSize: "22.64px",
          lineHeight: "40.25px",
          letterSpacing: 0,
        }}
      >
        *Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
        dolorol egestas morbi sem vulputate etiam facilisis pellentesque ut
        quis.
      </p>
    </div>
  );
}
