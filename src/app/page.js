"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import FacebookIcon from "./svgs/FacebookIcon";
import InstagramIcon from "./svgs/InstagramIcon";
import TikTokIcon from "./svgs/TikTokIcon";

export default function Home() {
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      const X = e.clientX;
      const Y = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (X < 0 || Y < 0 || X > windowWidth || Y > windowHeight) {
        cursorRef.current.style.visibility = "hidden";
      } else {
        cursorRef.current.style.visibility = "visible";
        cursorRef.current.style.left = X + "px";
        cursorRef.current.style.top = Y + "px";
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="relative h-[calc(100svh)] overflow-hidden">
      {/* Centered Logo */}
      <div className="absolute z-50 w-full h-full flex items-center px-10 sm:px-20 justify-center">
        <Image
          src="/logo.png"
          alt="Company Logo"
          className="md:max-w-2xl lg:max-w-4xl mb-40 md:mb-24 lg:mb-0"
          width={600}
          height={200}
        />
      </div>

      {/* Text at the bottom */}
      <div className="absolute z-50 w-full bottom-0 flex flex-col gap-y-6 items-center pb-10">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans text-white">
            we create video
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-green-yellow ">
            we create new vision
          </h1>
        </div>

        <div className="flex w-full gap-x-8 items-center justify-center">
          <a href="https://facebook.com/quanrumpro.az" target="_blank">
            <FacebookIcon className="w-6 h-6 fill-white cursor-pointer transition-opacity hover:opacity-80" />
          </a>
          <a href="https://instagram.com/quantumpro.az" target="_blank">
            <InstagramIcon className="w-6 h-6 fill-white cursor-pointer transition-opacity hover:opacity-80" />
          </a>
          <a href="https://tiktok.com/quantumpro.az" target="_blank">
            <TikTokIcon className="w-6 h-6 fill-white cursor-pointer transition-opacity hover:opacity-80" />
          </a>
        </div>

        <h5 className="md:text-xl font-mono text-white">Coming soon</h5>
      </div>

      <div className="cursor hidden sm:block" ref={cursorRef}></div>
    </main>
  );
}
