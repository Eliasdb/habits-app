import { useState } from "react";
import { astroDictionary, astroSymbols } from "../../data/data";
import { Task } from "..";

const TasksList = ({ taskData, category, icon }) => {
  //   console.log(taskData[2].category);
  //   console.log(taskData);

  const x = [
    {
      task: "Not exercising enough",
      category: "category-1",
    },
    {
      task: "Not exercising enough again",
      category: "category-3",
    },
    {
      task: "Practicing gratitude daily",
      category: "category-2",
    },

    {
      task: "Cooking everything in olive oil",
      category: "category-3",
    },
    {
      task: "Eating lunch at your desk",
      category: "category-4",
    },
    {
      task: "Taking time for self-care",
      category: "category-5",
    },
    {
      task: "Looking at a screen right before bed again",
      category: "category-4",
    },
    {
      task: "Not exercisirng enough",
      category: "category-1",
    },
    {
      task: "Eating late at night",
      category: "category-6",
    },
    {
      task: "Looking at a screen right before bed",
      category: "category-7",
    },
    {
      task: "Not exercising enough again again",
      category: "category-9",
    },
    {
      task: "Not drinking enough water",
      category: "category-8",
    },
    {
      task: "Being social more often ",
      category: "category-9",
    },
    {
      task: "Meditate each morning",
      category: "category-10",
    },
    {
      task: "Not drinking enough water again",
      category: "category-3",
    },
    {
      task: "Meditate not!!",
      category: "category-1",
    },
  ];

  return (
    <section className="task-list-container">
      <div id="container1">
        <div id="container2">
          <ul className="tasks-scroll">
            {x.map((item, i) => {
              return <Task key={i} item={item} />;
            })}
          </ul>
          {/* <div class="wrap">
            <div class="quart"></div>

            <div class="center"></div>
          </div> */}
        </div>
        <footer />
      </div>
    </section>
  );
};
export default TasksList;
//   .filter((task) => !renderedItemsIds.includes(task.id))
