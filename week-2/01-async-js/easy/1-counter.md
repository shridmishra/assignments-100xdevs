## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

let counter = 0;

function updateCounter() {
  counter++;
  console.log("Counter: " + counter);
}

// Update the counter every 1000 milliseconds (1 second)
setInterval(updateCounter, 1000);