const optionRock = document.querySelector(".option-rock");
const optionPaper = document.querySelector(".option-paper");
const optionScissors = document.querySelector(".option-scissors");
const userTitle = document.querySelector(".user-title");
const computerTitle = document.querySelector(".computer-title");
const userLog = document.querySelector(".user-log");
const computerLog = document.querySelector(".computer-log");
const resultLog  = document.querySelector(".result-log");
const resetButton =  document.querySelector(".reset-button");


const options = ["✊", "✋", "✌"];
let numberOfGames;
const result = []; // W --> User win  L --> User Lost  D --> Draw


numberOfGames = prompt("The number of games you wanna play?");

function activateDeactivate(number){ // 0 --> deactive  1 --> activate
    if (number === 0){
        optionRock.classList.add("deactive");
        optionPaper.classList.add("deactive");
        optionScissors.classList.add("deactive");
    }
    else{
        optionRock.classList.remove("deactive");
        optionPaper.classList.remove("deactive");
        optionScissors.classList.remove("deactive");
    }
}

function addLog(user, computer){
    const newLogUser = document.createElement("p");
    const newLogComputer = document.createElement("p");
    const newLogResult = document.createElement("p");

    newLogUser.innerHTML = user;
    newLogComputer.innerHTML = computer;
    newLogResult.innerHTML = result.at(-1);

    userLog.appendChild(newLogUser);
    computerLog.appendChild(newLogComputer);
    resultLog.appendChild(newLogResult);
}

function userSelect(){
    activateDeactivate(1);
    userTitle.style.color = "#ff0040";
    computerTitle.style.color = "#000";

    return new Promise((resolve) => {
        optionRock.addEventListener("click", () => {
            resolve("✊");
            activateDeactivate(0);
        }, {once: true});
        optionPaper.addEventListener("click", () => {
            resolve("✋");
            activateDeactivate(0);
        }, {once:true});
        optionScissors.addEventListener("click", () => {
            resolve("✌");
            activateDeactivate(0);
        }, {once:true});
    })
}

function computerSelect(){
    const waitTime = Math.random()*1800;

    userTitle.style.color = "#000";
    computerTitle.style.color = "#ff0040";

    return new Promise((resolve) => {
        setTimeout(() => {
            const choiceIndx = Math.floor(Math.random(0, 1) * options.length);
            resolve(options[choiceIndx]);
        }, waitTime)
    })
}

function determineWinner(user, computer){
    if (user==="✊" && computer==="✊"){
        return "D";
    }
    else if(user==="✊" && computer==="✋"){
        return "L"
    }
    else if(user==="✊" && computer==="✌"){
        return "W";
    }

    else if(user==="✋" && computer==="✊"){
        return "W";
    }
    else if(user==="✋" && computer==="✋"){
        return "D"
    }
    else if(user==="✋" && computer==="✌"){
        return "L";
    }

    else if(user==="✌" && computer==="✊"){
        return "L"
    }
    else if(user==="✌" && computer==="✋"){
        return "W";
    }
    else if(user==="✌" && computer==="✌"){
        return "D";
    }
}

async function play(){
    if (result.length>=numberOfGames){
        userTitle.style.color = "#000";
        computerTitle.style.color = "#000";
        return
    }

    const userChoice = await userSelect();
    const computerChoice = await computerSelect();

    result.push(determineWinner(userChoice, computerChoice));
    addLog(userChoice, computerChoice);


    play();
}

resetButton.addEventListener("click", () =>{
    location.reload();
})

play();