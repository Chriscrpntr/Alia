const Player = require('./player.js');
class Mage extends Player {
    constructor() {
        super();
        this.class = 'Mage';
    }
    attack() {
        return 6;
    }
}
module.exports = Mage;