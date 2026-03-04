import express from "express";
import employees from "#employees";

const app = express();

app.get("/", req, res) => {
  res.send("Hello Employee!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
  });




//

app.get("/", (req, res) => {
  res.send(`"Hello employee!"`);
});
