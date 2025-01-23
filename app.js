import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/error.js";
import cors from "cors"
export const app = express()

const router = express.Router()
app.use(express.json()) //json save as middle ware
app.use(cookieParser()) //cookie-parser
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
)) //allow origin


//default open
app.get("/", (req, res) => {
    res.send("<h2>🧑‍💻🧑‍💻🧑‍💻🧑‍💻🧑‍💻🧑‍💻🧑‍💻</h2>")
})
//user routes 
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tasks", taskRouter)

//using error middleware
app.use(errorHandler)
