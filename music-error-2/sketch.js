var musician,musicianImg;
var bg , music1Img , music2Img , music3Img , musicNote , musicNoteImg;
var mainbg,form,game,mainbg1;
var bubble , bubbleImg , speech , speechImg;
var gameState = 0;

function preload(){
 music1Img = loadImage("music1.png");
 music2Img = loadImage("music2.png");
 music3Img = loadImage("music3.png");
 musicNoteImg = loadImage("Music note.png");
 musicianImg = loadImage("musician.png");
 bg = loadImage("bg.jpg");
 mainbg = loadImage("mainbg.webp");
 bubbleImg = loadImage("speech.png");
 speechImg = loadImage("Text.png");
 mainbg1 = loadImage("mainbg.jpg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    console.log(windowWidth,windowHeight);
    background(mainbg);
game = new Game();
game.start();

}

function draw(){
    if(gameState === 1){
        background(bg);
         musicNote.x = World.mouseX
    }
    
drawSprites();

}
