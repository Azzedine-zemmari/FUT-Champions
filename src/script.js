const menu = document.getElementById("menu")
const phoneNav = document.getElementById("phoneNav")
menu.addEventListener("click", () => {
    phoneNav.classList.toggle("hidden")
    phoneNav.classList.add("flex")
})
const PlayerName = document.getElementById("name"),
    Playerphoto = document.getElementById("photo"),
    Playerposition = document.querySelector("#position"),
    Playernationality = document.getElementById("nationality"),
    Playerflag = document.getElementById("flag"),
    Playerclub = document.getElementById("club"),
    Playerlogo = document.getElementById("logo"),
    Playerrating = document.getElementById("rating"),
    Playerpacing = document.getElementById("pacing"),
    Playershoting = document.getElementById("shoting"),
    Playerpassing = document.getElementById("passing"),
    Playerdribbling = document.getElementById("dribbling"),
    Playerdefending = document.getElementById("defending"),
    Playerphysical = document.getElementById("physical")
    Playersubmit = document.getElementById("submit")

const arr = JSON.parse(localStorage.getItem("data")) || []
let id = arr.length ? arr[arr.length - 1 ].id + 1 : 1
function getData(){
    const playerData = {
        id:id,
        name : PlayerName.value,
        photo : Playerphoto.value,
        position : Playerposition.value,
        nationnality:Playernationality.value,
        flag:Playerflag.value,
        club : Playerclub.value,
        logo:Playerlogo.value,
        rating:Playerrating.value,
        pacing:Playerpacing.value,
        shooting:Playershoting.value,
        passing:Playerpassing.value,
        driblbling:Playerdribbling.value,
        defending:Playerdefending.value,
        physical:Playerphysical.value
    }
    arr.push(playerData)
    localStorage.setItem("data",JSON.stringify(arr))
    id++
    return playerData
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const info = getData()
    if(info.position == "lw"){
        const lwContainer = document.getElementById("lw")
        const existingImg = lwContainer.querySelector("img");

        if (!existingImg) { 
            const img = document.createElement("img");
            img.classList.add("w-16", "h-16x");
            img.setAttribute("src", "./image/badge_gold.webp");
            lwContainer.prepend(img); 
        }
    }
})