"use client";
import { BentoGridDemo } from '@/components/ui/BentoGridDemo'
import { DotPattern } from "@/components/ui/dot-pattern";
import TextGeneration from '@/components/ui/text/generation-text';
import { MotionDiv } from '@/lib/framer-motion';
import { cn } from '@/lib/utils';
import { useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

function SecondeSection() {
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
  return (
    <section className='w-full h-full flex flex-col items-center justify-center pb-10 lg:pb-40 bg-dotted-spacing-[9px]'>
      <div className='relative h-full lg:w-[90%] xl:w-[79%] flex flex-col items-center justify-center '>
        <div
          ref={reftitle}
          className="px-8"
        >
          <MotionDiv
            className="font-lato text-nowrap font-extrabold text-[#1c1f48] lg:text-[33px] xl:text-4xl lg:leading-snug xl:leading-tight max-w-5xl mx-auto text-center tracking-tight  "
            initial={{ opacity: 0, y: '20vh' }}
            animate={TitleControl}
            transition={{ duration: 0.7 }}
          >
            Providing comprehensive appliance repair solutions
          </MotionDiv>
          <TextGeneration
            className="text-sm lg:text-base  max-w-4xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
            paragraph="Our services encompass a wide array af machines tailored to meet your needs."
            controls={TitleControl}
          />

        </div>

        <BentoGridDemo />
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          )}
        />
      </div>

    </section>
  )
}

export default SecondeSection