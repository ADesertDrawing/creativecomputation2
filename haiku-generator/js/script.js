/**
Haiku Generator
A Desert Drawing


*/

"use strict";

let fiveSyllableLines = [
    `The cat knows the tree`,
    `See how the tree forgets`,
    `The question is yes`,
    `You have found the way`,
    `The cat blinks. Again.`
];
let sevenSyllableLines = [
    `Nothing is said more than once`,
    `If you need to ask, you know`,
    `You pass unheard and unseen`,
    `You would like a cup of tea`,
    `Neither half full nor empty`
];

let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let line1P = document.getElementById(`line1`);
let line2P = document.getElementById(`line2`);
let line3P = document.getElementById(`line3`);

line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

function lineClicked(event) {
    fadeOut(event.target, 1);
}

function fadeOut(element, opacity) {
    opacity -= 0.01;
    element.style[`opacity`] = opacity;
    if (opacity > 0) {
        requestAnimationFrame(function () {
            fadeOut(element, opacity);
        });
    }
    else {
        setNewLine(element);
        fadeIn(element, 0);
    }
}

function fadeIn(element, opacity) {
    opacity += 0.01;
    element.style[`opacity`] = opacity;
    if (opacity < 1) {
        requestAnimationFrame(function () {

            fadeIn(element, opacity);
        });
    }
}

function setNewLine(element) {
    if (element === line1P || element === line3P) {
        element.innerText = random(fiveSyllableLines);
    }
    else if (element === line2P) {
        element.innerText = random(sevenSyllableLines);
    }
}

function random(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}