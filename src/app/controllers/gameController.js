class gameController{
    index(req, res){
        res.render('game')
    }
    show(req, res){
        res.render('game')
    }
}
module.exports = new gameController