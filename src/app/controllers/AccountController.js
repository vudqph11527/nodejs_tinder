
class AccountController{

login(req, res){
    return res.render('login');

}
register(req, res){
    return res.render('register');

}
}
module.exports = new AccountController; 
