import {app} from "./app.js"
import { mongooseConnection } from "./db/db.js";
import consola from "consola";
import cookie from "cookie-parser";

import {config} from "dotenv"
config({
    path:"config.env"
})
//momgoose connection
mongooseConnection()
 

//server listening
// consola.success(process.env.PORT)
app.listen(process.env.PORT, () => {
    consola.success(`server is running on 🧑‍💻 ${process.env.PORT} on ${process.env.NODE_ENV} mode 📚`)
})