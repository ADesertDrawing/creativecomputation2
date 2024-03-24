class Play extends Phaser.Scene {
    constructor() {
        super({
            key: `play`
        });
    }

    create() {
        this.walls = this.physics.add.group({
            key: `wall`,
            immovable: true,
            quantity: 100
        });
        this.walls.children.each(function (wall) {
            let x = Math.random() * this.sys.canvas.width;
            let y = Math.random() * this.sys.canvas.height;
            wall.setPosition(x, y);
            wall.setTint(0xdd3333);
        }, this);

        this.collectables = this.physics.add.group({
            key: `wall`,
            quantity: 100
        });
        this.collectables.children.each(function (collectable) {
            let x = Math.random() * this.sys.canvas.width;
            let y = Math.random() * this.sys.canvas.height;
            collectable.setPosition(x, y);
            collectable.setTint(0x33dd33);
        }, this);

        this.avatar = this.physics.add.sprite(200, 200, `avatar`);

        this.collectable = this.physics.add.image(300, 300, `wall`);
        this.collectable.setTint(0x33dd33);

        this.createAnimations();

        this.avatar.play(`avatar-idle`);
        this.avatar.setCollideWorldBounds(true);

        this.physics.add.collider(this.avatar, this.walls);
        this.physics.add.overlap(this.avatar, this.collectables, this.collectItem, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    collectItem(avatar, collectable) {
        collectable.destroy();
    }

    update() {
        //if not pressing anything, it stops
        this.avatar.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.avatar.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown) {
            this.avatar.setVelocityX(300);
        }

        if (this.cursors.up.isDown) {
            this.avatar.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown) {
            this.avatar.setVelocityY(300);
        }
        if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
            this.avatar.play(`avatar-moving`, true);
        }
        else {
            this.avatar.play(`avatar-idle`, true);
        }
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