const express = require('express')
const route = express.Router()
const gamecontroleer = require('../app/controllers/gameController')

route.get('/:slug', gamecontroleer.show)
route.get('/', gamecontroleer.index)

module.exports = route