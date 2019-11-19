function createCharacter() {
    const createCharTitle = document.getElementById("titleInput");
    const createCharFirstName = document.getElementById("firstNameInput");
    const createCharLastName = document.getElementById("titleInput");
    const createCharEpithet = document.getElementById("epithetInput");
    const createCharHouse = document.getElementById("houseInput");
    const createCharStatus = document.getElementById("statusInput");

    fetch("http://localhost:8080/characters/post", {
        method: "POST",
        body: JSON.stringify({
            "title": createCharTitle.value,
            "first_name": createCharFirstName.value,
            "last_name": createCharLastName.value,
            "epithet": createCharEpithet.value,
            "house": createCharHouse.value,
            "status": createCharStatus.value
        }),
        headers: { "Content-Type": "application/json" }
    }).then(() => {
        window.location.href = "./yourFavourite.html"
    });
}