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
info.onCountdownEnd(function () {
	
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.melt)
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
tiles.setTilemap(tiles.createTilemap(hex`0a000a0005060606060606060607040909090909090909080409090909090909090804090909090909090908040909090909090909080409090909090909090804090909090909090908040909090909090909080409090909090909090803020202020202020201`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter], TileScale.Sixteen))
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
let mySprite = sprites.create(img`
    ...bbbbbbbbbb...
    ..b1111111111b..
    .b111111111111b.
    .b111111111111b.
    .bddccccccccddb.
    .bdc66666666cdb.
    .bdc61d66666cdb.
    .bdc6d666666cdb.
    .bdc66666666cdb.
    .bdc66666666cdb.
    .bdc66666666cdb.
    .bddccccccccddb.
    .cbbbbbbbbbbbbc.
    .cccccccccccccc.
    .bbbbbbbbbbbbbb.
    .bcdddddddddddb.
    .bcbbbbbbbbbbcb.
    .bcbbbbbbbbbbcb.
    .bccccccccccccb.
    .bbbbbbbbbbbbbb.
    .b............b.
    ................
    `, SpriteKind.Projectile)
scene.cameraFollowSprite(Girl)
controller.moveSprite(Girl, 50, 50)
game.showLongText("Lets finish our homework.", DialogLayout.Bottom)
game.showLongText("Walk up to the computer to do your homework.", DialogLayout.Bottom)
let Computer_Work = statusbars.create(20, 4, StatusBarKind.Energy)
Computer_Work.attachToSprite(mySprite)
Computer_Work.value = 1
game.showLongText("This is your work, finish it all until the timer runs out!", DialogLayout.Bottom)
let Stress = statusbars.create(20, 4, StatusBarKind.Health)
Stress.attachToSprite(Girl)
Stress.value = 100
game.showLongText("This is your stress bar. Go listen to music if it gets to low.", DialogLayout.Bottom)
game.showLongText("The timer shows how much time you have left. Finish your work before then.", DialogLayout.Bottom)
info.startCountdown(60)
game.onUpdate(function () {
    Moving = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))
    if (!(Moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Girl)
    }
})
