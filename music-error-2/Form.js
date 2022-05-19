class Form{
    constructor(){
        this.playButton = createButton("Play");
        this.howToPlayButton = createButton("How To Play");
        this.title = createElement("h2");
        this.info = createElement("h4");
        this.back = createButton("Back");
    }

    setElementPosition(){
        this.playButton.position(500 , height/2 );
        this.howToPlayButton.position(1000, height/2);
        this.title.position(700 , 25);
        this.info.position(700,200);
    }
    

    styleEl(){
        this.title.class("greeting");
        this.title.html("Musical");
        
    }

    handleMousePressed(){
        this.howToPlayButton.mousePressed(()=>{
           this.playButton.hide();
            this.howToPlayButton.hide();
            this.info.html(`1. Collect The Musical Notes To Help The Musician. </br> 
             2. Collect Upto 15 Musical Notes ,If You Collect Less Than That You'll Have To Play Again`);
             this.back.position(700,500);
             this.back.show();
             this.info.show();
        })

        this.back.mousePressed(()=>{
            this.playButton.show();
            this.howToPlayButton.show();
            this.info.hide();
            this.back.hide();
        })

        this.playButton.mousePressed(()=>{
            this.playButton.hide();
            this.howToPlayButton.hide();
            this.title.hide();
            game.play();
        })
    }

    display(){
        this.setElementPosition();
        this.styleEl();
        this.handleMousePressed();
    }
}