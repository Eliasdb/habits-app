import { TaskIcon } from "..";
import Task from "./TaskIcon";

const Tasks = ({ setListView, listView, taskData, category }) => {
  let renderedItemsIds = [];

  return (
    <>
      <section
        className={`tasks-container ${listView ? "hide-tasks" : ""}`}
        onClick={() => setListView(true)}
      >
        {[1, 2, 3, 4, 5].map((task, i) => {
          // 4 rows ->[ 0 - 1 - 2 - 3]
          if (i < 4)
            return (
              <div key={i} className="task-row">
                {taskData
                  // search for only the current id
                  .filter((task) => !renderedItemsIds.includes(task.id))
                  .map((taskItem, c) => {
                    // up until 4 items -> [0 - 1 - 2 - 3 ]
                    if (c <= i) {
                      renderedItemsIds.push(taskItem.id);
                      return <TaskIcon key={c} />;
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
