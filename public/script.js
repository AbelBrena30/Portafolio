const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");
const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegistrar");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    formRegister.style.display = "none";
    formLogin.style.display = "block";
});

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    formLogin.style.display = "none";
    formRegister.style.display = "block";
});


//Contraseñas iguales en un label que se vaya desvaneciendo
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.createElement("label");
passwordError.style.color = "red";
formRegister.appendChild(passwordError);

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        passwordError.textContent = "Las contraseñas no coinciden";
        
    } else {
        passwordError.textContent = "";
        alert("Registro exitoso");
    }
});
