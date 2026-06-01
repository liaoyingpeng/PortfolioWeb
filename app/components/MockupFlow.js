"use client";

import { useState } from "react";
import LaptopMockup from "./LaptopMockup";
import PhoneMockup from "./PhoneMockup";

export default function MockupFlow({ images, isPhoneProject = false, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const Mockup = isPhoneProject ? PhoneMockup : LaptopMockup;

  return (
    <div className="overflow-hidden border border-white/10 bg-black/20 p-5 shadow-inner shadow-black/25">
      <div className="flex min-w-0 flex-col gap-5 md:flex-row md:items-stretch">
        {images.map((imageUrl, imageIndex) => {
          const isActive = imageIndex === activeIndex;

          return (
            <button
              key={imageUrl}
              type="button"
              onClick={() => setActiveIndex(imageIndex)}
              className={`group/mockup min-w-0 border border-white/10 bg-white/[0.035] p-4 text-left transition duration-500 hover:border-white/45 hover:bg-white/[0.055] focus:outline-none focus-visible:border-black md:p-5 ${
                isActive ? "md:flex-[1.65]" : "md:flex-[0.78] md:opacity-70 hover:md:opacity-100"
              }`}
              aria-pressed={isActive}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <p className="text-xs uppercase tracking-[0.26em] text-stone-300">
                  {imageIndex === 0 ? "Before" : "After"}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-stone-600">
                  {isActive ? "Expanded" : "Tap to view"}
                </p>
              </div>

              <div
                className={`flex items-center justify-center overflow-hidden px-2 py-6 transition-all duration-500 ${
                  isActive ? "min-h-[21rem] md:min-h-[24rem]" : "min-h-[16rem] md:min-h-[24rem]"
                }`}
              >
                <div className={`w-full transition duration-500 ${isActive ? "max-w-2xl" : "max-w-md md:scale-[0.86]"}`}>
                  <Mockup imageUrl={imageUrl} title={`${title} ${imageIndex + 1}`} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
