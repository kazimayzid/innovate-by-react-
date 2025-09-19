import React from "react";
import Container from "../Navbar/Layout/container";
import contentIcon1 from "../../assets/contentIcon1.png";
import contentIcon2 from "../../assets/contentIcon2.png";
import contentIcon3 from "../../assets/contentIcon3.png";

export default function Content() {
  const contentData = [
    {
      img: contentIcon1,
      title: "Login or sign up to be able use our platform",
      description:
        "This quickstart shows you how to use Identity Platform to sign in a user with an email and password.",
    },
    {
      img: contentIcon2,
      title: "Connect your website with just a few click",
      description:
        "Once your website is online, you can configure it, I will show you how to put your website online",
    },
    {
      img: contentIcon3,
      title: "Take some sales data that you want",
      description:
        "Sell your data directly: The most straightforward method is to sell your data directly to another",
    },
  ];
  return (
    <>
      <div>
        <Container>
          <div className="md:pt-[336px]">
            <div className=" md:flex justify-between ">
              <h1 className="md:w-[504px] text-center md:text-start font-bold text-3xl md:text-[46px] md:leading-[58px] text-headingText font-secondary mb-4 md:mb-0">
                How simple is it to use our platform?
              </h1>
              <p className="md:w-[530px] text-center md:text-start text-lg leading-[18px] text-paragraphText tracking-[-.2px] font-secondary">
                This Innovate Con guide explores the most popular platforms and
                walks you through how to use them to grow your business.
              </p>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-y-2 justify-between mt-[50px] md:mt-[116px]">
              {contentData.map((item) => (
                <div className="w-max flex flex-col items-center text-center">
                  <img src={item.img} alt="#icon" />
                  <h1 className="w-[300px] font-secondary font-bold text-[24px] leading-9 text-headingText mt-[26px] mb-3">
                    {item.title}
                  </h1>
                  <p className="w-[300px] font-primary font-[400] text-lg leading-8 tracking-[-.25%] text-paragraphText">
                    {item.description}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
