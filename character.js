var herolife = document.getElementById("herolife")

var botlife = document.getElementById("botlife")


function Person(name, race, item) {
    {
        this.name = name;
        this.race = race;
        this.item = item;
        this.currentHealth = 100;
        this.maxHealth = 100;
        this.min = 1;
        this.dammage = 20;

        this.maxHealing = 15;
    }


    this.degat = () => {
        let dmg = Math.floor(Math.random() * (this.dammage - this.min) + this.min);






        return dmg;


    }

    this.heal = () => {
        let healing = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);

        return healing;

    }




    if (this.race == "Orc") {

        this.currentHealth = this.currentHealth * 1.4




    }

    if (this.item == "Staff") {
        this.maxHealing = this.maxHealing * 1.5;

    }

    if (this.item == "Sword") {
        this.dammage = this.dammage * 1.4
    }






}