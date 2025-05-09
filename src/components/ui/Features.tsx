import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { AnimationControls, motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";
import { Roboto } from "next/font/google";
import StyledButton from "./button-1";
import { MotionDiv, MotionH2, MotionP } from "@/lib/framer-motion";
import TextGeneration from "./text/generation-text";


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export function FeaturesSectionDemo() {

  let reftitle = useRef(null);
  let refContent = useRef(null);
  const isInViewTitle = useInView(reftitle, { once: true });
  const isInViewContent = useInView(refContent, { once: true });

  const TitleControl = useAnimation();
  const ContentControl = useAnimation();

  useEffect(() => {
    if (isInViewTitle) {
      TitleControl.start({
        opacity: 1, y: 0
      })
    }
    if (isInViewContent) {
      ContentControl.start({
        opacity: 1, y: 0
      })
    }
  }, [isInViewTitle, isInViewContent])

  const features = [
    {
      title: "Track issues effectively",
      description:
        "We simplify tracking and managing your appliance issues with our latest tools",
      skeleton: <SkeletonTwo controls={ContentControl} />,
      className:
        " border-b col-span-1 lg:col-span-4 dark:border-neutral-800",
    },
    {
      title: "",
      description:
        "",
      skeleton: <SkeletonOne controls={ContentControl} />,
      className: "col-span-1 lg:col-span-6 border-b lg:border-l dark:border-neutral-800",
    },
    {
      title: "",
      description:
        "",
      skeleton: <SkeletonThree />,
      className: "col-span-1 w-fit lg:col-span-5 lg:border-r  ",
    },
    {
      title: "",
      description:
        "",
      skeleton: <SkeletonFour />,
      className: "lg:p-2 xl:p-4 xl:pr-6 flex lg:justify-center lg:items-center xl:justify-start col-span-1 lg:col-span-5 lg:pl-0 dark:border-neutral-800",
    }

  ];
  return (
    <div
      className="relative w-full lg:w-[90%] xl:w-[79%] flex flex-col items-center justify-center  z-20 px-8 lg:px-0 py-32 lg:py-36 xl:py-40  mx-auto"
    >
      <div
        ref={reftitle}
        className="px-8"
      >
        <MotionH2
          className="font-lato text-nowrap font-extrabold text-[#1c1f48] text-4xl  lg:text-[42px] xl:text-5xl lg:leading-tight lg:max-w-5xl mx-auto text-center tracking-tight"
          initial={{ opacity: 0, y: '20vh' }}
          animate={TitleControl}
          transition={{ duration: 0.7 }}
        >
          Explore Our Features for Quality !
        </MotionH2>

        <TextGeneration
          className="hidden lg:block text-sm lg:text-sm xl:text-base  max-w-4xl  my-4 mx-auto text-neutral-500 text-center font-normal"
          paragraph="At TABRID RRAHA, we pride ourselves on delivering top-notch appliance repair services. Our features are designed to ensure quality and convenience,
          providing you with fast, reliable solutions for all your appliance needs."
          controls={TitleControl}
        />
        <TextGeneration
          className="lg:hidden block text-sm lg:text-sm xl:text-base  max-w-4xl  my-4 mx-auto text-neutral-500 text-center font-normal"
          paragraph="TABRID RRAHA delivers top-quality appliance repairs—fast, reliable, and convenient."
          controls={TitleControl}
        />
      </div>

      <div
        ref={refContent}
        className="relative mt-12"
      >
        <MotionDiv
          className="grid grid-cols-1 lg:grid-cols-10  xl:border rounded-md "
          initial={{ opacity: 0, y: '50vh' }}
          animate={ContentControl}
          transition={{ duration: 0.7, delay: 2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} className={feature.className}>
              <FeatureTitle controls={ContentControl}>{feature.title}</FeatureTitle>
              <FeatureDescription controls={ContentControl}>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
          <BorderBeam size={250} duration={12} delay={9} />
        </MotionDiv>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children, controls }: { children?: React.ReactNode, controls: AnimationControls }) => {
  return (
    <MotionP
      className=" max-w-5xl mx-auto text-center tracking-tight font-lato font-bold text-[#1c1f48] text-xl md:text-2xl md:leading-snug"
      initial={{ opacity: 0, y: '20vh' }}
      animate={controls}
      transition={{ duration: 0.7, delay: 2.7 }}
    >
      {children}
    </MotionP>
  );
};

const FeatureDescription = ({ children, controls }: { children?: React.ReactNode, controls: AnimationControls }) => {
  return (
    <MotionP
      className={cn(
        "text-sm md:text-base  max-w-4xl text-center mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-center max-w-sm mx-0 md:text-sm my-2"
      )}
      initial={{ opacity: 0, y: '20vh' }}
      animate={controls}
      transition={{ duration: 0.7, delay: 3 }}
    >
      {children}
    </MotionP>
  );
};

export const SkeletonOne = ({ controls }: { controls: AnimationControls }) => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-[85%]">
      <MotionDiv
        className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group "
        initial={{ opacity: 0, y: '20vh' }}
        animate={controls}
        transition={{ duration: 0.7, delay: 4 }}
      >
        <div className='w-full flex flex-col items-start justify-center pl-7'>
          <div className='mb-5 font-lato lg:text-4xl xl:text-5xl font-extrabold text-[#1c1f48] ' >
            The {` `}
            <span className='bg-gradient-to-t from-[#08ac86] via-[#1c7872] to-[#3b3e61] bg-clip-text text-transparent'>
              Appliance Repair
            </span> {` `}
            Experts You Can Trust
          </div>
          <div className='mb-5'>
            <div className={`lg:text-sm xl:text-base leading-6 ${roboto.className} text-[#7a7a7a] mb-[14px]`}>

              We offer a full range of appliance repair services by certified professionals, including refrigerators, washers, and dryers.
              Our expertise extends to dishwashers, ovens, microwaves, and BBQs. Simply fill out our form to start the process.
              Experience easy and convenient service today!
            </div>
          </div>
          <div className=' flex items-center justify-center'>
            <div className=' w-20 xl:w-32 lg:mb-6 xl:mb-0 border-r border-[#bababa] '>
              <Image className='rounded-full drop-shadow-lg lg:w-16 xl:w-20 ' src="/repair-man.jpg" alt='repair-man' width={400} height={400} />
            </div>
            <div className={`lg:w-80 xl:w-96 flex items-center justify-center pl-12 text-[#04cf9c] text-base ${roboto.className} italic`} style={{ fontStyle: 'italic' }}>
              “We offer quick, reliable appliance repairs with clear, upfront pricing. As your local experts,
              we’re dedicated to your satisfaction!.” 😊
            </div>
            <div>
              <Image className='absolute top-[290px]' src="/quote-left.png" alt='quote-left' width={20} height={20} />
            </div>
          </div>

        </div>
      </MotionDiv>

      <div className="absolute bottom-0 z-40 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {

  let ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const Control = useAnimation();

  useEffect(() => {
    if (isInView) {
      Control.start({
        opacity: 1, y: 0
      })
    }
  }, [isInView])
  return (
    <div ref={ref}>
      <MotionDiv

        className="w-full  p-8  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group "
        initial={{ opacity: 0, y: '20vh' }}
        animate={Control}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <div className="w-[400px] mb-5 flex flex-col items-start justify-center ">
          <div className="flex flex-col items-start gap-2 justify-center mb-5 font-lato text-5xl font-extrabold text-[#1c1f48]">
            <div className="bg-gradient-to-r from-[#08ac86] via-[#136369] to-[#193351] bg-clip-text text-transparent">
              We Are Here
            </div>
            For Every Season
          </div>
          <div className={`text-sm  leading-6 ${roboto.className} text-[#7a7a7a] mb-7`}>
            At TABRID RRAHA, we pride ourselves on being your reliable partner for all your appliance repair needs,
            no matter the season. Our skilled technicians are available year-round to ensure your appliances are functioning optimally.
          </div>
          <StyledButton />
        </div>
        <div className="absolute bottom-0 z-40 inset-x-0 h-32 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      </MotionDiv>
    </div>
  );
};

export const SkeletonTwo = ({ controls }: { controls: AnimationControls }) => {
  const images1 = [
    "/appliance3.jpg",
    "/appliance2.jpg",
    "/appliance1.webp",

  ];

  const images2 = [
    "/appliance1.webp",
    "/appliance4.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10  overflow-hidden">
      {/* TODO */}
      <MotionDiv
        className="flex flex-row -ml-20"
        initial={{ opacity: 0, y: '20vh' }}
        animate={controls}
        transition={{ duration: 0.7, delay: 3.5 }}
      >
        {images1.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </MotionDiv>
      <MotionDiv
        className="flex flex-row"
        initial={{ opacity: 0, y: '20vh' }}
        animate={controls}
        transition={{ duration: 0.7, delay: 3.7 }}
      >
        {images2.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </MotionDiv>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

const SkeletonSeven = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

export const SkeletonFour = () => {
  let ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const Control = useAnimation();

  useEffect(() => {
    if (isInView) {
      Control.start({
        opacity: 1, y: 0
      })
    }
  }, [isInView])
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (

    <div ref={ref}>
      <MotionDiv
        initial={{ opacity: 0, y: '20vh' }}
        animate={Control}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="flex items-center justify-center lg:justify-end w-[100%]"
      >
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="lg:w-[90%] xl:w-full h-[330px] flex flex-col items-center justify-center rounded-[20px] bg-[#f0eff4] px-2 xl:px-7 pt-7 pb-0 mt-8 transition-all duration-300 hover:mt-6 hover:shadow-lg"
        >
          <div className={`lg:text-sm xl:text-base text-center leading-6 ${roboto.className} text-[#7a7a7a] mb-5`}>
            Choose professional appliance repair services for peace of mind
            and reliable solutions. Your appliances deserve the best!
          </div>
          <div className="w-fit lg:h-48 xl:h-72 flex items-start justify-center">
            <div className=" w-fit h-full flex justify-center items-start gap-2">
              <motion.div
                variants={first}
                className="h-full flex justify-center items-start "
              >
                <div className="lg:w-[140px] xl:w-[160px] lg:h-[200px] xl:h-[210px] flex flex-col items-center justify-start pt-5 px-0 border border-neutral-200 rounded-2xl bg-[#f6f5f9]">
                  <div className="lg:w-[50px] xl:w-[60px] lg:h-[50px] xl:h-[60px] p-[14.5px] bg-[#1c1f48] rounded-[10px] mb-5">
                    <Image src="/mony.png" alt="mony" width={29} height={29} />
                  </div>
                  <div className={`lg:text-xl xl:text-2xl text-center font-extrabold leading-6 font-lato text-[#1c1f48] mb-2`}>
                    Affordable
                  </div>
                  <div className={`lg:text-sm xl:text-base text-center leading-6 ${roboto.className} text-[#7a7a7a] mb-5`}>
                    Quality repairs, unbeatable prices.
                  </div>

                </div>
              </motion.div>

              <div className="lg:w-[150px] xl:w-[220px] lg:h-[220px] xl:h-[250px] z-10 flex flex-col items-center justify-start bg-white rounded-xl shadow-xl pt-5 px-2 xl:px-5 pb-[30px]">
                <div className="lg:w-[50px] xl:w-[60px] lg:h-[50px] xl:h-[60px] p-[14.5px] bg-[#04cf9c] rounded-[10px] mb-5">
                  <Image src="/person.png" alt="mony" width={29} height={29} />
                </div>
                <div className={`lg:text-xl xl:text-2xl text-center font-extrabold leading-6 font-lato text-[#1c1f48] mb-2`}>
                  Professional
                </div>
                <div className={`lg:text-sm xl:text-base text-center text-wrap leading-6 ${roboto.className} text-[#7a7a7a] mb-5`}>
                  Precision in every repair, your appli-ances deserve the best!
                </div>
              </div>

              <motion.div
                variants={second}
                className="h-full flex justify-center items-start "
              >
                <div className="lg:w-[150px] lg:h-[200px] xl:w-[170px] xl:h-[210px] flex flex-col items-center justify-start pt-5 px-2 border border-neutral-200 rounded-2xl bg-[#f6f5f9]">
                  <div className="lg:w-[50px] xl:w-[60px] lg:h-[50px] xl:h-[60px] p-[14.5px] bg-[#1c1f48] rounded-[10px] mb-5 ">
                    <Image src="/quality.png" alt="mony" width={29} height={29} />
                  </div>
                  <div className={`lg:text-xl xl:text-2xl text-center font-extrabold leading-6 font-lato text-[#1c1f48] mb-2`}>
                    High Quality
                  </div>
                  <div className={`lg:text-sm xl:text-base text-center leading-6 ${roboto.className} text-[#7a7a7a] mb-5`}>
                    High-quality appliance repair, guaranteed.
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </MotionDiv>
    </div>
  );
};




{/**
  
  <div className='w-[90%] h-full flex flex-col items-center justify-center border-x border-dashed pt-[100px] pb-[50px]'>







          <div className=' w-[87%] h-full flex  items-center justify-center gap-5'>
            <div className="flex  rounded-2xl border p-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  ">
              <div className='w-full flex flex-row items-center justify-center pr-7'>
                <div className='w-[230px] flex flex-col items-center justify-center mr-[15px]'>
                  <div className=' mb-4'>
                    <Image className='rounded-xl shadow-xl ' src="/appliance1.webp" alt='appliance1' width={400} height={400} />
                  </div>
                  <div>
                    <Image className='rounded-xl shadow-xl' src="/appliance2.jpg" alt='appliance1' width={400} height={400} />
                  </div>
                </div>
                <div className='w-[297px] flex flex-col justify-center items-center'>
                  <div className=' mb-4'>
                    <Image className='rounded-xl shadow-xl' src="/appliance3.jpg" alt='appliance1' width={400} height={400} />
                  </div>
                  <div className=''>
                    <Image className='rounded-xl shadow-xl' src="/appliance4.jpg" alt='appliance1' width={400} height={400} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-2xl h-full border p-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  ">
              <div className='w-full flex flex-col items-center justify-center pl-7'>
                <div className='mb-5 font-lato text-5xl font-extrabold text-[#1c1f48] ' >
                  The {` `}
                  <span className='bg-gradient-to-t from-[#08ac86] via-[#1c7872] to-[#3b3e61] bg-clip-text text-transparent'>
                    Appliance Repair
                  </span> {` `}
                  Experts You Can Trust
                </div>
                <div className='mb-5'>
                  <div className={`text-base leading-6 ${roboto.className} text-[#7a7a7a] mb-[14px]`}>

                    We offer a full range of appliance repair services by certified professionals, including refrigerators, washers, and dryers.
                    Our expertise extends to dishwashers, ovens, microwaves, and BBQs. Simply fill out our form to start the process.
                    Experience easy and convenient service today!
                  </div>
                </div>
                <div className=' flex items-center justify-center'>
                  <div className='w-32 border-r border-[#bababa] '>
                    <Image className='rounded-full drop-shadow-lg w-20 ' src="/repair-man.jpg" alt='repair-man' width={400} height={400} />
                  </div>
                  <div className={`w-96 flex items-center justify-center pl-12 text-[#04cf9c] text-base ${roboto.className} italic`} style={{ fontStyle: 'italic' }}>
                    “We offer quick, reliable appliance repairs with clear, upfront pricing. As your local experts,
                    we’re dedicated to your satisfaction!.” 😊
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className='relative top-[-10px] inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-[11]'>
          </div>
        </div>
  */}