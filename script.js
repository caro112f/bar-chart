"use strict";

let counter = 0;

let array = [];

window.addEventListener("load", init);

function init() {
  setTimeout(loop, 500);
  //^decides how delayed the loop is
}
function loop() {
  const queueSize = getNumberOfCustomers();

  if (counter < 40) {
    createNewBar();
    //^loads function that creates new bars on the site each time the array loops
    array.unshift(queueSize);
    //^unShift adds the randomized number from queueSize in the array
    counter++;
    //^counter++ adds new queueSize so the array grows

    //in general: loops the array while telling it to increase the array size as long as its under 40, making new bars and implementing random numbers each time
  } else {
    array.length = 39;
    //^defines the array length to be 39
    array.unshift(queueSize);
    //^unShift adds the randomized number from queueSize in the array
    createNewBar();
    //^loads function that creates new bar each time the array loops

    //in general: continues to loop array without counter++ to make it grow, still making new bars each time and implementing randomized numbers
  }
  console.log(array);
  init();
}
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
  //^randomizes the number that is implemented in the beginning of the array via unshift
}

function createNewBar() {
  const newBar = document.querySelector("#bars");
  newBar.innerHTML += `<div class="bar" style= "height: ${
    (array[0] / 32) * 100
  }%;"></div>`;
  //^defines the height of the newBar in percentages, the number is relative to 32 that is the maximum amount of customers.
}
