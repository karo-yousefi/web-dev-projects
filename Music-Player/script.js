const backButton = document.getElementById("back-button");
const playButton = document.getElementById("play-button");
const nextButton = document.getElementById("next-button");
const musicPlayer = document.getElementById("music-player");
const coverImg = document.getElementById("cover-img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const durationLB = document.getElementById("duration");
const currentLB = document.getElementById("current-time");
const timelineContainer = document.getElementById("timeline");
const timeline = document.getElementById("timeline-passed");

let isPlaying = false;

let musics = {
    1:{
        title: "One",
        artist: "LHSchiptunes",
        coverPath: "img/1.jpg",
        audioPath: "music/1.mp3",
    },
    2:{
        title: "Two",
        artist: "LHSchiptunes",
        coverPath: "img/2.jpg",
        audioPath: "music/2.mp3",
    },
    3:{
        title: "Three",
        artist: "LHSchiptunes",
        coverPath: "img/3.jpg",
        audioPath: "music/3.mp3",
    },
}
let currentMusic = 1;
const numberOfMusics = Object.keys(musics).length;


function play(){
    isPlaying = true;
    musicPlayer.play();
    playButton.classList.replace("fa-play", "fa-pause");
    playButton.setAttribute("title", "Pause");
}

function pause(){
    isPlaying = false;
    musicPlayer.pause();
    playButton.classList.replace("fa-pause", "fa-play");
    playButton.setAttribute("title", "Play");
}

function loadMusic(songNumber){
    coverImg.src = musics[songNumber].coverPath;
    musicPlayer.src = musics[songNumber].audioPath;
    title.innerHTML = musics[songNumber].title;
    artist.innerHTML = musics[songNumber].artist;
    pause();
}


function nextMusic(){
    if (currentMusic === numberOfMusics){
        loadMusic(1);
        currentMusic = 1;
    }else{
        currentMusic++;
        loadMusic(currentMusic);
    }
    timeline.style.width = "0%";
}


function backMusic(){
    if (currentMusic === 1){
        loadMusic(numberOfMusics);
        currentMusic = numberOfMusics;
    }else{
        currentMusic--;
        loadMusic(currentMusic);
    }
    timeline.style.width = "0%";
}

function updateTimeline(e){
    if(isPlaying){
        const {duration, currentTime} = e.srcElement;
        let width = 100*currentTime/duration;
        timeline.style.width = `${width}%`;

        const durationMins = Math.floor(duration / 60);
        let durationSecs = Math.floor(duration % 60);
        if (durationSecs < 10){
            durationSecs = `0${durationSecs}`;
        }
            if (durationSecs){
                durationLB.textContent = `${durationMins}:${durationSecs}`;
            }

        const currentMins = Math.floor(currentTime / 60);
        let currentSecs = Math.floor(currentTime % 60);
        if (currentSecs < 10){
            currentSecs = `0${currentSecs}`;
        }
        currentLB.textContent = `${currentMins}:${currentSecs}`;
    }
}


function setTimeline(e){
    const fullWidth = this.clientWidth;
    const clickedXPos = e.offsetX;
    const {duration} = musicPlayer;
    const clickedTime = (clickedXPos / fullWidth) * duration;

    musicPlayer.currentTime = clickedTime;
    // updateTimeline();
}

playButton.addEventListener("click", () => (isPlaying ? pause() : play()));
nextButton.addEventListener("click", nextMusic);
backButton.addEventListener("click", backMusic);
musicPlayer.addEventListener("timeupdate", updateTimeline);
musicPlayer.addEventListener("ended", nextMusic);
timelineContainer.addEventListener("click", setTimeline);

loadMusic(1);