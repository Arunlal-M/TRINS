"use client"; // Add this line to make it a client component

import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check if the current path is the home page or root
  const isHomePage = pathname === "/" || pathname === "/home";

  return (
    <>
      <style jsx global>{`
        @media (max-width: 991px) {
          .navbar-desktop {
            display: none !important;
          }
          .navbar-mobile {
            display: block !important;
          }
        }
        @media (min-width: 990px) {
          .navbar-desktop {
            display: block !important;
          }
          .navbar-mobile {
            display: none !important;
          }
        }
      `}</style>
      <nav
        className={`absolute top-0 left-0 w-screen max-w-full h-[100px] z-[1010] pointer-events-auto ${
          isHomePage ? "bg-transparent" : "bg-transparent"
        }`}
      >
        {/* Hamburger icon for <=950px */}
        <div
          className="navbar-mobile absolute top-6 right-6 z-[1020]"
          style={{ display: "none" }}
        >
          <button
            aria-label="Open menu"
            className="focus:outline-none"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <img
              src="/image/navbar/burger-bar.png"
              alt="Menu"
              className="w-10 h-10"
            />
          </button>
        </div>
        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-black/80 z-[1015] flex flex-col items-center justify-center gap-8 animate-fade-in">
            <button
              aria-label="Close menu"
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>
            {/* <Link
              href="/"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              OUR SCHOOL
            </Link> */}
            <Link
              href="/admission-process"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              ADMISSION
            </Link>
            <Link
              href="/curriculum"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              CURRICULUM
            </Link>
            <Link
              href="/activities"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              ACTIVITIES
            </Link>
            <Link
              href="/events"
              className="text-white text-lg font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              EVENTS
            </Link>
            <Link
              href="/food-menu"
              className="text-white text-lg font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              FOOD MENU
            </Link>
            <Link
              href="/blogs"
              className="text-white text-lg font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              BLOGS
            </Link>
            <Link
              href="/careers"
              className="text-white text-lg font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              CAREERS
            </Link>
            <Link
              href="#"
              aria-label="Search"
              className="flex items-center justify-center"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src={
                  isHomePage
                    ? "/image/navbar/Magnifier-white.svg"
                    : "/image/navbar/Magnifier-black.svg"
                }
                alt="Search"
                className="w-8 h-8"
              />
            </Link>
          </div>
        )}
        {/* Desktop nav (hidden below 950px) */}
        <div className="navbar-desktop">
          {isHomePage && (
            <div className="absolute w-screen h-[220px] bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none z-0 top-0 left-0" />
          )}
          <div className="absolute z-10 flex items-center justify-end gap-8 pr-8 w-full max-w-[600px] top-[125px] right-10">
            <Link
              key="EVENTS"
              href="/events"
              className={`w-[69px] h-[19px] flex items-center justify-center font-gideon font-normal text-[15.88px] leading-none uppercase ${
                isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
              } no-underline transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              EVENTS
            </Link>
            <Link
              key="FOOD MENU"
              href="/food-menu"
              className={`h-[19px] flex items-center justify-center font-gideon font-normal text-[15.88px] leading-none uppercase ${
                isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
              } no-underline transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              FOOD MENU
            </Link>
            <Link
              key="BLOGS"
              href="/blogs"
              className={`w-[69px] h-[19px] flex items-center justify-center font-gideon font-normal text-[15.88px] leading-none uppercase ${
                isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
              } no-underline transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              BLOGS
            </Link>
            <Link
              key="CAREERS"
              href="/careers"
              className={`w-[69px] h-[19px] flex items-center justify-center font-gideon font-normal text-[15.88px] leading-none uppercase ${
                isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
              } no-underline transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              CAREERS
            </Link>
            <Link
              href="#"
              aria-label="Search"
              className={`flex items-center justify-center`}
            >
              <img
                src={
                  isHomePage
                    ? "/image/navbar/Magnifier-white.svg"
                    : "/image/navbar/Magnifier-black.svg"
                }
                alt="Search"
                className={`w-[27px] h-[27px] object-contain`}
              />
            </Link>
          </div>
          <div className="absolute w-[803px] h-[26px] top-[188px] right-10 flex justify-between items-center pr-[34.39px] pl-[34.39px] z-20 whitespace-nowrap overflow-hidden">
            <Link
              key="OUR SCHOOL"
              href="/"
              className={`w-[148px] h-[26px] flex items-center justify-center font-gideon font-normal text-[21.48px] leading-none uppercase ${
                isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
              } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              OUR SCHOOL
            </Link>
            <Link
              key="ADMISSION"
              href="/admission-process"
              className={`w-[148px] h-[26px] flex items-center justify-center font-gideon font-normal text-[21.48px] leading-none uppercase ${
                isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
              } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              ADMISSION
            </Link>
            <Link
              key="ACADEMICS"
              href="/curriculum"
              className={`w-[148px] h-[26px] flex items-center justify-center font-gideon font-normal text-[21.48px] leading-none uppercase ${
                isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
              } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              ACADEMICS
            </Link>
            <Link
              key="STUDENT LIFE"
              href="/activities"
              className={`w-[148px] h-[26px] flex items-center justify-center font-gideon font-normal text-[21.48px] leading-none uppercase ${
                isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
              } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              STUDENT LIFE
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
