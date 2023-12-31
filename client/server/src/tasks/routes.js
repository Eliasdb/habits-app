const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getTasks);
router.post("/", controller.addTask);
router.get("/:id", controller.getTaskById);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.removeTask);

module.exports = router;
