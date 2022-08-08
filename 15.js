const bgimage = document.getElementById("bg-image");

window.addEventListener("scroll",()=>{
   
    updateImage()
});

function updateImage(){
     bgimage.style.opacity = 1-window.pageYOffset/900;
     bgimage.style.backgroundSize=160-window.pageYOffset/12 + "%"  
}