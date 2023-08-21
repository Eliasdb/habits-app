interface HoursCircleProps {
  hours: [Date];
}

const HoursCircle = ({ hours, toggleHours }: HoursCircleProps) => {
  return (
    <section
      className={`circle-hours-container ${toggleHours ? "show" : "hide"}`}
    >
      <div id="circle-hours">
        {hours &&
          hours.map((hour, i) => {
            return (
              <div
                key={i}
                className="circle"
                onClick={() => console.log(hour)}
                style={{
                  top: `${
                    String(
                      250 +
                        -250 *
                          Math.cos(
                            (360 / hours.length / 180) * (i + -11) * Math.PI
                          )
                    ) + "px"
                  }`,
                  left: `${
                    String(
                      250 +
                        250 *
                          (true
                            ? Math.sin(
                                (360 / hours.length / 180) * (i + -11) * Math.PI
                              )
                            : -Math.sin(
                                (360 / hours.length / 180) * (i + -11) * Math.PI
                              ))
                    ) + "px"
                  }`,
                }}
              >
                {i + 1}
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default HoursCircle;
