"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showOurSchoolDropdown, setShowOurSchoolDropdown] = useState(false);
  const [mobileOurSchoolOpen, setMobileOurSchoolOpen] = useState(false); // New state for mobile dropdown
  const dropdownRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const isHomePage = pathname === "/" || pathname === "/home";

  // Our School dropdown links
  const ourSchoolLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Campus", href: "/campus" },
    { name: "Management", href: "/management" },
    { name: "Alumni", href: "/alumni" },
    { name: "Accreditations", href: "/accreditations" },
    { name: "Achievements", href: "/achievements" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Events", href: "/events" },
  ];

  function useIsSmallScreen() {
    const [isSmall, setIsSmall] = useState(false);
    useEffect(() => {
      const check = () => setIsSmall(window.innerWidth < 640);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);
    return isSmall;
  }

  const isSmall = useIsSmallScreen();

  // Close dropdown after delay if mouse leaves
  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        if (showOurSchoolDropdown) {
          setShowOurSchoolDropdown(false);
          setClosing(false);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [closing, showOurSchoolDropdown]);

  // Close mobile dropdown when menu closes
  useEffect(() => {
    if (!mobileOpen) {
      setMobileOurSchoolOpen(false);
    }
  }, [mobileOpen]);

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
        className={`sticky top-0 left-0 w-screen max-w-full h-[100px] z-[1010] pointer-events-auto ${isHomePage ? "bg-transparent" : "bg-transparent"
          }`}
      >
        <div
          className="relative top-12 transform -translate-y-12 flex items-center z-10"
          style={{
            backgroundColor: isHomePage
              ? "rgba(7, 80, 55, 0)"
              : "rgba(255, 255, 255, 1)",
          }}
        >
          <Link href="/">
            <Image
              src={
                isHomePage ? "/image/logo-h-white.png" : "/image/logo-h-black.png"
              }
              alt="Trivandrum International School Logo"
              width={isSmall ? 300 : 400}
              height={isSmall ? 300 : 400}
              className={`object-contain ml-[20px] my-[5px] pb-1`}
            />
          </Link>
        </div>

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
          <div className="fixed inset-0 bg-black/80 z-[1015] flex flex-col items-center justify-start gap-4 animate-fade-in overflow-y-auto pt-20 pb-10">
            <button
              aria-label="Close menu"
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>

            {/* Our School dropdown in mobile */}
            <div className="w-full flex flex-col items-center">
              <button
                className="text-white text-2xl font-gideon uppercase"
                onClick={() => setMobileOurSchoolOpen(!mobileOurSchoolOpen)}
              >
                Our School {mobileOurSchoolOpen ? "▲" : "▼"}
              </button>

              {mobileOurSchoolOpen && (
                <div className="flex flex-col items-center gap-3 mt-3 mb-3">
                  {ourSchoolLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white text-xl font-gideon uppercase"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Additional links */}
            <Link
              href="/boarding"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Boarding
            </Link>
            <Link
              href="/admission-process"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Admission
            </Link>
            <Link
              href="/curriculum"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Academics
            </Link>
            <Link
              href="/activities"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Student Life
            </Link>
            <Link
              href="/blogs"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/careers"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/about-us"
              className="text-white text-2xl font-gideon uppercase"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
          </div>
        )}

        {/* Desktop nav */}
        <div className="navbar-desktop">
          {isHomePage && (
            <div className="absolute w-screen h-[220px] bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none z-0 top-0 left-0" />
          )}

          <div className="absolute z-10 flex items-center justify-end gap-10 pr-8 w-full max-w-[600px] top-[35px] right-16">
            <Link
              key="BOARDING"
              href="/boarding"
              className={`w-[69px] h-[19px] flex items-center justify-center font-gideon font-medium text-[18.00px] leading-none  ${isHomePage
                ? "text-gray-100 hover:text-[#fff]"
                : "text-black hover:text-gray-600"
                } no-underline transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              Boarding
            </Link>

            <Link
              key="BLOGS"
              href="/blogs"
              className={`w-[69px] h-[19px] flex items-center justify-center font-gideon font-medium text-[18.00px] leading-none  ${isHomePage
                ? "text-gray-100 hover:text-[#fff]"
                : "text-black hover:text-gray-600"
                } no-underline transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              Blogs
            </Link>

            <Link
              key="CAREERS"
              href="/careers"
              className={`w-[69px] h-[19px] flex items-center justify-center font-gideon font-medium text-[18.00px] leading-none  ${isHomePage
                ? "text-gray-100 hover:text-[#fff]"
                : "text-black hover:text-gray-600"
                } no-underline transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              Careers
            </Link>
            <Link
              key="CONTACT US"
              href="/contact"
              className={`w-[69px] h-[19px] flex items-center justify-center font-gideon font-medium text-[18.00px] leading-none  ${isHomePage
                ? "text-gray-100 hover:text-[#fff]"
                : "text-black hover:text-gray-600"
                } no-underline transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              &nbsp;&nbsp;&nbsp;Contact&nbsp;Us
            </Link>
          </div>

          <div className="absolute top-[90px] right-[60px] flex flex-row items-center gap-x-3 pr-2 pl-2 z-20 whitespace-nowrap">
            {/* Our School dropdown */}
            <div
              onMouseEnter={() => {
                setShowOurSchoolDropdown(true);
                setClosing(false);
              }}
              onMouseLeave={() => setClosing(true)}
              ref={dropdownRef}
            >
              <button
                className={`w-[148px] h-[26px] flex items-center justify-center font-sans font-normal  text-[20.00px] leading-none  ${isHomePage
                  ? "text-gray-100 hover:text-[#fff]"
                  : "text-black hover:text-gray-600"
                  } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
                onClick={() => setShowOurSchoolDropdown(!showOurSchoolDropdown)}
              >
                <Link
                  key="Our School"
                  href="/"
                  className={`w-[148px] h-[26px] flex items-center justify-center font-sans font-medium text-[22.00px] leading-none  ${isHomePage
                    ? "text-gray-100 hover:text-[#fff]"
                    : "text-black hover:text-gray-600"
                    } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
                >
                  Our School

                </Link>
              </button>

              {/* Dropdown menu */}
              {showOurSchoolDropdown && (
                <div
                  className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg z-50 ${isHomePage
                    ? "bg-black/80 backdrop-blur-sm"
                    : "bg-white/80 backdrop-blur-sm"
                    } transition-opacity duration-300 ease-in-out ${closing ? "opacity-0" : "opacity-100"
                    }`}
                  onMouseEnter={() => {
                    setShowOurSchoolDropdown(true);
                    setClosing(false);
                  }}
                  onMouseLeave={() => setClosing(true)}
                >
                  <div className="py-1">
                    {ourSchoolLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`block px-4 py-2 text-sm ${isHomePage
                          ? "text-gray-100 hover:text-[#fff]"
                          : "text-black hover:text-gray-600"
                          }`}
                        onClick={() => setShowOurSchoolDropdown(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              key="ADMISSION"
              href="/admission-process"
              className={`w-[148px] h-[26px] flex items-center justify-center font-sans font-medium text-[22.00px] leading-none  ${isHomePage
                ? "text-gray-100 hover:text-[#fff]"
                : "text-black hover:text-gray-600"
                } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              Admission
            </Link>
            <Link
              key="ACADEMICS"
              href="/curriculum"
              className={`w-[148px] h-[26px] flex items-center justify-center font-sans font-medium text-[22.00px] leading-none  ${isHomePage
                ? "text-gray-100 hover:text-[#fff]"
                : "text-black hover:text-gray-600"
                } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              Academics
            </Link>
            <Link
              key="STUDENT LIFE"
              href="/activities"
              className={`w-[148px] h-[26px] flex items-center justify-center font-sans font-medium text-[22.00px] leading-none  ${isHomePage
                ? "text-gray-100 hover:text-[#fff]"
                : "text-black hover:text-gray-600"
                } no-underline whitespace-nowrap transition-all duration-300 hover:scale-110 hover:outline-none`}
            >
              Activities
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;