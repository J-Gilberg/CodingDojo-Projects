class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        return console.log(this.name);
    }
    showStats(){
        console.log(`${this.name} Stats: Health=${this.health}, Speed=${this.speed}, Strength=${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
    }
}

class SuperNinja extends Ninja{
    constructor(name,health){
        super(name,health);
        this.wisdom =10;
    }

    speakWisdom(){
        this.drinkSake();
    }
}

const superSensei = new SuperNinja("Master Splinter",0);
superSensei.speakWisdom();

superSensei.showStats()