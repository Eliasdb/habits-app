import React, { useEffect, useState } from "react";
import getMonths from "./getMonths";
import Test from "./Test";

const Clock = ({ months, setNumberOfMonth, numberOfMonth }) => {
  return (
    <>
      <ul className="circles">
        {months.map((month, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setNumberOfMonth(index);
              }}
            >
              <div className="text">{month[0].str.slice(0, 3)}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Clock;
