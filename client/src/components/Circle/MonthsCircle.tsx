const MonthsCircle = ({ months, setNumberOfMonth }) => {
  return (
    <div className="circle-month-container">
      <ul className="circle-month">
        {months.map((month, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setNumberOfMonth(index);
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
