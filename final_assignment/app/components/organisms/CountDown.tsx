import { useState, useEffect } from "react";

interface CountDownProps {
  max: number;
  interval: number;
  onGameStart: () => void;
}

export const CountDown = ({ max, interval, onGameStart }: CountDownProps) => {
  const [count, setCount] = useState(max);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, interval);
      return () => clearInterval(timer);
    } else {
      onGameStart();
    }
  }, [count, interval]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "5rem",
          fontWeight: "bold",
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default CountDown;
