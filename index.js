const express=require("express");
const {connection}=require("./db")
require("dotenv").config()
const{userRouter}=require("./routes/user.routes")
const{auth}=require("./middleware/auth.middleware")
const cors=require("cors");
const { employeeRouter } = require("./routes/employee.routes");

const app=express()

app.use(express.json())
app.use(cors())

app.use("/users",userRouter)
app.use(auth)
app.use("/employees",employeeRouter)



app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connection to DB successful")
    } catch (error) {
        console.log("Connection to DB Unsuccessful")
        console.log(error)
    }
    console.log(`Server is running at port ${process.env.port}`)
})