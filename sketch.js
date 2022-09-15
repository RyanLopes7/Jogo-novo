var world;
var trex, trexImg;
var objeto,
  objeto1,
  objeto2,
  objeto3,
  objeto4,
  objeto5,
  objeto6,
  objeto7,
  objeto8,
  objeto9;
var obstaculo;
function preload() {
  world = loadImage("Fundo/fundo.jpg");
  trexImg = loadImage("Personagem/png/Idle (1).png");
  objeto = loadImage("Fundo/png/Objects/Barrel (1).png");
}
function setup() {
  createCanvas(600, 600);
  trex = createSprite(250, 200, 40, 40);
  trex.addImage(trexImg);
  trex.scale = 0.2;
}

function draw() {
  background(world);

  drawSprites();
}
