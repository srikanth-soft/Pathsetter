import React from "react";

const Footer = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1  md:grid-cols-[2fr,1fr,1fr] gap-3 py-20 text-white">
        <div className="pl-5 md:p-0">
          <p className="text-5xl">
            We develop & create <br /> digital future.
          </p>
        </div>
        <div className="pl-5 pt-5 md:p-0">
          <p className="text-lg mb-5">Address</p>
          <p className="text-[#5e6374]">India --</p>
          <p className="text-[#5e6374]">
          Aurobindo Galaxy 8th Floor, Wing-A, Raidurg Hyderabad, Telangana 500081
          </p>
        </div>
        <div  className="px-5 pt-5 md:p-0 md:text-right">
          <p className="text-lg mb-5">Say Hello</p>
          <p className="text-[#5e6374] underline leading-5	mb-5">
          team@pathsetter.com
          </p>
          <p>+9100000 00000</p>
        </div>
      </div>
      <div className="flex flex-col text-center md:flex-row justify-between py-4 border-t border-t-[#5e6374]">
        <div>
          <a className="text-[#5e6374] pr-2" href="#">
            About Us
          </a>
          <a className="text-[#5e6374] pr-2" href="#">
            Services
          </a>
          <a className="text-[#5e6374]" href="#">
            Contacts
          </a>
        </div>
        <div>
          <p className="text-[#5e6374]"> &#169; 2024,All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
