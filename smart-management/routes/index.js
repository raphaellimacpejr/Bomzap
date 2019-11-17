var firebase = require('firebase');

var express = require('express');
var router = express.Router();
const User= require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('catalog', { title: 'Express' });
});


router.post('/', function(req, res, next) {
 console.log(req.body);
  res.render('catalog', { title: 'Express' });
});
router.get('/catalog', function(req, res, next) {
  res.render('catalog', { title: 'Express' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'cadastro' });
});

router.get('/login', function(req, res, next) {
  res.render('PRIMEIRATELA', { title: 'cadastro' });
});

router.get('/cap', function(req, res, next) {
  res.render('cap', { title: 'cap' });
});

router.post('/create',function(req, res, next){
    const user = req.body.user;


    
    User.create(user).then((id) =>{
        console.log(user);
        console.log("-----------------------------------");
        res.redirect('/catalog');
        console.log(id);
        
    }).catch((error) => {
        console.log(error);
        res.redirect('error');
    });
   
});

module.exports = router;
