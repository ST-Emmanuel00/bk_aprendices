const {Router} = require('express')

const route = Router()

const {get_aprendices, post_aprendiz, put_aprendiz, delete_aprendiz} = require('../controllers/aprendiz')

route.get('/', get_aprendices)
route.post('/', post_aprendiz)
route.put('/', put_aprendiz)
route.delete('/', delete_aprendiz)

module.exports = route