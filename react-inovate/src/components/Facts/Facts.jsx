import React from "react";
import Container from "../Navbar/Layout/container";
import factsBG from "../../assets/factsBG.png";
import factimg from "../../assets/factsImg.png";

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
    <div className="mb-[140px]">
      <Container>
        <div
          className="bg-cover flex gap-[45px] rounded-[40px]"
          style={{ backgroundImage: `url(${factsBG})` }}
        >
          <img className="mt-[44px] ml-[41px]" src={factimg} alt="img" />

          <div>
            <div className="mt-[85px]">
              <h1 className="w-[554px] font-secondary font-bold text-[44px] text-white">
                Trusted by 35,000+ happy customers.
              </h1>
            </div>

            <div className="flex gap-[40px] mt-[64px] mb-[85px]">
              {factsData.map((item) => (
                <div>
                  <h1 className="font-secondary font-black text-[44px] leading-[54px] text-white">
                    {item.number}
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
