import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import Testimonialimg from "../../assets/testimonialstar.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-secondaryButton absolute bottom-[40%] z-10 right-[-50px] hover:bg-blue-800"
      style={{ ...style, display: "" }}
      onClick={onClick}
    >
      {" "}
      <GrNext className="text-2xl text-white" />
    </span>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-secondaryButton absolute bottom-[40%] z-10 left-[-50px] hover:bg-blue-800"
      style={{ ...style, display: "" }}
      onClick={onClick}
    >
      {" "}
      <GrPrevious className="text-2xl text-white"/>
    </span>
  );
}

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className=" pt-[64px] px-[60px] pb-[50px] bg-white rounded-[20px] mt-[70px] relative">
            <div className="w-[124px] h-[124px] rounded-[50%] bg-[#C4C4C4] absolute top-[-80px] border-[10px] border-[#F7F7FC]"></div>
            <div>
              <div>
                <p className="md:w-[567px] font-primary font-normal md:text-[22px] md:leading-[44px] text-[#6C6E81]">
                  “Wow. Amazing company amazing Expert Manager. They know how to
                  get things done when it comes to online trading.{" "}
                </p>
              </div>
              <div className="mt-[37px] flex justify-between items-center">
                <div>
                  <h1 className="font-secondary font-bold md:text-[24px] leading-9 text-[#30344E]">
                    Robert Fox
                  </h1>
                  <p className="font-primary font-normal text-[16px] md:leading-[26px] text-[#30344E]">
                    Digital Marketer
                  </p>
                </div>
                <img src={Testimonialimg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" pt-[64px] px-[60px] pb-[50px] bg-white rounded-[20px] mt-[70px] relative">
            <div className="w-[124px] h-[124px] rounded-[50%] bg-[#C4C4C4] absolute top-[-80px] border-[10px] border-[#F7F7FC]"></div>
            <div>
              <div>
                <p className="md:w-[567px] font-primary font-normal md:text-[22px] md:leading-[44px] text-[#6C6E81]">
                  “Wow. Amazing company amazing Expert Manager. They know how to
                  get things done when it comes to online trading.{" "}
                </p>
              </div>
              <div className="mt-[37px] flex justify-between items-center">
                <div>
                  <h1 className="font-secondary font-bold md:text-[24px] leading-9 text-[#30344E]">
                    Robert Fox
                  </h1>
                  <p className="font-primary font-normal text-[16px] md:leading-[26px] text-[#30344E]">
                    Digital Marketer
                  </p>
                </div>
                <img src={Testimonialimg} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" pt-[64px] px-[60px] pb-[50px] bg-white rounded-[20px] mt-[70px] relative">
            <div className="w-[124px] h-[124px] rounded-[50%] bg-[#C4C4C4] absolute top-[-80px] border-[10px] border-[#F7F7FC]"></div>
            <div>
              <div>
                <p className="md:w-[567px] font-primary font-normal md:text-[22px] md:leading-[44px] text-[#6C6E81]">
                  “Wow. Amazing company amazing Expert Manager. They know how to
                  get things done when it comes to online trading.{" "}
                </p>
              </div>
              <div className="mt-[37px] flex justify-between items-center">
                <div>
                  <h1 className="font-secondary font-bold md:text-[24px] leading-9 text-[#30344E]">
                    Robert Fox
                  </h1>
                  <p className="font-primary font-normal text-[16px] md:leading-[26px] text-[#30344E]">
                    Digital Marketer
                  </p>
                </div>
                <img src={Testimonialimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
