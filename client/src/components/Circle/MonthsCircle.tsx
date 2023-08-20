import { Cardinals, Dividers } from "../index";

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
    <div className={`circle-month-container ${toggleMonth ? "hide" : ""}`}>
      <Cardinals />
      <ul className="circle-month">
        {months.map((month, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setNumberOfMonth(index);
                setToggleMonth(true);
                console.log(month);
              }}
            >
              <div className="text">{month[0].str.slice(0, 3)}</div>
              {/* <div className="text">{index + 1}</div> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MonthsCircle;
