import React from "react"

export default function Container({ children }) {
  return <>
  <div className="w-full md:w-[1409px] mx-auto md:px-0 px-2">
    {children}
  </div>
  </>
}
