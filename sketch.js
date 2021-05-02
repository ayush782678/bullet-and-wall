var wall,bullet;
var speed,weight,thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60,height/2);
  wall.shapeColor=(80,80,80)
  bullet.shapeColor="white"
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83)
  bullet.velocityX=speed;
}

function draw() {
  background(180);  
  damage=(0.5*speed*speed*weight)/(thickness*thickness*thickness);
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    if(damage<10){
      wall.shapeColor="green";

    }
    else{
      wall.shapeColor="red"
    }
  }
  drawSprites();
}