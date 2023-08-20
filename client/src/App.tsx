import { useEffect, useState } from "react";
import { DaysCircle, HourCircle, MonthsCircle } from "./components";

import useGetMonths from "./hooks/useGetMonths";
import useGetDaysInMonth from "./hooks/useGetDaysInMonth";
import useGetHoursInDay from "./hooks/useGetHoursInDay";

import "./App.css";
import Cardinals from "./components/Circle/Cardinals";

function App() {
  const [numberOfMonth, setNumberOfMonth] = useState<number>(0);
  const [numberOfDay, setNumberOfDay] = useState<number>(1);

  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);

  useEffect(() => {
    let months = useGetMonths("1-1-2023", "12-1-2023");
    setMonths(months);
  }, []);

  useEffect(() => {
    let days = useGetDaysInMonth(numberOfMonth, 2023);
    setDays(days);
  }, [numberOfMonth]);

  useEffect(() => {
    let hours = useGetHoursInDay(setHours, days, numberOfDay - 1);
    setHours(hours);
  }, [days, numberOfDay]);

  return (
    <div className="real-container">
      <main id="container">
        <Cardinals />
        <MonthsCircle months={months} setNumberOfMonth={setNumberOfMonth} />
        <DaysCircle
          days={days}
          numberOfMonth={numberOfMonth}
          setNumberOfDay={setNumberOfDay}
        />
        <HourCircle hours={hours} />
      </main>
    </div>
  );
}

export default App;
