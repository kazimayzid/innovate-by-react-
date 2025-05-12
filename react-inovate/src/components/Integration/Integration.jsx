import React from "react";
import Container from "../Navbar/Layout/container";
import integrationLogo1 from "../../assets/integrationLogo1.png";
import integrationLogo2 from "../../assets/integrationLogo2.png";
import integrationLogo3 from "../../assets/integrationLogo3.png";
import integrationLogo4 from "../../assets/integrationLogo4.png";
import integrationLogo5 from "../../assets/integrationLogo5.png";
import integrationLogo6 from "../../assets/integrationLogo6.png";
import integrationLogo9 from "../../assets/integrationLogo9.png";
import integrationLogo8 from "../../assets/integrationLogo8.png";

export default function Integration() {
  return (
    <>
      <div className="mt-[55px] bg-[#F4FAFA] pt-[124px] pb-[120px]">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-primary font-medium text-[20px] text-[#FF7364]">
                Integrations
              </p>
              <h1 className="w-[587px] font-bold text-[46px] leading-[58px] text-headingText mt-1 mb-[20px] font-secondary">
                Easily integrate with your favorite apps
              </h1>
              <p className="w-[533px] text-lg leading-[32px] text-paragraphText tracking-[-.45px] font-primary">
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

            <div>
              <img src={integrationLogo9} alt="#logo" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
