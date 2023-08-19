interface MonthsCircleProps {
  months: {}[];
  setNumberOfMonth: (index: number) => number;
}

const MonthsCircle = ({ months, setNumberOfMonth }: MonthsCircleProps) => {
  return (
    <div className="circle-month-container">
      <ul className="circle-month">
        {months.map((month, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setNumberOfMonth(index);
                console.log(months);
              }}
            >
              <div className="text">{month[0].str.slice(0, 3)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MonthsCircle;
