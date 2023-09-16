const config = {
  type: Phaser.AUTO,
  height: window.innerHeight,
  width: window.innerWidth,
  backgroundColor: '#123456',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y:0, x:0},
      debug: false
    }
  },
  scene: [GameScene]
}