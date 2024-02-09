/**
3.4_Voices_4_Input
by A Desert Drawing
*/
"use strict";

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = `?`;

function setup() {
    createCanvas(500, 500);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.start();
}

function draw() {
    background(255, 100, 156);
    textAlign(CENTER, CENTER);
    textSize(24);
    text(`Say that you love me`, width / 2, height / 3);
    text(currentSpeech, width / 2, height / 2);
}

function handleSpeechInput() {
    if (speechRecognizer.resultString === `I love you`) {
        currentSpeech = `You're damn right you do`;
    }
    else {
        currentSpeech = `:(`;
    }
}