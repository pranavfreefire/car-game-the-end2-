class Game {
    constructor() {

    }
    getState() {
        database.ref('gameState').on('value', (data) => {
            gameState = data.val()
        })
    }
    updateState(x) {
        database.ref('/').update({
            gameState: x
        })
    }
    play() {
        form.greeting1.hide()
        form.greeting2.hide()
        player.getplayerinfo()
        background('white')
        player.getRank()
        image(trackimage, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
        
        if (allPlayers !== undefined) {
            var index = 0
            var x = 200
            var y = 0
            var textPosition = 120;
            for (var plr in allPlayers) {
                index = index + 1
                x = x + 200
                y = windowHeight - allPlayers[plr].distance


                cars[index - 1].x = x
                cars[index - 1].y = y
                if (plr === "player" + player.index) {
                    fill("red")
                    cars[index - 1].shapeColor = 'red'
                    camera.position.y = y
                    ellipse(x, y, 70, 70)
                }
                else {
                    fill("black")
                }


                textPosition = textPosition + 20
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, x - 25, y - 50)

            }
            if(player.distance>3600){
                gameState=2
                player.playerRank=player.playerRank+1
                player.updateRank(player.playerRank)
                push()
                textSize(20)
                fill("blue")
                text("playerRank "+player.playerRank,width/2,y)
                pop()
              }
            if (keyIsDown(UP_ARROW)) {
                player.distance += 10
                player.update()
            }
        }
        drawSprites()

    }
}