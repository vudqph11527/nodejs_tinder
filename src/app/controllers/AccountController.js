
class AccountController{

login(req, res){
    return res.render('login',{
        style: 'app.css'
    });

}
register(req, res){
    return res.render('register'
     ,{
        style: 'signup.css'
    }
    );

}
}
module.exports = new AccountController; 
