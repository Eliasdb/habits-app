import { useEffect, useState } from "react";
import {
  AstroCircle,
  DaysCircle,
  HourCircle,
  MonthsCircle,
} from "../components";

import useGetMonths from "../hooks/useGetMonths";
import useGetDaysInMonth from "../hooks/useGetDaysInMonth";
import useGetHoursInDay from "../hooks/useGetHoursInDay";

const CalendarClock = () => {
  const [numberOfMonth, setNumberOfMonth] = useState<number>(0);
  const [numberOfDay, setNumberOfDay] = useState<number>(1);

  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);

  const [toggleMonth, setToggleMonth] = useState(false);
  const [toggleHours, setToggleHours] = useState(false);

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
        <MonthsCircle
          months={months}
          setMonths={setMonths}
          toggleMonth={toggleMonth}
          setNumberOfMonth={setNumberOfMonth}
          setToggleMonth={setToggleMonth}
        />
        <DaysCircle
          days={days}
          numberOfMonth={numberOfMonth}
          setNumberOfDay={setNumberOfDay}
          toggleMonth={toggleMonth}
          setToggleMonth={setToggleMonth}
          toggleHours={toggleHours}
          setToggleHours={setToggleHours}
        />
        <HourCircle hours={hours} toggleHours={toggleHours} />
        <AstroCircle hours={hours} setToggleMonth={setToggleMonth} />
      </main>
    </div>
  );
};
export default CalendarClock;
