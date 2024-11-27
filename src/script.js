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
    // insert.addEventListener("mouseleave",()=>{
    //     form.classList.add("hidden")
    // })
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
    Playersubmit = document.getElementById("submit"),
    // Ratt = document.getElementById("Ratt"),
    Pac = document.getElementById("Pac"),
    Shot = document.getElementById("Shot"),
    Pas = document.getElementById("Pas"),
    Dri = document.getElementById("Dri"),
    Def = document.getElementById("Def"),
    Phy = document.getElementById("Phy"),
    Section1 = document.getElementById("Section1"),
    Section2 = document.getElementById("Section2")

const arr = JSON.parse(localStorage.getItem("data")) || []
let id = arr.length ? arr[arr.length - 1 ].id + 1 : 1
function customizeForm(option){
    const selectedOption = option
    if(selectedOption == "gk"){

        Pac.classList.add("hidden")
        Shot.classList.add("hidden")
        Pas.classList.add("hidden")
        Dri.classList.add("hidden")
        Def.classList.add("hidden")
        Phy.classList.add("hidden")

        // Remove the the goalkeeper fields if they exist
        if (document.getElementById("Dvin")) {
            document.getElementById("Dvin").classList.remove("hidden");
        }
        if (document.getElementById("Hand")) {
            document.getElementById("Hand").classList.remove("hidden");
        }
        if (document.getElementById("Kick")) {
            document.getElementById("Kick").classList.remove("hidden");
        }
        if (document.getElementById("ref")) {
            document.getElementById("ref").classList.remove("hidden");
        }
        if (document.getElementById("Sp")) {
            document.getElementById("Sp").classList.remove("hidden");
        }
        if (document.getElementById("pos")) {
            document.getElementById("pos").classList.remove("hidden");
        }

        //add the field for the goal keeper
        function createStat(DivId,label){
            const diving = document.createElement("div")
            diving.id = DivId
            diving.classList.add("flex","flex-col")
            const labelPragraph = document.createElement("label")
            labelPragraph.classList.add("text-[#404040]","font-bold")
            labelPragraph.innerText = label
            diving.append(labelPragraph)
            const input = document.createElement("input")
            input.classList.add("w-24","input")
            input.type = "number"
            input.id=label
            diving.append(input)
            return diving
        }
       
        if(!document.getElementById("Dvin")){
            Section1.append(createStat("diving","Dvin"))
        }
        if(!document.getElementById("Hand")){
            Section1.append(createStat("handling","Hand"))
        }
        if(!document.getElementById("Kick")){
            Section1.append(createStat("kicking","Kick"))
        }
        if(!document.getElementById("ref")){
            Section2.append(createStat("reflexes","ref"))
        }
        if(!document.getElementById("Sp")){
            Section2.append(createStat("speed","Sp"))
        }
        if(!document.getElementById("pos")){
            Section2.append(createStat("positioning","pos"))
        }

        }
        else{
            Pac.classList.remove("hidden")
            Shot.classList.remove("hidden")
            Pas.classList.remove("hidden")
            Dri.classList.remove("hidden")
            Def.classList.remove("hidden")
            Phy.classList.remove("hidden")
            if(document.getElementById("Dvin")){
                document.getElementById("Dvin").classList.add("hidden")
            }
            if(document.getElementById("Hand")){
                document.getElementById("Hand").classList.add("hidden")
            }
            if(document.getElementById("Kick")){
                document.getElementById("Kick").classList.add("hidden")
            }
            if(document.getElementById("ref")){
                document.getElementById("ref").classList.add("hidden")
            }
            if(document.getElementById("Sp")){
                document.getElementById("Sp").classList.add("hidden")
            }
            if(document.getElementById("pos")){
                document.getElementById("pos").classList.add("hidden")
            }

        }
    }

Playerposition.addEventListener("change",()=>{
    customizeForm(Playerposition.value)
})

