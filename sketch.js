function setup() {
  createCanvas(400, 600);
  background(220);
  frameRate(1200);
}

let balls = [];



function draw() {
  
  for(let i = 0; i < balls.length; i++){
    
    fill(random(255), random(255), random(255));
    balls[i].display();  
    
  }
  
}

function mousePressed(){

    
    if(mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 600){
      
       
       append(balls, new ball(mouseX, mouseY));
      
    }
  
  
}

function ball(x, y){
  
  this.x = x;
  this.y = y;
  this.display = function(){
    
    circle(this.x, this.y, 40);    
    
  }  
  
  
}