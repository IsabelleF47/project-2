
var firebaseConfig = {
  apiKey: "AIzaSyAO6LdnhpYMQ2Z0pNZF76XzwnOuGgDMDZ8",
  authDomain: "bootcamp-project2.firebaseapp.com",
  databaseURL: "https://bootcamp-project2.firebaseio.com",
  projectId: "bootcamp-project2",
  storageBucket: "",
  messagingSenderId: "185623751431",
  appId: "1:185623751431:web:27dc8a38c4302727"
};
firebase.initializeApp(firebaseConfig);
auth = firebase.auth();
var exportObject
$(document).ready(function () {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('user is logged');
      console.log(user.uid);
      currentUser = user.uid
      $("#user").text(`Welcome, ` + user.displayName);
      $("#log-in").removeClass('log-in')
        .addClass('log-out')
        .html('Logout');
    };
  });

  // function getUser() {
  //   $.get("/api/userInfo")
  // };



  $("#userSubmit").on("click"), function(event)
 {
    event.preventDefault();
      exportObject = {
        command: $("#userSelection").val(),
        number: $("#userInput").val()
      };
      switch(expression) {
        case command = withdrawl:
          number = number * -1
          // code block
          break;
        case command = deposit:
          // code block

  // add number to current saved balance from  then current balance then update table at the account balance
      // $.post("/api/SavingsInput",{data : exportObject} ).then
      // function(result){;
alert("You have selected" + command + "from your Savings account");
window.location.href=("/open-page")



}};

$("#createnewuser").on("click",  function(event){
  event.preventDefault();
  exportObject2 = {
    userName: $("#user-name").val(),
    password: $("#password").val()
  };

  // console.log(exportObject2)
  $.post("/api/savingsInput", {
    data: exportObject2
    
  }).then(function(result){
    console.log(result);
    console.log("You have created a new user name and passcode combination!");
    window.location.reload()
  });
});
