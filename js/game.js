class Game {
    constructor(){
    }


    getState(){
        var gamestateRef = database.ref("gameState");
        gamestateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState: state,
        })
    }

    async startGame(){
        if(gameState===0){
            player=new Player();
            var playerRef = await database.ref("playerCount").once("value");
            if(playerRef.exists()){
                playerCount=playerRef.val();
            
            player.getCount();
        }
            form=new Form();
            form.display();
        }
    }

    playGame(){
        form.hide();
        textSize(30)
        text("Game Start", 120, 100);
        Player.getplayerInfo()
        if(allplayers!==undefined){
            var displayposition = 120;
            for(var i in allplayers){
                if(i === "player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                displayposition +=20;
                textSize(25);
                text(allplayers[i].name+":"+allplayers[i].distance, 120, displayposition);
            }
        }
        if(keyWentDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
        }
    }


}