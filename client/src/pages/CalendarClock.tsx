import { useEffect, useState } from "react";
import {
  AddTask,
  AstroCircle,
  CardinalsCircle,
  ConfirmTask,
  DaysCircle,
  HourCircle,
  MonthsCircle,
} from "../components";

import useGetMonths from "../hooks/useGetMonths";
import useGetDaysInMonth from "../hooks/useGetDaysInMonth";
import useGetHoursInDay from "../hooks/useGetHoursInDay";

const CalendarClock = () => {
  const [numberOfDay, setNumberOfDay] = useState<number>(1);
  const [numberOfMonth, setNumberOfMonth] = useState<number>(0);
  const [numberOfYear, setNumberOfYear] = useState<number>(2023);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);

  const [toggleMonth, setToggleMonth] = useState(false);
  const [toggleHours, setToggleHours] = useState(false);

  const [category, setCategory] = useState();
  const [task, setTask] = useState("");

  useEffect(() => {
    let months = useGetMonths("1-1-2023", "12-1-2023");
    setMonths(months);
  }, []);

  useEffect(() => {
    let days = useGetDaysInMonth(numberOfMonth - 1, 2023);
    setDays(days);
  }, [numberOfMonth]);

  useEffect(() => {
    let hours = useGetHoursInDay(setHours, days, numberOfDay - 1);
    setHours(hours);
  }, [days, numberOfDay]);

  return (
    <>
      <main className="calendar-clock">
        <section id="container">
          <AddTask />
          <ConfirmTask />
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
          <HourCircle
            hours={hours}
            toggleHours={toggleHours}
            setSelectedDate={setSelectedDate}
          />
          <AstroCircle
            hours={hours}
            setToggleMonth={setToggleMonth}
            setCategory={setCategory}
          />
          {/* <CardinalsCircle /> */}
        </section>
      </main>
      <section className="task-input-container">
        <div className="task-input">
          {/* <input
            className="task-input"
            type="text"
            value={task}
            onChange={(e) => e.target.value}
          /> */}
          <input
            className="inp"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
      </section>
      <section className="task-items"></section>
    </>
  );
};
export default CalendarClock;
