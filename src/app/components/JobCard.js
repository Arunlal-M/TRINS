import "./Careers.css"

export default function JobCard({ title, jobType, startDate, curriculum, qualifications, responsibilities, email }) {
  return (
    <div
      className="w-full max-w-[1602px] bg-[#E4E4E4] p-8 text-[#222] shadow-md mx-auto jobCardContainer"
      style={{
        fontFamily: "Gideon Roman, serif",
        borderRadius: "79px",
        padding: "80px",
        fontWeight: 400,
        fontSize: "25px",
        lineHeight: "41.71px",
        letterSpacing: "1.04px",
      }}
    >
      <div
        className="mb-2"
        style={{
          fontFamily: "Gideon Roman, serif",
          fontWeight: 400,
          fontSize: "32.32px",
          lineHeight: "53.92px",
          letterSpacing: "1.35px",
          color: "#000000",
        }}
      >
        {title}
      </div>
      <div className="mb-1 ml-4">Job Type: {jobType}</div>
      <div className="mb-4 ml-4">Start Date: {startDate}</div>
      <div className="mb-4 ml-4">{curriculum}</div>
      <div className="mb-2 ml-4">Minimum Qualifications & Requirements:</div>
      <ul className="list-disc pl-6 mb-2 ml-10">
        {qualifications.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
        {responsibilities && responsibilities.map((r, i) => (
          <li key={i + qualifications.length}>{r}</li>
        ))}
      </ul>
      <div className="flex justify-center mt-8">
        <a
          href={`mailto:${email}`}
          className="px-10 py-4 bg-[#085038] text-white text-2xl rounded-3xl font-normal shadow hover:bg-[#0a6a4a] transition"
          style={{ fontFamily: 'Gideon Roman, serif', letterSpacing: 1 }}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
