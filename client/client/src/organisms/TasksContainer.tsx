import { TaskForm, Tasks } from "../molecules";

const TasksContainer = ({
  toggleInput,
  handleSubmit,
  setToggleMiddle,
  setTask,
  toggleMiddle,
  addItem,
  task,
}) => {
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
      <Tasks addItem={addItem} />
    </>
  );
};
export default TasksContainer;
