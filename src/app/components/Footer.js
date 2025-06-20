import React from "react";
import Image from "next/image";
import Link from "next/link";
import RoundedActionButton from "./RoundedActionButton";

const InquireIcon = () => (
  <Image
    src="/image/footer/inquire.svg"
    alt="Inquire"
    width={48}
    height={48}
    className="group-hover:filter group-hover:brightness-0 group-hover:invert"
  />
);

const ApplyIcon = () => (
  <Image
    src="/image/footer/apply.svg"
    alt="Apply"
    width={48}
    height={48}
    className="group-hover:filter group-hover:brightness-0 group-hover:invert"
  />
);

const FeesIcon = () => (
  <Image
    src="/image/footer/fee.svg"
    alt="Fees"
    width={48}
    height={48}
    className="group-hover:filter group-hover:brightness-0 group-hover:invert"
  />
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Key Link",
      links: [
        { name: "News", href: "/news" },
        { name: "Calendar", href: "/events" },
        { name: "Gallery", href: "/gallery" },
        { name: "About Us", href: "/about-us" },


      ],
    },
    {
      title: "General",
      links: [
        { name: "Admissions", href: "/admission-process" },
        { name: "Work With Us", href: "/careers" },
        { name: "News Letters", href: "/newsletter" },
        { name: "Policies & Downloads", href: "/school-policies" },
      ],
    },
    {
      title: "Students",
      links: [
        { name: "Orientations", href: "/orientations" },
        { name: "Stories", href: "/blogs" },
        { name: "Alumni", href: "/alumni" },
      ],
    },
    {
      title: "Parents",
      links: [
        { name: "Scholarships", href: "/admission-process" },
        { name: "FAQs", href: "/faqs" },
        { name: "Fees", href: "/fees-structure" },
      ],
    },
  ];

  return (
    <footer className="bg-[#075037] text-white py-8 md:py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Background Designs - Hidden on mobile */}
      <div className=" md:block absolute -mt-20 top-0 left-0 z-0">
        <Image
          src="/image/footer/bg_design_top_left.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className=" md:block absolute top-0 right-0 z-0">
        <Image
          src="/image/footer/bg_design_top_right.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className=" md:block absolute bottom-0 right-0 z-0">
        <Image
          src="/image/footer/bg_design_bottom_right.png"
          alt=""
          width={500}
          height={500}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Action Buttons - Always horizontal with consistent gaps */}
        <div className="flex flex-row justify-center items-center gap-12 sm:gap-16 md:gap-70 mb-8 mt-8 md:mt-24">
          <RoundedActionButton
            text="Inquire"
            icon={<InquireIcon />}
            href="/contact"
            className="w-25 h-25 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-lg hover:shadow-xl"
            iconContainerClassName="mb-1 md:mb-2"
            textClassName="text-xs sm:text-sm md:text-base font-semibold"
          />
          <RoundedActionButton
            text="Apply"
            icon={<ApplyIcon />}
            href="/application-form"
            className="w-25 h-25 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-lg hover:shadow-xl"
            iconContainerClassName="mb-1 md:mb-2"
            textClassName="text-xs sm:text-sm md:text-base font-semibold"
          />
          <RoundedActionButton
            text="Fees"
            icon={<FeesIcon />}
            href="/fees-structure"
            className="w-25 h-25 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-lg hover:shadow-xl"
            iconContainerClassName="mb-1 md:mb-2"
            textClassName="text-xs sm:text-sm md:text-base font-semibold"
          />
        </div><hr className="border-t border-t-[#0a6d4d] mb-8 md:mb-12" />


        {/* Main Footer Content - Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Logo and Address Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="-ml-8 flex flex-col items-center md:flex-row md:items-start">
              <div className="mb-4 md:mb-0 md:mr-4">
                <Image
                  src="/image/tis-logo.webp"
                  alt="Trivandrum International School Logo"
                  width={150}
                  height={150}
                  className="filter brightness-0 invert"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-center md:text-left mt-4 mb-4 md:mb-0">
                TRIVANDRUM<br />
                INTERNATIONAL<br />
                SCHOOL
              </h2>

            </div>

            <div className="mt-4 text-center md:text-left">
              <p className="text-lg md:text-xl mb-1">
                Trivandrum International School,<br />
                Edackode P.O, Korani,<br />
                Trivandrum - 695 104,<br />
                Kerala, INDIA
              </p>
              <p className="text-lg md:text-xl mt-3 mb-1">
                Mobile No: +91 9947066646
              </p>
              <p className="text-lg md:text-xl mb-1">
                Phone No: +91 471 2619051 ext 236
              </p>
              <p className="text-lg md:text-xl">
                Fax No: +91 471 2619510
              </p><br />
            </div>
          </div>

          {/* Links Section - Responsive grid */}
          <div className="md:-ml-8 grid grid-cols-2 gap-6 md:gap-16">
            {" "}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-3 text-[#FFDB93]">
                  {section.title}
                </h3>{" "}
                <ul className="space-y-2 pl-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-[#FFDB93] transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 -mb-35 pt-4 border-t border-t-[#0a6d4d] text-center">
          <p className="text-xs md:text-sm">
            © {currentYear} Trivandrum International School. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;