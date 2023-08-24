import Task from "./Task";

const Tasks = ({ setListView, listView, taskData, category }) => {
  let renderedItemsIds = [];

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
