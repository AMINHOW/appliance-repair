import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Counter from '@/components/ui/text/counter'
import AddIcon from '@mui/icons-material/Add';
import { FaPlus } from "react-icons/fa";
import FormCard from '@/components/ui/formCard';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});


function ThirdSection() {
  const [isHoveredArrow1, setIsHoveredArrow1] = useState(false);
  const [isHoveredArrow2, setIsHoveredArrow2] = useState(false);
  const [isHoveredLike, setIsHoveredLike] = useState(false);
  const [isHoveredClients, setIsHoveredClients] = useState(false);
  const [isHoveredSuccess, setIsHoveredSuccess] = useState(false);

  useEffect(() => {

  });

  return (
    <section className="w-full h-full bg-gradient-to-t from-[#08ac86] via-[#1c7872] to-[#3b3e61] flex flex-col items-center justify-center " >
      <Image
        src="/appliance5.jpg"
        alt='background1'
        width={100}
        height={100}
        className='w-full h-full object-contain absolute mix-blend-overlay opacity-20'
      />
      <div className="relative h-full lg:w-[90%] xl:w-[79%] flex flex-col items-center justify-center lg:py-20 xl:py-24">
        <div className='relative w-full flex items-center justify-center'>
          <div className='relative w-full pb-[80px] border-b flex items-center justify-center'>
            <div className='relative w-1/3 h-fit flex items-center justify-center gap-5'>
              <div
                className='w-[75px] h-[75px] bg-white hover:bg-[#04cf9c] transition-all duration-300 rounded-[10px] flex items-center justify-center'
                onMouseEnter={() => setIsHoveredLike(true)}
                onMouseLeave={() => setIsHoveredLike(false)}
              >
                <Image
                  src={isHoveredLike ? "/like-white.png" : "/like.png"}
                  alt='like'
                  width={36}
                  height={36}
                  className='z-20'
                />
              </div>
              <div className='relative flex items-center justify-center flex-col'>
                <div className='relative flex items-center justify-center gap-2'>
                  <Counter targetValue={1000} className="text-white text-[40px]" />
                  <FaPlus className='text-white w-6 h-6 mt-1' />
                </div>
                <div className='text-sm text-[#e8e8e8]'>
                  Successful Project
                </div>
              </div>
            </div>
            <div className='relative w-1/3 border-x h-fit flex items-center justify-center gap-5'>
              <div className='w-[75px] h-[75px] bg-white hover:bg-[#04cf9c] transition-all duration-300 rounded-[10px] flex items-center justify-center'
                onMouseEnter={() => setIsHoveredClients(true)}
                onMouseLeave={() => setIsHoveredClients(false)}
              >
                <Image
                  src={isHoveredClients ? "/group-white.png" : "/group.png"}
                  alt='happy clients'
                  width={36}
                  height={36}
                  className='z-20'
                />
              </div>
              <div className='relative flex items-center justify-center flex-col'>
                <div className='relative flex items-center justify-center gap-2'>
                  <Counter targetValue={1000} className="text-white text-[40px]" />
                  <FaPlus className='text-white w-6 h-6 mt-1' />
                </div>
                <div className='text-sm text-[#e8e8e8]'>
                  Happy Clients
                </div>
              </div>
            </div>
            <div className='relative w-1/3 h-fit flex items-center justify-center gap-5'>
              <div
                className='w-[75px] h-[75px] bg-white hover:bg-[#04cf9c] transition-all duration-300 rounded-[10px] flex items-center justify-center'
                onMouseEnter={() => setIsHoveredSuccess(true)}
                onMouseLeave={() => setIsHoveredSuccess(false)}
              >
                <Image
                  src={isHoveredSuccess ? "/like-white.png" : "/like.png"}
                  alt='like'
                  width={36}
                  height={36}
                  className='z-20'
                />
              </div>
              <div className='relative flex items-center justify-center flex-col'>
                <div className='relative flex items-center justify-center gap-2'>
                  <Counter targetValue={1000} className="text-white text-[40px]" />
                  <FaPlus className='text-white w-6 h-6 mt-1' />
                </div>
                <div className='text-sm text-[#e8e8e8]'>
                  Successful Project
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex items-center justify-center mt-16 lg:gap-10 xl:gap-14'>
          <FormCard />
          <div className='relative lg:w-[550px] xl:w-[620px] flex-col flex items-start justify-start'>
            <h4 className="lg:w-full xl:w-[90%] lg:text-[42px] xl:text-5xl font-lato font-extrabold text-white lg:leading-tight max-w-5xl text-left tracking-tight  ">
              Trust Us To Install Your Air Conditioning
            </h4>

            <p className="w-full lg:text-sm xl:text-base  max-w-4xl  mt-4 mb-8 text-white text-left font-normal">
              Choose us for air conditioning installation and enjoy hassle-free experience. Our commitment
              to your comfort ensures your system will keep you cool for years to come!
            </p>

            <div className='relative w-full h-full flex flex-col items-center justify-center pb-4 border-b border-[#b6bcc8]'>
              <div className='relative w-full h-24 flex items-center justify-center gap-8 mb-4'>
                <div
                  className='w-[70px] h-[70px] flex items-center justify-center transition-all duration-300 bg-[#1c1f48] hover:bg-white rounded-[10px] '
                  onMouseEnter={() => setIsHoveredArrow1(true)}
                  onMouseLeave={() => setIsHoveredArrow1(false)}
                >
                  <Image
                    src={isHoveredArrow1 ? "/arrow-blue.png" : "/arrow.png"}
                    alt="arrow"
                    width={25}
                    height={25}
                  />
                </div>
                <div className='relative w-[calc(100%-100px)] flex flex-col items-start justify-center gap-1'>
                  <div className='relative w-fit h-9 leading-9 font-lato text-left text-2xl text-white font-extrabold'>
                    Professional Installation
                  </div>
                  <div className={`relative ${roboto.className} f text-left text-sm text-[#e8e8e8] font-thin leading-5 `}>
                    Our expert technicians provide a seamless installation experience that you can rely on for precision and quality.
                  </div>
                </div>
              </div>

              <div className='relative w-full h-24 flex items-center justify-center gap-8'>
                <div
                  className='w-[70px] h-[70px] flex items-center justify-center transition-all duration-300 bg-[#1c1f48] hover:bg-white rounded-[10px] '
                  onMouseEnter={() => setIsHoveredArrow2(true)}
                  onMouseLeave={() => setIsHoveredArrow2(false)}
                >
                  <Image
                    src={isHoveredArrow2 ? "/arrow-blue.png" : "/arrow.png"}
                    alt="arrow"
                    width={25}
                    height={25}
                  />
                </div>
                <div className='relative w-[calc(100%-100px)] flex flex-col items-start justify-center gap-1'>
                  <div className='relative w-fit h-9 leading-9 font-lato text-left text-2xl text-white font-extrabold'>
                    Customer Satisfaction
                  </div>
                  <div className={`relative ${roboto.className} f text-left text-sm text-[#e8e8e8] font-thin leading-5 `}>
                    We prioritize your satisfaction with a commitment to quality service and ongoing support.
                  </div>
                </div>
              </div>
            </div>
            <div className='relative w-fit leading-8 font-lato text-left lg:text-xl xl:text-2xl text-white font-semibold mt-4'>
              Bringing our services to Rabat, Temara, Salé, and Kenitra!
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default ThirdSection