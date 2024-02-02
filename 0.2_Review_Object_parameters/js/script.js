/**
0.2_Review_Object_parameters
by A Desert Drawing
*/
"use strict";
function setup() {
    createCanvas(500, 500);
}

function draw() {
    drawFancyRect(250, 250, 200, 200, 255, 255, 0, CENTER);
}

function drawFancyRect(x, y, w, h, r, g, b, mode) {
    push();
    fill(r, g, b);
    rectMode(mode);
    rect(x, y, w, h);
    pop();
}