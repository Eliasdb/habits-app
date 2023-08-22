import { useEffect, useState } from "react";
import useGet80Years from "../hooks/useGet80Years";

const LifeTracker = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const yearsMonthsWeek = useGet80Years("08/14/1997");
    setData(yearsMonthsWeek);
  }, []);

  return (
    <main className="text-3xl lifetracker-container">
      <section className="tracker-title">
        <h3>Life in year, months, weeks</h3>
      </section>
      <section className="input-section">
        {/* <label htmlFor="dob">Date of birth</label> */}
        <input className="dob-input" type="text" placeholder="14/08/1997" />
      </section>
      <section className="years-content">
        <h5 className="text-xl">Years</h5>
        {data?.map((item) => {
          return (
            <section className="years">
              {item.years.map((year, i) => {
                const thisYear = new Date().getFullYear();

                // if (year < thisYear) {
                //   back;
                // }
                return (
                  <span
                    className="year-item"
                    style={{
                      backgroundColor: `${
                        year < thisYear ? "yellow" : "white"
                      }`,
                      border: `${year < thisYear ? "yellow" : "white"}`,
                    }}
                  ></span>
                );
              })}
            </section>
          );
        })}
      </section>
      <section className="months-content">
        <h5 className="text-xl">Months</h5>
        {data?.map((item) => {
          return (
            <section className="months">
              {data?.map((month, i) => {
                let x = item.filteredMonths.length;
                let y = item.months.length;
                console.log(month.filteredMonths.length);
                console.log(month.months.length);

                return (
                  <span
                    className="month-item"
                    style={{
                      backgroundColor: `${
                        month.filteredMonths.length > month.months.length
                          ? "yellow"
                          : "white"
                      }`,
                    }}
                  ></span>
                );
              })}
            </section>
          );
        })}
      </section>
      {/* <section className="weeks-content">
        <h5 className="text-xl">Months</h5>
        {data?.map((item) => {
          console.log(item);
          return (
            <section className="weeks">
              {item.weeks.map((week, i) => {
                return (
                  <span
                    className="week-item"
                    style={{
                      backgroundColor: `${year < thisYear ? "black" : "white"}`,
                    }}
                  ></span>
                );
              })}
            </section>
          );
        })}
      </section> */}
    </main>
  );
};
export default LifeTracker;
