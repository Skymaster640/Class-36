class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Press me to start!");
        this.greeting = createElement("h3");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Car Racing");
        this.title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);


            
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update(player.name);
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(130,160);
        })
    }


}