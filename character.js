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

    if (this.item == "Staff") {
        this.maxHealing = this.maxHealing * 1.5;

    }


    this.heal = () => {



        let healing = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);

        return healing;

    }




    if (this.race == "Orc") {

        this.currentHealth = this.currentHealth * 1.4




    }



    if (this.item == "Sword") {
        this.dammage = this.dammage * 1.4
    }






}


function disable() {
    var myInput = document.getElementById("myInput");
    if (!myInput.value.length) {
        alert('empty');
        return;
    }

    alert('fine');
}


/* const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 200
const CANVAS_HEIGHT = canvas.height = 200


const playerimage = new Image();
playerimage.src = 'Attack1.png'
const spritewidth = 575
const spriteheight = 523
let framex = 0
let framey = 0
let gameframe = 0
const staggerframe = 0

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);

    ctx.drawImage(playerimage, framex * spritewidth, framey * spriteheight);
    if (gameframe % staggerframe == 0) {
        if (framex < 6) framex++;
        else framex = 0
    }

    gameframe++
    requestAnimationFrame(animate)
}
animate() */











/* var cv = document.getElementById("canvas1");
var ctx = cv.getContext("2d");
var animationInterval;
var marioTimer = null;
var mario = { img: null, x: 0, y: 0, width: 500, height: 500, currentframe: 0, totalframes: 8 }

mario.img = new Image();
mario.img.src = "Idle.png";

 mario.img.onload = function() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    marioTimer = setInterval(animate, 100);



} 


function stopAnimation() {
    clearInterval(animationInterval);

}

function animate() {





    animationInterval = setInterval(() => {

        mario.currentframe++;

        ctx.drawImage(mario.img, mario.currentframe * mario.width, 40, mario.width, mario.height, 40, 0, mario.width, mario.height);

        if (mario.currentframe >= mario.totalframes) {
            ctx.clearRect(0, 0, cv.width, cv.height);
            mario.currentframe = 0;

        }

    }, 100);

}





animate()
 */



/* var animationInterval;
var spriteSheet = document.getElementById("canvas1");
var widthOfSpriteSheet = 1472;
var widthOfEachSprite = 184;

function stopAnimation() {
    clearInterval(animationInterval);
}

function startAnimation() {
    var position = widthOfEachSprite; //start position for the image
    const speed = 100; //in millisecond(ms)
    const diff = widthOfEachSprite; //difference between two sprites

    animationInterval = setInterval(() => {
        spriteSheet.style.backgroundPosition = `-${position}px 0px`;

        if (position < widthOfSpriteSheet) {
            position = position + diff;
        } else {
            //increment the position by the width of each sprite each time
            position = widthOfEachSprite;
        }
        //reset the position to show first sprite after the last one
    }, speed);
}

//Start animation
startAnimation(); */