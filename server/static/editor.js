function toggle() {
    var x = new Date(document.lastModified);
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = days[x.getDay()];
    var mnt = months[x.getMonth()];
    var dt = x.getDate();
    var yr = x.getFullYear();
    var h = x.getHours();
    var m = x.getMinutes();
    if (m < 10) m = "0" + m;
    if (h < 10) h = "0" + h;
    if (h > 0 && h < 12) var t = h + ":" + m + " am";
    else if (h == 12) var t = 12 + ":" + m + " pm";
    else if (h > 12) var t = h - 12 + ":" + m + " pm";
    else var t = 12 + ":" + m + " am";
    document.getElementById("update").innerHTML =
        "Last updated on " + d + " " + mnt + " " + dt + ", " + yr + " | " + t;
}

function empty(obj) {
    if (obj.innerText == "What's on your mind? Type your thoughts here.")
        obj.innerHTML = "";
    obj.style.color = "black !important";
}

var x = new Date();
var msg = document.getElementById("created").innerHTML;
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = days[x.getDay()];
var mnt = months[x.getMonth()];
var dt = x.getDate();
var yr = x.getFullYear();
var h = x.getHours();
var m = x.getMinutes();
if (m < 10) m = "0" + m;
if (h < 10) h = "0" + h;
if (h > 0 && h < 12) var t = h + ":" + m + " am";
else if (h == 12) var t = 12 + ":" + m + " pm";
else if (h > 12) var t = h - 12 + ":" + m + " pm";
else var t = 12 + ":" + m + " am";
document.getElementById("ctitle").innerHTML =
    months[x.getMonth()] + " " + x.getDate() + ", " + x.getFullYear();
document.getElementById("created").innerHTML =
    msg + " " + mnt + " " + dt + " " + yr + " at " + t;

document.getElementById("text-time").innerHTML = t;

// function createbox(){
//     var box = document.createElement("P");
//     box.innerHTML = "Type something here";
//     document.getElementsByClassName("card-text").appendChild(box);
// }

// $(document).ready(function(){
//     $(".create").click(function(){
//       $("").addClass("card-text text-muted border border-gray-400 flex-1 p-2 mr-2");
//     });
//   });
