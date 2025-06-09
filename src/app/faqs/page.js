"use client";
import Image from "next/image";
import { useState } from "react";

export default function FAQs() {
  const faqCategories = [
    {
      id: "admissions",
      name: "Admissions",
      questions: [
        {
          question: "What is the application deadline for the next academic year?",
          answer: "Our priority application deadline is January 15 for the following academic year. We do accept applications on a rolling basis after that date if spaces remain available."
        },
        {
          question: "What age groups do you accept?",
          answer: "We accept students from Pre-K (age 4) through Grade 12. Our Early Childhood program begins at age 4, and we have different entry points at various grade levels."
        },
        {
          question: "Is there an entrance exam?",
          answer: "For Grades 5-12, we require standardized testing as part of the application process. Younger students participate in age-appropriate assessments during their visit day."
        }
      ]
    },
    {
      id: "academics",
      name: "Academics",
      questions: [
        {
          question: "What curriculum does the school follow?",
          answer: "We offer an enhanced curriculum that combines the best of international standards with local requirements. Our Upper School offers both IB Diploma and Advanced Placement options."
        },
        {
          question: "What is the average class size?",
          answer: "Our average class size is 18 students, with a student-teacher ratio of 8:1. Core academic classes typically have 15-20 students, while electives may be smaller."
        },
        {
          question: "How does the school support students with learning differences?",
          answer: "We have a dedicated Learning Support team that works with teachers to develop individualized strategies. While we're not a special needs school, we can accommodate mild to moderate learning differences."
        }
      ]
    },
    {
      id: "campus-life",
      name: "Campus Life",
      questions: [
        {
          question: "What extracurricular activities are offered?",
          answer: "We offer over 60 clubs and activities including robotics, debate, Model UN, various sports teams, music ensembles, theater productions, and community service opportunities."
        },
        {
          question: "Is there a school lunch program?",
          answer: "Yes, we have an optional lunch program with nutritious meals prepared daily by our on-site kitchen. We accommodate dietary restrictions and allergies."
        },
        {
          question: "What are the school hours?",
          answer: "Regular school hours are 8:15 AM to 3:30 PM for all grades. Early drop-off (from 7:30 AM) and after-school care (until 6:00 PM) are available for an additional fee."
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

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
          src="/image/faqs/cover.jpg"
          alt="FAQs Cover"
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
          FAQs
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">
              Frequently Asked Questions
            </h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b pb-4">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setExpandedQuestion(null);
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      activeCategory === category.id
                        ? "bg-[#085038] text-white"
                        : "bg-white text-[#085038] hover:bg-[#e6f2ed]"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* FAQ List */}
            <div className="space-y-4">
              {faqCategories
                .find(cat => cat.id === activeCategory)
                .questions.map((item, index) => (
                  <div 
                    key={index} 
                    className="border border-[#e0e0e0] rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-[#f0f7f4] transition-colors"
                    >
                      <h3 className="font-medium text-lg text-[#085038]">
                        {item.question}
                      </h3>
                      <span className="text-[#085038] text-xl ml-4">
                        {expandedQuestion === index ? "−" : "+"}
                      </span>
                    </button>
                    {expandedQuestion === index && (
                      <div className="p-4 pt-0 bg-white">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-[#f0f7f4] p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#085038]">
              Still Have Questions?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[#085038]">
                  Contact Our Admissions Team
                </h4>
                <p className="mb-3">
                  Our friendly admissions staff is happy to answer any additional
                  questions you may have about our school.
                </p>
                <button className="bg-[#085038] text-white px-6 py-2 rounded-lg hover:bg-[#0a6a4a] transition-colors">
                  Contact Us
                </button>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[#085038]">
                  Schedule a Visit
                </h4>
                <p>
                  The best way to understand our school is to see it in action.
                  We offer personalized tours and shadow days for prospective students.
                </p>
                <button className="mt-3 bg-white text-[#085038] border border-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}