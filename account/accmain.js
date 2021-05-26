var newImg= "";
function importFileandPreview() 
{
    var file= document.querySelector ('input[type=file]').files[0];
    var reader= new FileReader();

    reader.addEventListener("load", function () {
        var lastcarbtn= document.getElementById("last");
        var slide= lastcarbtn.getAttribute ("data-bs-slide-to");
        var label= lastcarbtn.getAttribute ("aria-label");

        var carbtn= document.createElement ('button');
        carbtn.type= 'button';        
        carbtn.setAttribute ("data-bs-target", "#cars-intro");
        carbtn.setAttribute ("data-bs-slide-to", slide);
        carbtn.setAttribute ("aria-label", label);

        $("#last" ).before(carbtn);
        slide++;
        lastcarbtn.setAttribute ("data-bs-slide-to", slide);
        lastcarbtn.setAttribute ("aria-label", "Slide " + slide+1);
        

        var cars= document.createElement ('div');
        cars.className= 'carousel-item';

        var img= document.createElement('img');
        img.className= 'd-block w-100';
        img.style.height= '92vh';
        img.src= reader.result;
        
        newImg.push(reader.result);

        cars.appendChild(img);
        $("#car-upl").before(cars);   
        
        $('.carousel').carousel(slide-1);
    }, false);

    if (file) 
        reader.readAsDataURL(file);
}