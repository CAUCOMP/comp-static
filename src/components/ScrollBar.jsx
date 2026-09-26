import React from 'react'
import { FaArrowCircleDown } from "react-icons/fa";

const ScrollBar = ({onClick}) => {
  return (
    <>
        <button 
          className="flex items-center fixed bottom-10 right-10 bg-transparent border-none text-inherit text-2xl font-normal cursor-pointer gap-2.5" 
          onClick={onClick}>
            COMP 소개 
            <FaArrowCircleDown />
        </button>
    </>
  )
}

export default ScrollBar