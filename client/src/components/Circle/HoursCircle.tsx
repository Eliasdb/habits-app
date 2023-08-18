const HoursCircle = ({ hours }) => {
  return (
    <div className="circle-hours-container">
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
                            (360 / hours.length / 180) * (i + 0) * Math.PI
                          )
                    ) + "px"
                  }`,
                  left: `${
                    String(
                      250 +
                        250 *
                          (true
                            ? Math.sin(
                                (360 / hours.length / 180) * (i + 0) * Math.PI
                              )
                            : -Math.sin(
                                (360 / hours.length / 180) * (i + 0) * Math.PI
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
    </div>
  );
};
export default HoursCircle;