function saveData() {
    localStorage.setItem("data", JSON.stringify(arr))
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
        physical:Playerphysical.value,
    }
    if(Playerposition.value == "gk"){
        playerData.Dvin= document.getElementById("Dvin") ? document.getElementById("Dvin").value : null
        playerData.Hind = document.getElementById("Hand") ? document.getElementById("Hand").value : null
        playerData.Kick = document.getElementById("Kick") ? document.getElementById("Kick").value : null
        playerData.ref = document.getElementById("ref") ? document.getElementById("ref").value : null
        playerData.Sp = document.getElementById("Sp") ? document.getElementById("Sp").value : null
        playerData.pos = document.getElementById("pos") ? document.getElementById("pos").value : null
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
function Delete(id){
    const result = arr.findIndex(obj=>obj.id == id)
    console.log("this is the deleted card",result)
    arr.splice(result,1)

    saveData()
    showAllData()
}
function modifier(id){
    form.classList.toggle("hidden")
    const data = arr
    const item = data.find(obj =>obj.id == id)
    customizeForm(item.position)
    PlayerName.value = item.name
    Playerphoto.value = item.photo
    Playerposition.value = item.position
    Playernationality.value = item.nationnality
    Playerflag.value = item.flag
    Playerclub.value = item.club
    Playerlogo.value = item.logo
    Playerrating.value = item.rating;
    Playerpacing.value = item.pacing;
    Playershoting.value = item.shooting;
    Playerpassing.value = item.passing;
    Playerdribbling.value = item.driblbling;
    Playerdefending.value = item.defending;
    Playerphysical.value = item.physical;
    if(item.position == "gk"){
        document.getElementById("Dvin").value = item.Dvin || "";
        document.getElementById("Hand").value = item.Hind || "";
        document.getElementById("Kick").value = item.Kick || "";
        document.getElementById("ref").value = item.ref || "";
        document.getElementById("Sp").value = item.Sp || "";
        document.getElementById("pos").value = item.pos || "";
    }
}

const PlayersContainer = document.getElementById("Playerscontainer")
function showAllData(){
    PlayersContainer.innerHTML = ""
    if(arr.length){
        arr.forEach(element => {
            const div = document.createElement("div")
            div.innerHTML = `
            <img class="w-16 h-16" src="${element.photo}"/>
            <div class="">
            <h2 class="text-white text-bold">${element.name}</h2>
            <p class="text-[#55CCA2]">${element.position}</p>
            </div>
            <img src="./image/pencil-edit-svgrepo-com.svg" class="edit w-6 h-6"/>
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#d24141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

            `
            div.classList.add("flex","gap-3","items-center")
            div.querySelector("svg").addEventListener("click",()=>{
                console.log("delete ",element.id)
                Delete(element.id)
            })
            div.querySelector(".edit").addEventListener("click",()=>{
                modifier(element.id)
            })
            PlayersContainer.append(div)
        });
    }
}
const lwPlayer = document.getElementById("lwPlayer")
const stPlayer = document.getElementById("stPlayer")
const rwPlayer = document.getElementById("rwPlayer")
const cmlPlayer = document.getElementById("cmlPlayer")
const cmPlayer = document.getElementById("cmPlayer")
const cmrPlayer = document.getElementById("cmrPlayer")
const lbPlayer = document.getElementById("lbPlayer")
const cb1Player = document.getElementById("cb1Player")
const cb2Player = document.getElementById("cb2Player")
const rbPlayer = document.getElementById("rbPlayer")
const gkPlayer = document.getElementById("gkPlayer")
const lw = document.getElementById("lw")
const st = document.getElementById("st")
const rw = document.getElementById("rw")
const cml = document.getElementById("cml")
const cm = document.getElementById("cm")
const cmr = document.getElementById("cmr")
const lb = document.getElementById("lb")
const cb1 = document.getElementById("cb1")
const cb2 = document.getElementById("cb2")
const rb = document.getElementById("rb")
const gk = document.getElementById("gk")
function createSelect(value,name,container){
    const opt = document.createElement("option")
    opt.setAttribute("value",value)
    opt.innerText = name
    container.append(opt)
}

function selectPlayer(){
    arr.forEach(player=>{
        if(player.position == "lw"){
            createSelect(player.id,player.name,lwPlayer)
        }
        if(player.position == "st"){
            createSelect(player.id,player.name,stPlayer)
        }
        if(player.position == "rw"){
            createSelect(player.id,player.name,rwPlayer)
        }
        if(player.position == "cml"){
            createSelect(player.id,player.name,cmlPlayer)
        }
        if(player.position == "cm"){
            createSelect(player.id,player.name,cmPlayer)
        }
        if(player.position == "cmr"){
            createSelect(player.id,player.name,cmrPlayer)
        }
        if(player.position == "lb"){
            createSelect(player.id,player.name,lbPlayer)
        }
        if(player.position == "cb1"){
            createSelect(player.id,player.name,cb1Player)
        }
        if(player.position == "cb2"){
            createSelect(player.id,player.name,cb2Player)
        }
        if(player.position == "rb"){
            createSelect(player.id,player.name,rbPlayer)
        }
        if(player.position == "gk"){
            createSelect(player.id,player.name,gkPlayer)
        }
    })
    
    lwPlayer.addEventListener("change",()=>{
        const choosenPlayer = lwPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
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
        const data =arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        stPlayer.classList.add("hidden")
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
        st.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        st.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        st.append(Name)

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
        st.append(flagSection)

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
        st.append(createStats("Pac",data.pacing))
        st.append(createStats("Sho",data.shooting))
        st.append(createStats("Pas",data.passing))
        st.append(createStats("Dri",data.driblbling))
        st.append(createStats("Def",data.defending))
        st.append(createStats("Phy",data.physical))
    })
    rwPlayer.addEventListener("change",()=>{
        const choosenPlayer = rwPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        rwPlayer.classList.add("hidden")
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
        rw.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        rw.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        rw.append(Name)

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
        rw.append(flagSection)

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
        rw.append(createStats("Pac",data.pacing))
        rw.append(createStats("Sho",data.shooting))
        rw.append(createStats("Pas",data.passing))
        rw.append(createStats("Dri",data.driblbling))
        rw.append(createStats("Def",data.defending))
        rw.append(createStats("Phy",data.physical))
    })
    cmlPlayer.addEventListener("change",()=>{
        const choosenPlayer = cmlPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        cmlPlayer.classList.add("hidden")
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
        cml.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        cml.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        cml.append(Name)

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
        cml.append(flagSection)

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
        cml.append(createStats("Pac",data.pacing))
        cml.append(createStats("Sho",data.shooting))
        cml.append(createStats("Pas",data.passing))
        cml.append(createStats("Dri",data.driblbling))
        cml.append(createStats("Def",data.defending))
        cml.append(createStats("Phy",data.physical))

    })
    cmPlayer.addEventListener("change",()=>{
        const choosenPlayer = cmPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        cmPlayer.classList.add("hidden")
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
        cm.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        cm.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        cm.append(Name)

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
        cm.append(flagSection)

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
        cm.append(createStats("Pac",data.pacing))
        cm.append(createStats("Sho",data.shooting))
        cm.append(createStats("Pas",data.passing))
        cm.append(createStats("Dri",data.driblbling))
        cm.append(createStats("Def",data.defending))
        cm.append(createStats("Phy",data.physical))
    })
    cmrPlayer.addEventListener("change",()=>{
        const choosenPlayer = cmrPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        cmrPlayer.classList.add("hidden")
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
        cmr.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        cmr.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        cmr.append(Name)

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
        cmr.append(flagSection)

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
        cmr.append(createStats("Pac",data.pacing))
        cmr.append(createStats("Sho",data.shooting))
        cmr.append(createStats("Pas",data.passing))
        cmr.append(createStats("Dri",data.driblbling))
        cmr.append(createStats("Def",data.defending))
        cmr.append(createStats("Phy",data.physical))
    })
    lbPlayer.addEventListener("change",()=>{
        const choosenPlayer = lbPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        lbPlayer.classList.add("hidden")
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
        lb.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        lb.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        lb.append(Name)

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
        lb.append(flagSection)

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
        lb.append(createStats("Pac",data.pacing))
        lb.append(createStats("Sho",data.shooting))
        lb.append(createStats("Pas",data.passing))
        lb.append(createStats("Dri",data.driblbling))
        lb.append(createStats("Def",data.defending))
        lb.append(createStats("Phy",data.physical))
    })
    cb1Player.addEventListener("change",()=>{
        const choosenPlayer = cb1Player.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        cb1Player.classList.add("hidden")
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
        cb1.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        cb1.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        cb1.append(Name)

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
        cb1.append(flagSection)

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
        cb1.append(createStats("Pac",data.pacing))
        cb1.append(createStats("Sho",data.shooting))
        cb1.append(createStats("Pas",data.passing))
        cb1.append(createStats("Dri",data.driblbling))
        cb1.append(createStats("Def",data.defending))
        cb1.append(createStats("Phy",data.physical))
    })
    cb2Player.addEventListener("change",()=>{
        const choosenPlayer = cb2Player.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        cb2Player.classList.add("hidden")
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
        cb2.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        cb2.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        cb2.append(Name)

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
        cb2.append(flagSection)

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
        cb2.append(createStats("Pac",data.pacing))
        cb2.append(createStats("Sho",data.shooting))
        cb2.append(createStats("Pas",data.passing))
        cb2.append(createStats("Dri",data.driblbling))
        cb2.append(createStats("Def",data.defending))
        cb2.append(createStats("Phy",data.physical))
    })
    rbPlayer.addEventListener("change",()=>{
        const choosenPlayer = rbPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        rbPlayer.classList.add("hidden")
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
        rb.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        rb.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        rb.append(Name)

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
        rb.append(flagSection)

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
        rb.append(createStats("Pac",data.pacing))
        rb.append(createStats("Sho",data.shooting))
        rb.append(createStats("Pas",data.passing))
        rb.append(createStats("Dri",data.driblbling))
        rb.append(createStats("Def",data.defending))
        rb.append(createStats("Phy",data.physical))
    })
    gkPlayer.addEventListener("change",()=>{
        const choosenPlayer = gkPlayer.value
        console.log(choosenPlayer)
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        console.log(data)
        const name = data.name.split(" ")
        gkPlayer.classList.add("hidden")
        const positionSection = document.createElement("div")
        positionSection.classList.add("flex","flex-col","h-5","mr-3")

        const pacing = document.createElement("p")
        pacing.classList.add("text-[12px]","flex","mr-10","font-bold")
        pacing.innerText = data.Dvin
        positionSection.append(pacing)

        const position = document.createElement("p")
        position.classList.add("text-[9px]","flex","mr-10","font-bold")
        position.innerText = data.position
        positionSection.append(position)
        gk.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex","justify-center","w-8","h-8")
        gk.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs","text-center","font-bold")
        Name.innerText = name[0]
        gk.append(Name)

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
        gk.append(flagSection)

        const statuSection = document.createElement("div")
        statuSection.classList.add("flex","gap-[2px]","mb-3")
        // function to avoid the duplication
        function createStats(label,value){
            const div = document.createElement("div")
            div.classList.add("flex","flex-col")
            div.id = label
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
        gk.append(createStats("Dvin",data.Dvin))
        gk.append(createStats("Hand",data.Hind))
        gk.append(createStats("Kick",data.Kick))
        gk.append(createStats("Sp",data.Sp))
        gk.append(createStats("Def",data.pos))
        // gk.append(createStats("Phy",data.physical))
    })
}
selectPlayer()

document.addEventListener("DOMContentLoaded",showAllData)
