const buttons = document.querySelectorAll("button"); //An array of buttons -> 0: UP 1: DOWN 2: RESET
const label = document.querySelector("h1");
const night = document.querySelector(".night");
let isNightMode = false;


const up = () => { //Function for the UP button
    label.innerHTML = Number(label.innerHTML)+1;
    changeColoor();
}

const down  = () => { //Function for the DOWN button
    label.innerHTML = label.innerHTML-=1;
    changeColoor();
}

const reset = () => { //Function for the RESET button
    label.innerHTML = "0";
    changeColoor();
}

const changeColoor = () => { //Color Change based on the number, Pos -> Green / Neg -> Red / Zero -> Default
    let number = Number(label.innerHTML);

    if(number > 0){
    label.style.color = "#58dd20";
    }
    else if (number < 0){
        label.style.color = "#f42674";
    }
    else{
        label.style.color = "#0671eb"
    }
}

const nightMode = () => {
    if (!isNightMode){
        document.querySelector("body").style.backgroundColor = "#05012e";
        isNightMode = true;
    }
    else{
        document.querySelector("body").style.backgroundColor = "white";
        isNightMode = false;
    }
}

buttons[0].addEventListener("click", up);
buttons[1].addEventListener("click", down);
buttons[2].addEventListener("click", reset);
night.addEventListener("click", nightMode);


