var firebaseConfig = {
  apiKey: "AIzaSyBHpU4FwBsmF_envxxGSMshxVQMt_1Fi5c",
  authDomain: "kwitter-52d56.firebaseapp.com",
  databaseURL: "https://kwitter-52d56-default-rtdb.firebaseio.com",
  projectId: "kwitter-52d56",
  storageBucket: "kwitter-52d56.appspot.com",
  messagingSenderId: "803154834346",
  appId: "1:803154834346:web:e331918bc90badd56ab1d3"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name; 

function addroom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";     
}