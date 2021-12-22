
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const config = {
      apiKey: "AIzaSyCKsyydWBvgVBprHKVfkVs4mF3ePJFy9kQ",
      authDomain: "kwitter-app-38722.firebaseapp.com",
      databaseURL: "https://kwitter-app-38722-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-38722",
      storageBucket: "kwitter-app-38722.appspot.com",
      messagingSenderId: "957419507870",
      appId: "1:957419507870:web:68616854bb3857360ceb8f"
    };
firebase.initializeApp(config);








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();





function addRoom()
{
room_name= document.getElementById("room_name").value;
firebase.datbase().ref("/").child(room_name).update({
purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
 

function redirectToRoomName(name)
    {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
    }
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";


}