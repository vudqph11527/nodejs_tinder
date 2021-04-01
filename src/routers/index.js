const home = require('./home_rts');
const login = require('./account_rts');
function Router(app){
   app.use('/login',login);
   app.use('/home',home);
}
module.exports = Router;
