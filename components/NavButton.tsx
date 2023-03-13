import React from 'react'

interface Props {
    title: string;
    isActive?: boolean
}

function NavButton({ title, isActive }: Props) {
  return (
    <button className={`${isActive && "bg-[#036759]"} hover:bg-[#036759] text-white py-2 px-4 rounded`} >
        { title }
    </button>
  )
}

export default NavButton