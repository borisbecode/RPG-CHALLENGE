var button = document.getElementById("button");
var Name = document.getElementById("Name")
var Items = document.getElementById("Items")
var Race = document.getElementById("Race")
var log = document.getElementById("log")
var logplace = document.getElementById("logplace")
var heal = document.getElementById("heal")
var attack = document.getElementById("attack")



var Botname = ["lionel", "sofian", "boris", "thomas", "etienne", "nicolas", "francis", "ivan", "marine", "aurelien", "morgane"]





function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// POUR LE RANDOM ATTACK ET SANTE

var santevalue = Random(0, 30)
var attaquervalue = Random(0, 20)




//Pour le random du bot 
var botnamerandom = Botname[Random(0, 10)]
var botracerandom = Race[Random(0, 3)].value
var botitemsrandom = Items[Random(0, 3)].value






// POUR METTRE LES INFORMATIONS RECOLTEE ET LES RANDOMS BOT DANS LES P 
var heroname = document.getElementById("heroname")
var herorace = document.getElementById("herorace")
var herostuff = document.getElementById("herostuff")
var herolife = document.getElementById("herolife")
var botname = document.getElementById("botname")
var botrace = document.getElementById("botrace")
var botstuff = document.getElementById("botstuff")
var botlife = document.getElementById("botlife")





// OBJET PERSONNE POUR JOUEUR ET BOT 
function Person(name, race, item) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.currentHealth = 100;
    this.maxHealth = 100;

    this.maxDamage = 20;
    this.maxHealing = 30;
}




changeHero = () => {
    hero = new Person(Name.value, Race.value, Items.value);
    heroname.textContent = "Hero: " + hero.name;
    herorace.textContent = "Race: " + hero.race;
    herostuff.textContent = "Stuff: " + hero.item






    /*  raceBonus(hero);
     itemBonus(hero);
     heroHP.value = hero.currentHealth;
     heroHP.max = hero.maxHealth;
     hero.displayChar();  */
}


Setbot = () => {
    bot = new Person(botnamerandom, botracerandom, botitemsrandom);
    botname.textContent = "Hero: " + bot.name;
    botrace.textContent = "Race: " + bot.race;
    botstuff.textContent = "Stuff: " + bot.item


}



botlogic = () => {

    if (botlife.value < 37) {

        // jouer vie 
        console.log("sw1")

    } else if (herolife.value < 30) {

        if (botlife < 10) {


            //soigner 
            console.log("soin 2 ")

        } else {
            //attaquer
            console.log("attaque 1")
        }

    } else {

        //jouer attaque

        console.log("attaquefinal")
    }



}








updateLog = () => {

    logplace.scrollTop = 9999;
    log.textContent = log.textContent + ("<br>" + hero.name + " attacks " + bot.name + " he infliged : " + attaquervalue.value);
    console.log("<br>" + hero.name + " attacks " + bot.name + " he infliged : " + Random(1, 20))
}






document.getElementById("button").addEventListener("click", function() {

    menu.setAttribute("style", "display:none")


    changeHero()
    Setbot()



    console.log(botnamerandom)
    console.log(Items[2].value)



})

attack.addEventListener("click", function() {


    botlife.value = botlife.value - Random(1, 20)
    updateLog()






})