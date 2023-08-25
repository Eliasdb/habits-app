import { useState } from "react";

const TasksList = ({ taskData, category, icon }) => {
  //   console.log(taskData[2].category);
  console.log(taskData);

  const x = [
    {
      task: "Not exercising enough",
    },
    {
      task: "Practicing gratitude daily",
    },

    {
      task: "Cooking everything in olive oil",
    },
    {
      task: "Eating lunch at your desk",
    },
    {
      task: "Taking time for self-care",
    },
    {
      task: "Eating late at night",
    },
    {
      task: "Looking at a screen right before bed",
    },
    {
      task: "Not drinking enough water",
    },
    {
      task: "Being social more often ",
    },
    {
      task: "Meditate each morning",
    },
  ];

  return (
    <section className="task-list-container">
      <div id="container1">
        <div id="container2">
          {/* <ul className="tasks-scroll">
            {taskData
              ?.filter((task, i) => taskData[i].category === category)
              .map((item) => (
                <div className="tasks-inner">
                  {icon}
                  <li>{item.category}</li>
                </div>
              ))}
          </ul> */}
          <ul className="tasks-scroll">
            {x.map((item) => (
              <div className="tasks-inner">
                {icon}
                <li>{item.task}</li>
              </div>
            ))}
          </ul>
        </div>
        <footer></footer>
      </div>
    </section>
  );
};
export default TasksList;
//   .filter((task) => !renderedItemsIds.includes(task.id))
