function createUser(form) {
    const data = {};
    for (let control of form) {
        if (control.name) {
            data[control.name] = control.value;
        }
    }

    fetch("http://localhost:8080/users/post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    });
}

const inputUsername = document.getElementById("validationTooltipUsername");
const username = sessionStorage.setItem("username", inputUsername.value);
