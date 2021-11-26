import React, { useEffect, useState, useRef } from "react";
import "./styles/Clock.css";

export const Clock = () => {
  // let now = new Date();
  const [now, setNow] = useState(new Date());
  const [hour, setHour] = useState(
    String(now.getHours()).padStart(2, "0").split("")
  );
  const [minutes, setMinutes] = useState(
    String(now.getMinutes()).padStart(2, "0").split("")
  );
  const [seconds, setSeconds] = useState(
    String(now.getSeconds()).padStart(2, "0").split("")
  );
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setNow(new Date());
      setHour(String(now.getHours()).padStart(2, "0").split(""));
      setMinutes(String(now.getMinutes()).padStart(2, "0").split(""));
      setSeconds(String(now.getSeconds()).padStart(2, "0").split(""));
    }, 1000);

    return () => clearInterval(interval.current);
  }, [now]);

  return (
    <div className="clock">
      <div className="clock_container">
        <span className="clock_box">
          {hour.map((number, idx) => (
            <p key={idx}>{number}</p>
          ))}
        </span>
        <span className="clock_box">
          {minutes.map((number, idx) => (
            <p key={idx}>{number}</p>
          ))}
        </span>
        <span className="clock_seconds">
          {seconds.map((number, idx) => (
            <p key={idx}>{number}</p>
          ))}
        </span>
      </div>
    </div>
  );
};
