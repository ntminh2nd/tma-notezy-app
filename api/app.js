const express = require("express");
const app = express();
const userRouter = require("./users/user.router");
const noteRouter = require("./notes/note.router");

require("dotenv").config();

// app.get("/api", (req, res) => {
//     res.json({
//         success: 1,
//         message: "This RESTful API is working."
//     });
// });

app.use(express.json());

// Config CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api/users", userRouter);
app.use("/api/notes", noteRouter);

let port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is running on:", port);
});
