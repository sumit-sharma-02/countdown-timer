import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let timer = useRef();
  const currentDate = new Date();

  const startTimer = () => {
    const countDownDate = new Date(
      `January 1, ${currentDate.getFullYear() + 1} 00:00:00`
    ).getTime();

    timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const countdownGap = countDownDate - currentTime;
      const daysGap = Math.floor(countdownGap / (1000 * 60 * 60 * 24));
      const hoursGap = Math.floor(
        (countdownGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesGap = Math.floor(
        (countdownGap % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsGap = Math.floor((countdownGap % (1000 * 60)) / 1000);

      if (countdownGap < 0) {
        clearInterval(timer.current);
      } else {
        setDays(daysGap);
        setHours(hoursGap);
        setMinutes(minutesGap);
        setSeconds(secondsGap);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="wrapper">
      <div className="heading">
        <h3>Countdown Till</h3>
        <h1>{currentDate.getFullYear() + 1}</h1>
      </div>
      <div className="countdown">
        <div className="box">
          <span className="num" id="day-box">
            {days}
          </span>
          <span className="text">Days</span>
        </div>
        <div className="box">
          <span className="num" id="hr-box">
            {hours}
          </span>
          <span className="text">Hours</span>
        </div>
        <div className="box">
          <span className="num" id="min-box">
            {minutes}
          </span>
          <span className="text">Minutes</span>
        </div>
        <div className="box">
          <span className="num" id="sec-box">
            {seconds}
          </span>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default App;
