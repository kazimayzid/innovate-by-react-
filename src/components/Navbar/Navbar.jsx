import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Container from "./Layout/container";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        <Container>
          <div className="md:flex justify-between items-center">
            <div className="flex justify-between items-center">
              <a href="#Home">
                <img src={logo} alt="#logo" />
              </a>
              <div className="md:hidden block">
                {
                  show ? <RxCross1 onClick={()=> setShow(!show)} className="text-white text-2xl " /> : <FaBars
                  onClick={()=> setShow (!show)}
                  className="text-white text-2xl "
                />
                }
                {/* <FaBars
                  onClick={handleClick}
                  className="text-white text-2xl "
                /> */}
              </div>
            </div>
            <div className="hidden md:block">
              <ul className="md:flex gap-x-[50px] font-primary text-lg font-medium text-white">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Features">Features</a>
                </li>
                <li>
                  <a href="#Service">Service</a>
                </li>
                <li>
                  <a href="#Pages">Pages</a>
                </li>
                <li>
                  <a href="#Blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center font-primary text-lg font-medium text-white gap-x-9">
              <a href="#Login">Login</a>
              <a
                className="px-12 py-5 bg-primaryButton rounded-[6px] text-[#2C2643] hover:bg-secondaryButton hover:text-white duration-[.6s]"
                href="#Register"
              >
                Register
              </a>
            </div>
          </div>
        </Container>
         {show && (
            <div className="bg-[#14141600] h-screen ">
              <div>
                <ul className="flex flex-col gap-y-5 mb-5 items-center md:flex gap-x-[50px] font-primary  text-3xl md:text-lg font-medium text-white">
                  <li>
                    <a href="#Home">Home</a>
                  </li>
                  <li>
                    <a href="#Features">Features</a>
                  </li>
                  <li>
                    <a href="#Service">Service</a>
                  </li>
                  <li>
                    <a href="#Pages">Pages</a>
                  </li>
                  <li>
                    <a href="#Blog">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-y-5 md:flex items-center font-primary text-3xl md:text-lg font-medium text-white gap-x-9">
                <a href="#Login">Login</a>
                <a
                  className="px-12 py-5 bg-primaryButton rounded-[6px] text-[#2C2643] hover:bg-secondaryButton hover:text-white duration-[.6s]"
                  href="#Register"
                >
                  Register
                </a>
              </div>
            </div>
          )}
      </div>
    </>
  );
}
