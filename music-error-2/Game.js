class Game{


    constructor(){
        
    }

    start(){
        form = new Form();
        form.display();
        
    }

    play(){
        gameState = 1
        if(gameState === 1 ){
           
           createMusicNote1();
           createMusicNote2();
           createMusicNote3();

           musician = createSprite(100,600);
           musician.addImage(musicianImg);
           musician.scale = 0.42;
           
           bubble = createSprite(104,350);
           bubble.addImage(bubbleImg);

           speech = createSprite(97,344);
           speech.addImage(speechImg);
           speech.scale = 0.38;

          
           musicNote = createSprite(400,650);
           musicNote.addImage(musicNoteImg);
           musicNote.scale = 0.80;
           
          
        }
    }
}

function createMusicNote1(){
    if(frameCount % 200 === 0){
     var music1 = createSprite(Math.round(random(50, 350),40, 10, 10));
     music1.addImage(music1Img);
     music1.scale = 0.56;
     music1.velocityY = 3;
     music1.lifetime = 150;


    }
} 
 
function createMusicNote2(){
    if(frameRate % 250 === 0){
        var music2 = createSprite(Math.round(random(50, 350),40,10,10));
        music2.addImage(music2Img);
        music2.scale = 0.56;
        music2.velocityY = 3;
        music2.lifetime = 150;

    }
}

function createMusicNote3(){
    if(frameCount % 300 === 0){
        var music3 = createSprite(Math.round(random(50,350),40,10,10,10));
        music3.addImage(music3Img);
        music3.scale = 0.56;
        music3.velocityY = 3;
        music3.lifetime = 150;
    }
}