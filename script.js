console.log("hi there");

//wait until button is clicked
document.getElementById("submitbtn").addEventListener("click", function () {

  //collect data
  var name = document.getElementById("name").value;

  //do something with it
  var message = "Got it, " + name +". We will respond as soon as we can.";

  //confirmation for user
  document.getElementById("display").innerHTML = message;

  });
