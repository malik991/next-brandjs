"use client";
import Image from "next/image";
import logo from "../../../public/Logo.svg";
import Link from "next/link";
import down from "../../../public/Chevron-Down.svg";
import xx from "../../../public/X.svg";
import facebook from "../../../public/Facebook.svg";
import feedback from "../../../public/Feed.svg";
import { useEffect, useState } from "react";
export default function Footer() {
  const footerText = [
    { name: "Features", redirectTo: "#features" },
    { name: "EnterPrise", redirectTo: "/" },
    { name: "Pricing", redirectTo: "#pricing" },
    { name: "Careers", redirectTo: "/" },
  ];
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check if the screen is large
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is a common breakpoint for large screens
    };

    // Initial check
    checkScreenSize();
    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Duplicate the footerText array 3 times if on a large screen
  const displayedFooterText = isLargeScreen
    ? [...footerText, ...footerText, ...footerText]
    : footerText;
  // Split the array into rows of three items each
  const rows = [];
  for (let i = 0; i < displayedFooterText.length; i += 3) {
    rows.push(displayedFooterText.slice(i, i + 3));
  }
  return (
    <footer>
      <div className="pt-[80px] pb-[40px]">
        <div className="flex flex-col lg:flex-row lg:gap-x-44">
          <div className="lg:w-1/3">
            <Link href={"/"}>
              <div className="flex gap-x-3 items-center">
                <Image src={logo} alt="Logo image" />
                <h2 className="text-[#36485C] text-[17px] font-bold leading-6">
                  YOUR SITE
                </h2>
              </div>
            </Link>
          </div>

          <div className="mt-[56px] lg:mt-0 lg:w-full">
            {isLargeScreen
              ? rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-row justify-between items-center pb-8"
                  >
                    {row.map((text, index) => (
                      <div key={index} className="items-center">
                        <Link
                          className="text-[#36485C] text-[16px] font-[400] leading-6"
                          href={text.redirectTo}
                        >
                          {text.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))
              : displayedFooterText?.length > 0 &&
                displayedFooterText.map((text, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-8"
                  >
                    <Link
                      className="text-[#36485C] text-[16px] font-[400] leading-6"
                      href={text.redirectTo}
                    >
                      {text.name}
                    </Link>
                    <Image
                      src={down}
                      alt="chevron down img"
                      className="lg:hidden"
                    />
                  </div>
                ))}
          </div>
        </div>

        <div className="mt-[56px]">
          <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:justify-between">
            <div>
              <span className="text-[#5F7896] text-[14px] font-medium leading-[22px]">
                Made with 💖 by Alrehman © Copyright 2024.
              </span>
            </div>
            <div className="flex items-center gap-x-[56px]">
              <Link href={"https://twitter.com/malik9914"} target="_blank">
                <Image src={xx} alt="twitter" />
              </Link>
              <Link
                href={"https://www.facebook.com/malik.m.hassan"}
                target="_blank"
              >
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href={"https://alrehmanai.netlify.app/"} target="_blank">
                <Image src={feedback} alt="facebook" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
