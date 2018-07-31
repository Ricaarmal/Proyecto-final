const router = require('express').Router();
const User = require('../models/User');
const Product = require('../models/Product');

const passport = require('passport');


function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        return next()
    }else{
        res.json({message: "No tienes permiso"});
    }
}


router.get('/admin', isAuthenticated, (req,res)=>{
    // const admin = req.user.role === "ADMIN";
    // res.json({message: "Esto es Privao"});
    Product.find()
    .then(phones=>{
        res.json(phones)
    }).catch(e=>next(e))
});


router.post('/login', passport.authenticate('local'), (req,res,next)=>{
        res.json(user)    
});


router.post('/signup',(req,res,next)=>{
    User.register(req.body, req.body.password)
    .then(user=>{
      res.json(user)
    })
    .catch(e=>next(e));
})


module.exports = router;