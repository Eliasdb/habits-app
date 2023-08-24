import {
  AddTask,
  AstroCircle,
  CardinalsCircle,
  DaysCircle,
  HourCircle,
  MonthsCircle,
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
          {/* <CardinalsCircle /> */}
        </section>
      </main>
    </>
  );
};
export default CalendarClock;
