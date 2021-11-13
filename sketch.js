var bg;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
bg= createSprite(200,200)

}
function preload(){
 bg = loadImage("snow.jpg")
}

function draw() {
  background(bg);  
  drawSprites();
}