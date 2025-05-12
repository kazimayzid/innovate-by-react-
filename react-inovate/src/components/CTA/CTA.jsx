import React from "react"
import ctaBG from "../../assets/ctaBG.png"
import Container from "../Navbar/Layout/container"
export default function CTA() {
    return <>
    <Container>
        <div
        className="mt-[160px] mb-[124px] px-[103px] py-[100px] bg-center bg-cover bg-no-repeat flex justify-between items-center"
         style={{backgroundImage: `url(${ctaBG})`}}>
            <div>
                <h1 className="w-[577px] font-secondary font-bold text-[46px] leading-[58px] text-white">Don’t find the answer? contact us for any query.</h1>
            </div>
            <div>
                <a className="font-primary font-medium text-lg leading-[20px] text-[#2C2643] px-[48px] py-[20px] rounded-md bg-primaryButton hover:bg-white duration-500 inline-block" href="#">Contact Us</a>
            </div>
        </div>
    </Container>
    </>
}