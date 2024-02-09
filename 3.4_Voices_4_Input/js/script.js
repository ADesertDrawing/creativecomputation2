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
    speechRecognizer.continuous = true;
    speechRecognizer.start();
}


function draw() {
    background(0);
    if (lightsAreOn) {
        background(255);
    }
}


function handleSpeechInput() {
    console.log(speechRecognizer.resultString);
    if (speechRecognizer.resultString.toLowerCase() === `turn the lights on`) {
        lightsAreOn = true;
    }
    else if (speechRecognizer.resultString.toLowerCase() === `turn the lights off`) {
        lightsAreOn = false;
    }
}
