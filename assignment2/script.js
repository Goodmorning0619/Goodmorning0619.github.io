const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
console.log(popSound);
video.removeAttribute("controls");
playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
muteUnmuteButton.addEventListener("click", toggleAudio);
const muteUnmuteImg = document.querySelector("mute-unmute-img");

function toggleAudio() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "red";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "blue";
    myVideo.muted = true;
  }
}

let likeCount = 0;

const likeButton = document.querySelector("#like-button");
console.log(likeButton);
likeButton.addEventListener("click", addLikes);
const likes = document.querySelector("#likes");
likes.textContent = likeCount;

function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}

const popButton = document.querySelector("#pop-button");
console.log(popButton);

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

popButton.addEventListener("click", popIt);

function popIt() {
  popSound.play();
}
