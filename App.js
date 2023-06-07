import React, { useState, useEffect } from "react";

const PomodoroApp = () => {
  const [timer, setTimer] = useState(25 * 60); // Durée de travail en secondes
  const [breakTime, setBreakTime] = useState(5 * 60); // Durée de pause en secondes
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          handleCompleteTimer();
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, timer]);

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handlePauseTimer = () => {
    setIsRunning(false);
  };

  const handleResetTimer = () => {
    setTimer(25 * 60);
    setBreakTime(5 * 60);
    setIsRunning(false);
    setIsBreak(false);
  };

  const handleCompleteTimer = () => {
    if (isBreak) {
      setTimer(25 * 60);
      setIsBreak(false);
    } else {
      setTimer(breakTime);
      setIsBreak(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Pomodoro Sandra</h1>
      <div>
        <h2>{isBreak ? "Break Time" : "Work Time"}</h2>
        <h3>{formatTime(timer)}</h3>
        {isRunning ? (
          <button onClick={handlePauseTimer}>Pause</button>
        ) : (
          <button onClick={handleStartTimer}>début</button>
        )}
        <button onClick={handleResetTimer}>recommencer</button>
      </div>
    </div>
  );
};

export default PomodoroApp;
