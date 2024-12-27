"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionP } from "@/lib/framer-motion";
import Image from 'next/image';
import logo from "../../public/logo-horizontal.png"
import MagicButton from "./ui/MagicButton";

export function NavbarDemo() {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const { scrollYProgress } = useScroll();
  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0 || window.scrollY < 200) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    // Scroll event handler
    const handleScroll = () => {
      // Check if the scroll position is at the top
      setIsAtTop(window.scrollY < 50);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-14 w-[100vw] flex items-center justify-center">
      <Navbar className={` h-14 ${!isAtTop ? 'fixed max-w-[92%] lg:max-w-4xl top-5 translate-y-5 mt-0' : 'fixed max-w-full lg:max-w-[81%] transform-none '}`} isAtTop={isAtTop} visible={visible} />
    </div>
  );
}

function Navbar({ className, isAtTop, visible }: { className?: string; isAtTop: boolean; visible: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn("flex items-center justify-center inset-x-0 z-50 mx-auto filter transition-all duration-500", className)}
        layout
      >
        <Menu setActive={setActive} isAtTop={isAtTop}>
          <Image
            src={logo}
            alt="image"
            width={100}
            height={100}
          />
          <MotionDiv
            className={`hidden lg:flex max-w-full items-center justify-center transition-all duration-700 ${!isAtTop ? 'gap-7' : 'gap-10'}`}
          >
            <MotionP
              transition={{ duration: 0.3 }}
              className=" cursor-pointer text-[#1c1f48] text-base font-bold transition-all duration-200 hover:text-[#04cf9c] dark:text-white"
            >
              Home
            </MotionP>
            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </MotionDiv>
          <MagicButton button="hidden lg:felx xl:flex h-8" border="bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#04cf9c_50%,#FFFFFF_100%)] " content="bg-white text-[#1c1f48] hover:bg-[#04cf9c] " title="Order Now" />
        </Menu>
      </MotionDiv>
    </AnimatePresence>
  );
}





