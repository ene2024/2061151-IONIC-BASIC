const loginBtn = document.getElementById("RegistrarBtn");
const signUpBtn = document.getElementById("IniciarBtn");
const continueBtn = document.getElementById("continueBt");
const user = document.getElementById("usuarioIn");
const password = document.getElementById("passwordIn");
const popUp = document.getElementById("popUp");
const msg = document.getElementById("message");

function iniciar(){
    if(user.value === "" || password.value === ""){
        alert("Porfavor llene todos los campos");
        return;
    }

    msg.innerHTML = "Inicio de sesion exitoso " + (user.value).bold();
    popUp.style.display = "flex";
}

function registrar(){
    if(user.value === "" || password.value === ""){
        alert("Porfavor llene todos los campos");
        return;
    }

    msg.innerHTML = "Registro exitoso " + (user.value).bold();
    popUp.style.display = "flex";
}

function emptyFields(){
    user.value = "";
    password.value = "";
    msg.innerHTML = "";
    popUp.style.display = "none";
}   

loginBtn.addEventListener('click', iniciar);
signUpBtn.addEventListener('click', registrar);
continueBtn.addEventListener('click', emptyFields);