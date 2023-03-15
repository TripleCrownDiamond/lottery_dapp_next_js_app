import { useContract, useMetamask, useDisconnect, useAddress, useContractMetadata, useContractRead } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { use } from 'react'
import Header from '../components/Header'

const Home: NextPage = () => {

  const address = useAddress();
  console.log(address);
  //console.log("Variable")
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Digital Process Lottery Dapp</title>
      </Head>

      <Header />
      <h1></h1>
    </div>
  )
}

export default Home
