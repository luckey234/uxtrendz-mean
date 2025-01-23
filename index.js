const expree =require("express")
const bodyparse=require("body-parser")
const cors=require("cors")
const mongoose = require('./db')
const Employeeeroutes=require("./routes/employee")
const AdminRoute=require("./routes/admin")
const consola=require("consola")
const imageRoute=require("./routes/image")
const sendMail = require("./routes/nodemailer");
const CountryRoutes=require("./routes/country")
const enquiryRoutes=require("./routes/enquiry")
const chatRoutes=require("./routes/chat")
const studentRoutes=require("./routes/student")
const app=expree()

app.use(bodyparse.json())
app.use(bodyparse.urlencoded({ extended: true }));
app.use(cors());
app.listen(3000,()=>consola.success('server started at port 3000 😂'))

app.use('/employees',Employeeeroutes)
app.use('/countries',CountryRoutes)
app.use('/enquiry',enquiryRoutes)
app.use('/admin',AdminRoute)
app.use("/file", imageRoute);
app.use("/uploads", expree.static("uploads"));
app.use('/chat',chatRoutes)
app.use('/student',studentRoutes)
// app.get("/mail", sendMail);
app.get("", (req, res) => {
  res.status(200).json({
    "Message": "API running successfully ✌️✌️✌️",
    "Connected-On": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  });
});