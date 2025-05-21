import React from "react";
import Container from "../Navbar/Layout/container";
import footerLogo from "../../assets/footerlogo.png";
import {
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

import NavItems from "../NavItems/NavItems";

export default function Footer() {
  return (
    <>
      <div className="bg-[#F7F7FC] pt-[124px]">
        <Container>
          <div className="flex flex-col md:flex-row pb-[86px]">
            <div>
              <a href="#">
                <img src={footerLogo} alt="logo" />
              </a>
              <p className="w-[263px] font-primary font-normal text-[16px] leading-[28px] text-paragraphText mt-[26px] mb-[24px]">
                Build a modern and creative website with Innovate.
              </p>
              <div className="flex gap-[6px]">
                <a href="#">
                  <div className="w-[42px] h-[40px] rounded-full bg-white flex justify-center items-center hover:bg-gray-500 group duration-500">
                    <FaGoogle className="text-[#645E76] group-hover:text-white duration-500" />
                  </div>
                </a>
                <a href="#">
                  <div className="w-[42px] h-[40px] rounded-full bg-white flex justify-center items-center  hover:bg-gray-500 group duration-500">
                    <FaTwitter className="text-[#645E76] group-hover:text-white duration-500" />
                  </div>
                </a>
                <a href="#">
                  <div className="w-[42px] h-[40px] rounded-full bg-white flex justify-center items-center  hover:bg-gray-500 group duration-500">
                    <FaInstagram className="text-[#645E76] group-hover:text-white duration-500" />
                  </div>
                </a>
                <a href="#">
                  <div className="w-[42px] h-[40px] rounded-full bg-white flex justify-center items-center  hover:bg-gray-500 group duration-500">
                    <FaLinkedin className="text-[#645E76] group-hover:text-white duration-500" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-[82px] md:ml-[109px]">
              <div>
                <h1 className="font-primary font-medium text-lg leading-8 text-headingText mb-[20px]">
                  Product
                </h1>
                <div className="flex flex-col gap-3">
                  <NavItems>Landingpages</NavItems>
                  <NavItems>Pricing</NavItems>
                  <NavItems>Benefits</NavItems>
                  <NavItems>Features</NavItems>
                </div>
              </div>
              <div>
                <h1 className="font-primary font-medium text-lg leading-8 text-headingText mb-[20px]">
                  Company
                </h1>
                <div className="flex flex-col gap-3">
                  <NavItems>About</NavItems>
                  <NavItems>Privacy Policy</NavItems>
                  <NavItems>Terms & Conditions</NavItems>
                  <NavItems>Partners</NavItems>
                  <NavItems>Contact</NavItems>
                </div>
              </div>
              <div>
                <h1 className="font-primary font-medium text-lg leading-8 text-headingText mb-[20px]">
                  Resources
                </h1>
                <div className="flex flex-col gap-3">
                  <NavItems>Guides and resources</NavItems>
                  <NavItems>Blog</NavItems>
                  <NavItems>Tools</NavItems>
                  <NavItems>Support</NavItems>
                </div>
              </div>
            </div>
            <div className="md:ml-[100px]">
              <h1 className="font-primary font-medium text-lg leading-8 text-headingText mb-[20px]">
                Get Latest Updates
              </h1>
              <div className="flex flex-col gap-3">
                <p className="w-[285px] font-primary font-normal text-[16px] leading-[26px] text-paragraphText">
                  Subscribe to our newsletter and get many interesting things
                  every week
                </p>
              </div>
              <div className="relative mt-8">
                <input
                  className="placeholder:font-primary placeholder:font-normal placeholder:text-[12px] placeholder:leading-[150%] placeholder:text-[#A1A2A3] placeholder:pb-[12px] pl-[18px] border-[.85px] border-[#D2D2D2] w-[269px] h-[46px] rounded-md  outline-none"
                  type="text"
                  placeholder="Your Email Address"
                />
                <a href="#"><div className="w-[36px] h-[36px] rounded-md bg-secondaryButton absolute top-[5px] right-[20px] flex justify-center items-center"><BiLogoTelegram className="text-white w-[25px] h-[25px]" /></div></a>
              </div>
            </div>
          </div>
          <div className="relative after:content-[''] after:absolute after:w-full md:after:w-[1410px] after:h-[4px] after:left-0 after:top-0 after:bg-[#D2D2D233]">
            <h1 className="font-primary text-center md:text-left font-normal text-[14px] leading-[20px] text-paragraphText pt-[24px] pb-[29px]">© 2024 Innovate - All Right Reserved</h1>
          </div>
        </Container>
      </div>
    </>
  );
}
