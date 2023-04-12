const express =  require("express");
const app =  express();
const userRouter = require("./users/user.router");

require("dotenv").config();

// app.get("/api", (req, res) => {
//     res.json({
//         success: 1,
//         message: "This RESTful API is working."
//     });
// });

app.use(express.json());
app.use("/api/users", userRouter);

let port = process.env.APP_PORT;

app.listen(port, () => {
    console.log("Server is running on:", port);
});
