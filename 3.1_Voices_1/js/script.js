/**
3.1_Voices_1
by A Desert Drawing
*/
"use strict";

let recognizer = new p5.SpeechRec();


function setup() {
    createCanvas(500, 500);
    recognizer.onResult = handleResult;
    recognizer.start();
}

function draw() {

}

function handleResult() {
    console.log(recognizer.resultString);
}