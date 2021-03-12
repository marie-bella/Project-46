var ground;
var bella;
var animal, animalGroup;
var energy=20;
var victoriaGroup;
var janeGroup;


var gameState ="play";


var edges;

function setup() {
  createCanvas(800,400);

  edges = createEdgeSprites();
  console.log(edges);
  ground = createSprite(400,380,800,20);
  ground.shapeColor = "brown";


  bella = createSprite(50,300,30,30);
  bella.shapeColor = "purple";

  victoriaGroup = new Group();
  janeGroup = new Group();



  animalGroup = new Group();
  
  
}

function draw() {
  background(0); 
  //console.log(bella.y);
  text("Energy:"+energy,20,20);

  if(gameState== "play"){
    if (bella.isTouching(victoriaGroup)){
      energy = energy+1;
    }
  
    if (bella.isTouching(janeGroup)){
      energy = energy+10;
    }
  
     victoriaGroup.bounceOff(edges);
     janeGroup.bounceOff(edges);
     janeGroup.bounceOff(ground);
     victoriaGroup.bounceOff(ground);
  
  
    
    
    if(keyDown("left")){
      bella.x = bella.x-3;
    }
  
    if(keyDown("right")){
      bella.x = bella.x+3;
    }
    
    if(keyDown("up") && bella.y >=354){
      bella.velocityY = -16;
    }
  
  
    if(keyDown("down") && bella.y <=354){
      bella.velocityY = 2;
    }
  
  
    if(bella.isTouching(animalGroup)){
      animalGroup.destroyEach();
  
     
        energy= energy -5;
  
    }
  
    
  
    
    bella.velocityY = bella.velocityY +0.5;
    
    bella.collide(ground);
  
    bella.collide(edges[0]);
    bella.collide(edges[1]);
  
    spawnAnimals();
    spawnJane();
    spawnVictoria()
  
    
    if(energy ==0){
      gameState = "end";
    }

  } else if(gameState == "end"){
    text(" GAME Over",400,200);

    
  }

  

  drawSprites();
}

function spawnAnimals(){
  if(frameCount% 300 == 0){
    animal = createSprite(800,200,20,20);
    animal.shapeColor ="yellow";
    animal.velocityX = -3;
    animal.y = Math.round(random(100,300));

    animal.lifetime =300;

    animalGroup.add(animal);
  }
}

function spawnVictoria(){
  if(frameCount%600 ==0){
    for (var i = 0; i < 15; i++) {
      var victoria = createSprite(Math.round(random(0,800)),Math.round(random(0,400)),20,20);
      victoria.shapeColor="red";
      victoria.setVelocity(Math.round(random(1, 5)), Math.round(random(1, 5)));
      victoria.lifetime = 200;
      victoriaGroup.add(victoria);
      
    }
  }

}

function spawnJane(){
  if(frameCount%300==0){
    var jane = createSprite(50,20,20,20);
    jane.shapeColor = "green";
    jane.velocityX=Math.round(random(1, 5));
    jane.velocityY=Math.round(random(4,8));
    jane.lifetime = 300;

    janeGroup.add(jane);


  }

}


