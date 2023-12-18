import React, { useEffect, useState } from "react";

export default function useLiveClock() {
  const [cancelId, setCancelId] = useState();
  const [hoursHandle, setHoursHandle] = useState(0);
  const [minutesHandle, setMinutesHandle] = useState(0);
  const [secondsHandle, setSecondsHandle] = useState(0);
  const [millisHandle, setMillisHandle] = useState(0);

  // Update Time
  useEffect(() => {
    setHandles();

    const cancelId = requestAnimationFrame(setHandles);
    setCancelId(cancelId);

    return () => {
      cancelAnimationFrame(cancelId);
    };
  }, []);

  function setHandles() {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const millis = currentTime.getMilliseconds();

    // Set Angle
    const extraHourAngle = minutes * (30 / 60);
    const hourAngle = hours * 30 + extraHourAngle;

    const extraMinuteAngle = seconds * (6 / 60);
    const minuteAngle = minutes * 6 + extraMinuteAngle;

    const extraSecondAngle = millis * (6 / 1000);
    const secondAngle = seconds * 6 + extraSecondAngle;

    const milliAngle = millis * (360 / 1000);

    setHoursHandle(hourAngle);
    setMinutesHandle(minuteAngle);
    setSecondsHandle(secondAngle);
    setMillisHandle(milliAngle);

    const cancelId = requestAnimationFrame(setHandles);
  }

  return { hoursHandle, minutesHandle, secondsHandle, millisHandle };
}
