let x;
let y;
let img; 
let wave1;
let wave2;
let globalSpeed;
let globalLenght;


function preload(){
  img = loadImage('./data/back.png')
}

function setup() {
  
  // Canva Settings
  cnv = createCanvas(400, 400);
  colorMode(HSB,360);
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0,0,0);


  // create Wave
  wave1 = new wave(300,1,50,0.5,200,60);
  wave2 = new wave(0,0.5,10,0.8,0,120);

}

function draw() {
  image(img, 0, 0);
  //background(0,0,0);
 

  // update & draw Waves
  wave1.update();
  wave1.show();
  wave2.update();
  wave2.show();



  // draw Frame
  strokeWeight(4);
  stroke(300,200,360)
  noFill();
  rect(0,0,width,height);
}

function windowResized(){
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
}