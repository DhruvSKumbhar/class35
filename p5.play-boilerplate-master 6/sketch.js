var balloon;
var balloon_running;


function preload(){
  balloon_running = loadAnimation("Hot Air Ballon-01.png","Hot Air Ballon-02.png",
  "Hot Air Ballon-03.png","Hot Air Ballon-04.png");
  
}
function setup() {
  createCanvas(500,500);

  balloon = createSprite(400,200,50,50);
  addAnimation("running",balloon_running);

}

function draw() {
  background(255,255,255); 
  

  drawSprites();
}