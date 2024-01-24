const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const pomodoroSection = document.getElementById("pomodoro-section");
const restSection = document.getElementById("rest-section");
const longRestSection = document.getElementById("long-rest-section")
const timerText = document.getElementById("timer");
const resetButton = document.getElementById("reset-button");
const startButton = document.getElementById("start-button");
const sesstionDropdown = document.getElementById("sesstion-dropdown");
const sesstionBeforeLongDropdown = document.getElementById("sesstion-before-dropdown");

let pomodoroTime = 0;
let restTime = 0;
let longRestTime = 0;
let sectionSelected = 0; // 0: pomodoro  1: rest  2: long rest
sesstionList = [];


function upOneMin(){
    if(sectionSelected===0){
        pomodoroTime++;
        update(pomodoroTime);
    }

    else if (sectionSelected===1){
        restTime++;
        update(restTime);
    }

    else{
        longRestTime++;
        update(longRestTime);
    }
}

function downOneMin(){
    if(sectionSelected===0){
        if (pomodoroTime>0){
            pomodoroTime--;
            update(pomodoroTime);
        }
    }

    else if (sectionSelected===1){
        if(restTime>0){
        restTime--;
        update(restTime);
        }
    }

    else{
        if(longRestTime>0){
            longRestTime--;
        update(longRestTime);
        }
    }
}


function update(time){

    if(time<10){
        time = "0" + time.toString();
    }

    timerText.innerHTML = time + ":00";
}



function reset(){
    if(sectionSelected===0){
        pomodoroTime = 0;
        update(pomodoroTime);
    }
    else if(sectionSelected===1){
        restTime = 0;
        update(restTime);
    }
    else{
        longRestTime = 0;
        update(longRestTime);

    }
}


function start(){
    sesstions = sesstionDropdown.value;
    sesstionsBeforeLong = sesstionBeforeLongDropdown.value;

    for (let i = 1; i <= sesstions; i++) {
        if(i%2===1){
            sesstionList.push(0);
        }
        else if(i%sesstionsBeforeLong===0){
            sesstionList.push(2);
        }
        else{
            sesstionList.push(1);
        }
    }
}


function sectionDone(section){
    if(section===0){
        pomodoroSection.style.backgroundColor = "#3ff33f";
        timeCountDown(restTime);
    }
    else if(section===1){
        restSection.style.backgroundColor = "#3ff33f";
        timeCountDown(longRestTime);
    }
    else if(section===2){
        longRestSection.style.backgroundColor = "#3ff33f";
    }
}


pomodoroSection.addEventListener("click", () => {
        sectionSelected = 0;
        update(pomodoroTime);
})
restSection.addEventListener("click", () => {
    sectionSelected = 1;
    update(restTime);
})
longRestSection.addEventListener("click", () => {
    sectionSelected = 2;
    update(longRestTime)
})
upButton.addEventListener("click", upOneMin);
downButton.addEventListener("click", downOneMin);
startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);

