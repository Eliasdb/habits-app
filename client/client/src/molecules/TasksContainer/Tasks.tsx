import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./Task";
import { url } from "../../data/data";

const Tasks = ({ addItem, setListView, listView }) => {
  const [taskData, setTaskData] = useState([]);
  let renderedItemsIds = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        console.log(response);
        const taskData = response.data;
        //   const sortedBy = taskData.sort((a, b) => b.category - a.category);
        setTaskData(taskData);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [addItem]);

  return (
    <>
      <section
        className={`tasks-container ${listView ? "hide-tasks" : ""}`}
        onClick={() => setListView(true)}
      >
        {taskData.map((task, i) => {
          if (i < 4)
            return (
              <div key={i} className="task-row">
                {taskData
                  .filter((task) => !renderedItemsIds.includes(task.id))
                  .map((x, c) => {
                    if (c <= i) {
                      renderedItemsIds.push(x.id);
                      return <Task key={c} />;
                    }
                  })}
              </div>
            );
        })}
      </section>
      {/* Alternative way of looping */}
      {/* <div className="tasks-c">
        {taskData.map((item, i) => {
          if (i < 10)
            return (
              <span
                className={`task-item-${i + 1} item`}
                style={{ color: "white", fontSize: "200px" }}
              >
                &#x2B22;
              </span>
            );
        })}
      </div> */}
    </>
  );
};

export default Tasks;
