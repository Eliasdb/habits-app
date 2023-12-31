interface MonthsCircleProps {
  months: [{}];
  setNumberOfMonth: (index: number) => number;
}

const MonthsCircle = ({
  months,
  setNumberOfMonth,
  toggleMonth,
  setToggleMonth,
}: MonthsCircleProps) => {
  return (
    <section className={`months-circle-container ${toggleMonth ? "hide" : ""}`}>
      <ul className="months-circle">
        {months.map((month, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setNumberOfMonth(index + 1);
                setToggleMonth(true);
                console.log(month);
              }}
            >
              {/* <div className="text">{month[0].str.slice(0, 3)}</div> */}
              <div className="month">{index + 1}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default MonthsCircle;
