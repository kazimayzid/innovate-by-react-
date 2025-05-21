import React from "react"
import Banner from "../../assets/banner.png"
export default function Header({children}) {
    return <>
    <div className= "pt-8 bg-center bg-cover bg-no-repeat md:pb-0" 
    style={{backgroundImage: `url(${Banner})`}}>{children}</div>
    </>
}