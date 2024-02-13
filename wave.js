class wave{
    constructor(color,orgSpeed,orgAmplitude,waveLenght,sat,offset){
        this.color=color;
        this.speed=orgSpeed;
        this.orgSpeed=orgSpeed;
        this.orgAmplitue=orgAmplitude;
        this.amplitude=orgAmplitude;
        this.waveLenght=waveLenght;
        this.x = 400;
        this.y = 400;
        this.sat = sat;
        this.offset = offset;

        this.spreadAmp;
        this.spreadSpeed;

        this.speedFactor;
        this.ampFactor;
    }
    update(){
        if(frameCount%120==1){
            this.spreadSpeed = random(0,20);
            this.spreadAmp = random(0.1,1.5);
        }

        this.speedFactor=map(mouseX,0,width,0.5,1.8);
        this.speedFactor = Math.min(Math.max((this.speedFactor), 0.5), 1.8);
        this.ampFactor=map(mouseY,0,height,1.5,0.3);
        this.ampFactor = Math.min(Math.max((this.ampFactor), 0.3), 1.5);

        this.amplitude = lerp(this.amplitude,this.orgAmplitue*this.spreadAmp,0.005);
        this.speed = lerp(this.speed,this.orgSpeed+this.spreadSpeed,0.002);    
        this.x -= this.speed * this.speedFactor;

    }

    show(){
        stroke(this.color,this.sat,360);
        strokeWeight(2);
        fill(this.color,this.sat*satFactor,360,180);
        beginShape();
        vertex(-30,height);
        for (let i = 0; i <= 400 + this.amplitude  * 2; i++) {
            this.y = 400 / 2 + sin(((i - this.x) / 400) * this.waveLenght * TWO_PI + PI) * this.amplitude * this.ampFactor;
            vertex(i, this.y + this.offset);
            }
        vertex(400,400);
        endShape();
    }
}