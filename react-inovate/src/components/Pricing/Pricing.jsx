import React from "react"
import Container from "../Navbar/Layout/container"
import pricingIcon1 from "../../assets/pricingIcon1.png"
import pricingIcon2 from "../../assets/pricingIcon2.png"
import pricingIcon3 from "../../assets/pricingIcon3.png"

export default function Pricing() {
    const pricingData = [
        {
            icon: pricingIcon1,
            title: "Personal",
            price: "$10/mth",
            duration: "Annual pricing (save 20%)",
            button: "Purchase Now"
        },
        {
            icon: pricingIcon2,
            title: "Personal",
            price: "$10/mth",
            duration: "Annual pricing (save 20%)",
            button: "Purchase Now"
        },
        {
            icon: pricingIcon3,
            title: "Personal",
            price: "$10/mth",
            duration: "Annual pricing (save 20%)",
            button: "Purchase Now"
        }
    ]

    return <>
      <Container>
        <div className="mb-[160px]">
            <div className="flex flex-col items-center">
                <h1 className="font-secondary font-bold text-[46px] leading-[58px] text-headingText w-[624px] text-center">Pricing Designed To Fit Your Business</h1>
                <p className="font-secondary font-bold text-[24px] leading-[100%] text-[rgba(54,58,164,0.8)] mt-[39px] mb-[77px]">Monthly</p>
            </div>
            <div className="flex justify-between">
                {pricingData.map((item)=> (
                    <div className="border-[1px] border-[#DCE7FE] rounded-[20px] px-[40px] py-[60px] flex flex-col items-center group hover:bg-secondaryButton duration-500">
                        <img src={item.icon} alt="#icon" />
                        <p className="font-secondary font-bold text-[24px] leading-9 text-secondaryButton mt-[32px] mb-[2px] group-hover:text-primaryButton">{item.title}</p>
                        <p className="font-secondary font-bold text-[44px] leading-[54px] tracking-[-2%] text-headingText group-hover:text-white">{item.price}</p>
                        <h1 className="font-secondary font-medium text-lg leading-[18px] text-[#645E76] mt-[14px] mb-[40px] group-hover:text-white">{item.duration}</h1>
                        <a className="font-primary font-medium text-lg leading-[20px] text-white px-[104px] py-[20px] bg-secondaryButton rounded-md mt-[40px] duration-500 hover:text-headingText group-hover:bg-primaryButton group-hover:text-headingText hover:bg-white" href="#">{item.button}</a>

                    </div>
                ))}
            </div>
        </div>
      </Container>
    </>
}