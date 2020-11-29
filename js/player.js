class Player {
    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;
    }
    getCount(){
        var playerRef = database.ref("playerCount");
        playerRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count,
        })
    }

    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
        })

    }

    static getplayerInfo(){
        var getplayerinfo = database.ref("players");
        getplayerinfo.on("value",function(data){
          allplayers=data.val();  

        })
    }
}