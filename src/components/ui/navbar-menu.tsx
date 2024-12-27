"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv, MotionP } from "@/lib/framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <MotionP
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[#1c1f48] text-base font-bold transition-all duration-200 hover:text-[#04cf9c] dark:text-white"
      >
        {item}
      </MotionP>
      {active !== null && (
        <MotionDiv
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <MotionDiv
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-[#04cf9c] dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <MotionDiv
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </MotionDiv>
              </MotionDiv>
            </div>
          )}
        </MotionDiv>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  isAtTop,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isAtTop: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={`relative h-14 w-full rounded-full dark:bg-black dark:border-white/[0.2] bg-transparent backdrop-blur-md  shadow-input flex items-center justify-between space-x-4 px-4 lg:px-8 py-4 transition-all duration-700 `}
      style={{
        boxShadow: isAtTop ?
          'rgba(34, 42, 53, 0.06) 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px, rgba(34, 42, 53, 0.04) 0px 0px 0px 0px, rgba(34, 42, 53, 0.08) 0px 0px 0px, rgba(47, 48, 55, 0.05) 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px inset'
          : 'rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset'
      }}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
