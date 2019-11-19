const inputUsername = document.getElementById("inputUsername");
const username = sessionStorage.setItem("username", username.value);
const inputPassword = document.getElementById("inputPassword");
const password = sessionStorage.setItem("password", password.value);

async function signIn() {
    await fetch('http://localhost:8080/users/get/' + username.value + "/" + password.value)
}