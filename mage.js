const Player = require('./player.js');
class Mage extends Player {
    constructor(name,race) {
        super(name,race);
        this.class = 'Mage';
    }
    attack() {
        return 6;
    }
}
module.exports = Mage;
