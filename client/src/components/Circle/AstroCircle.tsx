import {
  IconZodiacAries,
  IconZodiacTaurus,
  IconZodiacGemini,
  IconZodiacCancer,
  IconZodiacLeo,
  IconZodiacVirgo,
  IconZodiacLibra,
  IconZodiacScorpio,
  IconZodiacSagittarius,
  IconZodiacCapricorn,
  IconZodiacAquarius,
  IconZodiacPisces,
} from "@tabler/icons-react";
import { Dividers } from "..";

const astroSymbols = [
  <IconZodiacAquarius className="astro-item-1" size={21} />,
  <IconZodiacAries className="astro-item-2" size={21} />,
  <IconZodiacTaurus className="astro-item-3" size={21} />,
  <IconZodiacGemini className="astro-item-4" size={21} />,
  <IconZodiacCancer className="astro-item-5" size={21} />,
  <IconZodiacLeo className="astro-item-6" size={21} />,
  <IconZodiacVirgo className="astro-item-7" size={21} />,
  <IconZodiacLibra className="astro-item-8" size={21} />,
  <IconZodiacScorpio className="astro-item-9" size={21} />,
  <IconZodiacSagittarius className="astro-item-10" size={21} />,
  <IconZodiacCapricorn className="astro-item-11" size={21} />,
  <IconZodiacPisces className="astro-item-12" size={21} />,
];

const AstroCircle = ({}) => {
  return (
    <>
      <div id="circle-astro">
        <Dividers />
        {astroSymbols &&
          astroSymbols.map((symbol, i) => {
            return (
              <div
                key={i}
                className="astro-circle"
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
      </div>
    </>
  );
};
export default AstroCircle;
