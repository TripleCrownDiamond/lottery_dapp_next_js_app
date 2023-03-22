import React from 'react'
import Image from 'next/image'
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { useAddress, useDisconnect } from '@thirdweb-dev/react';

function Header() {

const address = useAddress();
const disconnect = useDisconnect();
  return (
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>

        <div className='flex items-center space-x-2'>
            <Image className='rounded-full bg-slate-100 h-20 w-20' src="/img/Logo.png" alt="Logo" width={500} height={500} quality={100} />
        
            <div>
                <h1 className='text-lg text-white font-bold' >DP DRAW</h1>
                <p className='text-xs text-emerald-500 truncate'>User: { address?.substring(0,5) }...{ address?.substring(address.length, address.length - 5) } </p>
            </div>
        </div>

        <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
            <div className='p-4 space-x-2'>
                <NavButton isActive title='Buy Tickets' />
                <NavButton onClick={ disconnect } title='Logout' />  
            </div>
        </div>

        <div className='flex flex-col ml-auto text-right'>
            <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer' />
            <span className='md:hidden'>
                <NavButton onClick={ disconnect } title='Logout' />
            </span>
        </div>

    </header>
  )
}

export default Header