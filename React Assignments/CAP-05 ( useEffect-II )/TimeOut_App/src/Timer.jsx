import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h2>Timer: {count}</h2>
    </div>
  );
};

export default TimerComponent;
