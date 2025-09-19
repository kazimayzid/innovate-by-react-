import React from "react";
import Container from "../Navbar/Layout/container";
import integrationLogo1 from "../../assets/integrationLogo1.png";
import integrationLogo2 from "../../assets/integrationLogo2.png";
import integrationLogo3 from "../../assets/integrationLogo3.png";
import integrationLogo4 from "../../assets/integrationLogo4.png";
import integrationLogo5 from "../../assets/integrationLogo5.png";
import integrationLogo6 from "../../assets/integrationLogo6.png";
import integrationLogo9 from "../../assets/integrationLogo9.png";
import integrationLogo7 from "../../assets/integrationLogo7.png";

export default function Integration() {
  return (
    <>
      <div className="mt-[55px] bg-[#F4FAFA] pt-[30px] md:pt-[124px] pb-[30px] md:pb-[120px]">
        <Container>
          <div className=" md:flex justify-between items-center">
            <div className="mb-5 md:mb-0 md:block flex flex-col items-center ">
              <p className="font-primary font-medium text-[20px] text-[#FF7364]">
                Integrations
              </p>
              <h1 className="md:w-[587px] font-bold text-3xl md:text-[46px] md:leading-[58px] text-center md:text-start text-headingText mt-1 mb-[20px] font-secondary">
                Easily integrate with your favorite apps
              </h1>
              <p className="md:w-[533px] text-lg text-center md:text-start leading-[32px] text-paragraphText tracking-[-.45px] font-primary">
                App integration, in a general sense, is the process of bringing
                resources or capabilities from one application to another. As
                the world of apps continues to evolve, app integration is
                becoming expected in many contexts.
              </p>

              <a
                className="bg-secondaryButton py-[20px] px-[48px] font-primary font-medium text-lg leading-[20px] text-white rounded-md hover:bg-primaryButton hover:text-headingText duration-[.6s] inline-block mt-[40px]"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="hidden w-[697px] h-[470px] md:flex flex-wrap gap-x-[30px] gap-y-[35px]">
              <img className="bg-white px-[64px] py-[44px] rounded-[12px]" src={integrationLogo1} alt="" />
              <img className="bg-white px-[64px] py-[44px] rounded-[12px]" src={integrationLogo2} alt="" />
              <img className="bg-white px-[30px] py-[44px] rounded-[12px]" src={integrationLogo3} alt="" />
              <img className="bg-white w-[196px] h-[142px] px-[30px] py-[48px] rounded-[12px]" src={integrationLogo4} alt="" />
              <img className="bg-white w-[196px] h-[142px] px-[38px] py-[33px] rounded-[12px]" src={integrationLogo5} alt="" />
              <img className="bg-white w-[196px] h-[142px] px-[30px] py-[44px] rounded-[12px]" src={integrationLogo6} alt="" />
              <img className="bg-white w-[196px] h-[142px] px-[38px] py-[33px] rounded-[12px]" src={integrationLogo5} alt="" />
              <img className="bg-white w-[196px] h-[142px] px-[15px] py-[44px] rounded-[12px]" src={integrationLogo7} alt="" />
              {/* <img src={integrationLogo9} alt="#logo" /> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
