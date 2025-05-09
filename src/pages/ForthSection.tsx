import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'

function ForthSection() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center pb-10 lg:pb-[100px] lg:pt-32 '>
      <div className=' relative h-full lg:w-[90%] xl:w-[79%] flex flex-col items-center justify-center' >
        <div className="flex items-center text-center gap-2 justify-center mb-5 font-lato lg:text-4xl xl:text-5xl lg:font-bold xl:font-extrabold text-[#1c1f48]">

          Discover
          <div className="bg-gradient-to-r text-nowrap from-[#08ac86] via-[#136369] to-[#193351] bg-clip-text text-transparent mx-1">
            Exclusive Features,
          </div>
          Unmatched Quality!
        </div>


        <div className="w-full mx-auto ">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  )
}

export const projects = [
  {
    icon: '/technical.svg',
    title: "Air Conditioning",
    description:
      "Air conditioning service includes maintenance, repair, and installation of AC systems to ensure optimal performance and comfort.",
  },
  {
    icon: '/service-tool1.svg',
    title: "AC Installation",
    description:
      "AC installation involves setting up air conditioning units, ensuring proper placement, connectivity, and efficient operation in a space.",

  },
  {
    icon: '/fix1.svg',
    title: "HVAC Maintenance",
    description:
      "HVAC maintenance ensures efficient operation of heating, ventilation, and air conditioning systems through regular servicing.",

  },
  {
    icon: '/settings.svg',
    title: "Furnace Installation",
    description:
      "Furnace installation involves setting up a heating system to provide warmth in residential or commercial spaces.",

  },
  {
    icon: '/service.svg',
    title: "Furnace Repair",
    description:
      "Furnace repair involves diagnosing and fixing issues to restore the heating system's functionality and efficiency.",

  },
  {
    icon: '/form.svg',
    title: "Indoor Air Quality",
    description:
      "We deliver tailored solutions to enhance indoor air quality, ensuring healthier and more comfortable living spaces by reducing pollutants and allergens.",

  },
];

export default ForthSection;