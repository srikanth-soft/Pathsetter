import React from "react";
import { FaSalesforce } from "react-icons/fa";
import { SiKhanacademy } from "react-icons/si";
import { FaWix } from "react-icons/fa";
import { SiRetool } from "react-icons/si";
const CompanySection = () => {
  return (
      <div className="flex px-5 md:px-0 flex-wrap justify-around gap-5 py-10">
        <FaSalesforce className="text-white text-8xl"></FaSalesforce>
        <SiKhanacademy className="text-white text-8xl"></SiKhanacademy>
        <FaSalesforce className="text-white text-8xl"></FaSalesforce>
        <FaWix className="text-white text-8xl"></FaWix>
        <FaSalesforce className="text-white text-8xl"></FaSalesforce>
        <SiRetool className="text-white text-8xl"></SiRetool>
        <FaSalesforce className="text-white text-8xl"></FaSalesforce>
      </div>
  );
};

export default CompanySection;
