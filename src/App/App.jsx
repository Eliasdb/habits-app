import React, { useState, useEffect } from "react";
import { CalendarHeader } from "../CalendarHeader";
import { Day } from "../Day";
import { NewEventModal } from "../NewEventModal";
import { DeleteEventModal } from "../DeleteEventModal";
import { useDate } from "../hooks/useDate";
import MonthClock from "../Clock/MonthClock";
import DaysClock from "../Clock/DaysClock";
import Test from "../Clock/Test";
import getDaysInMonth from "../Clock/getDays";
import getMonths from "../Clock/getMonths";

export const App = () => {
  const [numberOfMonth, setNumberOfMonth] = useState(0);
  const [months, setMonths] = useState([]);

  useEffect(() => {
    let months = getMonths("1-1-2023", "12-1-2023");
    setMonths(months);
  }, []);

  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const eventForDate = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // const { days, dateDisplay } = useDate(events, nav);

  return (
    <>
      <div id="container">
        {/* <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        /> */}
        {/* 
        <div id="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== "padding") {
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div> */}

        <MonthClock
          months={months}
          setNumberOfMonth={setNumberOfMonth}
          numberOfMonth={numberOfMonth}
        />
        {/* <DaysClock /> */}
        <Test months={months} numberOfMonth={numberOfMonth} />
      </div>
      {clicked && !eventForDate(clicked) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      )}

      {clicked && eventForDate(clicked) && (
        <DeleteEventModal
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter((e) => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
};
