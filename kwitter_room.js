
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBHpU4FwBsmF_envxxGSMshxVQMt_1Fi5c",
    authDomain: "kwitter-52d56.firebaseapp.com",
    projectId: "kwitter-52d56",
    storageBucket: "kwitter-52d56.appspot.com",
    messagingSenderId: "803154834346",
    appId: "1:803154834346:web:e331918bc90badd56ab1d3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function logout() {
    window.location = "index.html";
}