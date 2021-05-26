var dpImg= "";
function importFileandPreview() 
{
    var dp= document.getElementById ('dpimg');
    var file= document.querySelector ('input[type=file]').files[0];
    var reader= new FileReader();

    reader.addEventListener("load", function () {
        dp.src= reader.result;        
        dpImg.push(reader.result);  
    }, false);

    if (file) 
        reader.readAsDataURL(file);
}