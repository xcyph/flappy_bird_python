input.onButtonPressed(Button.A, function on_button_pressed_a() {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyObstacleY = 0
let bird : game.LedSprite = null
let ticks = 0
let index = 0
let obstacle : game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function on_forever() {
    
    while (obstacle.length > 0 && obstacle[0].get(LedSpriteProperty.X) == 0) {
        obstacle.removeAt(0).delete()
    }
    for (let obstacle2 of obstacle) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 < 5; index2++) {
            if (index2 != emptyObstacleY) {
                obstacle.push(game.createSprite(4, index2))
            }
            
        }
    }
    
    for (let obstacle3 of obstacle) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
        
    }
    ticks += 1
    basic.pause(1000)
})
