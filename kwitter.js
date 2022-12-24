function addUser(){
    username = document.getElementById("login").value;
    localStorage.setItem("user", username);
    window.location = "kwitter_room.html"
}