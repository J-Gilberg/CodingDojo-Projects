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