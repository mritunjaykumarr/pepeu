// Timer.js
"use client"; // Ensure this is a client component
import React, { useEffect, useState } from "react";

const Timer = () => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const today = new Date();
    const dayMonth = "10/28/";
    const yyyy = today.getFullYear();
    const nextYear = yyyy + 1;
    const targetDate =
      today > new Date(`${dayMonth}${yyyy}`)
        ? `${dayMonth}${nextYear}`
        : `${dayMonth}${yyyy}`;

    const countDown = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeRemaining({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full h-24 bg-neutral-800 rounded-lg mb-3 p-4">
      <article className="flex items-center gap-4">
        <p className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl">
          {timeRemaining.days} D
        </p>
        <p className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl">
          {timeRemaining.hours} H
        </p>
        <p className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl">
          {timeRemaining.minutes} M
        </p>
        <p className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl">
          {timeRemaining.seconds} S
        </p>
      </article>
      <p className="text-[#ccc] text-center text-base py-1">
        Until next price will increase
      </p>
    </div>
  );
};

export default Timer;
