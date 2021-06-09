var  database;
var form,gameState,playerCount
var allPlayers
var car1,car2,car3,car4,cars
function preload(){
  car1image=loadImage("images/car1.png")
  car2image=loadImage("images/car2.png")
  car3image=loadImage("images/car3.png")
  car4image=loadImage("images/car4.png")
  trackimage=loadImage("images/track.jpg")
}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);
  form=new Form()
  form.display()
game=new Game()
game.getState()
player=new Player()
player.getCount()
 car1=createSprite(200,400)
 car1.addImage(car1image)
 car2=createSprite(400,400)
 car2.addImage(car2image)
 car3=createSprite(600,400)
 car3.addImage(car3image)
 car4=createSprite(800,400)
 car4.addImage(car4image)

 cars=[car1,car2,car3,car4]
}
function draw(){

  if(playerCount===4&&gameState==0){
    gameState=1
  }
  if(gameState===1){
    game.play()
  }
  
}
