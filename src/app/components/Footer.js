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
        { name: "News", href: "/blogs" },
        { name: "Calendar", href: "/events" },
        { name: "Alumni", href: "/activities" },
        { name: "Admissions", href: "/application-form" },
      ],
    },
    {
      title: "",
      links: [
        { name: "Gallery", href: "/gallery" },
        { name: "Work With Us", href: "/careers" },
        { name: "Support", href: "/contact" },
        { name: "Affiliates", href: "/" },
      ],
    },
    {
      title: "Students",
      links: [
        { name: "Log-In", href: "/" },
        { name: "Stories", href: "/blogs" },
        { name: "Lunch Menu", href: "/food-menu" },
      ],
    },
    {
      title: "Parents",
      links: [
        { name: "Term Dates", href: "/admission-process" },
        { name: "Uniform", href: "/" },
        { name: "Fees", href: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-[#075037] text-white py-12 px-4 md:px-8 relative">
      {/* Background Designs */}
      <div className="absolute top-0 left-0 z-0">
        <Image src="/image/footer/bg_design_top_left.png" alt="" width={500} height={500} /> {/* Adjust width/height as needed */}
      </div>
      <div className="absolute top-0 right-0 z-0">
        <Image src="/image/footer/bg_design_top_right.png" alt="" width={500} height={500} /> {/* Adjust width/height as needed */}
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <Image src="/image/footer/bg_design_bottom_right.png" alt="" width={500} height={500} /> {/* Adjust width/height as needed */}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-center items-center space-x-8 md:space-x-56 mb-12 mt-24 footer-badge-container">
          <RoundedActionButton
            text="Inquire"
            icon={<InquireIcon />}
            href="/contact"
            className="w-40 h-40 md:w-44 md:h-44 shadow-xl hover:shadow-2xl footer-badge"
            iconContainerClassName="mb-2"
            textClassName="text-lg font-semibold"
          />
          <RoundedActionButton
            text="Apply"
            icon={<ApplyIcon />}
            href="/application-form"
            className="w-40 h-40 md:w-44 md:h-44 shadow-xl hover:shadow-2xl footer-badge"
            iconContainerClassName="mb-2"
            textClassName="text-lg font-semibold"
          />
          <RoundedActionButton
            text="Fees"
            icon={<FeesIcon />}
            href="/"
            className="w-40 h-40 md:w-44 md:h-44 shadow-xl hover:shadow-2xl footer-badge"
            iconContainerClassName="mb-2"
            textClassName="text-lg font-semibold"
          />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="flex flex-row justify-center">
            {" "}
            <div className="flex flex-col">
              {" "}
              <div className="flex items-center mb-4 footer-logo-container">
                <div className="mr-4 flex-shrink-0">
                  {" "}
                  <Image
                    src="/image/tis-logo.webp"
                    alt="Western International School Logo"
                    width={100}
                    height={100}
                    className="filter brightness-0 invert"
                  />{" "}
                </div>
                <h2 className="text-2xl font-bold md:text-left">
                  WESTERN
                  <br />
                  INTERNATIONAL
                  <br />
                  SCHOOL
                </h2>{" "}
              </div>
              <p className="text-sm mb-1">
                Western International School, Kollam, Kerala,
                <br />
                INDIA
              </p>{" "}
              <p className="text-sm mb-1">Mobile No: +91 9495154836</p>
              <p className="text-sm">Phone No: +91 471 26780251 Ext: 236</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
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
      </div>
    </footer>
  );
};

export default Footer;
