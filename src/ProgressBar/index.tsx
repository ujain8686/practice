"use client";
import React, { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const timer = useRef<number | null | NodeJS.Timeout>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          return 0;
        }
        return p + 5;
      });
    }, 500);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-xl">Progress Bar</h1>
      <div className="rounded-xl border w-[400px] h-10 bg-yellow-100 overflow-hidden">
        <div
        //   className={`w-full bg-red-600 h-full translate-x-[calc(${progress}%-100%)] transition-transform duration-1000`}
          className="w-full bg-red-600 h-full transition-transform duration-500 text-right py-2 px-1"
          style={{ transform: `translateX(calc(${progress}% - 100%))` }}
        >{`${progress}%`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
