const menu = document.getElementById("menu")
const phoneNav = document.getElementById("phoneNav")
menu.addEventListener("click", () => {
    phoneNav.classList.toggle("hidden")
    phoneNav.classList.add("flex")
})
const insert = document.getElementById("insert")
const form = document.getElementById("form")
insert.addEventListener("click",()=>{
    form.classList.toggle("hidden")
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
    Playerphysical = document.getElementById("physical"),
    Playersubmit = document.getElementById("submit")

const arr = JSON.parse(localStorage.getItem("data")) || []
let id = arr.length ? arr[arr.length - 1 ].id + 1 : 1

function saveData() {
    localStorage.setItem("data", JSON.stringify(arr))
}

function getData(){
    return JSON.parse(localStorage.getItem("data")) || []
}
function AddPlayer(){
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
    saveData()
    id++
}

Playersubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    AddPlayer()
    showAllData()
})

const PlayersContainer = document.getElementById("Playerscontainer")
function showAllData(){
    const info = getData()
    PlayersContainer.innerHTML = ""
    console.log(info)
    if(info.length){
        info.forEach(element => {
            const div = document.createElement("div")
            div.innerHTML = `
            <img class="w-16 h-16" src="${element.photo}"/>
            <div class="">
            <h2 class="text-white text-bold">${element.name}</h2>
            <p class="text-[#55CCA2]">${element.position}</p>
            </div>
            <img src="./image/pencil-edit-svgrepo-com.svg" class="w-6 h-6"/>
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#d24141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

            `
            div.classList.add("flex","gap-3","items-center")
            PlayersContainer.append(div)
        });
    }
}
// const lwPlayer = document.getElementById("lwPlayer")
// const lw = document.getElementById("lw")
// function selectPlayer(){
//     const players = getData()
//     players.forEach(player=>{
//         if(player.position == "lw"){
//             const opt = document.createElement("option")
//             opt.setAttribute("value",player.id)
//             opt.innerText = player.name
//             lwPlayer.append(opt)
//         }
//     })
//     lwPlayer.addEventListener("change",()=>{
//         const choosenPlayer = lwPlayer.value
//         console.log(choosenPlayer)
//         //get the player data
//         const data = players.find(obj => obj.id == choosenPlayer)
//         lwPlayer.classList.add("hidden")
//         lw.innerHTML = `
//             <div class="flex flex-col h-5 mb-2">
//                 <p class="text-xs flex mr-10">${data.pacing}</p>
//                 <p class="text-xs flex mr-10">${data.position}</p>
//             </div>
//             <img class="mr-4 w-6 h-5 mb-2" src="${data.photo}"/>

//         `
//     })

// }
// selectPlayer()
document.addEventListener("DOMContentLoaded",showAllData)
