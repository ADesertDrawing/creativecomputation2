class SausageDog extends Animal {
    constructor(x, y, image) { //same constructor format as for animal
        //cos we're extending the Animal class we want to call it through super
        super(x, y, image);
        this.found = false;//different from an Animal
        this.rotationSpeed = 0.25;//different from an Animal
    }
    //override the Animal's update by defining a sausagedog update
    //firstly do some default Animal update things
    update() {
        super.update();//do all the updating from Animal 

        if (this.found) {
            //this.angle is being used within the Animal display method
            //if the SausageDog is updating its angle, 
            //when it gets displayed with the version of display in the Animal,
            //it's going to spin
            this.angle += this.rotationSpeed; //if found, angle will keep going up (spin)

        }
    }
    mousePressed() {
        if (mouseX > this.x - this.image.width / 2 && //larger than left edge of image
            mouseX < this.x + this.image.width / 2 && //smaller than right edge of image
            mouseY > this.y - this.image.height / 2 && //larger than top edge of image
            mouseY < this.y + this.image.height / 2) { //smaller than bottom edge of image
            this.found = true;
        }
    }
}