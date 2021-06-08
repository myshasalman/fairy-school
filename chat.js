function next()
{
    var user_name= document.getElementById("input1").value;
    localStorage.setItem("username",user_name);
    window.location="chat_room.html";
}