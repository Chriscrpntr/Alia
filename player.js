class Player {
    constructor(name, race, classtype) {
        this.name = name;
        this.race = race;
        this.class = classtype;
        this.level = 1;
        this.health = 100;
    }
    attack() {
        return 4;
    }
}


module.exports = Player;
