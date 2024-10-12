import React, { useState, useRef } from "react";
const CountDownTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const startTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const handleInputChange = (event) => {
    setSeconds(parseInt(event.target.value, 10));
  };
  return (
    <div>
      <h2 className>Countdown Timer</h2>
      <div className="input-group">
        <label className="input-group-text" htmlFor="secondsInput">
          Enter seconds:
        </label>
        <input
          type="number"
          className="form-control"
          id="secondsInput"
          value={seconds}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={startTimer}>
          Start Timer
        </button>
        <button onClick={stopTimer}>
          Stop Timer
        </button>
      </div>
      <div>
        <h3>Countdown: {seconds}</h3>
      </div>
    </div>
  );
};
export default CountDownTimer;