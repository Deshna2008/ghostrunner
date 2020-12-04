var towerImage,tower
var doorImage,door
var doorsGroup
var climberImage,climber,climbersGroup
var ghostImage,ghost
var iblock,iblocksGroup
var gameState="play"
var sound;


function preload(){
  
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  sound=loadSound("spooky.wav")
}
function setup(){
  createCanvas(600,600)
  sound.loop()
  tower=createSprite(300,300)
  tower.addImage("tower",towerImage)
  tower.velocityY=1
  
  doorsGroup=new Group()
  climbersGroup=new Group()
  iblocksGroup=new Group()
  ghost=createSprite(200,200,50,50)
  ghost.addImage("ghost",ghostImage)
  ghost.scale=0.5
}
function draw(){
  background(0)
  if(gameState==="play"){
   if(tower.y>400){
   tower.y=300
   
 } 
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
  if(keyDown("right_arrow")){
    
    ghost.x=ghost.x+3
  }
  if(keyDown("space")){

ghost.velocityY=-5
  }
  ghost.velocityY+=0.8
  
  if(climbersGroup.isTouching(ghost)){

  ghost.velocityY=0
  }
  if(iblocksGroup.isTouching(ghost)||ghost.y>600){
    
    ghost.destroy()
    gameState="end"
  }
  spawnDoors()
 drawSprites()  
    
    
  }
 if(gameState==="end"){
fill("yellow")   
   stroke("yellow")
   textSize(30)
  text("Game over",230,250) 
   
 }   
  
  
 
}
function spawnDoors(){
if(frameCount % 240===0){
 var door=createSprite(200,-50) 
door.addImage(doorImage)
  
  var climber=createSprite(200,10)
  climber.addImage(climberImage)
  var iblock=createSprite(200,15)
  iblock.width=climber.width
  iblock.height=2
  
  
  door.x=Math.round(random(120,400))
  door.velocityY=1
  
  climber.x=door.x
  climber.velocityY=1
  iblock.x=door.x
  iblock.velocityY=1
  
  door.depth=ghost.depth
  ghost.depth+=1
  door.lifetime=800
  climber.liftime=800
  iblock.lifetime=800
  iblock.debug=true
  
  doorsGroup.add(door)
  climbersGroup.add(climber)
  iblocksGroup.add(iblock)
}




}


