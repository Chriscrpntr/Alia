const Player = require('./player.js');
class Warrior extends Player {
    constructor() {
        super();
        this.class = 'Warrior';
    }
    attack() {
        return 5;
    }
}
module.exports = Warrior;