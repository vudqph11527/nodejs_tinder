const home = require("./home_rts");
const login = require("./login_rts");
const register = require("./register");
const information = require("./information");
const manage = require("./manage");
function Router(app) {
  // app.use('/getData',home);
  app.use("/manage", manage);
  app.use("/information", information);
  app.use("/register", register);
  app.use("/login", login);
  app.use("/", home);
}
module.exports = Router;
