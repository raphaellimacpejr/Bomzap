
// Botões

var createUserButton = document.getElementById('create');
var auth_emailPassButton = document.getElementById('auth');

//Tnputs

var auth_email = document.getElementById('auth_email');
var auth_password = document.getElementById('auth_password');
var create_email = document.getElementById('create_email');
var create_password = document.getElementById('create_password');


// Criar novo usuario

createUserButton.addEventListener('click',function (){
    
// Autenticar com email e senha

auth_emailPassButton.addEventListener('click', function () {
    firebase
    .auth()
    .signInWithEmailAndPassword(auth_email.value, auth_password.value)
    .then(function (result) {
        console.log(result);
        alert('Logado' + auth_email.value);
        })
    .catch(function (error){
        console.error(error.code);
        console.error(error.message);
        alert('Falha ao logar')
    });
});