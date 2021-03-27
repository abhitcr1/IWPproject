function toggle() {
    var x = new Date(document.lastModified);
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var d= days[x.getDay()];                    
    var mnt = months[x.getMonth()];
    var dt= x.getDate();
    var yr= x.getFullYear();
    var h= x.getHours();
    var m= x.getMinutes();
    if (m < 10)
        m= "0" + m;
    if (h > 1 && h < 12)
        var t= h + ":" + m + " am";
    else if (h == 12)
        var t= 12 + ":" + m + " pm";
    else if (h > 12)
        var t= (h-12) + ":" + m + " pm";
    else
        var t= 12 + ":" + m + " am";  
    document.getElementById("update").innerHTML= "Last updated on " + d + " " + mnt + " " + dt + ", " + yr + " | " + t;
}
