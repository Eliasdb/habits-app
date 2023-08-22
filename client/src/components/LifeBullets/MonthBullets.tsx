const MonthBullets = ({ data }) => {
  return (
    <section className="months-content">
      <h5 className="text-xl title">Months</h5>
      {data?.map((item) => {
        return (
          <section className="months">
            {item.months.map((month, i) => {
              let today = new Date();
              const x = new Date(month);
              return (
                <span
                  className="month-item"
                  style={{
                    backgroundColor: `${x < today ? "yellow" : "white"}`,
                    borderColor: `${x < today ? "yellow" : "white"}`,
                  }}
                ></span>
              );
            })}
          </section>
        );
      })}
    </section>
  );
};
export default MonthBullets;
