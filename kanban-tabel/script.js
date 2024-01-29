// ==Variables== //
const backlogAddButton = document.getElementById("backlog-add-button");
const inprogressAddButton = document.getElementById("inprogress-add-button");
const finishedAddButton = document.getElementById("finished-add-button");
const onholdAddButton = document.getElementById("onhold-add-button");
const deleteButton = document.getElementById("delete-button");

const backlogBox = document.getElementById("backlog-box");
const inprogressBox = document.getElementById("inprogress-box");
const finishedBox = document.getElementById("finished-box");
const onholdBox = document.getElementById("onhold-box");

const backlogColor = "#fd4646";
const inprogressColor = "#17a2ff";
constfinishedColor = "#5ffd38";
const onholdColor = "#d9fd38"


// ==Functions== //
function backlogAdd(){
    newItem = prompt("Add new item for Backlog:");
    
    newItemElement = document.createElement("div");
    newItemElement.classList.add("label");
    newItemElement.style.backgroundColor = backlogColor;
    newItemElement.innerHTML = newItem;
    newItemElement.setAttribute("draggable", "true");

    backlogBox.appendChild(newItemElement);
}

function inprogessAdd(){
    newItem = prompt("Add new item for In Progress:");
    
    newItemElement = document.createElement("div");
    newItemElement.classList.add("label");
    newItemElement.style.backgroundColor = inprogressColor;
    newItemElement.innerHTML = newItem;
    newItemElement.setAttribute("draggable", "true");

    inprogressBox.appendChild(newItemElement);
}

function finishedAdd(){
    newItem = prompt("Add new item for Finished:");
    
    newItemElement = document.createElement("div");
    newItemElement.classList.add("label");
    newItemElement.style.backgroundColor = finishedColor;
    newItemElement.innerHTML = newItem;
    newItemElement.setAttribute("draggable", "true");

    finishedBox.appendChild(newItemElement);
}

function onholdAdd(){
    newItem = prompt("Add new item for On Hold:");
    
    newItemElement = document.createElement("div");
    newItemElement.classList.add("label");
    newItemElement.style.backgroundColor = onholdColor;
    newItemElement.innerHTML = newItem;
    newItemElement.setAttribute("draggable", "true");

    onholdBox.appendChild(newItemElement);
}

function test(){
    console.log(backlogBox.getBoundingClientRect());
}


function drop(){

}

// ==Events== //
backlogAddButton.addEventListener("click", backlogAdd);
inprogressAddButton.addEventListener("click", inprogessAdd);
finishedAddButton.addEventListener("click", finishedAdd);
onholdAddButton.addEventListener("click", onholdAdd);

document.addEventListener("dragstart", (element) => {
    element.target.style.opacity = 0.6;
});

document.addEventListener("dragend", (element) => {
    const backlogx1 = backlogBox.getBoundingClientRect().x;
    const backlogx2 = backlogx1 + backlogBox.getBoundingClientRect().width;
    const backlogy1 = backlogBox.getBoundingClientRect().y;
    const backlogy2 = backlogy1 + backlogBox.getBoundingClientRect().height;

    const inprogressx1 = inprogressBox.getBoundingClientRect().x;
    const inprogressx2 = inprogressx1 + inprogressBox.getBoundingClientRect().width;
    const inprogressy1 = inprogressBox.getBoundingClientRect().y;
    const inprogressy2 = inprogressy1 + inprogressBox.getBoundingClientRect().height;

    const finishedx1 = finishedBox.getBoundingClientRect().x;
    const finishedx2 = finishedx1 + finishedBox.getBoundingClientRect().width;
    const finishedy1 = finishedBox.getBoundingClientRect().y;
    const finishedy2 = finishedy1 + finishedBox.getBoundingClientRect().height;

    const onholdx1 = onholdBox.getBoundingClientRect().x;
    const onholdx2 = onholdx1 + onholdBox.getBoundingClientRect().width;
    const onholdy1 = onholdBox.getBoundingClientRect().y;
    const onholdy2 = onholdy1 + onholdBox.getBoundingClientRect().height;

    const deletex1 = deleteButton.getBoundingClientRect().x;
    const deletex2 = deletex1 + deleteButton.getBoundingClientRect().width;
    const deletey1 = deleteButton.getBoundingClientRect().y;
    const deletey2 = deletey1 + deleteButton.getBoundingClientRect().height;

    let parent = element.target.parentElement;

    x = element.clientX;
    y = element.clientY;

    if ((x>backlogx1 && x<backlogx2) && (y>backlogy1 && y<backlogy2)){
        console.log(element);
    }

    else if ((x>inprogressx1 && x<inprogressx2) && (y>inprogressy1 && y<inprogressy2)){
        console.log(element);
    }

    else if ((x>finishedx1 && x<finishedx2) && (y>finishedy1 && y<finishedy2)){
        console.log("finished");
    }

    else if ((x>onholdx1 && x<onholdx2) && (y>onholdy1 && y<onholdy2)){
        console.log("onhold");
    }

    else if((x>deletex1 && x<deletex2) && (y>deletey1 && y<deletey2)){
        parent.removeChild(element.target);
    }

    else{
        console.log("else");
    }

    element.target.style.opacity = 1;
});

deleteButton.addEventListener("click", test);