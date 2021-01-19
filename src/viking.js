// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier{

        receiveDamage(damage) {
            this.health -= damage;
            if(this.health > 0) {
                return `A Saxon has received ${damage} points of damage`;
            }
            else {
                return `A Saxon has died in combat`;
            }
        }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randSaxon = Math.floor(this.saxonArmy.length * Math.random());
        let randViking = Math.floor(this.vikingArmy.length * Math.random());
        let damage = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].strength);
        this.saxonArmy = this.saxonArmy.filter(function(saxon) {
            return (saxon.health > 0);
        })
        return damage;
    }

    saxonAttack() {
        let randSaxon = Math.floor(this.saxonArmy.length * Math.random());
        let randViking = Math.floor(this.vikingArmy.length * Math.random());
        let damage = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].strength);
        this.vikingArmy = this.vikingArmy.filter(function(viking) {
            return (viking.health > 0);
        })
        return damage;
    }

    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }



}
