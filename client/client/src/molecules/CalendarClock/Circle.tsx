import { useState } from "react";

const BaseCircle = ({
  data,
  radius,
  offSet = 0,
  widthHeightItems,
  itemClassName,
  containerClassName,
  onClick,
}) => {
  const [state, setState] = useState();
  return (
    <section
      className={containerClassName}
      style={{
        width: `${radius * 2 + widthHeightItems}px`,
        height: `${radius * 2 + widthHeightItems}px`,
      }}
    >
      {data &&
        data.map((item, i) => {
          return (
            <div
              key={i}
              className={itemClassName}
              onClick={() => setState(item)}
              style={{
                top: `${
                  String(
                    radius +
                      -radius *
                        Math.cos(
                          (360 / data.length / 180) * (i + offSet) * Math.PI
                        )
                  ) + "px"
                }`,
                left: `${
                  String(
                    radius +
                      radius *
                        (true
                          ? Math.sin(
                              (360 / data.length / 180) * (i + offSet) * Math.PI
                            )
                          : -Math.sin(
                              (360 / data.length / 180) * (i + offSet) * Math.PI
                            ))
                  ) + "px"
                }`,
              }}
            >
              {i + 1}
            </div>
          );
        })}
    </section>
  );
};
export default BaseCircle;
