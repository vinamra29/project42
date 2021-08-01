var hasDocked
var spacecraft
var bg,bgImg
function preLoad(){
  bgImg = loadImage ("d.zip")
}

function setup() {
  createCanvas(800,400);
 bg =  createSprite(400, 200, 50, 50);
 bg.addImage(bgImg)
}

function draw() {
  background(bgImg);  
  drawSprites();
}