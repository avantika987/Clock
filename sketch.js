//const Bodies = Matter.Bodies;
//const Engine = Matter.Engine;
//const World = Matter.World;

var hr, hrAngle;
var min, mnAngle;
var sec, scAngle;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0); 
  translate(200,200);
  rotate(-90);
  hr = hour();
  min = minute();
  sec = second(); 

  hrAngle = map(hr,0,12,0,360);
  mnAngle = map(min,0,60,0,360);
  scAngle = map(sec,0,60,0,360);
  push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7);
    fill(0,0,0);
    arc(0,0,250,250,scAngle,PI+HALF_PI);
    line(0,0,100,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  fill(0,0,0);
 // arc(0,0,245,245,PI+HALF_PI,mnAngle/mnAngle);
  line(0,0,75,0);
pop();

push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    fill(0,0,0);
   // arc(0,0,240,240,hrAngle,PI+HALF_PI);
    line(0,0,50,0);
  pop();



  drawSprites();
}