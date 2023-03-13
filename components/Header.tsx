import React from 'react'
import Image from 'next/image'
import NavButton from './NavButton'
import { Bar3BottomIcomRight } from '@heroicons/react/24/solid'

function Header() {
  return (
    <div>

        <div className='flex items-center space-x-2'>
            <Image className='rounded-full bg-slate-100 h-20 w-20' src="/img/Logo.png" alt="Logo" width={500} height={500} quality={100} />
        
            <div>
                <h1 className='text-lg text-white font-bold' >DIGITAL PROCESS DRAW</h1>
                <p className='text-xs text-emerald-500 truncate'>User...</p>
            </div>
        </div>

        <div>
            <div className='p-4 space-x-2'>
                <NavButton isActive title='Buy Tickets' />
                <NavButton title='Logout' />  
            </div>
        </div>

        <div>

        </div>

    </div>
  )
}

export default Header