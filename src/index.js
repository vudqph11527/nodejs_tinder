const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 1212;
const path = require("path");
const db = require("./config/index");
const router = require("./routers/index_rts");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');




db.connectWithDB();
app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "handlebars",
  handlebars({
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride('_method'));
router(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
