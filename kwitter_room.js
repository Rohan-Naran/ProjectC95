const firebaseConfig = {
    apiKey: "AIzaSyCMqGxDV6h1pO2PKf15P4CrBOrGNm1kdR0",
    authDomain: "letschat-18af3.firebaseapp.com",
    databaseURL: "https://letschat-18af3-default-rtdb.firebaseio.com",
    projectId: "letschat-18af3",
    storageBucket: "letschat-18af3.appspot.com",
    messagingSenderId: "313501696109",
    appId: "1:313501696109:web:fce3a004ecff4e1e153f64"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user");
  document.getElementById("h3user_name").innerHTML = "Welcome, " + username + "!";

  function addRoom(){
    room_name = document.getElementById("room_input").value;
    localStorage.setItem("room", room_name);

    firebase.database().ref("/").child(room_name).update({
        purpose: "Added Room"
    });
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log(Room_names);
    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log("You opened this room: " + name);
    localStorage.setItem("room", name);
    window.location = "";
}