const optionRock = document.querySelector(".option-rock");
const optionPaper = document.querySelector(".option-paper");
const optionScissors = document.querySelector(".option-scissors");

const options = ["✊", "✋", "✌"];
let turn; // 0 --> USER  1 --> COMPUTER
const numberOfGames = 5;
const result = []; // 0 --> USER  1 --> COMPUTER



function determineTurn(){
    turn = Math.floor(Math.random()*2);
}


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


function userSelect(){
    activateDeactivate(1);

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
    const waitTime = Math.random()*2000;

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
        console.log("Finished!");
        console.log(result);
        return
    }
    determineTurn();
    if (turn === 0){
        console.log("user");
        const userChoice = await userSelect();
        console.log(userChoice);

        const computerChoice = await computerSelect();
        console.log(computerChoice);
        
        result.push(determineWinner(userChoice, computerChoice));
        console.log(result);

    }
    else{
        console.log("pc");
        const computerChoice = await computerSelect();
        console.log(computerChoice);


        const userChoice = await userSelect();
        console.log(userChoice);

        result.push(determineWinner(userChoice, computerChoice));
        console.log(result);
    }

    setTimeout(play, 1000);
}


play();