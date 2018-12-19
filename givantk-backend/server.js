const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

//including users routes
const users_routes = require("./api/routes/users");
//including services routes
const services_routes = require("./api/routes/services");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

/* START CONNECTION TO MONGODB */
mongoose
  .connect(
    "mongodb://givantk:givantk123@ds149481.mlab.com:49481/givantk",
    { useCreateIndex: true, useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
/* END CONNECTION TO MONGODB */

// use users routes
app.use("/api/users", users_routes);
// use services routes
app.use("/api/services", services_routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server started on port ${port}.`));
