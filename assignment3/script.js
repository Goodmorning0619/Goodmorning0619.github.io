const clickButton = document.querySelector("#click-button");
console.log(clickButton);

const clickSound = document.querySelector("#click-sound");
console.log(clickSound);

clickButton.addEventListener("click", popIt);

function popIt() {
  clickSound.play();
}
