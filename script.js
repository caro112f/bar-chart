"use strict";

let counter = 0;

let array = [];

window.addEventListener("load", init);

function init() {
  setTimeout(loop, 500);
}
function loop() {
  const queueSize = getNumberOfCustomers();

  if (counter < 40) {
    createNewBar();
    array.unshift(queueSize);
    counter++;
  } else {
    array.length = 39;
    array.unshift(queueSize);
    createNewBar();
  }
  console.log(array);
  init();
}
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function createNewBar() {
  const newBar = document.querySelector("#bars");
  newBar.innerHTML += `<div class="bar" style= "height: ${
    (array[0] / 32) * 100
  }%;"></div>`;
}
