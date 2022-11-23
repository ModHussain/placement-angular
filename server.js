var createError = require('http-errors');
 var express = require('express');
 var path = require('path');
 var cors = require("cors");
 var bodyParser = require('body-parser');

 const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false   
}));
app.use(cors());
const db = require("./models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// API root
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Placement application." });
});
require("./routes/company.routes")(app);
require("./routes/student.routes")(app);
require("./routes/feedback.route")(app);
require("./routes/groupstudent.route")(app);
require("./routes/studentcompany.route")(app);
// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});