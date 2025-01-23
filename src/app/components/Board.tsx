"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

const Board = () => {
  const images = [
    '/images/Abundance.jpeg',
    '/images/graduate.jpeg',
    '/images/job.jpeg',
    '/images/contract.jpeg',
    '/images/couple.jpeg',
    '/images/coast.jpeg',
    '/images/Love Selfie.jpeg',
    '/images/plane.jpeg',
    '/images/dubai.jpeg',
    '/images/passports.jpeg',
    '/images/affirmation.jpeg',
    '/images/money.jpeg',
    '/images/heels.jpeg',
    '/images/skin care.jpeg',
    '/images/shopping.jpeg',
    '/images/code space.jpeg',
    '/images/iphone 12 pro.jpeg',
    '/images/opportunities.jpeg',
    '/images/own business.jpeg',
    '/images/success.jpeg',
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ visibility: "hidden" }} />;
  }

  return (
    <div
      id="heading"
      className="relative px-4 sm:px-8 lg:px-16 xl:px-32 min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center py-16">
        <h1 className="font-extrabold text-white text-6xl md:text-8xl text-center py-4 relative z-10 drop-shadow-lg fade-in float">
          <span className="rotate inline-block">2</span>
          <span className="rotate inline-block">0</span>
          <span className="rotate inline-block">2</span>
          <span className="rotate inline-block">5</span>
        </h1>

        <p className="text-white text-xl md:text-2xl text-center mt-4 opacity-90 relative z-10 slide-up">
          <span className="float inline-block">Your</span>{" "}
          <span className="float inline-block">Vision</span>{" "}
          <span className="float inline-block">Board</span>{" "}
          <span className="float inline-block">for</span>{" "}
          <span className="float inline-block">an</span>{" "}
          <span className="float inline-block">Extraordinary</span>{" "}
          <span className="float inline-block">Year</span>
        </p>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-transparent via-cyan-400/20 to-transparent glow"></div>
          <div className="w-4 h-4 rounded-full bg-cyan-300 absolute top-10 left-20 bounce-slow"></div>
          <div
            className="w-3 h-3 rounded-full bg-pink-300 absolute top-1/4 right-1/4 bounce-slow"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-5 h-5 rounded-full bg-purple-300 absolute bottom-1/3 left-1/3 bounce-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Vision Board Grid for 19 Images */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {images.map((src, index) => (
          <div key={index} className="image-container">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={200}
              height={100}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
