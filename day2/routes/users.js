const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Ali", tasks: ["play", "watch movies"] },
  { id: 2, name: "Maher", tasks: ["pray", "go to gym"] },
  { id: 3, name: "Salim", tasks: ["dance", "jump"] },
];

router.get("/", function (req ,res) 
{
  res.send(users);
}
);

router.get("/:id", function (req, res) {
  const id = req.params.id;
  const userData = users.filter((user) => user.id == id);
  if (userData.length === 0) {
     res.status(404).send("No User Found");
  }

   res.status(200).send(userData);
});

router.get("/:id/tasks", function (req, res) {
  const id = req.params.id;
  const userData = users.filter((user) => user.id == id);
  if (userData.length === 0) {
    res.status(404).send("No User Found");
  }
  res.status(200).send(userData[0].tasks);
});
module.exports = router;
