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




function scrollPosition() {
    var scroll = document.getElementById("log");
    scroll.scrollTop = scroll.scrollHeight;
}


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




}


changeHero = () => {
    hero = new Person(Name.value, Race.value, Items.value);
    heroname.textContent = "Hero: " + hero.name;
    herorace.textContent = "Race: " + hero.race;
    herostuff.textContent = "Stuff: " + hero.item
}


Setbot = () => {
    bot = new Person(botnamerandom, botracerandom, botitemsrandom);
    botname.textContent = "Hero: " + bot.name;
    botrace.textContent = "Race: " + bot.race;
    botstuff.textContent = "Stuff: " + bot.item;
    botlife.value = bot.currentHealth


}

botlogic = () => {

    if (botlife.value < 37) {

        // jouer vie 
        let botheal = bot.heal()
        botlife.value = botlife.value + botheal
        bot.currentHealth = botlife



    } else if (herolife.value < 30) {

        if (botlife < 10) {


            //soigner 
            botlife.value = botlife.value + Random(1, 15)
            bot.currentHealth = botlife
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







logtxt = " Bienvenue dans les enfers ! "
log.innerHTML = logtxt
updateLog = (x) => {

    logplace.scrollTop = 9999;
    log.innerHTML = log.innerHTML + ("<br>" + hero.name + " attacks " + bot.name + " he infliged : " + x + " Damage !");
    console.log(hero.name + " attacks " + bot.name + " he infliged : " + x)

    scrollPosition()
}


updateLogHeal = (y) => {

    logplace.scrollTop = 9999;
    log.innerHTML = log.innerHTML + ("<br>" + hero.name + "healing himself  and restore   " + y + "  , now is life is : " + herolife.value);
    console.log(hero.name + "healing himself  and restore " + y + " , now is life is :" + herolife.value)

    scrollPosition()
}







document.getElementById("button").addEventListener("click", function() {

    menu.setAttribute("style", "display:none")

    changeHero()
    Setbot()
})



attack.addEventListener("click", function() {

    let dammage = hero.degat()

    botlife.value = botlife.value - dammage
    bot.currentHealth = botlife

    updateLog(dammage)






    /*   if (botlife.value == 0) {
          alert(" You win ")
      }

      if (herolife.value == 0) {
          alert("you loose ")
      } else {
          botlogic()

      } */

})



heal.addEventListener("click", function() {

    let healeur = hero.heal()

    herolife.value = herolife.value + healeur
    hero.currentHealth = herolife



    updateLogHeal(healeur)


    if (botlife.value == 0) {
        alert(" You win ")
    }

    if (herolife.value == 0) {
        alert("you loose ")
    } else {
        botlogic()

    }






})