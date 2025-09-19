import React from "react"
import Container from "../Navbar/Layout/container"
import servicesIcon1 from "../../assets/servicesIcon1.png"
import servicesIcon2 from "../../assets/servicesIcon2.png"
import servicesIcon3 from "../../assets/servicesIcon3.png"
import servicesIcon4 from "../../assets/servicesIcon4.png"
import { FaArrowRightLong } from "react-icons/fa6";

export default function Services() {
    const servicesData = [
        {
            icon: servicesIcon1,
            title: "Plan Product Roadmap",
            description: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
            button: "Read More"
        },
           {
            icon: servicesIcon2,
            title: "Assign Any Work",
            description: "Work assignment or job assignment is allocating work to work centers or appropriate ",
            button: "Read More"
        },
           {
            icon: servicesIcon3,
            title: "Monitor Work Progress",
            description: "Monitor Work ProgressKeeping records and monitoring activities helps people see progress ",
            button: "Read More"
        },
           {
            icon: servicesIcon4,
            title: "Pertect Intergration",
            description: "App integration, in a general sense, is the process of resources or capabilities from one application ",
            button: "Read More"
        }
    ]
    return <>
    <Container>
        <div className="py-[40px] md:py-[140px]">
            <div className="flex flex-col items-center">
                <p className="font-primary font-medium text-[20px] text-[#FF7364]">Our Services</p>
                <h1 className="w-[587px] font-bold text-[46px] leading-[58px] text-headingText mt-1 mb-[80px] font-secondary text-center">How It Works</h1>
            </div>

            <div className="flex md:flex-row flex-col justify-between"> 
                {servicesData.map((item)=> (
                    <div className="p-[36px] border-1 border-[#DCE7FE] rounded-[10px] group hover:bg-secondaryButton duration-500 mb-[80px] flex flex-col justify-center md:justify-start items-center md:items-start">
                        <img src={item.icon} alt="#icon" />
                        <h1 className="font-secondary font-bold text-[22px] leading-[34px] text-headingText mt-[26px] mb-[8px] group-hover:text-white">{item.title}</h1>
                        <p className="w-[258px] font-primary font-normal text-[16px] leading-[26px] tracking-[-.25%] text-paragraphText mt-2 mb-[26px] group-hover:text-white">{item.description}</p>
                        <a className="font-primary font-medium text-[16px] leading-[26px] text-[#3639A4] group-hover:text-white hover:text-primaryButton duration-500" href="#Read More">{item.button}<FaArrowRightLong className="inline-block ml-1" />
</a>
                    </div>
                    
                ))}
            </div>
            <div className="flex justify-center">
                <a className="font-primary font-medium text-lg leading-[20px] text-secondaryButton px-[48px] py-[20px] border-[1px] border-[#3639A4] rounded-md hover:bg-secondaryButton duration-500 hover:text-white" href="#view">View More</a>
            </div>
            

        </div>
    </Container>
    </>
}