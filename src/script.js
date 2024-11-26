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
const lwPlayer = document.getElementById("lwPlayer")
const stPlayer = document.getElementById("stPlayer")
const rwPlayer = document.getElementById("rwPlayer")
const lw = document.getElementById("lw")
const st = document.getElementById("st")
const rw = document.getElementById("rw")
function createSelect(value,name,container){
    const opt = document.createElement("option")
    opt.setAttribute("value",value)
    opt.innerText =name
    container.append(opt)
}

function selectPlayer(){
    const players = getData()
    players.forEach(player=>{
        if(player.position == "lw"){
            createSelect(player.id,player.name,lwPlayer)
        }
        if(player.position == "st"){
            createSelect(player.id,player.name,stPlayer)
        }
        if(player.position == "rw"){
            createSelect(player.id,player.name,rwPlayer)
        }
    })
    // function createPlayerCard(data){
    //     const name = data.name.split(" ")
    //     const positionSection = document.createElement("div")
    //     positionSection.classList.add("flex","flex-col","h-5","mr-3")
    // }
    lwPlayer.addEventListener("change",()=>{
        const choosenPlayer = lwPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = players.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        lwPlayer.classList.add("hidden")
        const positionSection = document.createElement("div")
        positionSection.classList.add("flex","flex-col","h-5","mr-3")

        const pacing = document.createElement("p")
        pacing.classList.add("text-[12px]","flex","mr-10","font-bold")
        pacing.innerText = data.pacing
        positionSection.append(pacing)

        const position = document.createElement("p")
        position.classList.add("text-[9px]","flex","mr-10","font-bold")
        position.innerText = data.position
        positionSection.append(position)
        lw.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        lw.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        lw.append(Name)

        const flagSection = document.createElement("div")
        flagSection.classList.add("flex","justify-center","items-center","gap-1","mb-1")

        const flag = document.createElement("img")
        flag.classList.add("w-2","h-2")
        flag.src = data.flag
        flagSection.append(flag)

        const TeamLogo = document.createElement("img")
        TeamLogo.classList.add("w-2","h-2")
        TeamLogo.src = data.logo
        flagSection.append(TeamLogo)
        lw.append(flagSection)

        const statuSection = document.createElement("div")
        statuSection.classList.add("flex","gap-[2px]","mb-3")
        // function to avoid the duplication
        function createStats(label,value){
            const div = document.createElement("div")
            div.classList.add("flex","flex-col")
            const labelPragraph = document.createElement("p")
            labelPragraph.classList.add("text-[6px]")
            labelPragraph.innerText  = label
            div.append(labelPragraph)
            const statsParagraph = document.createElement("p")
            statsParagraph.classList.add("text-[6px]")
            statsParagraph.innerText = value
            div.append(statsParagraph)
            statuSection.append(div)
            return statuSection
        }
        lw.append(createStats("Pac",data.pacing))
        lw.append(createStats("Sho",data.shooting))
        lw.append(createStats("Pas",data.passing))
        lw.append(createStats("Dri",data.driblbling))
        lw.append(createStats("Def",data.defending))
        lw.append(createStats("Phy",data.physical))
    })
    stPlayer.addEventListener("change",()=>{
        const choosenPlayer = stPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = players.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        stPlayer.classList.add("hidden")
        st.innerHTML = `
            <div class="flex flex-col h-5 mr-3">
                <p class="text-[12px] flex mr-10 font-bold">${data.pacing}</p>
                <p class="text-[9px] flex mr-10 font-bold">${data.position}</p>
            </div>
            <img class=" flex justify-center w-8 h-8 " src="${data.photo}"/>
            <p class="text-xs text-center font-bold">${name[0]}</p>
            <div class="flex justify-center items-center gap-1 mb-1">
            <img class="w-2 h-2" src="${data.flag}"/>
            <img class="w-2 h-2" src="${data.logo}"/>
            </div>
            <div class="flex gap-[2px] mb-3">
            <div class="flex flex-col">
                <p class="text-[6px]">Pac</p>
                <p class="text-[6px]">${data.pacing}</p>
            </div>
            <div class="flex flex-col">
                <p class="text-[6px]">Sho</p>
                <p class="text-[6px]">${data.shooting}</p>
            </div>
            <div class="flex flex-col">
                <p class="text-[6px]">Pas</p>
                <p class="text-[6px]">${data.passing}</p>
            </div>
            <div class="flex flex-col">
                <p class="text-[6px]">Dri</p>
                <p class="text-[6px]">${data.driblbling}</p>
            </div>
            <div class="flex flex-col">
                <p class="text-[6px]">Def</p>
                <p class="text-[6px]">${data.defending}</p>
            </div>
            <div class="flex flex-col">
                <p class="text-[6px]">Phy</p>
                <p class="text-[6px]">${data.physical}</p>
            </div>
            </div>
        `
    })

}
selectPlayer()
document.addEventListener("DOMContentLoaded",showAllData)
