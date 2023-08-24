const TasksList = ({ taskData, category }) => {
  //   console.log(taskData[2].category);
  console.log(taskData);

  return (
    <section className="task-list-container">
      <div id="container1">
        <div id="container2">
          <ul className="tasks-scroll">
            {taskData
              ?.filter((task, i) => taskData[i].category === category)
              .map((item) => (
                <li>{item.category}</li>
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
