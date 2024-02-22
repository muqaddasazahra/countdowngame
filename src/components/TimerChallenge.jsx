import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const dialog=useRef();
  var timer = useRef();
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimeStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
    setTimeStarted(false);
  }
  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} title={title}/>
     <section className="challenge">
      <h2>{title}</h2>
      {timerExpired ? "you lost" : ""}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"}Challenge
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Timer isrunning..." : " Timer inactive"}
      </p>
    </section>
    </>
  );
}
