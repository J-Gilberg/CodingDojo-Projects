class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack = (target) =>{
        return target.res - this.power < 0
            ?target.res = 0
            :target.res -= this.power;
    }

    showStats = () =>{
        console.log(`Name:${this.name}`);
        console.log(`Cost:${this.cost}`);
        console.log(`Power:${this.power}`);
        console.log(`Resilience:${this.res}`);
    }
}

class Effect extends Card{
    constructor(name, cost, effect, attribute, amount){
        super(name,cost);
        this.effect = effect;
        this.attribute = attribute;
        this.amount = amount;
    }
    playCard = (target) =>{
        return this.attribute == 'Resilience'
            ? this.effect == "Lower"
                ? target.res - this.amount <= 0
                    ? target.res = 0
                    : target.res -= this.amount
                : target.res += this.amount
            : this.effect == "Lower"
                ? target.power - this.amount <= 0
                    ? target.power = 0
                    : target.power -= this.amount
                : target.power += this.amount
    }
}

rb_ninja = new Unit("Red Belt Ninja",3,3,4);
bb_ninja = new Unit("Black Belt Ninja",4,5,4);

ha = new Effect("Hard Algorithm",2,"Raise","Resilience",3);
upr = new Effect("Unhandled Promise Rejection",1,"Lower","Resilience",2);
pp = new Effect("Pair Programming",3,"Raise","Power",2);

ha.playCard(rb_ninja);
upr.playCard(rb_ninja);
pp.playCard(rb_ninja);
rb_ninja.attack(bb_ninja);

rb_ninja.showStats();
bb_ninja.showStats();