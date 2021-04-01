class homeController{
    index(req,res){
        return res.render('home');
    }
}
module.exports = new homeController;