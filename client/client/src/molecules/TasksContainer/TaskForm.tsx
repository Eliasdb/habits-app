const TaskForm = ({
  toggleInput,
  toggleMiddle,
  handleSubmit,
  setToggleMiddle,
  setTask,
  task,
}) => {
  return (
    <section className="task-input-container">
      <form
        className={`task-form hide-input ${toggleInput ? "show-input" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          className="task-input"
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
  );
};
export default TaskForm;
