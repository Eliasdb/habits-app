import {
  AddTask,
  AstroCircle,
  CardinalsCircle,
  DaysCircle,
  Dividers,
  HourCircle,
  MonthsCircle,
  TaskForm,
} from "../molecules";

const CalendarClock = ({
  toggleInput,
  toggleMonth,
  toggleHours,
  months,
  numberOfMonth,
  days,
  hours,
  setToggleInput,
  setToggleMonth,
  setToggleHours,
  setMonths,
  setNumberOfMonth,
  setNumberOfDay,
  setSelectedDate,
  setCategory,
  toggleMiddle,
  handleSubmit,
  setToggleMiddle,
  setTask,
  task,
}) => {
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
          <TaskForm
            toggleInput={toggleInput}
            toggleMiddle={toggleMiddle}
            handleSubmit={handleSubmit}
            setToggleMiddle={setToggleMiddle}
            setTask={setTask}
            task={task}
          />

          {/* <CardinalsCircle /> */}
        </section>
      </main>
    </>
  );
};
export default CalendarClock;
