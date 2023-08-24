import { useState } from "react";
import { TaskForm, Tasks, TasksList } from "../molecules";

const TasksContainer = ({
  toggleInput,
  handleSubmit,
  setToggleMiddle,
  setTask,
  toggleMiddle,
  addItem,
  task,
}) => {
  const [listView, setListView] = useState(false);
  return (
    <>
      <TaskForm
        toggleInput={toggleInput}
        toggleMiddle={toggleMiddle}
        handleSubmit={handleSubmit}
        setToggleMiddle={setToggleMiddle}
        setTask={setTask}
        task={task}
      />
      {listView ? (
        <TasksList />
      ) : (
        <Tasks
          setListView={setListView}
          listView={listView}
          addItem={addItem}
        />
      )}
    </>
  );
};
export default TasksContainer;
