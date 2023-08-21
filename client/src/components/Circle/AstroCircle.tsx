import { Dividers } from "..";
import { astroSymbols } from "../../data/data";

const AstroCircle = () => {
  return (
    <>
      <section className="astro-circle">
        <Dividers />
        {astroSymbols &&
          astroSymbols.map((symbol, i) => {
            return (
              <div
                key={i}
                className="astro-circle-item"
                onClick={() => console.log(symbol)}
                style={{
                  top: `${
                    String(
                      300 +
                        -300 *
                          Math.cos(
                            (360 / astroSymbols.length / 180) *
                              (i + 9.5) *
                              Math.PI
                          )
                    ) + "px"
                  }`,
                  left: `${
                    String(
                      300 +
                        300 *
                          (true
                            ? Math.sin(
                                (360 / astroSymbols.length / 180) *
                                  (i + 9.5) *
                                  Math.PI
                              )
                            : -Math.sin(
                                (360 / astroSymbols.length / 180) *
                                  (i + 9.5) *
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
export default AstroCircle;
