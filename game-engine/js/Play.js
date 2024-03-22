class Play extends Phaser.Scene {
    constructor() {
        super({
            key: `play`
        });
    }

    create() {
        this.wall = this.add.image(100, 100, 'wall');
        this.wall.setTint(0xdd3333);

        this.avatar = this.add.sprite(200, 200, `avatar`);

        this.createAnimations();

        this.avatar.play(`avatar-idle`);
    }

    update() {

    }

    createAnimations() {

        this.anims.create({
            key: `avatar-moving`, //can name this as you like
            //can have lots of anims so specify which
            //one and work out the frames
            frames: this.anims.generateFrameNumbers(`avatar`, {
                start: 0,
                end: 18
            }),
            //30 frames per second
            frameRate: 24,
            //if 0, won't play. 2 plays twice and stops. -1 loops
            repeat: -1
        });
        this.anims.create({
            key: `avatar-idle`,
            frames: this.anims.generateFrameNumbers(`avatar`, {
                start: 0,
                end: 0
            }),
            frameRate: 24,
            repeat: 0
        });
    }
}