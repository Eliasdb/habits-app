import axios from "axios";
import { useEffect, useState } from "react";
const url = "http://localhost:3003/api/v1/tasks";

const Tasks = () => {
  const [taskData, setTaskData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const taskData = response.data;
      const sortedBy = taskData.sort((a, b) => b.category - a.category);
      console.log(taskData);
      let outputData = taskData.map(Object.values);
      //   console.log(outputData);

      const FormatDataArray = (array) => {
        // Get least perfect square that is not less than the array length
        const sqrt = Math.ceil(Math.sqrt(array.length));
        // const size = sqrt ** 2;
        // Pad the array with "E" strings so to reach that perfect square size
        const all = [...array];
        const length = 2 * sqrt;
        return Array.from({ length }, (_, width) => {
          return all.splice(0, Math.min(width, length - width));
        }).slice(1); // Skip the first subarray that was produced (empty array)
      };
      const FilterDataArray = () => {
        const xr = FormatDataArray(outputData);
        let result = xr.filter((e) => e.length);
        console.log(result);

        return result;
      };
      const y = FilterDataArray();

      //   console.log(y);

      setTaskData(y);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <section className="task-items">
        {data?.map((item) => {
          return (
            <div>
              <p>{item.task}</p>
              <p>{item.category}</p>
              <p>{item.value}</p>
            </div>
          );
        })}
      </section> */}
      {/* <section className="triangle">
        <div className="t">
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <section className="hex-middle">
            <span>Doing the dishes</span>
          </section>
        </div>
        <div className="t">
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <section className="hex-middle">
            <span>Doing the dishes</span>
          </section>
        </div>
        <div className="t">
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <div>
            <div className="triangle"></div>
          </div>
          <section className="hex-middle">
            <span>Doing the dishes</span>
          </section>
        </div>
      </section> */}
      <section className="r">
        {taskData?.slice(0, 4).map((item, i) => {
          return (
            <div className="row">
              {item.map((item, i) => {
                return (
                  <span style={{ color: "white", fontSize: "200px" }}>
                    &#x2B22;
                    {/* {item[1]} */}
                  </span>
                  //   <span>{item[0]}</span>
                );
              })}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Tasks;
