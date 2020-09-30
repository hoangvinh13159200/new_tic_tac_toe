const gameRoute = require('./gameRoute')


function router(app){

    app.use('/game', gameRoute)
    app.get('/', (req, res)=>{
        res.render('home')
    })
}

module.exports = router