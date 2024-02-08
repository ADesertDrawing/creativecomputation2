/**
3.3_Voices_3
by A Desert Drawing
*/
"use strict";

const speechSynthesizer = new p5.Speech();

let showSubtitle = false;
let toSay = `Have you done a stinky, \nyou dirty little man?`;

function setup() {
    createCanvas(500, 500);

    //Set the voice settings
    speechSynthesizer.setPitch(.9);
    speechSynthesizer.setRate(1.2);
    speechSynthesizer.setVoice(`Google UK English Female`);

    speechSynthesizer.onStart = speechStarted;
    speechSynthesizer.onEnd = speechEnded;

    //List all the possible voices
    console.log(speechSynthesizer.listVoices());
}

function draw() {
    background(165, 220, 250);
    if (showSubtitle) {
        textSize(30);
        text(toSay, 100, 100);
    }
}

function mousePressed() {
    //Say a thing!
    speechSynthesizer.speak(toSay);
}

function speechStarted() {
    showSubtitle = true;
}
function speechEnded() {
    showSubtitle = false;
}