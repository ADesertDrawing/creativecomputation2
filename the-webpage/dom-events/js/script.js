let mainHeading = document.getElementById(`main-heading`);
let subHeading = document.getElementById(`sub-heading`);

mainHeading.addEventListener(`click`, setRedTextColor);
subHeading.addEventListener(`click`, setRedTextColor);

function setRedTextColor(event) {
    // in here I don't know which got clicked
    //I need event.target to tell me which
    event.target.style[`color`] = `#ff0000`;
}