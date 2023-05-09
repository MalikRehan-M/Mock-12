const express = require("express");
const employeeRouter = express.Router();
const { EmployeeModel } = require("../model/employee.model");
const JWT = require("jsonwebtoken");

employeeRouter.get("/", async (req, res) => {
  try {
    const page=req.params.no
    const start=(page-1)*3
    const employees = await EmployeeModel.find(query).skip(start).limit(3);
    res.status(200).send(employees);

  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});


employeeRouter.post("/add", async (req, res) => {
  try {
    const employee = new EmployeeModel(req.body);
    await employee.save();
    res.status(200).send({ msg: "Posted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

employeeRouter.patch("/update/:employeeID", async (req, res) => {
  const employeeID=req.params.employeeID
  const payload=req.body

  try {
    await EmployeeModel.findByIdAndUpdate({_id:employeeID},payload)
    res.status(200).send({"msg":"Post has been Updated"})

  } catch (error) {
      res.status(200).send({"msg":error.message})
  }
});

employeeRouter.delete("/delete/:employeeID", async (req, res) => {
    const employeeID=req.params.employeeID

    try {
        await EmployeeModel.findByIdAndDelete({_id:employeeID})
        res.status(200).send({"msg":"Post has been deleted"})

    } catch (error) {
        res.status(200).send({"msg":error.message})
    }
});

module.exports = { employeeRouter };
