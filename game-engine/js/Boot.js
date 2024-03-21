class Boot extends Phaser.Scene {

    constructor() {
        super({
            key: `boot`
        });
    }

    preload() {
        this.load.image('wall', 'assets/images/wall.png');

        this.load.on(`complete`, () => {
            this.scene.start(`play`);
        });
    }

    create() {
        let style = {
            fontFamily: 'sans-serif',
            fontSize: `40px`,
            color: '#ffffff'
        };
        let loadingString = `Loading…`;
        this.add.text(100, 100, loadingString, style);

        this.scene.start(`play`);
    }

    update() {

    }
}

