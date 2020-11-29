var gameState=0;
var playerCount=0;
var database;
var form, player, game;
var allplayers;



function setup(){
 createCanvas(400,400);
 database=firebase.database();
 game=new Game();
 game.getState();
 game.startGame();
}

function draw(){
    if(playerCount===4){
        game.updateState(1);
    }
    if(gameState===1){
        clear();
        game.playGame();
    }
}

