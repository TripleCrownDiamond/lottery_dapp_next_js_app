import React from 'react'
import Image from 'next/image'
import { useMetamask } from '@thirdweb-dev/react'

function Login() {
const connectWithMetaMask = useMetamask();
  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10 '>
        <Image className='rounded-full bg-slate-100 h-56 w-56 mb-10' src="/img/Logo.png" alt="Logo" width={400} height={400} quality={100} />
        <h1 className='text-4xl text-white font-bold'>THE DIGITAL PROCESS DRAW</h1>
        <h2 className='text-white mt-5'>Get Started By Logging in With Your MetaMask</h2>
        <button onClick={connectWithMetaMask} className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold '>Login with MetaMask</button>
        </div>
    </div>
  )
}

export default Login