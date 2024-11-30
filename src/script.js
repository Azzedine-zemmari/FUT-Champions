document.addEventListener("DOMContentLoaded", showAllData)
const menu = document.getElementById("menu")
const phoneNav = document.getElementById("phoneNav")
const cancel = document.getElementById("Annuller")
menu.addEventListener("click", () => {
    phoneNav.classList.toggle("hidden")
    phoneNav.classList.add("flex")
})
const insert = document.getElementById("insert")
const PhoneSubmit = document.getElementById("insertPhone")
const form = document.getElementById("form")
insert.addEventListener("click", () => {
    modifSubmit.classList.add("hidden")
    Playersubmit.classList.remove("hidden")
    if(PlayerName.value){
        PlayerName.value = ""
    }
    if(Playerphoto.value){
        Playerphoto.value = ""
    }
    if(Playernationality.value){
        Playernationality.value = ""
    }
    if(Playerflag.value){
        Playerflag.value = ""
    }
    if(Playerclub.value){
        Playerclub.value = ""
    }
    if(Playerlogo.value){
        Playerlogo.value = ""
    }
    if(Playerrating.value){
        Playerrating.value = ""
    }
    if (Playerpacing.value) {
        Playerpacing.value = ""
    }
    if (Playershoting.value) {
        Playershoting.value = "";
    }
    if (Playerpassing.value) {
        Playerpassing.value = "";
    }
    if (Playerdribbling.value) {
        Playerdribbling.value = "";  
    }
    if (Playerdefending.value) {
        Playerdefending.value = "";  
    }
    if (Playerphysical.value) {
        Playerphysical.value = ""; 
    }
    if (document.getElementById("Dvin") && document.getElementById("Dvin").value) {
        document.getElementById("Dvin").value = "";  
    }
    if (document.getElementById("Hand") && document.getElementById("Hand").value) {
        document.getElementById("Hand").value = "";  
    }
    if (document.getElementById("Kick") && document.getElementById("Kick").value) {
        document.getElementById("Kick").value = "";  
    }
    if (document.getElementById("ref") && document.getElementById("ref").value) {
        document.getElementById("ref").value = ""; 
    }
    if (document.getElementById("Sp") && document.getElementById("Sp").value) {
        document.getElementById("Sp").value = "";
    }
    if (document.getElementById("pos") && document.getElementById("pos").value) {
        document.getElementById("pos").value = ""; 
    }

    // Playershoting.value = ""
    // Playerpassing.value = ""
    // Playerdribbling.value = ""
    // Playerdefending.value = ""
    // Playerphysical.value = ""
    // document.getElementById("Dvin").value = ""
    // document.getElementById("Hand").value = ""
    // document.getElementById("Kick").value = ""
    // document.getElementById("ref").value = ""
    // document.getElementById("Sp").value = ""
    // document.getElementById("pos").value = ""


    form.classList.toggle("hidden")

    // insert.addEventListener("mouseleave",()=>{
    //     form.classList.add("hidden")
    // })
})
cancel.addEventListener("click",()=>{
    form.classList.toggle("hidden")
})
PhoneSubmit.addEventListener("click",()=>{
    modifSubmit.classList.add("hidden")
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
    Playersubmit = document.getElementById("submit"),
    modifSubmit = document.getElementById("SubmitModif")
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
let id = arr.length ? arr[arr.length - 1].id + 1 : 1
function customizeForm(option) {
    const selectedOption = option
    if (selectedOption == "gk") {

        Pac.classList.add("hidden")
        Shot.classList.add("hidden")
        Pas.classList.add("hidden")
        Dri.classList.add("hidden")
        Def.classList.add("hidden")
        Phy.classList.add("hidden")

        // Remove hidden class from the goalkeeper fields if they exist
        if (document.getElementById("diving")) {
            document.getElementById("diving").classList.remove("hidden");
        }
        if (document.getElementById("handling")) {
            document.getElementById("handling").classList.remove("hidden");
        }
        if (document.getElementById("kicking")) {
            document.getElementById("kicking").classList.remove("hidden");
        }
        if (document.getElementById("reflexes")) {
            document.getElementById("reflexes").classList.remove("hidden");
        }
        if (document.getElementById("speed")) {
            document.getElementById("speed").classList.remove("hidden");
        }
        if (document.getElementById("positioning")) {
            document.getElementById("positioning").classList.remove("hidden");
        }

        //add the field for the goal keeper
        function createStat(DivId, label,DivError) {
            const diving = document.createElement("div")
            diving.id = DivId
            diving.classList.add("flex", "flex-col")
            const labelPragraph = document.createElement("label")
            labelPragraph.classList.add("text-[#404040]", "font-bold")
            labelPragraph.innerText = label
            diving.append(labelPragraph)
            const input = document.createElement("input")
            input.classList.add("w-24", "input")
            input.type = "text"
            input.id = label
            diving.append(input)
            const errorParagraph = document.createElement("p")
            errorParagraph.id = DivError
            diving.append(errorParagraph)
            return diving
        }

        if (!document.getElementById("Dvin")) {
            Section1.append(createStat("diving", "Dvin","DvinError"))
        }
        if (!document.getElementById("Hand")) {
            Section1.append(createStat("handling", "Hand","HandError"))
        }
        if (!document.getElementById("Kick")) {
            Section1.append(createStat("kicking", "Kick","KickError"))
        }
        if (!document.getElementById("ref")) {
            Section2.append(createStat("reflexes", "ref","RefError"))
        }
        if (!document.getElementById("Sp")) {
            Section2.append(createStat("speed", "Sp","SpError"))
        }
        if (!document.getElementById("pos")) {
            Section2.append(createStat("positioning", "pos","PosError"))
        }

    }
    else {
        Pac.classList.remove("hidden")
        Shot.classList.remove("hidden")
        Pas.classList.remove("hidden")
        Dri.classList.remove("hidden")
        Def.classList.remove("hidden")
        Phy.classList.remove("hidden")
        if (document.getElementById("diving")) {
            document.getElementById("diving").classList.add("hidden")
        }
        if (document.getElementById("handling")) {
            document.getElementById("handling").classList.add("hidden")
        }
        if (document.getElementById("kicking")) {
            document.getElementById("kicking").classList.add("hidden")
        }
        if (document.getElementById("reflexes")) {
            document.getElementById("reflexes").classList.add("hidden")
        }
        if (document.getElementById("speed")) {
            document.getElementById("speed").classList.add("hidden")
        }
        if (document.getElementById("positioning")) {
            document.getElementById("positioning").classList.add("hidden")
        }

    }
}

Playerposition.addEventListener("change", () => {
    customizeForm(Playerposition.value)
})

function saveData() {
    localStorage.setItem("data", JSON.stringify(arr))
}


    const nameError = document.getElementById("nameError");
    const photoError = document.getElementById("photoError");
    const positionError = document.getElementById("positionError");
    const nationalityError = document.getElementById("nationalityError");
    const flagError = document.getElementById("flagError");
    const clubError = document.getElementById("clubError");
    const logoError = document.getElementById("logoError");
    const ratingError = document.getElementById("ratingError");
    const pacingError = document.getElementById("pacingError");
    const shootingError = document.getElementById("shootingError");
    const passingError = document.getElementById("passingError");
    const dribblingError = document.getElementById("dribblingError");
    const defendError = document.getElementById("defendError");
    const physicalError = document.getElementById("physicalError");
    function emptyErrorMessage(){
        nameError.innerHTML = "";
    photoError.innerHTML = "";
    positionError.innerHTML = "";
    nationalityError.innerHTML = "";
    flagError.innerHTML = "";
    clubError.innerHTML = "";
    logoError.innerHTML = "";
    ratingError.innerHTML = "";
    pacingError.innerHTML = "";
    shootingError.innerHTML = "";
    passingError.innerHTML = "";
    dribblingError.innerHTML = "";
    defendError.innerHTML = "";
    physicalError.innerHTML = "";
    }

function validation(name, photo, position, nationality, flag, club, logo, rating, pacing, shooting, passing, dribbling, defend, physical) {
    // emptyErrorMessage()
    let isValid = true;
    const nameRegex = /^[a-zA-Z\s]{5,}$/
    if (name === "" || !nameRegex.test(name)) {
        nameError.innerText = "Ventrer un nom";
        isValid = false;
    } else {
        nameError.innerText = ""; 
    }

    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (photo === "" || !urlRegex.test(photo)) {
        photoError.innerText = "Ventrer une photo";
        isValid = false;
    } else {
        photoError.innerText = ""; 
    }

    
    if (position === "") {
        positionError.innerText = "Vchoisir une position";
        isValid = false;
    } else {
        positionError.innerText = ""; 
    }

    const nationalityRegex = /^[a-zA-Z\s]{3,}$/
    if (nationality === "" || !nationalityRegex.test(nationality)) {
        nationalityError.innerText = "Ventrer la nationalité";
        isValid = false;
    } else {
        nationalityError.innerText = ""; 
    }

    
    if (flag === "" || !urlRegex.test(flag)) {
        flagError.innerText = "Ventrer un drapeau";
        isValid = false;
    } else {
        flagError.innerText = ""; 
    }

     const clubRegex = /^[a-zA-Z\s-]{4,}$/
    if (club === "" || !clubRegex.test(club)) {
        clubError.innerText = "entrer un club";
        isValid = false;
    } else {
        clubError.innerText = ""; 
    }


    if (logo === "" || !urlRegex.test(logo)) {
        logoError.innerText = "entrer un logo";
        isValid = false;
    } else {
        logoError.innerText = ""; 
    }

    if (rating === "" || isNaN(rating) || rating < 0 || rating > 100) {
        ratingError.innerText = "entrer une note";
        isValid = false;
    } 
    else {
        ratingError.innerText = ""; 
    }


    if (pacing === "" || isNaN(pacing) || pacing < 0 || pacing > 100) {
        pacingError.innerText = "entrer un nombre valide";
        isValid = false;
    } 
    else {
        pacingError.innerText = ""; 
    }


    if (shooting === "" || isNaN(shooting) || shooting < 0 || shooting > 100) {
        shootingError.innerText = "entrer un nombre valide";
        isValid = false;
    } 
    else {
        shootingError.innerText = ""; 
    }

    if (passing === "" || isNaN(passing) || passing < 0 || passing > 100 ) {
        passingError.innerText = "entrer un nombre valide"
    } 

    else {
        passingError.innerText = ""; 
    }

    if (dribbling === "" || isNaN(dribbling) || dribbling < 0 || dribbling > 100) {
        dribblingError.innerText = "entrer un nombre valide";
        isValid = false;
    } 
    else {
        dribblingError.innerText = ""; 
    }

    if (defend === "" || isNaN(defend) || defend < 0 || defend > 100) {
        defendError.innerText = "entrer un nombre valide";
        isValid = false;
    } else {
        defendError.innerText = ""; 
    }

    if (physical === "" || isNaN(physical) || physical < 0 || physical > 100) {
        physicalError.innerText = "entrer un nombre valide";
        isValid = false;
    } else {
        physicalError.innerText = ""; 
    }

    return isValid; // Return the form is valid or not
}

function validationGK(Dvin,Hind,Kick,ref,Sp,pos){
    const DvinError = document.getElementById("DvinError")
    const handlingError = document.getElementById("HandError")
    const kickingError = document.getElementById("KickError")
    const RefError = document.getElementById("RefError")
    const SpError = document.getElementById("SpError")
    const PosError = document.getElementById("PosError")
    let valid = true 
    if (Dvin === "" || isNaN(Dvin) || Dvin < 0 || Dvin > 100) {
        DvinError.innerText = "dvin invalid"
        DvinError.classList.add("text-red-600")
        valid = false;
    } 


    if (Hind === "" || isNaN(Hind) || Hind < 0 || Hind > 100) {
        handlingError.innerText = "hind invalid"
        handlingError.classList.add("text-white-600")
        valid = false;
    } 

    if (Kick === "" || isNaN(Kick) || Kick < 0 || Kick > 100 ) {
        kickingError.innerText = "Kick invalid"
        kickingError.classList.add("text-red-600")
        valid = false
    } 


    if (ref === "" || isNaN(ref) || ref < 0 || ref > 100) {
        RefError.innerText = "ref invalid"
        RefError.classList.add("text-red-600")
        valid = false;
    } 

    if (Sp === "" || isNaN(Sp) || Sp < 0 || Sp > 100) {
        SpError.innerText = "sp invalid"
        SpError.classList.add("text-red-600")
        valid = false;
    }
    if (pos === "" || isNaN(pos) || pos < 0 || pos > 100) {
        PosError.innerText = "pos invalid"
        PosError.classList.add("text-red-600")
        valid = false;
    } 
    return valid
}

function AddPlayer() {
    modifSubmit.classList.add("hidden")
    const playerData = {
        id: id,
        name: PlayerName.value,
        photo: Playerphoto.value,
        position: Playerposition.value,
        nationnality: Playernationality.value,
        flag: Playerflag.value,
        club: Playerclub.value,
        logo: Playerlogo.value,
        rating: Playerrating.value,
        pacing: Playerpacing.value,
        shooting: Playershoting.value,
        passing: Playerpassing.value,
        driblbling: Playerdribbling.value,
        defending: Playerdefending.value,
        physical: Playerphysical.value,
    }
    if (Playerposition.value == "gk") {
        playerData.Dvin = document.getElementById("Dvin") ? document.getElementById("Dvin").value : null
        playerData.Hind = document.getElementById("Hand") ? document.getElementById("Hand").value : null
        playerData.Kick = document.getElementById("Kick") ? document.getElementById("Kick").value : null
        playerData.ref = document.getElementById("ref") ? document.getElementById("ref").value : null
        playerData.Sp = document.getElementById("Sp") ? document.getElementById("Sp").value : null
        playerData.pos = document.getElementById("pos") ? document.getElementById("pos").value : null
    }
    if(Playerposition.value !=  "gk"){
        const isValid = validation( playerData.name,
            playerData.photo,
            playerData.position,
            playerData.nationnality,
            playerData.flag,
            playerData.club,
            playerData.logo,
            playerData.rating,
            playerData.pacing,
            playerData.shooting,
            playerData.passing,
            playerData.driblbling,
            playerData.defending,
            playerData.physical)
            if(!isValid){
                alert("validation failed")
                return false
            }
    }
    if(Playerposition.value == "gk"){
        const valid = validationGK(
            document.getElementById("Dvin").value,
            document.getElementById("Hand").value,
            document.getElementById("Kick").value,
            document.getElementById("ref").value,
            document.getElementById("Sp").value,
            document.getElementById("pos").value
        )
        if(!valid){
            return false
        }

    }
    
        // i need to add validation for goal keeper
    arr.push(playerData)
    saveData()
    id++
    return true
}
Playersubmit.addEventListener("click", (e) => {
    e.preventDefault()
    const isValid = AddPlayer()
    if(isValid){
        form.classList.toggle("hidden")
    
        document.getElementById("modalSuccess").classList.remove("hidden")
        document.getElementById("success").innerText = "joueur add avec success"
    
        window.scrollTo(0, 0); // Scroll to top of the page
    
        setTimeout(() => {
            document.getElementById("modalSuccess").classList.add("hidden");
        }, 2000);
        showAllData()
    }
    else{
        console.log("error")
    }
})

function Delete(id) {
    const result = arr.findIndex(obj => obj.id == id)
    console.log("this is the deleted card", result)
    arr.splice(result, 1)

    saveData()
    window.scrollTo(0, 0);
    document.getElementById("modalSuccess").classList.remove("hidden")
    document.getElementById("success").innerText = "joueur supprimer avec success"
    document.getElementById("modalSuccess").classList.remove("border-green-400")
    document.getElementById("modalSuccess").classList.add("border-red-600")
    
    setTimeout(() => {
        document.getElementById("modalSuccess").classList.add("hidden");
    }, 2000);
    showAllData()
}
function modifier(id) {
    form.classList.toggle("hidden")
    Playersubmit.classList.add("hidden")
    window.scrollTo(0, 0);
    modifSubmit.classList.remove("hidden")
    emptyErrorMessage()

    const data = arr
    const item = data.find(obj => obj.id == id)
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
    if (item.position == "gk") {
        document.getElementById("Dvin").value = item.Dvin || "";
        document.getElementById("Hand").value = item.Hind || "";
        document.getElementById("Kick").value = item.Kick || "";
        document.getElementById("ref").value = item.ref || "";
        document.getElementById("Sp").value = item.Sp || "";
        document.getElementById("pos").value = item.pos || "";
    }
    //to get the new changes in the inputs
    modifSubmit.addEventListener("click", (e) => {
        e.preventDefault()
        const isvalid = Playerposition.value == "gk" ? 
        validationGK(
            document.getElementById("Dvin").value,
            document.getElementById("Hand").value,
            document.getElementById("Kick").value,
            document.getElementById("ref").value,
            document.getElementById("Sp").value,
            document.getElementById("pos").value
        ):
        validation(
            PlayerName.value,
            Playerphoto.value,
            Playerposition.value,
            Playernationality.value,
            Playerflag.value,
            Playerclub.value,
            Playerlogo.value,
            Playerrating.value,
            Playerpacing.value,
            Playershoting.value,
            Playerpassing.value,
            Playerdribbling.value,
            Playerdefending.value,
            Playerphysical.value
        )
        if(!isvalid){
            alert("validation invalid");
            return false
        }

        item.name = PlayerName.value
        item.photo = Playerphoto.value;
        item.position = Playerposition.value;
        item.nationnality = Playernationality.value;
        item.flag = Playerflag.value;
        item.club = Playerclub.value;
        item.logo = Playerlogo.value;
        item.rating = Playerrating.value;
        item.pacing = Playerpacing.value;
        item.shooting = Playershoting.value;
        item.passing = Playerpassing.value;
        item.driblbling = Playerdribbling.value;
        item.defending = Playerdefending.value;
        item.physical = Playerphysical.value;
        // If the player is a goalkeeper, update the additional fields
        if (item.position == "gk") {
            item.Dvin = document.getElementById("Dvin").value || "";
            item.Hand = document.getElementById("Hand").value || "";
            item.Kick = document.getElementById("Kick").value || "";
            item.ref = document.getElementById("ref").value || "";
            item.Sp = document.getElementById("Sp").value || "";
            item.pos = document.getElementById("pos").value || "";
        }
        
        saveData()
        form.classList.toggle("hidden")

        document.getElementById("modalSuccess").classList.remove("hidden")
        document.getElementById("success").innerText = "joueur modifier avec success"


        setTimeout(() => {
            document.getElementById("modalSuccess").classList.add("hidden");
        }, 2000);
        showAllData()
    })
}

const PlayersContainer = document.getElementById("Playerscontainer")
function showAllData() {
    PlayersContainer.innerHTML = ""
    if (arr.length) {
        arr.forEach(element => {
            const div = document.createElement("div")
            div.innerHTML = `
            <img class="w-16 h-16" src="${element.photo}"/>
            <div class="w-40">
            <h2 class="text-white text-bold">${element.name}</h2>
            <p class="text-[#55CCA2]">${element.position}</p>
            </div>
            <img src="./image/pencil-edit-svgrepo-com.svg" class="edit w-6 h-6"/>
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#d24141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

            `
            div.classList.add("flex", "gap-3", "items-center")
            div.querySelector("svg").addEventListener("click", () => {
                console.log("delete ", element.id)
                Delete(element.id)
            })
            div.querySelector(".edit").addEventListener("click", () => {
                modifier(element.id)
            })
            PlayersContainer.append(div)
        });
    }
}
// container of select and the select tags  
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
function createSelect(value, name, container) {
    const opt = document.createElement("option")
    opt.setAttribute("value", value)
    opt.innerText = name
    container.append(opt)
}

function selectPlayer() {
    arr.forEach(player => {
        if (player.position == "lw") {
            createSelect(player.id, player.name, lwPlayer)
        }
        if (player.position == "st") {
            createSelect(player.id, player.name, stPlayer)
        }
        if (player.position == "rw") {
            createSelect(player.id, player.name, rwPlayer)
        }
        if (player.position == "cml") {
            createSelect(player.id, player.name, cmlPlayer)
        }
        if (player.position == "cm") {
            createSelect(player.id, player.name, cmPlayer)
        }
        if (player.position == "cmr") {
            createSelect(player.id, player.name, cmrPlayer)
        }
        if (player.position == "lb") {
            createSelect(player.id, player.name, lbPlayer)
        }
        if (player.position == "cb1") {
            createSelect(player.id, player.name, cb1Player)
        }
        if (player.position == "cb2") {
            createSelect(player.id, player.name, cb2Player)
        }
        if (player.position == "rb") {
            createSelect(player.id, player.name, rbPlayer)
        }
        if (player.position == "gk") {
            createSelect(player.id, player.name, gkPlayer)
        }
    })
    /** remove the player from showPlayerData
     * 
     * @param {*} id 
     */
    // function removePlayer(id){
    //    const element = arr.find(obj=>obj.id === id)
    //    console.log("this player will be removed",element)
    //    return element
    // }
    /**
     * 
     * @param {value de selected option} select 
     * @param {c est la card qui contain le selecteur} container 
     * @param {c est le selecteur } selectId 
     */
    function loadchoosenPlayerData(select, container, selectId) {
        const choosenPlayer = select
        console.log(choosenPlayer)
        
        //get the player data
        const data = arr.find(obj => obj.id == choosenPlayer)
        const name = data.name.split(" ")
        selectId.classList.add("absolute","-top-5","left-5" ,"md:top-0","md:left-0")
        const playerData = container.querySelector(".data")
        if(playerData){
            playerData.remove()
        }
        const PlayerDataSection = document.createElement("div")
        PlayerDataSection.classList.add("data")
        const positionSection = document.createElement("div")
        positionSection.classList.add("flex", "flex-col", "h-10", "mr-3","justify-end" ,"md:h-4")

        const pacing = document.createElement("p")
        pacing.classList.add("text-[8px]", "flex", "mr-10", "font-bold","md:text[12px]","text-white")
        pacing.innerText = data.rating
        positionSection.append(pacing)

        const position = document.createElement("p")
        position.classList.add("text-[7px]", "flex", "mr-10", "font-bold","text-white")
        position.innerText = data.position
        positionSection.append(position)
        PlayerDataSection.append(positionSection)

        const profile = document.createElement("img")
        profile.src = data.photo
        profile.classList.add("flex", "justify-center","items-center","mx-5" ,"w-4", "h-4","md:w-8", "md:h-8","md:mx-5")
        PlayerDataSection.append(profile)

        const Name = document.createElement("p")
        Name.classList.add("text-xs", "text-center", "mr-4","md:font-bold","-mt-1","md:mb-0","text-white","md:mr-0")
        Name.innerText = name[0]
        PlayerDataSection.append(Name)

        const flagSection = document.createElement("div")
        flagSection.classList.add("flex", "justify-center", "items-center", "gap-1","mr-5","md:mr-0")

        const flag = document.createElement("img")
        flag.classList.add("w-2", "h-2")
        flag.src = data.flag
        flagSection.append(flag)

        const TeamLogo = document.createElement("img")
        TeamLogo.classList.add("w-2", "h-2")
        TeamLogo.src = data.logo
        flagSection.append(TeamLogo)
        PlayerDataSection.append(flagSection)

        const statuSection = document.createElement("div")
        statuSection.classList.add("flex", "gap-[2px]", "mb-3")
        // function to avoid the duplication
        function createStats(label, value) {
            const div = document.createElement("div")
            div.classList.add("flex", "flex-col")
            const labelPragraph = document.createElement("p")
            labelPragraph.classList.add("text-[6px]","text-white")
            labelPragraph.innerText = label
            div.append(labelPragraph)
            const statsParagraph = document.createElement("p")
            statsParagraph.classList.add("text-[6px]","text-white")
            statsParagraph.innerText = value
            div.append(statsParagraph)
            statuSection.append(div)
            return statuSection
        }
        if (data.position !== "gk") {
            PlayerDataSection.append(createStats("Pac", data.pacing))
            PlayerDataSection.append(createStats("Sho", data.shooting))
            PlayerDataSection.append(createStats("Pas", data.passing))
            PlayerDataSection.append(createStats("Dri", data.driblbling))
            PlayerDataSection.append(createStats("Def", data.defending))
            PlayerDataSection.append(createStats("Phy", data.physical))
        }
        if (data.position == "gk") {
            PlayerDataSection.append(createStats("Dvin", data.Dvin))
            PlayerDataSection.append(createStats("Hand", data.Hind))
            PlayerDataSection.append(createStats("Kick", data.Kick))
            PlayerDataSection.append(createStats("Sp", data.Sp))
            PlayerDataSection.append(createStats("Def", data.pos))
        }
        container.append(PlayerDataSection)
    }
    lwPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(lwPlayer.value, lw, lwPlayer)
        // removePlayer(lwPlayer.value)
    })
    stPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(stPlayer.value, st, stPlayer)
    })
    rwPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(rwPlayer.value, rw, rwPlayer)
    })
    cmlPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(cmlPlayer.value, cml, cmlPlayer)
    })
    cmPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(cmPlayer.value, cm, cmPlayer)
    })
    cmrPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(cmrPlayer.value, cmr, cmrPlayer)
    })
    lbPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(lbPlayer.value, lb, lbPlayer)
    })
    cb1Player.addEventListener("change", () => {
        loadchoosenPlayerData(cb1Player.value, cb1, cb1Player)
    })
    cb2Player.addEventListener("change", () => {
        loadchoosenPlayerData(cb2Player.value, cb2, cb2Player)
    })
    rbPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(rbPlayer.value, rb, rbPlayer)
    })
    gkPlayer.addEventListener("change", () => {
        loadchoosenPlayerData(gkPlayer.value, gk, gkPlayer)
    })
    // showSelectedPlayers()
}
selectPlayer()

