"use client";
import { escape } from "querystring";
import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const timerValue = 10;
  const [timer, setTimer] = useState<number>(timerValue);
  const interval = useRef<NodeJS.Timeout | null>(null);

  //   if you want to start at render
  //   useEffect(() => {
  //     startTimer();
  //   }, []);

  const startTimer = () => {
    if (interval.current) return;

    interval.current = setInterval(() => {
      setTimer((t) => {
        if (t > 0) {
          return --t;
        } else {
          clearInterval(interval.current!);
          interval.current = null;
          return 0;
        }
      });
    }, 1000);
  };

  const resetTimer = () => {
    pauseTimer();
    setTimer(timerValue);
  };

  const pauseTimer = () => {
    clearInterval(interval.current as NodeJS.Timeout);
    interval.current = null;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-xl font-bold">Timer</h1>
      <div>Time left : {timer}</div>
      <div className="flex gap-x-2">
        <button className="border px-2 py-1" onClick={startTimer}>
          Start
        </button>
        <button className="border px-2 py-1" onClick={pauseTimer}>
          Pause
        </button>
        <button className="border px-2 py-1" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
