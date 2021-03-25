function toggle() {
    document.getElementById("title").contentEditable = true;
    document.getElementById("mood").contentEditable = true;
    document.getElementById("txt").contentEditable = true;
    document.getElementById("editbtn").style.display= "none";
    document.getElementById("savebtn").style.display= "initial";
}

function restore() {
    document.getElementById("title").contentEditable = false;
    document.getElementById("mood").contentEditable = false;
    document.getElementById("txt").contentEditable = false;
    document.getElementById("savebtn").style.display= "none";
    document.getElementById("editbtn").style.display= "initial";
}