var firebaseConfig = {
      apiKey: "AIzaSyDj6udjALU9TPPY_Qz6dTlmtVVFjx7d-Gs",
      authDomain: "st-fairy-school.firebaseapp.com",
      databaseURL: "https://st-fairy-school-default-rtdb.firebaseio.com",
      projectId: "st-fairy-school",
      storageBucket: "st-fairy-school.appspot.com",
      messagingSenderId: "795520427425",
      appId: "1:795520427425:web:b3ff086ab43333d98817e0"
    };

    firebase.initializeApp(firebaseConfig);
    var un = localStorage.getItem("username");
    document.getElementById("usname").innerHTML="Welcome "+un;
    function add_room()
    {
          var roomname = document.getElementById("inputroom").value;
          firebase.database().ref("/").child(roomname).update({
                purpose:"adding the room name"
          });
          localStorage.setItem("room",roomname);
          window.location="chat_page.html";
    }
    

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     console.log(Room_names);
     a="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=a;
     //End code
     });});}
     

getData(); 

function redirect(s)
{
      console.log("b=");
      localStorage.setItem("room",s);
      window.location = "chat_page.html";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room");
      window.location="index.html";
}