class accountController{
login(req, res){
    return res.render('login');
}
}
module.exports = new accountController; 