import React from "react";
import Container from "../Navbar/Layout/container";
import featuresImg1 from "../../assets/featuresImg1.png";
import featuresImg2 from "../../assets/featuresImg2.png";
import featuresImg3 from "../../assets/featuresImg3.png";
import featuresImg4 from "../../assets/featuresImg4.png";
import featuresImg5 from "../../assets/featuresImg5.png";
import featuresImg6 from "../../assets/featuresImg6.png";
import featuresicon1 from "../../assets/featuresicon1.png";
import featuresicon2 from "../../assets/featuresicon2.png";
import featuresicon3 from "../../assets/featuresicon3.png";
import featuresBgicon from "../../assets/featuresBgicon.png";

export default function Features() {
  const featuresData = [
    {
      icon: featuresicon1,
      title: "Fast and Easy to use",
      description: "Easily to convert API with just a few clicks",
    },
    {
      icon: featuresicon2,
      title: "Safely Security",
      description: "All customer data is encrypted",
    },
    {
      icon: featuresicon3,
      title: "Get Organized",
      description: "From lists to boards, organize work your way. ",
    },
  ];

  return (
    <>
      <div className="mt-[160px]">
        <Container>
          <div className="flex justify-between relative">
            <div className="relative w-max">
              <img src={featuresImg1} alt="img" />
              <img
                className="absolute left-[-60px] top-[30px]"
                src={featuresImg2}
                alt="#img"
              />
              <img
                className="absolute top-[220px] left-[85px]"
                src={featuresImg3}
                alt="#img"
              />
              <img
                className="absolute  top-[435px] left-[85px]"
                src={featuresImg4}
                alt="#img"
              />
              <img
                className="absolute top-[80px] left-[370px]"
                src={featuresImg5}
                alt="#img"
              />
              <img
                className="absolute top-[350px] left-[365px]"
                src={featuresImg6}
                alt="#img"
              />
            </div>
            <div>
              <div>
                <h1 className="w-[553px] font-secondary font-bold text-[46px] leading-[46px] tracking-[-1px] text-headingText">
                  We provide features for your Business
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-2 mt-16 gap-y-10">
                  {featuresData.map((item) => (
                    <div>
                      <img src={item.icon} alt="img" />
                      <h1 className="font-secondary font-bold text-[22px] leading-[34px] tracking-[-.5%] text-headingText mt-[14px] mb-[6px]">
                        {item.title}
                      </h1>
                      <p className="w-[220px] font-primary font-normal text-lg leading-[32px] text-paragraphText">
                        {item.description}
                      </p>
                    </div>
                  ))}
                  <div className="flex items-end">
                    <a
                      className="bg-secondaryButton py-[20px] px-[48px] font-primary font-medium text-lg leading-[20px] text-white rounded-md hover:bg-primaryButton hover:text-headingText duration-[.6s]"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img className="absolute top-[86px] left-[-65px] -z-2" src={featuresBgicon} alt="" />
          </div>
        </Container>
      </div>
    </>
  );
}
