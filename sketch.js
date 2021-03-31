var cat
var bgimg
function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png")
    catimg1 = loadImage("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadImage("images/cat3.png")
    mouseimg2 = loadImage("images/mouse3.png")
    catimg4 =loadImage("images/cat4.png")
    mouse3 = loadImage("images/mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    
    
mouse = createSprite(100,700)
mouse.scale=0.1
mouse.addAnimation("mouse",mouseimg1)
cat = createSprite(700,700)
cat.scale=0.1
cat.addImage("cat",catimg1)

mouse.setCollider("circle",0,0,200)
cat.setCollider("circle",0,0,400)

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    
}
if(cat.collide(mouse)){
    mouse.addAnimation("mousehappy", mouse3);
    mouse.changeAnimation("mousehappy");
    cat.addAnimation("cathappy", catimg4);
    cat.changeAnimation("cathappy");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseimg2);
      mouse.changeAnmation("mouseTeasing");
      mouse.framedelay = 25;
  }
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.framedelay =25;
      cat.velocityX=-2
  }


}
