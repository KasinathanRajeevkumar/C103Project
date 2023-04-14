
var firebaseConfig = {
    apiKey: "AIzaSyDgHyo10LSbrWr9X51RXOKhihSux2HUhRU",
    authDomain: "class100activity.firebaseapp.com",
    databaseURL: "https://class100activity-default-rtdb.firebaseio.com",
    projectId: "class100activity",
    storageBucket: "class100activity.appspot.com",
    messagingSenderId: "111809977530",
    appId: "1:111809977530:web:ae786136d910851c1bf683"
  };

  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}