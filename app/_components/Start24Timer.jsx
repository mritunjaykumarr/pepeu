'use client'
import { useEffect, useState } from "react";

function Start24Timer({ initialTime }) {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Function to convert milliseconds to readable time format
  function convertMillisecondsToReadableTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    // Set initial readable time
    const { hours, minutes, seconds } =
      convertMillisecondsToReadableTime(remainingTime);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    // Timer logic
    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1000; // Decrease by 1 second (1000 milliseconds)

        // Check if time is up
        if (newTime <= 0) {
          clearInterval(timerId); // Clear the timer
          return 0; // Set remaining time to 0
        }
        return newTime;
      });
    }, 1000); // Update every second

    // Cleanup timer on component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array to run only once on mount

  // Update the readable time every second
  useEffect(() => {
    const { hours, minutes, seconds } =
      convertMillisecondsToReadableTime(remainingTime);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, [remainingTime]); // Run this effect when remainingTime changes

  return (
    <div>
      <p className="text-[1.2em] text-[#ff6347]">{`${hours} : ${minutes} : ${seconds}`}</p>
    </div>
  );
}

export default Start24Timer;
