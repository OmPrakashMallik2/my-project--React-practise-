import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function showTime() {
    let hh = time.getHours();
    const mm = time.getMinutes();
    const ss = time.getSeconds();

    if (hh > 12) {
      hh = hh % 12;
    }

    const am_pm = hh < 12 ? "AM" : "PM";
    return `${addZero(hh)}:${addZero(mm)}:${addZero(ss)} ${am_pm}`;
  }

  function addZero(data) {
    return (data < 10 ? "0" : "") + data;
  }

  return (
    <div className="p-10">
      <h1 className="text-9xl font-bold text-center">{showTime()}</h1>
    </div>
  );
}

export default DigitalClock;
