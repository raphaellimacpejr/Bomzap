var firebase = require('firebase');

var express = require('express');
var router = express.Router();
const User1= require('../models/user1');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('catalog', { title: 'Express' });
});


router.post('/', function(req, res, next) {
 console.log(req.body);
  res.render('catalog', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'cadastro' });
});

router.get('/cap', function(req, res, next) {
  res.render('cap', { title: 'cap' });
});

router.post('/create',function(req, res, next){
    const user1 = req.body.user1;
    console.log(user1);
    User1.create(user1).then((id) =>{
        console.log("-----------------------------------");
        res.redirect('/index');
        console.log(id);
        
    }).catch((error) => {
        console.log(error);
        res.redirect('error');
    });
   
});

module.exports = router;
