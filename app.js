const express = require("express")
const cors = require("cors")
const { dbConnection } = require("./config/db.config");
const userRouter = require("./routers/user.routes")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = process.env.PORT
dbConnection();
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]
}))

app.use("/auth", userRouter)

app.listen((port), ()=>{
    console.log(`Server started on the port ${port}`)
})