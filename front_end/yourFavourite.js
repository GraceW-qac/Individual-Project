function showData() {
    username = sessionStorage.getItem("username");
    fetch("http://localhost:8080/users/get/" + username)
        .then(res => res.json())
        .then(json => printUser(json));
}

function printUser(userData) {
    console.log(userData);
    document.getElementById('u_first_name').innerText = userData.first_name;
    document.getElementById('u_last_name').innerText = userData.last_name;
    document.getElementById('username').innerText = userData.username;
    document.getElementById('email').innerText = userData.email;
    document.getElementById('title').innerText = userData.character_info.title;
    document.getElementById('c_first_name').innerText = userData.character_info.first_name;
    document.getElementById('c_last_name').innerText = userData.character_info.last_name;
    document.getElementById('epithet').innerText = userData.character_info.epithet;
    document.getElementById('house').innerText = userData.character_info.house;
    document.getElementById('status').innerText = userData.character_info.status;
}

showData();