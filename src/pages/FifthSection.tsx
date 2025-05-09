import React from 'react'
import Image from 'next/image'
import GithubCardSkew from '@/components/ui/GithubCardSkew'
import { motion } from 'framer-motion'

function FifthSection() {

  return (
    <section className="w-full h-full bg-[#353b60] flex flex-col items-center justify-center " >
      <Image
        src="/appliance6.jpg"
        alt='background1'
        width={500}
        height={500}
        className='w-full h-full object-contain absolute mix-blend-overlay opacity-20'
      />
      <div className="relative h-full lg:w-[90%] xl:w-[79%] flex flex-col items-center justify-center py-24 lg:gap-10 xl:gap-20">
        <div className='lg:text-4xl xl:text-5xl font-lato text-nowrap font-extrabold text-white lg:leading-tight max-w-5xl mx-auto text-center tracking-normal  '>
          Our Working Process: A Step-by-Step Overview
        </div>
        <div className='relative w-full flex items-center justify-center lg:gap-10 xl:gap-24'>

          <GithubCardSkew className='relative w-[500px] h-[488px] flex flex-col items-center justify-center bg-[rgba(255,255,255,0.2)] p-8 rounded-[30px] '>
            <div className='relative flex items-center justify-center font-lato lg:text-2xl xl:text-3xl text-white font-extrabold'>How We Work</div>
            <div className='relative flex items-center justify-center'>
              <div className='relative flex items-center justify-center gap-5'>
                <div className='relative flex-col flex items-center justify-center mb-4'>
                  <motion.div
                    className='w-[70px] h-[70px] flex items-center justify-center transition-all duration-300 bg-[#04cf9c] hover:bg-[#1c1f48] rounded-[10px] '
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                    >
                      <Image
                        src="/list.svg"
                        alt="arrow"
                        width={30}
                        height={30}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center w-[2px] bg-[#04cf9c]"
                    initial={{ scaleY: 0 }} // Start with 0 scale
                    whileInView={{ scaleY: 1 }} // Scale to 1 when visible
                    transition={{ type: 'spring', stiffness: 100, delay: 3 }} // Spring transition
                    style={{
                      height: '40px', // Set the final height
                      originY: 0, // Set the origin for scaling from the bottom
                    }}

                  />
                  <motion.div
                    className='w-[70px] h-[70px] flex items-center justify-center transition-all duration-300 bg-[#04cf9c] hover:bg-[#1c1f48] rounded-[10px] '
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 5 }}
                    >
                      <Image
                        src="/check.svg"
                        alt="arrow"
                        width={30}
                        height={30}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center w-[2px] bg-[#04cf9c]"
                    initial={{ scaleY: 0 }} // Start with 0 scale
                    whileInView={{ scaleY: 1 }} // Scale to 1 when visible
                    transition={{ type: 'spring', stiffness: 100, delay: 6 }} // Spring transition
                    style={{
                      height: '40px', // Set the final height
                      originY: 0, // Set the origin for scaling from the bottom
                    }}

                  />
                  <motion.div
                    className='w-[70px] h-[70px] flex items-center justify-center transition-all duration-300 bg-[#04cf9c] hover:bg-[#1c1f48] rounded-[10px] '
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 6 }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 8 }}
                    >
                      <Image
                        src="/tool.svg"
                        alt="arrow"
                        width={30}
                        height={30}
                      />
                    </motion.div>
                  </motion.div>
                </div>


                <div className='relative w-full flex-col flex items-center justify-center gap-4 mb-4'>
                  <div className='relative h-24 w-full flex flex-col items-start justify-center lg:gap-0 xl:gap-1'>
                    <div className='relative w-fit h-9 leading-9 font-lato text-left text-xl xl:text-2xl text-white font-extrabold'>
                      Schedule your appointment
                    </div>
                    <div className={`relative font-roboto f text-left text-sm text-[#e8e8e8] font-thin leading-5 `}>
                      Begin your journey to seamless service by booking a personalized appointment tailored to your schedule.
                    </div>
                  </div>

                  <div className='relative h-24 w-full flex flex-col items-start justify-center gap-0 xl:gap-1'>
                    <div className='relative w-fit h-9 leading-9 font-lato text-xl xl:text-2xl text-white font-extrabold'>
                      Get confirmation
                    </div>
                    <div className={`relative font-roboto f text-left text-sm text-[#e8e8e8] font-thin leading-5 `}>
                      We will contact you to confirm to secure your slot, ensuring that our commitment to you is solid.
                    </div>
                  </div>

                  <div className='relative h-24 w-full flex flex-col items-start justify-center gap-0 xl:gap-1'>
                    <div className='relative w-fit h-9 leading-9 font-lato text-left text-xl xl:text-2xl text-white font-extrabold'>
                      We repair
                    </div>
                    <div className={`relative font-roboto f text-left text-sm text-[#e8e8e8] font-thin leading-5 `}>
                      Sit back and relax while our skilled technicians work their magic, transforming your concerns into solutions.
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </GithubCardSkew>
          <GithubCardSkew className='relative w-[500px] h-[488px] flex flex-col items-center justify-center bg-[rgba(255,255,255,0.2)] lg:px-4 xl:px-8  rounded-[30px] '>
            <div className='relative flex items-center justify-center font-lato text-2xl xl:text-3xl text-white text-center font-extrabold px-8'>
              Quality Service,
              Affordable Prices
            </div>
            <div className={`relative font-roboto text-center text-sm text-[#e8e8e8] font-thin leading-5 lg:px-1 xl:px-4 lg:pb-4 xl:pb-8`}>
              We offer Quality Service at Affordable Prices. Our dedicated team ensures exceptional customer experiences with reliable, knowledgeable support tailored to your needs. With transparent pricing and no hidden fees, you can trust that you’re getting great value. Choose us for top-notch service that fits your budget!
            </div>

            <div className='relative flex items-start justify-center flex-col'>
              <div className='relative flex items-center justify-start pb-4'>
                <Image
                  src="/arrow-green-fill.png"
                  alt="arrow"
                  width={25}
                  height={25}
                />
                <div className='relative font-roboto f text-center text-sm text-[#e8e8e8] font-thin leading-5 px-4 '>Quality repairs that won’t break the bank.</div>
              </div>
              <div className='relative flex items-center justify-center pb-4'>
                <Image
                  src="/arrow-green-fill.png"
                  alt="arrow"
                  width={25}
                  height={25}
                />
                <div className='relative font-roboto f text-center text-sm text-[#e8e8e8] font-thin leading-5 px-4 '>Affordable solutions for everyone.</div>
              </div>

              <div className='relative flex items-center justify-center pb-4'>
                <Image
                  src="/arrow-green-fill.png"
                  alt="arrow"
                  width={25}
                  height={25}
                />
                <div className='relative font-roboto f text-center text-sm text-[#e8e8e8] font-thin leading-5 px-4 '>Top-notch service at unbeatable prices.</div>
              </div>

              <div className='relative flex items-center justify-center pb-2'>
                <Image
                  src="/arrow-green-fill.png"
                  alt="arrow"
                  width={25}
                  height={25}
                />
                <div className='relative font-roboto f text-center text-sm text-[#e8e8e8] font-thin leading-5 px-4 '>Building lasting relationships through affordability.</div>
              </div>
            </div>
          </GithubCardSkew>
        </div>
      </div>
    </section>
  )
}

export default FifthSection