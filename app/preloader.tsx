"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  duration?: number; 
}

const Preloader = ({ duration = 3000 }: PreloaderProps) => {
  const [loading, setLoading] = useState(true);
  const yearRef = useRef<HTMLDivElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearObj = { value: 2004 };
    
    const tl = gsap.timeline({
      onComplete: () => {

        gsap.to(".preloader-container", {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setLoading(false)
        });
      }
    });

    tl.to(yearObj, {
      value: currentYear,
      duration: duration / 1000,
      ease: "power2.inOut",
      onUpdate: () => {
        if (yearRef.current) {
          yearRef.current.textContent = Math.floor(yearObj.value).toString();
        }
      }
    });

    tl.to(loadingBarRef.current, {
      width: "100%",
      duration: duration / 1000,
      ease: "power2.inOut"
    }, 0);

  }, [duration]);

  return loading ? (
    <div className="preloader-container fixed inset-0 bg-black z-9999 flex flex-col items-center justify-center gap-8">

      <div className="text-center">
        <div ref={yearRef} className="text-8xl md:text-9xl font-bold text-white font-mono">
          2004
        </div>
        <div className="text-sm md:text-base text-white/60 mt-4 tracking-widest uppercase">
          Loading Experience
        </div>
      </div>

      <div className="w-64 md:w-96 h-1 bg-white/20 rounded-full overflow-hidden mt-8">
        <div 
          ref={loadingBarRef}
          className="h-full bg-linear-to-r from-orange-500 to-orange-400 rounded-full"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  ) : null;
};

export default Preloader;
