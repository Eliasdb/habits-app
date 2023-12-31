const getTasks = "SELECT * FROM tasks";
const getTaskById = "SELECT * FROM tasks WHERE id = $1";
// // const checkEmailExists = "SELECT s from students s WHERE s.email = $1";
const addTask =
  "INSERT INTO tasks (task, category, value, creationdate) VALUES ($1, $2, $3, $4)";
const removeTask = "DELETE FROM tasks WHERE id = $1";
const updateTask = "UPDATE tasks SET task = $1 WHERE id = $2";

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  removeTask,
  updateTask,
};
