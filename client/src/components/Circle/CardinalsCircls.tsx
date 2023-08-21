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
      <section id="circle-c">
        {cardinals &&
          cardinals.map((symbol, i) => {
            return (
              <div
                key={i}
                className={`c-circle-${i + 1}`}
                onClick={() => console.log(symbol)}
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
                {symbol}
              </div>
            );
          })}
      </section>
    </>
  );
};
export default CardinalsCircle;
