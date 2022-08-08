const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const popupcontainer = document.querySelector(".popup-container");
const close = document.querySelector(".close-icon");


btn.addEventListener("click",()=>{
   
    container.classList.add("active");
    popupcontainer.classList.remove("active");

});

close.addEventListener("click",()=>{
    
    container.classList.remove("active");
    popupcontainer.classList.add("active");

})