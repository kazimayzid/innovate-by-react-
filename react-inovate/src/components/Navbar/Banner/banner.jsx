import React from "react";
import Container from "../Layout/container";
import laptopScreen from "../../../assets/laptopScreen.png";
export default function Banner() {
  return (
    <>
      <div className="">
        <Container>
          <div className="pt-[60px] md:pt-[98px] pb-[300px] md:pb-[559px] relative">
            <div className="text-center">
              <h1 className="md:w-[796px] m-auto font-secondary md:text-[56px] text-3xl font-bold leading-[64px] text-white mb-5">
                Get your work done with Management Tool
              </h1>
              <p className="md:w-[467px] m-auto font-primary text-lg leading-[32px] text-white">
                The world's first project management platform that connects
                everything
              </p>
              <div className="mt-8 relative flex flex-col gap-y-2 items-center md:block">
                <input
                  className="md:w-[480px] py-5 borde pl-6 leading-[26px] bg-white outline-0 placeholder:text-gray-400 placeholder:leading-[26px] text-gray-500 rounded-[6px]"
                  type="text"
                  placeholder="Your business email"
                />
                <a
                  className="md:absolute right-[472px] top-2 px-7 py-[15px] text-lg font-medium bg-primaryButton rounded-[6px] text-[#2C2643] leading-[20px] hover:bg-secondaryButton hover:text-white duration-[.6s]"
                  href="#Try for free"
                >
                  Try for free
                </a>
              </div>
            </div>
            <div className="absolute bottom-[40px] md:bottom-[-276px] left-[-40px]">
              <img src={laptopScreen} alt="#Laptop" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
