import React from "react";
import "../styles/LiveClock.modules.css";
import useLiveClock from "../hooks/useLiveClock";

export default function LiveClock() {
  const { hoursHandle, minutesHandle, secondsHandle, millisHandle } =
    useLiveClock();

  const updateTimeAngle = (rotationDeg) => ({
    transform: `rotate(${rotationDeg}deg)`,
  });

  return (
    <div id="clock">
      <div className="number">12</div>
      <div className="number">1</div>
      <div className="number">2</div>
      <div className="number">3</div>
      <div className="number">4</div>
      <div className="number">5</div>
      <div className="number">6</div>
      <div className="number">7</div>
      <div className="number">8</div>
      <div className="number">9</div>
      <div className="number">10</div>
      <div className="number">11</div>
      <div
        className="handle handle__hour"
        style={updateTimeAngle(hoursHandle)}
      ></div>
      <div
        className="handle handle__minute"
        style={updateTimeAngle(minutesHandle)}
      ></div>
      <div
        className="handle handle__second"
        style={updateTimeAngle(secondsHandle)}
      ></div>
      <div
        className="handle handle__millisecond"
        style={updateTimeAngle(millisHandle)}
      ></div>
    </div>
  );
}
