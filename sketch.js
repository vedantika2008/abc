
var  garden_img, cat_img1, mouse_img1, cat_img2, mouse_img2;
var cat, mouse, cat_img3,  mouse_img3

function preload() {
    //load the images here
    garden_img =loadImage ("garden.png");
    cat_img1 = loadAnimation("images/cat1.png");
    mouse_img1 = loadAnimation("images/mouse1.png");
    cat_img2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouse_img2 =loadAnimation ("images/mouse2.png","images/mouse3.png");
    cat_img3 = loadAnimation("images/cat4.png");
    mouse_img3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("cat_sleeping",cat_img1);
    mouse = createSprite(200,600);
    mouse.addAnimation("mouse_standing",mouse_img1);
}

function draw() {

    background(garden_img);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
       cat.velocityX = 0
       cat.addAnimation("tom_ lastimg", cat_img3);
       cat.changeAnimation("tom_ lastimg");

    }

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
  

    


if(keyCode === LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimation("cat_running",cat_img2);
    cat.changeAnimation("cat_running");
    mouse.addAnimation("mouseTeasing", mouse_img2);
    mouse. frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");

    mouse. frameDelay = 25;
}





}



