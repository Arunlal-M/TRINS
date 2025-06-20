"use client";

import GallerySection from "../home/GallerySection";

function ViewMoreButton() {
  return (
    <button
      className="px-8 py-3 bg-[#0B4F3A] text-white rounded-lg shadow-2xl font-semibold text-xl hover:bg-[#176b4d] transition"
      onClick={() => window.location.href = "/gallery"}
    >
      View More &gt;&gt;
    </button>
  );
}

export default function Gallery() {
  return (
    <div className="mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/gallery/cover.png"
          alt="Gallery Cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src="/image/gallery/coverOverGradient.png"
          alt="Gallery Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <h1
          className="relative z-20 text-white text-7xl font-normal"
          style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 2 }}
        >
          GALLERY
        </h1>
      </div>
      <GallerySection showGalleryTitle={false} button={<ViewMoreButton />} />
    </div>
  );
}
