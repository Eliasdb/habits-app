const express = require("express");
const taskRoutes = require("./src/tasks/routes");

const app = express();
const port = 3003;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi!!frfwrff");
});

// app.use("/api/v1/tasks", taskRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
