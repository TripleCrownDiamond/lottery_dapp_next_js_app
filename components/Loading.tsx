import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader"
import Image from 'next/image'

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2 mb-10">
          <Image className='rounded-full bg-slate-100 h-20 w-20' src="/img/Logo.png" alt="Logo" width={500} height={500} quality={100} />
          <h1 className='text-lg text-white font-bold '>Loading the DIGITAL PROCESS DRAW</h1>
        </div>
        <PropagateLoader color="white" size={30} />
    </div>
  )
}

export default Loading