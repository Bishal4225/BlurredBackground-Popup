const img = document.querySelector(".image-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{

     imgnum=2;
    
    addNewImage()
    

});

function addNewImage(){

    for (let index = 0; index < imgnum; index++) {
        
        
      
    const newImg = document.createElement("img") 
    newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000
    )}`;
    img.appendChild(newImg) 
}
}