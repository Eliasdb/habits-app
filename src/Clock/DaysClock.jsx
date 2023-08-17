import React, { useEffect, useState } from "react";
import getDaysInMonth from "../hooks/getDays";

const DaysClock = ({ numberOfMonth }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    let days = getDaysInMonth(numberOfMonth, 2023);
    setDays(days);
  }, [numberOfMonth]);

  return (
    <div id="main">
      {days.map((day, i) => {
        return (
          <div
            className="circle"
            style={{
              top: `${
                String(
                  250 +
                    -250 *
                      Math.cos((360 / days.length / 180) * (i + 0) * Math.PI)
                ) + "px"
              }`,
              left: `${
                String(
                  250 +
                    250 *
                      (true
                        ? Math.sin(
                            (360 / days.length / 180) * (i + 0) * Math.PI
                          )
                        : -Math.sin(
                            (360 / days.length / 180) * (i + 0) * Math.PI
                          ))
                ) + "px"
              }`,
            }}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};
export default DaysClock;
