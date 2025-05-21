import React from "react";
import Container from "../Navbar/Layout/container";
import Testimonialimg from "../../assets/testimonialstar.png";
import Slider from "../Slider/Slider";

export default function Testimonial() {
  return (
    <>
      <div className="bg-[#F4FAFA]">
        <Container>
          <div className="py-4 md:py-[200px] md:flex justify-between items-center">
            <div className="left ">
              <div className="flex flex-col items-center">
                <h1 className="md:w-[594px] text-center md:text-left font-secondary font-bold text-[46px] leading-[58px] text-headingText">
                  What they are talking about us?
                </h1>
                <p className="md:w-[503px] text-center md:text-left font-primary font-normal text-lg leading-8 tracking-[-.28%] text-[#645E76] mt-[20px] mb-[40px]">
                  testimonials are evidence of customers talking about your
                  product or service in their own words. At their best, they are
                  authentic, descriptive.
                </p>
                <a
                  className="bg-secondaryButton py-[20px] px-[48px] font-primary font-medium text-lg leading-[20px] text-white rounded-md hover:bg-primaryButton hover:text-headingText duration-[.6s] mb-[80px] inline-block"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div className="relative">
                <div className="w-[58px] h-[58px] rounded-[50%] bg-[#C4C4C4] border-2 border-[#FFFFFF] absolute"></div>
                <div className="w-[58px] h-[58px] rounded-[50%] bg-[#C4C4C4] border-2 border-[#FFFFFF] absolute left-[38px]"></div>
                <div className="w-[58px] h-[58px] rounded-[50%] bg-[#C4C4C4] border-2 border-[#FFFFFF] absolute left-[76px]"></div>
                <div className="w-[58px] h-[58px] rounded-[50%] bg-[#C4C4C4] border-2 border-[#FFFFFF] absolute left-[114px]"></div>
              </div>
              <div>
                <div className="ml-[220px] flex items-center">
                  <h1 className="font-secondary font-black text-[24px] leading-9 tracking-[-2%] text-[#52C5B6]">
                    4.5
                  </h1>
                  <span className="w-[1px] h-[20px] border-[1px] border-[#DADBE2] ml-[7px] mr-[14px]"></span>
                  <img className="inline" src={Testimonialimg} alt="" />
                </div>
                <div>
                  <h1 className="font-primary font-medium text-lg leading-8 text-paragraphText ml-[220px]">
                    280k Total Review
                  </h1>
                </div>
              </div>
            </div>


            <div className="left w-full md:w-[687px] mt-16 md:mt-0">
                <Slider />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
