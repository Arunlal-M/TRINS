"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import ReadMoreButton from "../components/ReadMoreButton";

const GallerySection = ({ showGalleryTitle = true, button = null }) => {
  const galleryRef = useRef(null);
  const headingRef = useRef(null);
  const imagesRef = useRef([]);

  // Gallery images data
  const galleryImages = [
    { id: 1, src: "/image/home/gallery_1.jpg", alt: "School campus view" },
    { id: 2, src: "/image/home/gallery_2.jpg", alt: "School activities" },
    { id: 3, src: "/image/home/gallery_3.jpg", alt: "Students in classroom" },
    { id: 4, src: "/image/home/gallery_4.jpg", alt: "School facilities" },
    { id: 5, src: "/image/home/gallery_5.jpg", alt: "Outdoor activities" },
    { id: 6, src: "/image/home/gallery_6.jpg", alt: "School event" },
  ];

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate gallery images with staggered entrance
    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 65%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = (event) => {
      const item = event.currentTarget;
      const row = item.parentElement;

      item.classList.remove("w-1/3");
      item.classList.add("w-1/2");

      Array.from(row.children).forEach((sibling) => {
        if (sibling !== item) {
          sibling.classList.remove("w-1/3");
          sibling.classList.add("w-1/4");
        }
      });
    };

    const handleMouseLeave = (event) => {
      const item = event.currentTarget;
      const row = item.parentElement;

      item.classList.remove("w-1/2");
      item.classList.add("w-1/3");

      Array.from(row.children).forEach((sibling) => {
        sibling.classList.remove("w-1/4");
        sibling.classList.add("w-1/3");
      });
    };

    // Add event listeners to all gallery items in imagesRef
    const currentGalleryItems = imagesRef.current.filter((el) => el); // Filter out any null entries if refs are conditional
    currentGalleryItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      currentGalleryItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      className="w-full min-h-screen relative z-20 overflow-hidden py-16 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 pt-20">
        {/* Gallery heading */}
        {showGalleryTitle && (
          <div className="mb-16 md:mb-20">
            <h2
              ref={headingRef}
              className="font-normal uppercase text-center text-[#F5DE9C] relative after:content-[''] after:absolute after:bottom-[-15px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-[120px] after:h-[3px] after:bg-[#F5DE9C]"
              style={{
                fontFamily: "Gideon Roman",
                fontSize: "64px",
                lineHeight: "74px",
                letterSpacing: "3%",
              }}
            >
              GALLERY
            </h2>
          </div>
        )}
        {/* Gallery display - Desktop */}
        <div className="hidden md:block">
          {/* First row */}
          <div className="flex mb-4 gap-2">
            {" "}
            {/* Added gap-2 */}
            {galleryImages.slice(0, 3).map((image, index) => (
              <div
                key={image.id}
                ref={(el) => (imagesRef.current[index] = el)}
                className="w-1/3 transition-all duration-500 ease-in-out" /* Removed p-1 */
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                />
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="flex gap-2">
            {" "}
            {/* Added gap-2 */}
            {galleryImages.slice(3, 6).map((image, index) => (
              <div
                key={image.id}
                ref={(el) => (imagesRef.current[index + 3] = el)}
                className="w-1/3 transition-all duration-500 ease-in-out" /* Removed p-1 */
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & tablet view - standard grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="overflow-hidden rounded-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Add Read More Button centered below the gallery */}
      <div className="flex justify-center mt-8 md:mt-12">
        {button ? button : <ReadMoreButton text="View More" href="/gallery" />}
      </div>
    </div>
  );
};

export default GallerySection;
