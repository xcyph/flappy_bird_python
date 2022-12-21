def on_button_pressed_a():
    bird.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    bird.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

emptyObstacleY = 0
bird: game.LedSprite = None
ticks = 0
index = 0
obstacle: List[game.LedSprite] = []
bird = game.create_sprite(0, 2)
bird.set(LedSpriteProperty.BLINK, 300)

def on_forever():
    global emptyObstacleY, ticks
    while len(obstacle) > 0 and obstacle[0].get(LedSpriteProperty.X) == 0:
        obstacle.remove_at(0).delete()
    for obstacle2 in obstacle:
        obstacle2.change(LedSpriteProperty.X, -1)
    if ticks % 3 == 0:
        emptyObstacleY = randint(0, 4)
        for index2 in range(5):
            if index2 != emptyObstacleY:
                obstacle.append(game.create_sprite(4, index2))
    for obstacle3 in obstacle:
        if obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) and obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y):
            game.game_over()
    ticks += 1
    basic.pause(1000)
basic.forever(on_forever)
