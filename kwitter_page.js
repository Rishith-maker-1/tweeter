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
  room_name = localStorage.getItem("room_name");

   function send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
       document.getElementById("msg").value = ""; 
   }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   
   //End code
   });});}
getData();