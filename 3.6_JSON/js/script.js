/**
3.6_JSON
by A Desert Drawing
*/
"use strict";

let tarot;

function preload() {
    // Used in preload, loadJSON will just return the data into our variable
    tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(0);

    // Get the first shadow meaning into a variable by following the path through the tarot object
    let firstShadowMeaning = tarot.tarot_interpretations[0].meanings.shadow[0];

    // Display the meaning
    push();
    textSize(18);
    textAlign(CENTER);
    fill(255, 255, 0);
    text(firstShadowMeaning, width / 2, height / 2);
    pop();
}

