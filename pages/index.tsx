import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CustomButton } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <CustomButton bgColor="bg-green-300" textColor="text-blue-800">
        Click Me
      </CustomButton>
    </>
  )
}

export default Home
