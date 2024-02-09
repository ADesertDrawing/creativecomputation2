/**
3.4_Voices_4_Input
by A Desert Drawing
*/
"use strict";

const speechRecognizer = new p5.SpeechRec();

function setup() {
    createCanvas(500, 500);
    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.start();
}

function draw() {
    background(backgroundColor);
}

function handleSpeechInput() {
    let words = speechRecognizer.resultString.split(` `);

    backgroundColor = words.pop();
}
