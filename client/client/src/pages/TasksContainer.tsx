import { Tasks } from "../components";

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
      <section className="task-input-container">
        <form
          className={`task-input hide-input ${toggleInput ? "show-input" : ""}`}
          onSubmit={handleSubmit}
        >
          <input
            className="inp"
            placeholder="Enter task"
            value={task}
            onChange={(e) => {
              setToggleMiddle(true);
              setTask(e.target.value);
            }}
          />
          <button
            type="submit"
            className={`confirm-btn ${toggleMiddle ? "middle-z-index" : ""}`}
          >
            Add
          </button>
        </form>
      </section>
      <Tasks addItem={addItem} />
    </>
  );
};
export default TasksContainer;
