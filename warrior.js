const Player = require('./player.js');
class Warrior extends Player {
    constructor(name,race) {
        super(name,race);
        this.class = 'Warrior';
    }
    attack() {
        return 5;
    }
}
module.exports = Warrior;
