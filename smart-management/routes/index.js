var firebase = require('firebase');

var express = require('express');
var router = express.Router();
const User= require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('catalog', { title: 'Catalogo' });
});


router.post('/', function(req, res, next) {
 console.log(req.body);
  res.render('catalog', { title: 'Catalogo' });
});
router.get('/catalog', function(req, res, next) {
  res.render('catalog', { title: 'Catalogo' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'cadastro' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/error_login', function(req, res, next) {
  res.render('error_login', { title: 'error_login' });
});

router.get('/error_cadastro', function(req, res, next) {
  res.render('error_cadastro', { title: 'error_cadastro' });
});


//Auteticação

router.post('/login', function(req, res, next) {
 const user = req.body.user;
 console.log(req.body);
 firebase.auth().signInWithEmailAndPassword(user.Email, user.password).then((userfirebase)=>{
        
        console.log(userfirebase);
        console.log("-----------------------------------");
        res.redirect('/catalog');
        
        
    
    }).catch(function (error){
        console.log(error);
        console.error(error.message);
        res.redirect('/error_login');
        
    });
    
    
});


router.get('/cap', function(req, res, next) {
  res.render('cap', { title: 'cap' });
});

router.post('/create',function(req, res, next){
    const user = req.body.user;
    console.log(user);
firebase.auth().createUserWithEmailAndPassword(user.Email, user.password).then((userfirebase)=>{
    User.create(user).then((id) =>{
        console.log(user);
        console.log("-----------------------------------");
        res.redirect('/catalog');
        console.log(id);
    alert('Bem vindo' + create_email.value);    
    }).catch((error) => {
        console.log(error);
        res.redirect('/error_cadastro');
    });
   
        
    }).catch(function (error){
        console.log(error);
        console.error(error.message);
        alert('Falha ao cadastrar')
    });
    
    
});

    

module.exports = router;
