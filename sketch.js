//Create variables here
var dog, happydog
var foodS, foodStock
var database
var dogImage, happyDogImage

function preload()
{
 dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}



function setup() {
  createCanvas(500, 500);
dog = createSprite(200,200, dogImage)

database = firebase.database()
foodStock = database.ref("food")
foodStock.on("value", readStock)
text1();
}

function readStock(data){
 foodS = data.val()
}

function writeStock(x){
  database.ref("/").update({
    food: food - 1
  })
}

function text1(){
  console.log("press the UP_ARROW to feed the dog milk!")
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1.png);
  }

  drawSprites();
  //add styles here
}



