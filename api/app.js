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
app.use("/api/users", userRouter);
app.use("/api/notes", noteRouter);

let port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is running on:", port);
});
