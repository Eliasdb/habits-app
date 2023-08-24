import { useEffect, useState } from "react";
import {
  AddTask,
  AstroCircle,
  CardinalsCircle,
  DaysCircle,
  HourCircle,
  MonthsCircle,
} from "../components";

import useGetMonths from "../hooks/useGetMonths";
import useGetDaysInMonth from "../hooks/useGetDaysInMonth";
import useGetHoursInDay from "../hooks/useGetHoursInDay";
import axios from "axios";
import { url } from "../data/data";
import { TasksContainer } from ".";

const CalendarClock = () => {
  const [numberOfDay, setNumberOfDay] = useState<number>(1);
  const [numberOfMonth, setNumberOfMonth] = useState<number>(0);
  const [numberOfYear, setNumberOfYear] = useState<number>(2023);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [addItem, setAddItem] = useState(false);

  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);

  const [toggleMonth, setToggleMonth] = useState(false);
  const [toggleHours, setToggleHours] = useState(false);
  const [toggleInput, setToggleInput] = useState(false);
  const [toggleMiddle, setToggleMiddle] = useState(false);

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

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setAddItem(!addItem);
    try {
      const resp = axios.post(url, {
        task: task,
        category: category,
        value: 9,
        creationdate: "2023-08-23",
      });
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <main className="calendar-clock">
        <section id="container">
          <AddTask setToggleInput={setToggleInput} toggleInput={toggleInput} />
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
          <CardinalsCircle />
        </section>
      </main>
      <TasksContainer
        addItem={addItem}
        toggleInput={toggleInput}
        handleSubmit={handleSubmit}
        setToggleMiddle={setToggleMiddle}
        setTask={setTask}
        toggleMiddle={toggleMiddle}
        task={task}
      />
    </>
  );
};
export default CalendarClock;
