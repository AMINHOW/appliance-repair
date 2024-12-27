"use client"
import React, { useState, useEffect } from "react";
import Hero from "@/pages/Hero";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import { Suspense } from 'react'
import { CarouselDemo } from "@/components/PartnerBar";


export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 7000)
  }, [])

  return (
    <>
      {!loading ? (
        <main className="relative w-full h-[300vh] bg-white flex justify-center items-center flex-col  overflow-hidden mx-auto ">
          <div className="w-full h-full">
            <Header />
            <Hero />
            <div className='w-[79%] h-32 px-12 pl-8 py-7 relative flex flex-row items-center justify-center bg-[#1c1f48] rounded-xl top-[-50px] mx-auto '>
              <CarouselDemo />
              <div className="flex items-center justify-end w-auto flex-grow ">
                <div className="flex items-center justify-center w-[80%] text-center font-semibold text-white text-2xl">
                  Repairing Your Trusted Brands!
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <Preloader />
      )}
    </>

  );
}
