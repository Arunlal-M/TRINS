"use client";
import { useState } from 'react';
import GallerySection from "../home/GallerySection";
import Image from "next/image";


function ViewMoreButton({ href }) {
  return (
    <button
      className="px-8 hidden py-3 bg-[#0B4F3A] text-white rounded-lg shadow-2xl font-semibold text-xl hover:bg-[#176b4d] transition"
      onClick={() => window.location.href = href}
    >
      View More &gt;&gt;
    </button>
  );
}

// Video Gallery Section Component
function VideoGallerySection() {
  // Sample video data - replace with your actual video data
  const videos = [
    { id: 1, title: "Sports Highlights", thumbnail: "/image/gallery/video1.jpg" },
    { id: 2, title: "Annual Day", thumbnail: "/image/gallery/video2.jpg" },
    { id: 3, title: "House Activity", thumbnail: "/image/gallery/video3.jpg" },
    { id: 4, title: "Games", thumbnail: "/image/gallery/video4.jpg" },
  ];

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="relative group">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#0B4F3A]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center">{video.title}</h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <ViewMoreButton href="/videos" />
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('photos');

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
          src="/image/gallery/cover.webp"
          alt="Gallery Cover"
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
          GALLERY
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-16">
        <div className="bg-gray-100 p-1 rounded-lg flex">
          <button
            className={`px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-300 ${activeTab === 'photos'
                ? 'bg-white text-[#0B4F3A] shadow-lg'
                : 'text-gray-600 hover:text-[#0B4F3A]'
              }`}
            onClick={() => setActiveTab('photos')}
          >
            Photo Gallery
          </button>
          <button
            className={`px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-300 ${activeTab === 'videos'
                ? 'bg-white text-[#0B4F3A] shadow-lg'
                : 'text-gray-600 hover:text-[#0B4F3A]'
              }`}
            onClick={() => setActiveTab('videos')}
          >
            Video Gallery
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-12">
        {activeTab === 'photos' ? (
          <GallerySection
            showGalleryTitle={false}
            button={<ViewMoreButton href="/gallery" />}
          />
        ) : (
          <VideoGallerySection />
        )}
      </div>
    </div>
  );
}