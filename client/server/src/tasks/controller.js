const pool = require("../../db");
const queries = require("./queries");

// const getTasks = (req, res) => {
//   pool.query(queries.getTasks, (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
// };

// const getTaskById = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query(queries.getTaskById, [id], (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
// };

// const addTask = (req, res) => {
//   const { name, email, age, dob } = req.body;

//   pool.query(queries.checkEmailExists, [email], (error, results) => {
//     if (results.rows.length) {
//       res.send("Email already exists.");
//     }

//     pool.query(
//       queries.addTask,
//       [name, email, age, dob],
//       (error, results) => {
//         if (error) throw error;
//         res.status(201).send("Student created successfully");
//       }
//     );
//   });
// };

// const removeTask = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query(queries.getTaskById, [id], (error, results) => {
//     const noTaskFound = !results.rows.length;
//     if (noTaskFound) {
//       res.send("Task does not exist.");
//     }

//     pool.query(queries.removeTask, [id], (error, results) => {
//       if (error) throw error;
//       res.status(200).send("Task removed successfully");
//     });
//   });
// };

// const updateTask = (req, res) => {
//   const id = parseInt(req.params.id);
//   const { name } = req.body;
//   pool.query(queries.getTaskById, [id], (error, results) => {
//     const noTaskFound = !results.rows.length;
//     if (noTaskFound) {
//       res.send("Task does not exist.");
//     }
//     pool.query(queries.updateTask, [name, id], (error, results) => {
//       if (error) throw error;
//       res.status(200).send("Task updated successfully");
//     });
//   });
// };

module.exports = {
  //   getTasks,
  //   getTaskById,
  //   addTask,
  //   removeTask,
  //   updateTask,
};
