import React, { useState, useEffect } from 'react';
import './App.css'
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{border:"2px solid teal" , width:"200px", height:"200px",marginLeft:"400px"}}>
      <h2>Timer</h2>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default Timer;
