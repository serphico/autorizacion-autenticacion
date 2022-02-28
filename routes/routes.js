const {Router} = require('express');
const passport = require('passport');
const prodGen = require('../controllers/prodGen.js')
const isAuth = require('../util/isAuth.js')
const appRoute = Router();
const chatRoute = Router();
const loginRoute = Router();
const registerRoute = Router();

chatRoute.get('/', isAuth,(req,res) => {

    res.render('./layouts/index.pug')
})

appRoute.get('/', isAuth,(req, res) => {
        let products = prodGen();
        let user = req.session.username
        res.render('./layouts/productos.pug',{products,user})
})

appRoute.post('/', (req, res) => {
    let user = req.session.username

    req.session.destroy( err =>{
        if(err){
            console.log(err)
        }else{
                res.render('./layouts/byeUser.pug',{user})
        }
    })

})


registerRoute.get('/', (req,res) => {

    res.render('./layouts/registro.pug')
})

registerRoute.post('/', passport.authenticate('registro',{failureRedirect: '/failregistro', failureMessage: true, successRedirect: '/login'}))

loginRoute.get('/', (req,res) => {

    res.render('./layouts/login.pug')
})

loginRoute.post('/', passport.authenticate('login',{failureRedirect: '/faillogin', successRedirect: '/api/productos-test'}))

module.exports = {appRoute,chatRoute,loginRoute,registerRoute};