import React, { useState, useEffect } from "react";
import MonthClock from "../Clock/MonthClock";
import DaysClock from "../Clock/DaysClock";

import getMonths from "../hooks/getMonths";

export const App = () => {
  const [numberOfMonth, setNumberOfMonth] = useState(0);
  const [months, setMonths] = useState([]);

  useEffect(() => {
    let months = getMonths("1-1-2023", "12-1-2023");
    setMonths(months);
  }, []);

  return (
    <>
      <div id="container">
        <MonthClock
          months={months}
          setNumberOfMonth={setNumberOfMonth}
          numberOfMonth={numberOfMonth}
        />
        <DaysClock months={months} numberOfMonth={numberOfMonth} />
      </div>
    </>
  );
};
