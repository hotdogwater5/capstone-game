enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Girl,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e d d d e d e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e f e e e e f e e e f . 
        . . f f f b f f f f b f f f . . 
        . . . f d c b b b b c d f . . . 
        . . f d d f b b b b f d d f . . 
        . . . f f f c b b c f f f . . . 
        . . . . f b b c c b b f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e d d d e d e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e f e e e e f e e e f . 
        . . f f f b f f f f c f f f . . 
        . . . f d f b b b b d d f . . . 
        . . . . f b c b b f d d f . . . 
        . . . . f b b c c b f f . . . . 
        . . . . f f b b f f . . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e d d d e d e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e f e e e e f e e e f . 
        . . f f f b f f f f b f f f . . 
        . . . f d c b b b b c d f . . . 
        . . f d d f b b b b f d d f . . 
        . . . f f f c b b c f f f . . . 
        . . . . f b b c c b b f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e d d d e d e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f f e e e e e e e e f f . . 
        . f e e e f e e e e f e e e f . 
        . . f f f c f f f f b f f f . . 
        . . . f d d b b b b f d f . . . 
        . . . f d d f b b c b f . . . . 
        . . . . f f b c c b b f . . . . 
        . . . . . . f f b b f f . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Girl,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f e e d e e f . . . . . 
        . . . f e e e e d e e f . . . . 
        . . . f e e e e e d e f . . . . 
        . . . f d f d e e e d f . . . . 
        . . . f d f d e e e e f f . . . 
        . . . f d 7 d d e e e f e f . . 
        . . . . f d d d f f e f f . . . 
        . . . . . f f c b f e e e f . . 
        . . . . f c b b f f f f f . . . 
        . . . . f b b f d f . . . . . . 
        . . . . . f b f d f . . . . . . 
        . . . . f b c b f d f . . . . . 
        . . . . f f b b f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f e e d e e f . . . . 
        . . . . f e e e e d e e f . . . 
        . . . . f e e e e e d e f . . . 
        . . . . f d f d e e e d f . . . 
        . . . . f d f d e e e e f f . . 
        . . . . f d 7 d d e e e f e f . 
        . . . . . f d d d f f e f f . . 
        . . . . . . f f b b f f e e f . 
        . . . . . f d d d d f f f f . . 
        . . . . . f d d d f b f . . . . 
        . . . . . . f f f d c b f . . . 
        . . . . . f f f b b f f . . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f e e d e e f . . . . 
        . . . . f e e e e d e e f . . . 
        . . . . f e e e e e d e f . . . 
        . . . . f d f d e e e d f . . . 
        . . . . f d f d e e e e f f . . 
        . . . . f d 7 d d e e e f e f . 
        . . . . . f d d d f f e f f . . 
        . . . . . . f f b b f f e e f . 
        . . . . . f c b b d d f f f . . 
        . . . . . f b b b d d d f . . . 
        . . . . . . f b c f f f . . . . 
        . . . . . f b b b b f . . . . . 
        . . . . . . f f f f f . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Girl,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f e e d e e f . . . . . 
        . . . f e e e e d e e f . . . . 
        . . . f e e e e e d e f . . . . 
        . . . f d f d e e e d f . . . . 
        . . . f d f d e e e e f f . . . 
        . . . f d 7 d d e e e f e f . . 
        . . . . f d d d f f e f f . . . 
        . . . . . f f c b f e e e f . . 
        . . . . f c b b f f f f f . . . 
        . . . . f b b f d f . . . . . . 
        . . . . . f b f d f . . . . . . 
        . . . . f b c b f d f . . . . . 
        . . . . f f b b f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f e e d e e f . . . . 
        . . . . f e e e e d e e f . . . 
        . . . . f e e e e e d e f . . . 
        . . . . f d f d e e e d f . . . 
        . . . . f d f d e e e e f f . . 
        . . . . f d 7 d d e e e f e f . 
        . . . . . f d d d f f e f f . . 
        . . . . . . f f b b f f e e f . 
        . . . . . f d d d d f f f f . . 
        . . . . . f d d d f b f . . . . 
        . . . . . . f f f d c b f . . . 
        . . . . . f f f b b f f . . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f e e d e e f . . . . 
        . . . . f e e e e d e e f . . . 
        . . . . f e e e e e d e f . . . 
        . . . . f d f d e e e d f . . . 
        . . . . f d f d e e e e f f . . 
        . . . . f d 7 d d e e e f e f . 
        . . . . . f d d d f f e f f . . 
        . . . . . . f f b b f f e e f . 
        . . . . . f c b b d d f f f . . 
        . . . . . f b b b d d d f . . . 
        . . . . . . f b c f f f . . . . 
        . . . . . f b b b b f . . . . . 
        . . . . . . f f f f f . . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Girl,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d e f . . . . 
        . . . f d e e e e e d e f . . . 
        . . . f e e f f f f e d f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d 7 d d 7 d f e f . . 
        . . f e e f d d d d f e e f . . 
        . f e e f b f f f f b f e e f . 
        . . f f d b c b b c b d f f . . 
        . . f d d f b c c b f d d f . . 
        . . . f f b b b b b b f f . . . 
        . . . f b b c b b c b b f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d e f . . . . 
        . . . f d e e e e e d e f . . . 
        . . . f e e f f f f e d f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d 7 d d 7 d f e f . . 
        . . f e e f d d d d f e e f . . 
        . f e e f b f f f f b f e e f . 
        . . f f b b c b b c b d f f . . 
        . . . f d f b c c b f f d f . . 
        . . . f d f b b b b b f f . . . 
        . . . f f b c b b c b b f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d e f . . . . 
        . . . f d e e e e e d e f . . . 
        . . . f e e f f f f e d f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d 7 d d 7 d f e f . . 
        . . f e e f d d d d f e e f . . 
        . f e e f b f f f f b f e e f . 
        . . f f d b c b b c b b f f . . 
        . . f d f f b c c b f d f . . . 
        . . . f f b b b b b f d f . . . 
        . . . f b b c b b c b f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    200,
    true
    )
})
let Moving = false
let Girl: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0d000d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . 2 . 2 
    2 . . . . . . . . . 2 . 2 
    2 . . . . . . . . . 2 . 2 
    2 . . . . . . . . . 2 . 2 
    2 . . . . . . . . . 2 . 2 
    2 . . . . . . . . . 2 . 2 
    2 . . . . . . . . . 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 . 2 
    2 . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16], TileScale.Sixteen))
scene.setBackgroundColor(3)
Girl = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f d d d d d e f . . . . 
    . . . f d e e e e e d e f . . . 
    . . . f e e f f f f e d f . . . 
    . . . f e f f d d f f e f . . . 
    . . f e f d f d d f d f e f . . 
    . . f e f d 7 d d 7 d f e f . . 
    . . f e e f d d d d f e e f . . 
    . f e e f b f f f f b f e e f . 
    . . f f d b c b b c b d f f . . 
    . . f d d f b c c b f d d f . . 
    . . . f f b b b b b b f f . . . 
    . . . f b b c b b c b b f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Girl, 50, 50)
game.onUpdate(function () {
    Moving = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))
    if (!(Moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Girl)
    }
})
