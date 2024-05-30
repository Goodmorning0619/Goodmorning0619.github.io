const myButton = document.querySelector("#my-button");
console.log(myButton);

const sidDrawer = document.querySelector("#side-drawer");
console.log("sideDrawer");

myButton.addEventListener("click", toggleSideDrawer);

let isOpened = false;

function toggleSideDrawer() {
  //  console.log("you just click me");
  if (!isOpened) {
    sidDrawer.computedStyleMap.translate = "200px";
    isOpened = true;
  } else {
    sidDrawer.computedStyleMap.translate = "0px";
    isOpened = false;
  }
}
