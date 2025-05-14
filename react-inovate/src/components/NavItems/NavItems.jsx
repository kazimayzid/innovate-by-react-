import React, { Children } from "react"

export default function NavItems({children}) {
    return <>
    <a className="font-primary font-normal text-[16px] leading-[26px] text-paragraphText" href="#">{children}</a>
    </>
}