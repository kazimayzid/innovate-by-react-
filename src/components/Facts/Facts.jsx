import React from "react";
import Container from "../Navbar/Layout/container";
import factsBG from "../../assets/factsBG.png";
import factimg from "../../assets/factsImg.png";
import CountUp from "react-countup";

export default function Facts() {
  const factsData = [
    {
      number: "720+",
      description: "Over 500 business powered with us",
    },
    {
      number: "4.9",
      description: "Rating on google play and app store",
    },
    {
      number: "200+",
      description: "Easily integrate with your favorite apps",
    },
  ];

  return (
    <div className="mb-10 md:mb-[140px]">
      <Container>
        <div
          className=" md:w-full bg-cover bg-center bg-no-repeat flex flex-col md:flex-row gap-[30px] md:gap-[45px] rounded-[20px] md:rounded-[40px] py-10 md:py-0 px-6 md:px-0"
          style={{ backgroundImage: `url(${factsBG})` }}
        >
          <img className="md:mt-[44px] md:ml-[41px]" src={factimg} alt="img" />

          <div className="text-center md:text-left">
            <div className="mt-6 md:mt-[85px]">
              <h1 className="md:w-[554px] font-secondary font-bold text-[44px] text-white">
                Trusted by 35,000+ happy customers.
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-[40px] mt-[64px] mb-[85px]">
              {factsData.map((item) => (
                <div>
                  <h1 className="font-secondary font-black text-[44px] leading-[54px] text-white">
                    <CountUp
                      end={parseInt(item.number)}
                      suffix={item.number.includes("+") ? "+" : ""}
                    />
                  </h1>
                  <p className="w-[176px] font-primary font-medium text-[18px] leading-8 text-[rgba(255,255,255,0.7)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
