import { useState, useEffect } from "react";

const CountDown = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timeId;
    if (start) {
      timeId = setInterval(() => {
        setTime((time) => Number(time) + 1);
      }, 1000);
    }

    return () => clearInterval(timeId);
  }, [start]);

  const haddleStart = () => {
    setStart(true);
  };

  const handdleStop = () => {
    setStart(false);
  };

  const haddleReset = () => {
    setStart(false);
    setTime(0);
  };



  return (
    <>
      <div>
        <h1>Count Down Timer</h1>
        <label htmlFor="time"><p>Set Time (seconds):</p> </label>
        <input
          type="number"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <h2>
          Time left is: <span>{time}</span> seconds
        </h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button disabled={start} onClick={haddleStart}>
            Start
          </button>
          <button disabled={!start} onClick={handdleStop}>
            Stop
          </button>
          <button onClick={haddleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default CountDown;
