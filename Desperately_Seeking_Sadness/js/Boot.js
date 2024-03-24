class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: `boot`
        });
    }
    preload() {
        //load assets here
        this.load.image(`avatar`, `assets/images/neutral.png`);
        this.load.image(`thumb_down`, `assets/images/thumb_down.png`);
        this.load.image(`thumb_up`, `assets/images/thumb_up.png`);

        this.load.on(`complete`, () => {
            this.scene.start(`play`);
        });
    }


    create() {

    }

    update() {

    }
}