const YearBullets = ({ data }) => {
  return (
    <section className="years-content">
      <h5 className="text-xl bullets-sub-title">Years</h5>
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
                    backgroundColor: `${year < thisYear ? "green" : "white"}`,
                    borderColor: `${year < thisYear ? "green" : "white"}`,
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
export default YearBullets;
