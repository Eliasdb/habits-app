import Image from "../../assets/middle-img.webp";

interface DaysCircleProps {
  days: [Date];
  setNumberOfDay: number;
}

const DaysCircle = ({ days, setNumberOfDay }: DaysCircleProps) => {
  return (
    <div className="circle-days-container">
      <div id="circle-days">
        {days.map((day, i) => {
          return (
            <div
              key={i}
              className="circle"
              onClick={() => setNumberOfDay(i + 1)}
              style={{
                top: `${
                  String(
                    250 +
                      -250 *
                        Math.cos((360 / days.length / 180) * (i + 0) * Math.PI)
                  ) + "px"
                }`,
                left: `${
                  String(
                    250 +
                      250 *
                        (true
                          ? Math.sin(
                              (360 / days.length / 180) * (i + 0) * Math.PI
                            )
                          : -Math.sin(
                              (360 / days.length / 180) * (i + 0) * Math.PI
                            ))
                  ) + "px"
                }`,
              }}
            >
              {i + 1}
            </div>
          );
        })}
        <img className="center-image" src={Image} alt="image" />
      </div>
    </div>
  );
};
export default DaysCircle;
