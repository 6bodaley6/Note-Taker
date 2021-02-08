const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", require("./routes/apiRoutes"));
app.use("/", require("./routes/htmlRoutes"));

app.listen(port, () => {
  console.log(`API server now on port 3001!`);
});

// // const express = require("express");
// // const app = express();
// // const port = 3000;

// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// // app.listen(port, () => {
// //   console.log(`Example app listening at http://localhost:${port}`);
// // });
