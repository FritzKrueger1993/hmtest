let x;
let y;
let img; 
let wave1;
let wave2;
let globalSpeed;
let globalLenght;
let satFactor = 0.3;
let satDestination;
let backWaves = [];
let backWavesCount = 30;
let filterAmount=60;
let filterAmountDest;

function preload(){
  img = loadImage('./data/img12.png')
}

function setup() {
  
  // Canva Settings
  cnv = createCanvas(400, 400);
  colorMode(HSB,360);
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0,0,50);


  // create Waves
  for (let i = 0; i < backWavesCount; i++){
    backWaves[i] = new wave(195,0.00000001,100,0.5,360,([i]*-8)+60,0,1);
  }
  
  wave1 = new wave(300,1,30,0.5,200,60,180,4);
  wave2 = new wave(0,0.2,10,0.8,0,150,180,4);
  //wave3 = new wave(195,0.3,45,0.1,220,-100,180,4);
}

function draw() {
  image(img, 0, 0);
  //background(300,43,334);
  //background(0,80*satFactor,360);
  //background(0);

  if(mouseIsPressed){
    satDestination = 1;
    filterAmountDest = 10;
  }
  else{
    satDestination = 0.3;
    filterAmountDest = 60;
  }

  filterAmount = lerp(filterAmount,filterAmountDest,0.02);
 
  // update Saturation 
   satFactor = lerp(satFactor,satDestination,0.1);
   filter(POSTERIZE, filterAmount);
  // update & draw Waves
  for (let i = 0; i < backWavesCount; i++){
    backWaves[i].update();
    //backWaves[i].show();
  }

  //wave3.update();
  //wave3.show();
  wave1.update();
  wave1.show();
  wave2.update();
  wave2.show();

  // draw Frame
  strokeWeight(4);
  stroke(300,200,360)
  noFill();
  rect(0,0,width,height);

  

  // -------- Debug------
  /*
  fill(0,0,0);
  noStroke();
  text(satFactor,20,20);
  noFill();
  */
}

function windowResized(){
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
