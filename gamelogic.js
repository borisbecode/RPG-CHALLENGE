var button = document.getElementById("button");
var Name = document.getElementById("Name")
var Items = document.getElementById("Items")
var Race = document.getElementById("Race")
var log = document.getElementById("log")
var logplace = document.getElementById("logplace")
var heal = document.getElementById("heal")
var attack = document.getElementById("attack")
var win = document.getElementById("win")
var loose = document.getElementById("loose")
var change = document.getElementById("change")


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
    hero.pictures()
}

Setbot = () => {
    bot = new Person(botnamerandom, botracerandom, botitemsrandom);
    botname.textContent = "Hero: " + bot.name;
    botrace.textContent = "Race: " + bot.race;
    botstuff.textContent = "Stuff: " + bot.item;
    botlife.value = bot.currentHealth
    botlife.max = bot.currentHealth

}



// la console du combat 
logtxt = " Bienvenue dans les enfers ! "
log.innerHTML = logtxt

updateLog = (attaquant, defenseur, x) => {

    logplace.scrollTop = 9999;
    log.innerHTML = log.innerHTML + ("<br>" + attaquant.name + " attacks " + defenseur.name + " he infliged : " + parseInt(x) + " Damage !");
    console.log(attaquant.name + " attacks " + defenseur.name + " he infliged : " + x)

    scrollPosition()
}


updateLogHeal = (attaquant, attaquantguillemet, y) => {
    var mabardevie = document.getElementById(attaquantguillemet + "life");

    logplace.scrollTop = 9999;
    log.innerHTML = log.innerHTML + ("<br>" + attaquant.name + "healing himself  and restore   " + y + "  , now is life is : " + mabardevie.value);
    console.log(attaquant.name + "healing himself  and restore " + y + " , now is life is :" + mabardevie.value)

    scrollPosition()
}




document.getElementById("button").addEventListener("click", function() {


    menu.setAttribute("style", "display:none")
    combat.setAttribute("style", "display:block")
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
        log.innerHTML = log.innerHTML + ("<br>" + attaquant.name + " is a vampire , he bite " + defenseur.name + " and gains " + parseInt(pimpage) + " life ");
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
            updateLog(attaquant, defenseur, dammage)
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
                updateLog(attaquant, defenseur, dammage)
                console.log(dammage)
            }

        } else {



            //  LATTAQUE de base 
            bardevie.value = bardevie.value - dammage;
            defenseur.currentHealth = bardevie.value;
            updateLog(attaquant, defenseur, dammage)
            console.log(dammage)



            // si l'attaquant a un arc , il a une chance de frapper a nouveau 
            if (attaquant.item == "Bow") {
                var d = Math.random() * 100;
                if (d > 70) {

                    bardevie.value = bardevie.value - dammage
                    defenseur.currentHealth = bardevie.value
                    updateLog(attaquant, defenseur, dammage)
                    console.log(dammage)

                }
            }


        }


    }

}

variableheal = (attaquant, attaquantguillemet) => {
    let healeur = attaquant.heal()
    var mabardevie = document.getElementById(attaquantguillemet + "life");
    mabardevie.value = mabardevie.value + healeur
    attaquant.currentHealth = mabardevie
    log.innerHTML = log.innerHTML + ("<br>" + attaquant.name + " se soigne de   " + healeur + " HP");
    console.log(healeur)




}


botlogic = () => {



    if (botlife.value < 37) {

        // jouer vie 
        isvampire(bot, "bot", "hero", hero)
        variableheal(bot, "bot")
        console.log("botvie")




    } else if (herolife.value < 30) {

        if (botlife < 10) {


            //soigner 
            isvampire(bot, "bot", "hero", hero)
            variableheal(bot, "bot")
            console.log("botvie12")

        } else {
            //attaquer
            isvampire(bot, "bot", "hero", hero)
            variablepourattaquer(bot, "bot", "hero", hero)
            console.log("bot")

        }

    } else {

        //jouer attaque

        isvampire(bot, "bot", "hero", hero)

        variablepourattaquer(bot, "bot", "hero", hero)
        console.log("bot1")
    }



}



attack.addEventListener("click", function() {
    const element = document.getElementById('img1');
    element.classList.add('animate__animated', 'animate__wobble');


    isvampire(hero, "hero", "bot", bot)

    variablepourattaquer(hero, "hero", "bot", bot)





    setTimeout(() => {
        element.classList.remove('animate__animated', 'animate__wobble')

        if (botlife.value == 0) {
            alert(" You win ")
            combat.setAttribute("style", "display:none")
            win.setAttribute("style", "display:block")
        }

        if (herolife.value == 0) {
            alert("you loose ")

            combat.setAttribute("style", "display:none")
            loose.setAttribute("style", "display:block")
        } else {

            botlogic()


        }


    }, 500);






})



heal.addEventListener("click", function() {


    variableheal(hero, "hero")



    setTimeout(() => {


    }, 500);

    if (botlife.value == 0) {
        alert(" You win ")
    }

    if (herolife.value == 0) {
        alert("you loose ")
    } else {
        botlogic()

    }








})


change.addEventListener("click", function() {

    Setbot()



})