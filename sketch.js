
var database,happydogim,dogim,dog,foodS,foodStock;
function preload()
{

  dogim = loadImage("images/dogImg.png")
  happydogim = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database = firebase.database()
  dog = createSprite(250,320,20,20)
  dog.addImage(dogim)
  dog.scale = 0.2;
  foodStock = database.ref("Food");
  foodStock.on("value",readStock)
}


function draw() {  
background (46, 139, 87)

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happydogim);

foodS = foodS-1

}




  drawSprites();

  textSize(18)
  fill("white")
text("Food Remaining:"+foodS,125,235)
text("Note: Press Up Arrow Key To Feed Tiger Some Food",30,20)
}



function readStock(data){

  foodS = data.val()
}
function writeStock(x){


  database.ref("/").update({

    Food:x
  })
}