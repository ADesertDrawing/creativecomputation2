/**
0.3_First-class_functions
by A Desert Drawing
*/
"use strict";
let hello = function () { // Note how the function definition has no name!
    alert(`Hello!`);
};

setTimeout(hello, 5000); // Call the function inside the hello variable after 5000 milliseconds