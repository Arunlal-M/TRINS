"use client";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The teachers at this school genuinely care about each student's growth. My child has flourished both academically and socially.",
      author: "Jennifer K., Parent",
      role: "Grade 5 Parent",
      image: "/image/testimonials/parent1.jpg"
    },
    {
      quote: "The challenging curriculum prepared me perfectly for college. I entered university a full year ahead in math and science!",
      author: "Michael T.",
      role: "Alumni, Class of 2022",
      image: "/image/testimonials/alumni1.jpg"
    },
    {
      quote: "As an educator, I'm impressed by the innovative teaching methods and the school's commitment to holistic development.",
      author: "Dr. Sarah L.",
      role: "Visiting Professor",
      image: "/image/testimonials/professor1.jpg"
    },
    {
      quote: "The arts program helped me discover my passion. Now I'm studying at Juilliard thanks to my foundation here.",
      author: "Emma R.",
      role: "Alumni, Class of 2021",
      image: "/image/testimonials/alumni2.jpg"
    },
    {
      quote: "We moved from overseas, and the school made our transition seamless. The international perspective is truly valued here.",
      author: "The Chen Family",
      role: "Grade 7 Parents",
      image: "/image/testimonials/parent2.jpg"
    },
    {
      quote: "The leadership opportunities I had in high school gave me confidence to start my own nonprofit at college.",
      author: "David P.",
      role: "Alumni, Class of 2020",
      image: "/image/testimonials/alumni3.jpg"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => 
        (activeCategory === "parents" && t.role.includes("Parent")) ||
        (activeCategory === "alumni" && t.role.includes("Alumni")) ||
        (activeCategory === "educators" && (t.role.includes("Professor") || t.role.includes("Teacher")))
      );

  return (
    <div
      className="mt-64 w-full flex flex-col items-center justify-center relative mainContainer"
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
          src="/image/testimonials/cover.jpg"
          alt="Testimonials Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#074B35",
          }}
        />
        <h1
          style={{
            fontFamily: "Gideon Roman",
            fontWeight: 400,
            fontSize: "120px",
            lineHeight: "1",
            letterSpacing: "24px",
            color: "#FFFFFF",
            height: 260,
            position: "absolute",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textShadow: "0 4px 32px rgba(0,0,0,0.18)",
            inset: 0,
          }}
        >
          Testimonials
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">
              Voices From Our Community
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { id: "all", label: "All Testimonials" },
                { id: "parents", label: "Parents" },
                { id: "alumni", label: "Alumni" },
                { id: "educators", label: "Educators" }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors
                    ${
                      activeCategory === category.id
                        ? "bg-[#085038] text-white border-[#085038]"
                        : "bg-white text-[#085038] border-[#085038] hover:bg-[#e6f2ed]"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="border border-[#e0e0e0] rounded-lg p-6 hover:shadow-md transition-shadow h-full flex flex-col"
                >
                  <div className="flex-grow">
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#085038]">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f0f7f4] p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#085038]">
              Share Your Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  We value feedback from our community. Share your story about how
                  our school has impacted you or your family.
                </p>
                <button className="bg-[#085038] text-white px-6 py-2 rounded-lg hover:bg-[#0a6a4a] transition-colors">
                  Submit Your Testimonial
                </button>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[#085038]">
                  Video Testimonials
                </h4>
                <p>
                  Watch our community members share their experiences in their own words.
                </p>
                <div className="mt-4 aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Video Gallery Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}