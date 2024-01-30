const textLabel = document.getElementById("text-label");
const deleteBar = document.getElementById("delete-bar");
const conatiner = document.getElementById("container");
const addButton = document.getElementById("add-button");
let newBookmarkLabel = "";
let newBookmarkLink = "";


function deleteBookmark(){
    console.log("delete");
}

function addBookmark(){
    console.log("add");
}


addBookmark.addEventListener("click", addBookmark);
deleteBar.addEventListener("click", deleteBookmark);
textLabel.addEventListener("mouseenter", () => {
    deleteBar.style.display = "block";
})

textLabel.addEventListener("mouseleave", () => {
    deleteBar.style.display = "none";
})

deleteBar.addEventListener("mouseenter", () => {
    deleteBar.style.display = "block";
})

deleteBar.addEventListener("mouseleave", () => {
    deleteBar.style.display = "none";
})