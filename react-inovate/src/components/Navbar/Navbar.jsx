import React from "react";
import logo from '../../assets/logo.png'
import Container from "./Layout/container";
export default function Navbar() {
  return (
    <>
      <div>
        <Container>
        <div className="flex justify-between items-center mt-8 bg-teal-600">
            <div>
              <a href="#Home">
                <img src={logo} alt="#logo" />
              </a>
            </div>
            <div>
                <ul className="flex gap-x-[50px] font-primary text-lg font-medium text-white">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#Service">Service</a></li>
                    <li><a href="#Pages">Pages</a></li>
                    <li><a href="#Blog">Blog</a></li>
                </ul>
            </div>
            <div className="flex items-center font-primary text-lg font-medium text-white gap-x-9">
                <a href="#Login">Login</a>
                <a className="px-12 py-5 bg-primaryButton rounded-[6px] text-[#2C2643]" href="#Register">Register</a>
            </div>
          </div>
        </Container>
          
        
      </div>
    </>
  );
}
