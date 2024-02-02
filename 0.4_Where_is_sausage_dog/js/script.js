/**
0.4_Where_is_sausage_dog
by A Desert Drawing
*/
"use strict";

const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];


function preload() {
    for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
        let animalImage = loadImage(`assets/images/animal${i}.png`);
        animalImages.push(animalImage);//animalImages is name of array
    }

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < NUM_ANIMALS; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let animalImage = random(animalImages);
        //create animal with random x, y and image
        let animal = new Animal(x, y, animalImage);
        //add the animal that's currently inside the animal 
        //variable to the animals array
        animals.push(animal);
    }
}

function draw() {
    background(255, 255, 0);
    //as soon as you've created the array, you should be 
    //using the array length so that it's dynamically calculated
    for (let i = 0; i < animals.length; i++) {
        //update the animal at position i
        animals[i].update();
    }
}