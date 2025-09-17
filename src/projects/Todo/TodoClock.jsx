import { useEffect, useState } from "react";

export const TodoClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(`${now.toLocaleDateString()} ${now.toLocaleTimeString()}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="clock">{time}</p>;
};
