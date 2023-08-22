const WeekBullets = ({ data }) => {
  return (
    <section className="weeks-content">
      <h5 className="text-xl title">Weeks</h5>
      {data?.map((item) => {
        return (
          <section className="weeks">
            {item.weeks.map((week, i) => {
              let today = new Date();
              const x = new Date(week);
              return (
                <span
                  className="week-item"
                  style={{
                    backgroundColor: `${x < today ? "red" : "white"}`,
                    borderColor: `${x < today ? "red" : "white"}`,
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
export default WeekBullets;
