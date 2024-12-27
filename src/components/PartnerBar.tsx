import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export function CarouselDemo() {
  return (
    <Carousel className="pl-3 w-[70%] ">

      <CarouselContent className="">
        <CarouselItem className="flex items-center justify-end w-28 md:w-36 md:mt-5 mr-14 ">
          <div className="p-1">
            <Image key="logo1" src="/LG.svg" width={100} height={100} alt="Logo" />,
          </div>
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center w-14 mr-2 mt-6  ">
          <div className="p-1 ml-6">
            <Image key="logo2" src="/samsung.svg" className="" width={190} height={100} alt="Logo" />,
          </div>
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center w-14 mr-0 ">
          <div className="p-1">
            <Image key="logo3" src="/carrier.svg" width={190} height={100} alt="Logo" />
          </div>
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center w-14 mr-0  ">
          <div className="p-1">
            <Image key="logo4" src="/whirlpool.svg" width={180} height={100} alt="Logo" />
          </div>
        </CarouselItem>
        <CarouselItem className="flex items-center justify-end w-14 mr-0 ">
          <div className="p-1 mr-6">
            <Image className="mr-2" key="logo5" src="/bosch.svg" width={200} height={120} alt="Logo" />
          </div>
        </CarouselItem>
      </CarouselContent>

    </Carousel>
  );
}