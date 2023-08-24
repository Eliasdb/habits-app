import { Cardinal } from "..";

const CardinalsCircle = () => {
  const cardinals = [
    <Cardinal cardinalDirection="N" />,
    <Cardinal cardinalDirection="E" />,
    <Cardinal cardinalDirection="S" />,
    <Cardinal cardinalDirection="W" />,
  ];
  return (
    <>
      <section className="cardinal-circle">
        {cardinals &&
          cardinals.map((cardinal, i) => {
            return (
              <div
                key={i}
                className={`cardinal-${i + 1}`}
                onClick={() => console.log(cardinal)}
                style={{
                  top: `${
                    String(
                      300 +
                        -300 *
                          Math.cos(
                            (360 / cardinals.length / 180) * (i + 0) * Math.PI
                          )
                    ) + "px"
                  }`,
                  left: `${
                    String(
                      300 +
                        300 *
                          (true
                            ? Math.sin(
                                (360 / cardinals.length / 180) *
                                  (i + 0) *
                                  Math.PI
                              )
                            : -Math.sin(
                                (360 / cardinals.length / 180) *
                                  (i + 0) *
                                  Math.PI
                              ))
                    ) + "px"
                  }`,
                }}
              >
                {cardinal}
              </div>
            );
          })}
      </section>
    </>
  );
};
export default CardinalsCircle;
