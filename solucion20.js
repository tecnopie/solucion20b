var bg,dormir, ejercicio, bañarse, comer,cepillardientes , moverse;
var astronauta;

function preload(){
  bg= loadImage("images/iss.png");
  dormir = loadAnimation("images/sleep.png");
  cepillardientes = loadAnimation("images/brush.png");
  ejercicio = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  comer = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bañarse = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 moverse = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronauta = createSprite(300,230);
  astronauta.addAnimation("dormir", dormir);
  astronauta.scale = 0.1;
  
}

function draw() {
  background(bg);
  

  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
  text("Flecha hacia arriba = Cepillar dientes",20, 55);
  text("Flecha hacia abajo= Hacer ejercicio",20, 70);
  text("Flecha hacia la izquierda = Comer",20, 85);
  text("Flecha hacia la derecha = Bañarse",20, 100);
  text("tecla m = Moverse",20, 115);
  
  edges=createEdgeSprites();
  astronauta.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronauta.addAnimation("Cepillarse los dientes", cepillardientes);
    astronauta.changeAnimation("Cepillarse los dientes");
    astronauta.y = 350;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronauta.addAnimation("hacer ejercicio", ejercicio);
    astronauta.changeAnimation("hacer ejercicio");
    astronauta.y = 350;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronauta.addAnimation("comer", comer);
    astronauta.changeAnimation("comer");
    astronauta.x = 150;
    astronauta.y = 350;
    astronauta.velocityX = 0.5;
    astronauta.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronauta.addAnimation("bañarse", bañarse);
    astronauta.changeAnimation("bañarse");
    astronauta.x = 300;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }

  if(keyDown("m")){
    astronauta.addAnimation("moverse", moverse);
    astronauta.changeAnimation("moverse");
    astronauta.velocityX = 1;
    astronauta.velocityY = 1;
  }
  drawSprites();
}
