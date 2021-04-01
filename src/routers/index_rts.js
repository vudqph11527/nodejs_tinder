const home = require('./home_rts');
const login = require('./login_rts');
const register = require('./register');
function Router(app){
   app.use('/register',register)
   app.use('/login',login);
   app.use('/',home);
}
module.exports = Router;
