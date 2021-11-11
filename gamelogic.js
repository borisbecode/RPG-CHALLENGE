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

// DEFINIR LOBJET  POUR JOUEUR ET BOT 
changeHero = () => {
    hero = new Person(Name.value, Race.value, Items.value);
    heroname.textContent = "Hero: " + hero.name;
    herorace.textContent = "Race: " + hero.race;
    herostuff.textContent = "Stuff: " + hero.item
    herolife.value = hero.currentHealth
    herolife.max = hero.currentHealth
}

Setbot = () => {
    bot = new Person(botnamerandom, botracerandom, botitemsrandom);
    botname.textContent = "Hero: " + bot.name;
    botrace.textContent = "Race: " + bot.race;
    botstuff.textContent = "Stuff: " + bot.item;
    botlife.value = bot.currentHealth
    botlife.max = bot.currentHealth

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

// la console du combat 
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

isvampire = (attaquant, attaquantguillemet, defenseurguillemet, defenseur) => {
    var bardevie = document.getElementById(defenseurguillemet + "life");
    var mabardevie = document.getElementById(attaquantguillemet + "life");
    let dammage = attaquant.degat()
    let pimpage = dammage * 0.1
    if (attaquant.race == "Vampire") {
        bardevie.value = bardevie.value - pimpage;
        defenseur.currentHealth = bardevie.value;
        mabardevie.value = mabardevie.value + pimpage
        log.innerHTML = log.innerHTML + ("<br>" + attaquant.name + " is a vampire , he bite " + defenseur.name + " and gains " + pimpage + " life ");
        console.log("vampire !" + pimpage)

    }
}




// MA FONCTION POUR ATTAQUER , INDEPENDANTE , PERMET DE CHOISIR LATTAQUANT ET LE DEFENSEUR
variablepourattaquer = (attaquant, attaquantguillemet, defenseurguillemet, defenseur) => {
    var bardevie = document.getElementById(defenseurguillemet + "life");
    var mabardevie = document.getElementById(attaquantguillemet + "life");
    var dammage = attaquant.degat();
    let reverse = dammage * 0.5


    // Si le defenseur est de race humain , l'attaque de l'attaquant est réduite 
    if (defenseur.race == "Human") {
        dammage = dammage * 0.7
    }

    // SI LE DEFENSEUR A DES BOOTS IL A UNE CHANCE DESQUIVER SINON  COMBAT NORMAL DANS LE ELSE LIGNE 156
    if (defenseur.item == "Boots") {
        var d = Math.random() * 100;
        if (d > 70) {
            log.innerHTML = log.innerHTML + ("<br>" + attaquant.name + " attacks " + defenseur.name + ", but " + defenseur.name + " dodge it");
            console.log("esquive")
        } else {
            bardevie.value = bardevie.value - dammage;
            defenseur.currentHealth = bardevie.value;
            updateLog(dammage)
            console.log(dammage)
        }


    } else {


        if (defenseur.race == "Elf") {

            var d = Math.random() * 100;
            if (d > 70) {

                mabardevie.value = mabardevie.value - reverse
                attaquant.currentHealth = mabardevie.value
                log.innerHTML = log.innerHTML + ("<br>" + "with it's magical power,  " + defenseur.name + " counter the attack !!  " + "<br>" + attaquant.name + " loose " + reverse + " HP");
                console.log("elf")
            } else {
                bardevie.value = bardevie.value - dammage;
                defenseur.currentHealth = bardevie.value;
                updateLog(dammage)
                console.log(dammage)
            }

        } else {



            //  LATTAQUE de base 
            bardevie.value = bardevie.value - dammage;
            defenseur.currentHealth = bardevie.value;
            updateLog(dammage)
            console.log(dammage)



            // si l'attaquant a un arc , il a une chance de frapper a nouveau 
            if (attaquant.item == "Bow") {
                var d = Math.random() * 100;
                if (d > 70) {

                    bardevie.value = bardevie.value - dammage
                    defenseur.currentHealth = bardevie.value
                    updateLog(dammage)
                    console.log(dammage)

                }
            }


        }


    }

}



attack.addEventListener("click", function() {



    isvampire(hero, "hero", "bot", bot)

    variablepourattaquer(hero, "hero", "bot", bot)




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