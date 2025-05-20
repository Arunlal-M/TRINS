"use client";
import { useState } from "react";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const blogs = [
    {
      image: "/image/blogs/mindfull.png",
      title: "Mindfulness Techniques for Parents and Kids",
      date: "March 26, 2025",
      excerpt:
        "In today’s fast-paced lifestyle, families often find themselves caught in a cycle of busyness, screen time, and constant distractions. Amidst all this, mindfulness offers a way for parents and children to slow down, reconnect, and create a more harmonious home environment. Practising mindfulness is not about being perfect but about being present – with ourselves...",
    },
    {
      image: "/image/blogs/building.png",
      title: "Building Emotional Resilience in Children",
      date: "March 26, 2025",
      excerpt:
        "Emotional resilience is a vital skill for children to develop as they navigate the ups and downs of growing up. Learn how to foster resilience in your child for a brighter, more confident future...",
    },
    {
      image: "/image/blogs/building.png",
      title: "Fostering Creativity in Young Minds",
      date: "March 26, 2025",
      excerpt:
        "Creativity is not just about art—it's about problem-solving, innovation, and thinking outside the box. Discover ways to nurture creativity in your child every day...",
    },
    {
      image: "/image/blogs/building.png",
      title: "The Importance of Play in Learning",
      date: "March 26, 2025",
      excerpt:
        "Play is a child’s natural way of learning. Explore how play-based activities can enhance your child’s development and love for learning...",
    },
    {
      image: "/image/blogs/building.png",
      title: "Nurturing Social Skills in Early Childhood",
      date: "March 26, 2025",
      excerpt:
        "Social skills are essential for lifelong success. Learn practical tips to help your child build strong relationships and communicate effectively...",
    },
  ];
  const blogsPerPage = 4;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const paginatedBlogs = blogs.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage
  );

  return (
    <div
      className="mt-64 w-full flex flex-col items-center justify-center relative mainContainer"
      style={{ minHeight: 320 }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 300,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <img
          src="/image/blogs/cover.png"
          alt="Blogs Cover"
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
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
            width: "100%",
            height: 260,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textShadow: "0 4px 32px rgba(0,0,0,0.18)",
          }}
        >
          Blogs
        </h1>
      </div>
      {/* Blog List Section */}
      <div className="w-full flex flex-col items-center mt-16 gap-16">
        {paginatedBlogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center gap-6 mt-12 mb-24">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-12 h-12 rounded-full border text-xl flex items-center justify-center transition-all duration-150
              ${
                page === i + 1
                  ? "bg-[#085038] text-white border-[#085038] shadow-md"
                  : "bg-white text-[#085038] border-[#085038] hover:bg-[#e6f2ed]"
              }`}
            style={{ fontFamily: "Gideon Roman, serif", fontWeight: 400 }}
          >
            {i + 1}
          </button>
        ))}
        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="flex items-center gap-3 px-10 py-3 rounded-[32px] bg-[#085038] text-white text-xl font-normal shadow-md hover:bg-[#0a6a4a] transition-colors"
            style={{
              fontFamily: "Gideon Roman, serif",
              fontWeight: 400,
              minWidth: 140,
            }}
          >
            Next
            <span className="ml-1">&gt;&gt;</span>
          </button>
        )}
      </div>
    </div>
  );
}
