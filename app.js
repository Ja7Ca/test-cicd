const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const swaggerJSON = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");

const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set('views', __dirname);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    next();
});

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

const router = require("./router");
app.use(router);

  
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;