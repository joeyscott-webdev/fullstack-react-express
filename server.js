const express = require("express");
const app = express();

const port = 5000;

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstname: "Optimus", lastname: "Prime" },
    { id: 2, firstname: "Bumble", lastname: "Bee" },
    { id: 3, firstname: "Iron", lastname: "Hide" }
  ];
  res.json(customers);
});

app.listen(port, () => console.log("Server started on port " + port));
