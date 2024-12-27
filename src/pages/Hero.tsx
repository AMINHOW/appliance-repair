import Image from 'next/image'
import React from 'react'
import background1 from '../../public/Background-1.png'
import repairMan from '../../public/repair-man.png'
import Typewriter from '@/lib/Typewriter'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import WordRotate from '@/components/ui/word-rotate'
import MagicButton from '@/components/ui/MagicButton'



function Hero() {
  return (

    <div className="relative w-full max-h-[780px] h-[90vh] bg-[url('/white-bg.png')] bg-cover bg-center bg-[#e5ebf5] flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <BackgroundBeamsWithCollision className="h-full">
        <div className='relative w-[79%] h-full flex items-center justify-center  '>
          <div className='relative max-w-3xl w-[70%] h-full flex flex-col items-center justify-center gap-5 text-center text-[72px] text-[#1c1f48] leading-[72px]  font-bold  font-lato'>
            <div className='relative text-wrap flex flex-col mb-3'>
              <div className='relative flex flex-row items-center justify-center'>
                <span className='left-0'>Trusted </span>
                <WordRotate
                  className="ml-3 bg-gradient-to-t from-[#08ac86] via-[#1c7872] to-[#3b3e61] bg-clip-text text-transparent dark:text-white"
                  words={["Experts", "Specialists", "Professionals"]}
                />
              </div>
              <h1 className=' block '> for All Your Repair Needs</h1>
            </div>
            <div className='w-full flex items-center justify-center mb-8'>
              <div className='w-20 h-14 flex items-center justify-start border-r border-[#bababa]'>
                <Image
                  src="/technical.svg"
                  alt='technical'
                  className=''
                  width={50}
                  height={50}
                />
              </div>
              <p className='flex w-[60%] items-center justify-center text-base font-normal text-[#7a7a7a]'>
                Experience the difference with our skilled technicians. Your satisfaction is our priority.
              </p>
            </div>
            <MagicButton
              button=" felx h-14 w-40"
              border="bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#04cf9c_50%,#FFFFFF_100%)] "
              content="bg-[#f2f2f2] text-[#1c1f48] hover:bg-[#04cf9c] "
              title="Order Now"
            />
          </div>
          <div className='relative w-[470px] mr-7 h-full flex items-center justify-start  bg-gradient-to-t from-[#08ac86] via-[#1c7872] to-[#3b3e61]'>
            <Image
              src={background1}
              alt='background1'
              className='w-full h-full object-cover absolute mix-blend-overlay opacity-20'
            />
            <div className='w-[460px] bottom-[-40px] absolute left-[-70px]'>
              <Image
                src={repairMan}
                alt='repair-man'

                className='w-full h-full object-cover '
              />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Hero