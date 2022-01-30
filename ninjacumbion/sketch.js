/*CUMBIA COQUETA*/
var cumbiacoquetaSound, cumbiacoquetaState
/*CREACION DE LA VARIABLE DE PERSONAJES Y OBJETOS*/
var ninjasprite, ninjaimg, ninjaAnimationleft, ninjaAnimationright, ninjaAnimationdance
/*CREACION DE LA VARIABLE DE ESTADOS DE JUEGO*/
var estadodeljuego
estadodeljuego = "estado inicial"
/*CREACION DE LA VARIABLE DE PROPIEDADES*/
var attackSpeed, attackDamage, Defense, HP

function preload(){
  ninjaimg=loadImage("ninjaimg.png");
  ninjaAnimationleft=loadAnimation("ninjaimgleft.png","ninjaimgleft2.png","ninjaimgleft.png");
  ninjaAnimationright=loadAnimation("ninjaimgright.png","ninjaimgright2.png","ninjaimgright.png");
  ninjaAnimationdance=loadAnimation("ninjaimgright.png","ninjaimgright2.png","ninjaimgleft.png");

  cumbiacoquetaSound=loadSound("cumbiacoqueta.mp3")
}

function setup() {
  createCanvas(400,400);

  ninjasprite=createSprite(200,200,100,100);
  ninjasprite.addImage("ninjaimg", ninjaimg);
  ninjasprite.scale=5;
  ninjasprite.addAnimation("ninjaAnimationleft", ninjaAnimationleft);
  ninjasprite.addAnimation("ninjaAnimationright", ninjaAnimationright);
  ninjasprite.addAnimation("ninjaAnimationdance", ninjaAnimationdance);
}

function draw(){ 
  background("white");
  drawSprites();

  if (estadodeljuego === "estado inicial") {
  estadodeljuego = "jugando"
  }
  if (estadodeljuego === "jugando") {
    movement();
  }
}



/*CREACION DE FUNCIONES DE MOVIMIENTOS*/
function movement(){
  ninjamovement();
  ninjaCUMBIA();
}

function ninjamovement(){

  if (keyDown("W")){
    ninjasprite.y+=-1;
    ninjasprite.changeImage("ninjaimg", ninjaimg);
    cumbiacoquetaState = "true"
  }

  if (keyDown("S")){
    ninjasprite.y+=1;
    cumbiacoquetaState = "true"
  }

  if (keyWentUp("S")){
    ninjasprite.changeImage("ninjaimg", ninjaimg);
  }

  if (keyDown("A")) {
    ninjasprite.x+=-1;
    ninjasprite.changeAnimation("ninjaAnimationleft", ninjaAnimationleft);
    cumbiacoquetaState = "true"
  }

  if (keyWentUp("A")){
    ninjasprite.changeImage("ninjaimg", ninjaimg);
  }

  if (keyDown("D")) {
    ninjasprite.x+=1;
    ninjasprite.changeAnimation("ninjaAnimationright", ninjaAnimationright);
    cumbiacoquetaState = "true"
  }

  if (keyWentUp("D")){
    ninjasprite.changeImage("ninjaimg", ninjaimg);
  }

  if(keyDown("A") && keyDown("D")){
    ninjasprite.changeImage("ninjaimg", ninjaimg);
  }
}

function ninjaCUMBIA(){
  if(keyDown("B")){
    cumbiacoquetaState = "false"
  }
  if(keyDown("B") && cumbiacoquetaState === "false"){
    ninjasprite.changeAnimation("ninjaAnimationdance", ninjaAnimationdance);
    cumbiacoquetaSound.play();
  }

  if(cumbiacoquetaState === "true"){
    cumbiacoquetaSound.pause();
  }
}
