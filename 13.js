const btn1 = document.querySelector(".btn");
const close1 = document.querySelector(".close-icon");
const trailercontainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");
btn1.addEventListener("click", ()=>
{
    trailercontainer.classList.remove("active");
});

close1.addEventListener("click", ()=>
{
    trailercontainer.classList.add("active");
});

close1.addEventListener("click",()=>{
   
    trailercontainer.classList.add("active");
    video.pause();
    video.currentTime=0;
});