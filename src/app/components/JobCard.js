// import "./Careers.css"

// export default function JobCard({ title, jobType, startDate, curriculum, qualifications, responsibilities, email }) {
//   return (
//     <div
//       className="w-full max-w-[1200px] bg-[#E4E4E4] p-8 text-[#222] shadow-md mx-auto jobCardContainer"
//       style={{
//         fontFamily: "Gideon Roman, serif",
//         borderRadius: "79px",
//         padding: "80px",
//         fontWeight: 400,
//         fontSize: "25px",
//         lineHeight: "41.71px",
//         letterSpacing: "1.04px",
//       }}
//     >
//       <div
//         className="mb-2"
//         style={{
//           fontFamily: "Gideon Roman, serif",
//           fontWeight: 400,
//           fontSize: "32.32px",
//           lineHeight: "53.92px",
//           letterSpacing: "1.35px",
//           color: "#000000",
//         }}
//       >
//         {title}
//       </div>
//       <div className="mb-1 ml-4">Job Type: {jobType}</div>
//       <div className="mb-4 ml-4">Start Date: {startDate}</div>
//       <div className="mb-4 ml-4">{curriculum}</div>
//       <div className="mb-2 ml-4">Minimum Qualifications & Requirements:</div>
//       <ul className="list-disc pl-6 mb-2 ml-10">
//         {qualifications.map((q, i) => (
//           <li key={i}>{q}</li>
//         ))}
//         {responsibilities && responsibilities.map((r, i) => (
//           <li key={i + qualifications.length}>{r}</li>
//         ))}
//       </ul>
//       <div className="flex justify-center mt-8">
//         <a
//           href={`mailto:${email}`}
//           className="px-10 py-4 bg-[#085038] text-white text-2xl rounded-3xl font-normal shadow hover:bg-[#0a6a4a] transition"
//           style={{ fontFamily: 'Gideon Roman, serif', letterSpacing: 1 }}
//         >
//           Apply Now
//         </a>
//       </div>
//     </div>
//   );
// }


import "./Careers.css"

export default function JobCard({ title, jobType, startDate, curriculum, qualifications, responsibilities, email }) {
  return (
    <div
      className="job-card"
      style={{
        fontFamily: "Gideon Roman, serif",
        borderRadius: "clamp(30px, 6vw, 79px)",
        padding: "clamp(30px, 5vw, 80px)",
        fontWeight: 400,
        fontSize: "clamp(16px, 1.8vw, 22px)",
        lineHeight: "1.6",
        letterSpacing: "0.5px",
      }}
    >
      <div
        className="job-title"
        style={{
          fontWeight: 400,
          fontSize: "clamp(22px, 2.5vw, 32px)",
          lineHeight: "1.4",
          letterSpacing: "1.1px",
          marginBottom: "clamp(15px, 1.5vw, 25px)",
        }}
      >
        {title}
      </div>
      
      <div className="job-detail" style={{ marginBottom: "clamp(8px, 0.8vw, 12px)" }}>
        <span className="detail-label">Job Type:</span> {jobType}
      </div>
      <div className="job-detail" style={{ marginBottom: "clamp(20px, 2vw, 30px)" }}>
        <span className="detail-label">Start Date:</span> {startDate}
      </div>
      
      <div className="curriculum" style={{ 
        marginBottom: "clamp(20px, 2vw, 30px)",
        lineHeight: "1.7"
      }}>
        {curriculum}
      </div>
      
      <div className="section-title" style={{ 
        marginBottom: "clamp(10px, 1vw, 15px)",
        fontWeight: 500 
      }}>
        Minimum Qualifications & Requirements:
      </div>
      
      <ul className="requirements-list" style={{ 
        marginBottom: "clamp(20px, 2vw, 30px)",
        paddingLeft: "clamp(30px, 3vw, 40px)"
      }}>
        {qualifications.map((q, i) => (
          <li key={i} style={{ 
            marginBottom: "clamp(10px, 1vw, 15px)",
            paddingLeft: "clamp(8px, 0.8vw, 12px)"
          }}>
            {q}
          </li>
        ))}
        {responsibilities && responsibilities.map((r, i) => (
          <li key={i + qualifications.length} style={{ 
            marginBottom: "clamp(10px, 1vw, 15px)",
            paddingLeft: "clamp(8px, 0.8vw, 12px)"
          }}>
            {r}
          </li>
        ))}
      </ul>
      
      <div className="apply-button-container">
        <a
          href={`mailto:${email}`}
          className="apply-button"
          style={{ 
            padding: "clamp(10px, 1.2vw, 16px) clamp(25px, 3vw, 40px)",
            fontSize: "clamp(18px, 1.8vw, 24px)",
          }}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}