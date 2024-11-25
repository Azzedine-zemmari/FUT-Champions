const menu = document.getElementById("menu")
const phoneNav = document.getElementById("phoneNav")
menu.addEventListener("click",()=>{
    phoneNav.classList.toggle("hidden")
    phoneNav.classList.add("flex")
})