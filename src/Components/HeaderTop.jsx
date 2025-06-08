import React from 'react';
import { CgMail } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTwitter, FaYoutube } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="grid grid-cols-1 lg:flex items-center justify-between px-5 py-2 gap-4">
      {/* Left Section: Contact Info */}
      <div className="flex grid-cols-1 sm:grid-cols-3 gap-2 w-full">
        
        <div className="flex items-center gap-2 ">
          <CgMail className="text-primary" />
          <span className="text-primary text-sm font-semibold">gpssgmc2079@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <CiMobile3 className="text-primary" />
          <span className="text-primary text-sm font-semibold">+977-9858480004</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary" />
          <span className="text-primary text-sm font-semibold">Ghodaghodi MP-1 Sukhad</span>
        </div>
      </div>

      {/* Right Section: Social Icons (only visible on large screens) */}
      <div className="hidden lg:flex items-center gap-5 justify-end">
        <FaYoutube className="text-primary" />
        <FaFacebook className="text-primary" />
        <FaTwitter className="text-primary" />
        <FaInstagram className="text-primary" />
      </div>
    </div>
  );
};

export default HeaderTop;
