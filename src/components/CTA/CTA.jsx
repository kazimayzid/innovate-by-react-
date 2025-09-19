import React from "react"
import ctaBG from "../../assets/ctaBG.png"
import Container from "../Navbar/Layout/container"
export default function CTA() {
    return <>
    <Container>
        <div
        className="mt-5 md:mt-[160px] mb-5 md:mb-[124px] md:px-[103px] py-9 md:py-[100px] bg-center bg-cover bg-no-repeat flex flex-col md:flex-row justify-between items-center rounded-[10px] "
         style={{backgroundImage: `url(${ctaBG})`}}>
            <div>
                <h1 className="md:w-[577px] font-secondary font-bold text-2xl md:text-[46px] md:leading-[58px] text-center md:text-left text-white">Don’t find the answer? contact us for any query.</h1>
            </div>
            <div>
                <a className="font-primary font-medium text-lg leading-[20px] text-[#2C2643] px-[48px] py-[20px] rounded-md bg-primaryButton hover:bg-white duration-500 inline-block mt-7 md:mt-0" href="#">Contact Us</a>
            </div>
        </div>
    </Container>
    </>
}