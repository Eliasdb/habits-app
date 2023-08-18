import { useEffect, useState } from "react";
import { DaysCircle, HourCircle, MonthsCircle } from "./components";
import getMonths from "./hooks/useGetMonths";
import "./App.css";
import getDaysInMonth from "./hooks/useGetDaysInMonth";

function App() {
  const [numberOfMonth, setNumberOfMonth] = useState(0);
  const [numberOfDay, setNumberOfDay] = useState(1);

  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);

  useEffect(() => {
    let months = getMonths("1-1-2023", "12-1-2023");
    setMonths(months);
  }, []);

  useEffect(() => {
    let days = getDaysInMonth(numberOfMonth, 2023);
    setDays(days);
  }, [numberOfMonth]);

  useEffect(() => {
    let hours = getHoursInDay(numberOfDay - 1);
    setHours(hours);
  }, [days, numberOfDay]);

  const getHoursInDay = (index) => {
    // console.log(days[0]);
    if (days[index]) {
      const hoursArray = [];
      for (let i = 0; i < 23; ++i) {
        // takes day and adds an hour each iteration
        const hourOfDay = days[index].setTime(
          days[index].getTime() + 60 * 60 * 1000
        );
        const hour = new Date(hourOfDay);
        hoursArray.push(hour);
      }

      hoursArray.push(new Date(days[index] - 60 * 60 * 1000 * 23));

      setHours(hoursArray);

      return hoursArray;
    }
  };

  return (
    <>
      <main id="container">
        <MonthsCircle months={months} setNumberOfMonth={setNumberOfMonth} />
        <DaysCircle
          days={days}
          numberOfMonth={numberOfMonth}
          setNumberOfDay={setNumberOfDay}
        />
        <HourCircle hours={hours} />
      </main>
    </>
  );
}

export default App;
