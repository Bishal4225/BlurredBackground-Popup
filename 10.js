const textarea1 = document.getElementById("textarea");

const totalcounter = document.getElementById("total-counter");

const reaminingcounter = document.getElementById("Remaining-counter");


textarea1.addEventListener("keyup",()=>
{
     updateCounter()
     
});

updateCounter()

function updateCounter()
{
    totalcounter.innerText = textarea1.value
    .length;

    reaminingcounter.innerText=textarea1.getAttribute("maxlength") 
     - textarea1.value.length;
}
