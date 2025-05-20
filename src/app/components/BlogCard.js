import React from "react";
import "./Blog.css";

export default function BlogCard({ blog }) {
  return (
    <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center md:items-stretch gap-12 bg-transparent p-0 mx-auto">
      <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center items-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[460px] object-cover shadow-lg"
          style={{ maxWidth: 540, background: '#F5F5F5' }}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-0 md:px-8 blogcontainer">
        <h2
          className="text-[#085038] text-5xl font-normal mb-4 leading-tight"
          style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
        >
          {blog.title}
        </h2>
        <div
          className="text-[#767676] mb-6 text-xl"
          style={{ fontFamily: "Gideon Roman, serif", fontSize: 22 }}
        >
          {blog.date}
        </div>
        <div
          className="text-[#767676] mb-8 text-lg max-w-2xl"
          style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400, lineHeight: "1.7" }}
        >
          {blog.excerpt}
        </div>
        <button
          className="flex items-center gap-2 px-8 py-3 rounded-2xl shadow-md bg-[#085038] text-white text-lg font-normal hover:bg-[#0a6a4a] transition-colors"
          style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
        >
          Read More <span className="ml-1">&gt;&gt;</span>
        </button>
      </div>
    </div>
  );
}
