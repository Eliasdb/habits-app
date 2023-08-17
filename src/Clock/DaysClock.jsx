import React, { useEffect, useState } from "react";
import getDaysInMonth from "./getDays";

const DaysClock = (days) => {
  return (
    <>
      <ul className="circle">
        {days.map((day, i) => {
          //   console.log(i);
          return (
            <li key={i}>
              <div className="text">{i + 1}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default DaysClock;
