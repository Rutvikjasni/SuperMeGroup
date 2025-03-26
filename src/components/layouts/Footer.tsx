import React from "react";

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const Footer: React.FC = () => {
  return (
    <footer className="text-black bg-footer p-6 md:p-10 lg:p-20 bg-no-repeat border-t border-opacity-10 border-gray-100">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <a href="/">
            <img
              src="Logo.svg"
              className="h-8 sm:h-10 md:h-12 lg:h-14"
              alt="Supreme logo"
              title="logo"
            />
          </a>
          
          <div className="w-full grid sm:grid-cols-2 mx-auto  md:grid-cols-4 gap-6 sm:gap-10 md:gap-16 lg:gap-20 mt-8">
            {renderFooterLinks()}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center pt-10 sm:pt-16 text-center sm:text-left">
          <h6 className="text-sm text-black">©2024. All Rights Reserved.</h6>
          <h6 className="text-sm text-black mt-2 sm:mt-0">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</h6>
        </div>
      </div>
    </footer>
  );
};

const renderFooterLinks = () => {
  const footerData: FooterSection[] = [
    {
      title: "Applications",
      links: [
        { name: "Apparel", href: "/applications/apparel" },
        { name: "Automotive", href: "/applications/automotive" },
        { name: "Filtration", href: "/applications/filtration" },
        { name: "Customised Nonwoven", href: "/applications/customised-nonwoven" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Who We Are", href: "/who-we-are" },
        { name: "Global Competency", href: "/global-competency" },
        { name: "Innovation", href: "/innovation" },
        { name: "ESG Impact", href: "/esg-impact" },
      ],
    },
    {
      title: "More",
      links: [
        { name: "Contact Us", href: "/contact-us" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/company/supreme-group-company/", external: true },
      ],
    },
  ];

  return footerData.map((section, index) => (
    <ul key={index} className="text-black list-none">
      <li className="mb-3 font-bold text-opacity-90 text-lg">{section.title}</li>
      {section.links.map((link, i) => (
        <li key={i}>
          <a
            className="text-sm sm:text-base font-medium text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4"
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : ""}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  ));
};

export default Footer;