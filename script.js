const dots = document.querySelector('.three-dots');
const container =document.querySelector('.container');
const cross = document.querySelector(".cut")

dots.addEventListener("click",()=>{
    console.log("Moteeullah Azmi");
    container.style.width="50vw"
})

cross.addEventListener("click",()=>{
    console.log("Moteeullah Azmi");
    container.style.width="0"
})