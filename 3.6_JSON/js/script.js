/**
3.6_JSON
by A Desert Drawing
*/
"use strict";

// A global variable to store our data in
let tarotData = undefined;
// A global variable to store our fortune in
let fortune = `No fortune found yet...`;

function preload() {
    // Used in preload, loadJSON will just return the data into our variable
    tarotData = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //Choose a random card
    let card = random(tarotData.tarot_interpretations);
    // Choose a random fortune
    fortune = random(card.fortune_telling);
}

function draw() {
    background(0);

    // Get the first shadow meaning into a variable by following the path through the tarot object

    // Display the meaning
    push();
    textSize(18);
    textAlign(CENTER);
    fill(255, 255, 0);
    text(fortune, width / 2, height / 2);
    pop();
}

