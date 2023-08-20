import { useState } from "react";
import Monday from "../../assets/weekdays/monday.png";
import Tuesday from "../../assets/weekdays/tuesday.png";
import Wednesday from "../../assets/weekdays/wednesday.png";
import Thursday from "../../assets/weekdays/thursday.png";
import Friday from "../../assets/weekdays/friday.png";
import Saturday from "../../assets/weekdays/saturday.png";
import Sunday from "../../assets/weekdays/sunday.png";

interface DaysCircleProps {
  days: [Date];
  setNumberOfDay: number;
}

const DaysCircle = ({ days, setNumberOfDay }: DaysCircleProps) => {
  const [weekday, setWeekDay] = useState<string>(`${Monday}`);

  return (
    <div className="circle-days-container">
      <div id="circle-days">
        {days.map((day, i) => {
          return (
            <div
              key={i}
              className="circle"
              onClick={() => {
                setNumberOfDay(i + 1);
                console.log(day);
                if (day.toString().includes("Mon")) {
                  setWeekDay(Monday);
                }

                if (day.toString().includes("Tue")) {
                  setWeekDay(Tuesday);
                }

                if (day.toString().includes("Wed")) {
                  setWeekDay(Wednesday);
                }

                if (day.toString().includes("Thu")) {
                  setWeekDay(Thursday);
                }

                if (day.toString().includes("Fri")) {
                  setWeekDay(Friday);
                }

                if (day.toString().includes("Sat")) {
                  setWeekDay(Saturday);
                }

                if (day.toString().includes("Sun")) {
                  setWeekDay(Sunday);
                }
              }}
              style={{
                top: `${
                  String(
                    250 +
                      -250 *
                        Math.cos(
                          (360 / days.length / 180) * (i + -7.5) * Math.PI
                        )
                  ) + "px"
                }`,
                left: `${
                  String(
                    250 +
                      250 *
                        (true
                          ? Math.sin(
                              (360 / days.length / 180) * (i + -7.5) * Math.PI
                            )
                          : -Math.sin(
                              (360 / days.length / 180) * (i + -7.5) * Math.PI
                            ))
                  ) + "px"
                }`,
              }}
            >
              {i + 1}
            </div>
          );
        })}
        <img className="center-image" src={weekday} alt="image" />
      </div>
    </div>
  );
};
export default DaysCircle;
